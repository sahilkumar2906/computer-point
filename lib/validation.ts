export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Validates a 10-digit Indian mobile number, with or without spaces. */
export function isValidIndianMobile(value: string): boolean {
  return /^[6-9]\d{9}$/.test(value.replace(/\D/g, ""));
}

export function isPastDate(value: string): boolean {
  if (!value) return false;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  return date.getTime() < Date.now();
}

export function isPositiveNumber(value: string): boolean {
  if (!isNotEmpty(value)) return false;
  const n = Number(value);
  return !Number.isNaN(n) && n >= 0;
}

const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

export function isValidFile(file: File | null, maxSizeMB = 5): string | null {
  if (!file) return "Please upload a document.";
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return "Only PDF, JPG, or PNG files are allowed.";
  }
  if (file.size > maxSizeMB * 1024 * 1024) {
    return `File size must be under ${maxSizeMB}MB.`;
  }
  return null;
}

/** Strips everything but digits so a config phone number is safe to use in a wa.me / tel: link. */
export function sanitizePhoneForLink(phone: string): string {
  return phone.replace(/\D/g, "");
}
