"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/config";
import { isNotEmpty, isValidEmail, isValidIndianMobile } from "@/lib/validation";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  serviceRequired: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    email: "",
    serviceRequired: initialService,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!isNotEmpty(form.name)) next.name = "Name is required.";
    if (!isValidIndianMobile(form.mobile)) next.mobile = "Enter a valid 10-digit mobile number.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isNotEmpty(form.message)) next.message = "Please add a short message.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong.");
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn't send your message right now. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm({ name: "", mobile: "", email: "", serviceRequired: "", message: "" });
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center sm:p-10">
        <CheckCircle2 className="mb-4 h-14 w-14 text-emerald-600" />
        <h3 className="font-display text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
        <p className="mt-3 text-slate-600">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <Button variant="outline" className="mt-6" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
    >
      {submitError && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <Field
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          error={errors.mobile}
          placeholder="10-digit mobile number"
        />
      </div>

      <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />

      <div>
        <Label>Service Required</Label>
        <select
          name="serviceRequired"
          value={form.serviceRequired}
          onChange={handleChange}
          className={inputClass(false)}
        >
          <option value="">General Enquiry</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label>Message</Label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
          placeholder="Tell us a little about what you need help with..."
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full justify-center"
        icon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        iconPosition="right"
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <label className="mb-1.5 block text-sm font-semibold text-slate-700">{children}</label>;
}

function ErrorText({ children }: { children: ReactNode }) {
  return <p className="mt-1.5 text-xs font-medium text-red-600">{children}</p>;
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/30 ${
    hasError ? "border-red-300 focus:border-red-400" : "border-slate-300 focus:border-[var(--brand-blue)]"
  }`;
}

interface FieldProps {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, value, onChange, error, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={inputClass(!!error)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
