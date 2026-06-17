"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function RequirementsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, requirements }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (res.ok && data.ok) {
        setStatus({ kind: "success" });
        setName("");
        setEmail("");
        setPhone("");
        setRequirements("");
      } else {
        setStatus({
          kind: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/15 transition-all";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputClass}
          disabled={status.kind === "loading"}
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
            disabled={status.kind === "loading"}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 000 0000"
            className={inputClass}
            disabled={status.kind === "loading"}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 -mt-2">
        Provide at least one — email or phone — so we can reach you.
      </p>

      {/* Requirements */}
      <div>
        <label htmlFor="requirements" className={labelClass}>
          Project Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="requirements"
          required
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Tell us about your business, goals, and what you'd like help with — SEO, AI search visibility, paid ads, lead generation…"
          rows={7}
          className={inputClass + " resize-none leading-relaxed"}
          disabled={status.kind === "loading"}
        />
      </div>

      {/* Status messages */}
      {status.kind === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
          <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-green-800">Message sent successfully!</p>
            <p className="text-sm text-green-700 mt-1">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {status.kind === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-800">Could not send</p>
            <p className="text-sm text-red-700 mt-1">{status.message}</p>
          </div>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status.kind === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status.kind === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send My Requirements
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
