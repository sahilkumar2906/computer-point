"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Loader2, CheckCircle2, AlertCircle, UploadCloud } from "lucide-react";
import Button from "@/components/ui/Button";
import { categoryOptions, scholarshipTypeOptions } from "@/data/config";
import {
  isNotEmpty,
  isValidEmail,
  isValidIndianMobile,
  isPastDate,
  isPositiveNumber,
  isValidFile,
} from "@/lib/validation";

interface FormState {
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  dob: string;
  address: string;
  courseClass: string;
  institutionName: string;
  annualIncome: string;
  category: string;
  scholarshipType: string;
}

const initialState: FormState = {
  studentName: "",
  parentName: "",
  mobile: "",
  email: "",
  dob: "",
  address: "",
  courseClass: "",
  institutionName: "",
  annualIncome: "",
  category: "",
  scholarshipType: "",
};

type FormErrors = Partial<Record<keyof FormState | "document", string>>;

export default function ScholarshipForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!isNotEmpty(form.studentName)) next.studentName = "Student name is required.";
    if (!isNotEmpty(form.parentName)) next.parentName = "Father's / mother's name is required.";
    if (!isValidIndianMobile(form.mobile)) next.mobile = "Enter a valid 10-digit mobile number.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isPastDate(form.dob)) next.dob = "Enter a valid date of birth.";
    if (!isNotEmpty(form.address)) next.address = "Address is required.";
    if (!isNotEmpty(form.courseClass)) next.courseClass = "Course / class is required.";
    if (!isNotEmpty(form.institutionName)) next.institutionName = "College / school name is required.";
    if (!isPositiveNumber(form.annualIncome)) next.annualIncome = "Enter a valid annual income.";
    if (!isNotEmpty(form.category)) next.category = "Please select a category.";
    if (!isNotEmpty(form.scholarshipType)) next.scholarshipType = "Please select a scholarship type.";
    const fileError = isValidFile(file);
    if (fileError) next.document = fileError;
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
      const payload = new FormData();
      (Object.entries(form) as [string, string][]).forEach(([key, value]) => payload.append(key, value));
      if (file) payload.append("document", file);

      const res = await fetch("/api/scholarship", { method: "POST", body: payload });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }
      setReferenceId(data.referenceId);
    } catch {
      setSubmitError("We couldn't submit your application right now. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialState);
    setFile(null);
    setErrors({});
    setSubmitError(null);
    setReferenceId(null);
  }

  if (referenceId) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center sm:p-10">
        <CheckCircle2 className="mb-4 h-14 w-14 text-emerald-600" />
        <h3 className="font-display text-2xl font-bold text-slate-900">Application Submitted Successfully!</h3>
        <p className="mt-3 text-slate-600">
          Thank you for applying. Our team will review your application and get in touch within 24–48 hours.
        </p>
        <p className="mt-4 rounded-lg bg-white px-4 py-2 font-mono text-sm font-semibold text-slate-900 shadow-sm">
          Reference ID: {referenceId}
        </p>
        <p className="mt-2 text-xs text-slate-500">Please save this reference ID to track your application status.</p>
        <Button variant="outline" className="mt-6" onClick={handleReset}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto grid max-w-3xl grid-cols-1 gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-2"
    >
      {submitError && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 md:col-span-2">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <Field label="Student Name" name="studentName" value={form.studentName} onChange={handleChange} error={errors.studentName} />
      <Field
        label="Father's / Mother's Name"
        name="parentName"
        value={form.parentName}
        onChange={handleChange}
        error={errors.parentName}
      />
      <Field
        label="Mobile Number"
        name="mobile"
        type="tel"
        value={form.mobile}
        onChange={handleChange}
        error={errors.mobile}
        placeholder="10-digit mobile number"
      />
      <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
      <Field label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} error={errors.dob} />
      <Field
        label="Course / Class"
        name="courseClass"
        value={form.courseClass}
        onChange={handleChange}
        error={errors.courseClass}
        placeholder="e.g., B.Sc 2nd Year"
      />
      <Field
        label="College / School Name"
        name="institutionName"
        value={form.institutionName}
        onChange={handleChange}
        error={errors.institutionName}
      />
      <Field
        label="Annual Family Income (₹)"
        name="annualIncome"
        type="number"
        value={form.annualIncome}
        onChange={handleChange}
        error={errors.annualIncome}
        placeholder="e.g., 150000"
      />

      <div className="md:col-span-2">
        <Label>Address</Label>
        <textarea
          name="address"
          rows={3}
          value={form.address}
          onChange={handleChange}
          aria-invalid={!!errors.address}
          className={inputClass(!!errors.address)}
        />
        {errors.address && <ErrorText>{errors.address}</ErrorText>}
      </div>

      <div>
        <Label>Category</Label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          aria-invalid={!!errors.category}
          className={inputClass(!!errors.category)}
        >
          <option value="">Select category</option>
          {categoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.category && <ErrorText>{errors.category}</ErrorText>}
      </div>

      <div>
        <Label>Scholarship Type</Label>
        <select
          name="scholarshipType"
          value={form.scholarshipType}
          onChange={handleChange}
          aria-invalid={!!errors.scholarshipType}
          className={inputClass(!!errors.scholarshipType)}
        >
          <option value="">Select scholarship type</option>
          {scholarshipTypeOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.scholarshipType && <ErrorText>{errors.scholarshipType}</ErrorText>}
      </div>

      <div className="md:col-span-2">
        <Label>Document Upload</Label>
        <label
          htmlFor="document"
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-center text-sm text-slate-500 hover:border-[var(--brand-blue)]/40 hover:bg-[var(--brand-blue)]/5 ${
            errors.document ? "border-red-300" : "border-slate-300"
          }`}
        >
          <UploadCloud className="h-5 w-5 flex-shrink-0" />
          {file ? file.name : "Click to upload (PDF, JPG, or PNG, max 5MB)"}
        </label>
        <input
          id="document"
          name="document"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
        {errors.document && <ErrorText>{errors.document}</ErrorText>}
      </div>

      <div className="md:col-span-2">
        <Button
          type="submit"
          disabled={submitting}
          className="w-full justify-center"
          icon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
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
