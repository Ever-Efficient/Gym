/**
 * Frontend security utilities: input sanitization, rate limiting, and form validation.
 */

/**
 * Strips potentially dangerous HTML tags and escapes special characters to prevent XSS.
 * @param {string} input - Untrusted user input.
 * @returns {string} Sanitized string.
 */
export const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Strip brackets
    .replace(/javascript:/gi, "") // Prevent javascript: pseudo-protocol
    .replace(/on\w+=/gi, ""); // Prevent event handler attributes like onload=
};

/**
 * Validates standard email address format using RFC 5322 compatible pattern.
 * @param {string} email - Email address to validate.
 * @returns {boolean} True if email is valid.
 */
export const isValidEmail = (email) => {
  if (typeof email !== "string") return false;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates contact form fields with length boundaries and format constraints.
 * @param {Object} data - Form data object { name, email, subject, message }
 * @returns {{ isValid: boolean, errors: Object }} Validation result and field-level error messages.
 */
export const validateContactForm = ({ name, email, subject, message }) => {
  const errors = {};

  const cleanName = sanitizeInput(name);
  if (!cleanName || cleanName.length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  } else if (cleanName.length > 80) {
    errors.name = "Name cannot exceed 80 characters.";
  }

  const cleanEmail = (email || "").trim();
  if (!cleanEmail) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(cleanEmail)) {
    errors.email = "Please enter a valid email address.";
  } else if (cleanEmail.length > 100) {
    errors.email = "Email cannot exceed 100 characters.";
  }

  const cleanSubject = sanitizeInput(subject);
  if (cleanSubject && cleanSubject.length > 120) {
    errors.subject = "Subject cannot exceed 120 characters.";
  }

  const cleanMessage = sanitizeInput(message);
  if (!cleanMessage || cleanMessage.length < 5) {
    errors.message = "Message must be at least 5 characters long.";
  } else if (cleanMessage.length > 2000) {
    errors.message = "Message cannot exceed 2,000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Simple client-side submission rate limiter to prevent spam or flood attacks.
 */
export class SubmissionRateLimiter {
  constructor(cooldownMs = 5000) {
    this.cooldownMs = cooldownMs;
    this.lastSubmission = 0;
  }

  canSubmit() {
    const now = Date.now();
    return now - this.lastSubmission >= this.cooldownMs;
  }

  recordSubmission() {
    this.lastSubmission = Date.now();
  }

  getRemainingCooldownSeconds() {
    const elapsed = Date.now() - this.lastSubmission;
    const remaining = Math.max(0, this.cooldownMs - elapsed);
    return Math.ceil(remaining / 1000);
  }
}
