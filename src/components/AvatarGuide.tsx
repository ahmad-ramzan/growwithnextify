"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './AvatarGuide.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AvatarGuide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const activeTimeline = useRef<gsap.core.Timeline | null>(null);
  const sequence = useRef(0);
  const currentSideRef = useRef<string>('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !avatarRef.current) return;

    // Reset refs on mount to handle React StrictMode double-invocations
    currentSideRef.current = '';
    sequence.current = 0;

    const sections = gsap.utils.toArray<HTMLElement>('[data-avatar-section]');
    
    if (sections.length === 0) return;

    // Initial position on screen
    gsap.set(containerRef.current, { x: 0, y: 0, bottom: 20, right: 20, opacity: 0 });

    const handleSectionChange = (section: HTMLElement, side: string, msg: string) => {
      sequence.current += 1;
      const currentSeq = sequence.current;

      const isSameSide = currentSideRef.current === side;
      currentSideRef.current = side;

      // If staying on the same side, seamlessly update the text without flickering/hiding
      if (isSameSide) {
        setMessage(msg);
        setIsVisible(!!msg);
        
        // Subtle acknowledgment bounce
        if (!prefersReducedMotion && avatarRef.current) {
          gsap.to(avatarRef.current, {
            y: -6,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
            overwrite: "auto"
          });
        }
        return;
      }

      if (activeTimeline.current) {
        activeTimeline.current.kill();
      }

      setIsVisible(false);
      setIsMoving(true);

      const isMobile = window.innerWidth <= 768;
      
      let targetX = 0;
      let scaleX = 1;

      if (side === 'left') {
        targetX = -(window.innerWidth - (isMobile ? 140 : 200));
        scaleX = -1; // Flip the avatar to face right
      } else {
        targetX = 0;
        scaleX = 1; // Face left
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (sequence.current !== currentSeq) return; // Prevent old timelines from flickering state
          setIsMoving(false);
          if (msg) {
            setMessage(msg);
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      });
      activeTimeline.current = tl;

      tl.to(containerRef.current, {
        opacity: 1,
        x: targetX,
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: 'power2.out',
      });
      
      tl.to(avatarRef.current, {
        scaleX: scaleX,
        duration: 0.2
      }, "<");

      if (!prefersReducedMotion) {
        tl.to(avatarRef.current, {
          y: -10,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut"
        }, "<");
      }
    };

    const ctx = gsap.context(() => {
      sections.forEach((sec) => {
        const side = sec.getAttribute('data-avatar-side') || 'right';
        const msg = sec.getAttribute('data-avatar-message') || '';
        
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 50%', // Trigger when section hits middle of screen
          end: 'bottom 50%',
          onEnter: () => handleSectionChange(sec, side, msg),
          onEnterBack: () => handleSectionChange(sec, side, msg),
        });
      });
    }, containerRef);

    // Mouse Parallax Logic
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let reqId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (isMoving || prefersReducedMotion || window.innerWidth <= 768) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const nx = (clientX / innerWidth) * 2 - 1;
      const ny = (clientY / innerHeight) * 2 - 1;
      
      mouseX = nx * 15;
      mouseY = ny * 15;
    };

    const updateParallax = () => {
      if (!isMoving && !prefersReducedMotion && window.innerWidth > 768) {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        gsap.set(avatarRef.current, {
          x: currentX,
          y: currentY,
          rotation: currentX * 0.1
        });
      } else {
        currentX += (0 - currentX) * 0.1;
        currentY += (0 - currentY) * 0.1;
        gsap.set(avatarRef.current, { x: currentX, y: currentY, rotation: 0 });
      }
      
      reqId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', onMouseMove);
    reqId = requestAnimationFrame(updateParallax);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, [prefersReducedMotion, isMoving]);

  return (
    <div className={styles.avatarContainer} ref={containerRef} aria-hidden="true">
      {/* Speech Bubble built with standard Tailwind to ensure it renders correctly */}
      <div 
        className={`absolute bottom-full right-[-10px] mb-4 bg-white text-gray-900 px-5 py-3 rounded-2xl text-sm font-medium shadow-xl border border-gray-100 transition-all duration-300 ease-out origin-bottom-right max-w-[280px] sm:max-w-[320px] text-wrap ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
      >
        {message}
        {/* Triangle pointer aligned to point at avatar */}
        <div className="absolute top-full right-[70px] -mt-1 w-3 h-3 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
      </div>

      <div className={isMoving ? styles.running : styles.idle}>
        <Image
          ref={avatarRef}
          src="/avatar.png"
          alt="Website Guide"
          width={150}
          height={300}
          className={styles.avatarImage}
          priority
        />
      </div>
    </div>
  );
}
