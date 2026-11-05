import { test, expect } from "@playwright/test";

test.describe("Security & Input Sanitization Suite", () => {
  test("enforces rel='noopener noreferrer' on all external blank-target links", async ({
    page,
  }) => {
    // Check Home page
    await page.goto("/");
    const externalLinks = await page.locator('a[target="_blank"]').all();

    for (const link of externalLinks) {
      const rel = await link.getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }

    // Check Contact page
    await page.goto("/contact-us");
    const contactExternalLinks = await page.locator('a[target="_blank"]').all();
    for (const link of contactExternalLinks) {
      const rel = await link.getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  test("Contact form rejects empty submission and shows field validation errors", async ({
    page,
  }) => {
    await page.goto("/contact-us");

    // Click submit without entering any data
    await page.locator('button[type="submit"]:has-text("Send Message")').click();

    // Field level validation errors should be displayed
    await expect(page.locator("text=Name must be at least 2 characters long.")).toBeVisible();
    await expect(page.locator("text=Email address is required.")).toBeVisible();
    await expect(page.locator("text=Message must be at least 5 characters long.")).toBeVisible();
  });

  test("Contact form validates email format", async ({ page }) => {
    await page.goto("/contact-us");

    await page.locator('input[name="name"]').fill("Jane Doe");
    await page.locator('input[name="email"]').fill("not-an-email");
    await page.locator('textarea[name="message"]').fill("Hello, I am interested in training.");

    await page.locator('button[type="submit"]:has-text("Send Message")').click();

    await expect(page.locator("text=Please enter a valid email address.")).toBeVisible();
  });

  test("Contact form accepts valid submission and enforces rate-limiting on rapid submit", async ({
    page,
  }) => {
    await page.goto("/contact-us");

    // Fill valid data
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("user@example.com");
    await page.locator('input[name="subject"]').fill("Membership Inquiry");
    await page.locator('textarea[name="message"]').fill("I would like to inquire about membership options.");

    // First submission: should succeed
    await page.locator('button[type="submit"]:has-text("Send Message")').click();
    await expect(
      page.locator("text=Thank you! Your message has been sent securely.")
    ).toBeVisible();

    // Immediate second submission: should trigger rate-limiting cooldown
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("user@example.com");
    await page.locator('textarea[name="message"]').fill("Another immediate message.");
    await page.locator('button[type="submit"]:has-text("Send Message")').click();

    await expect(
      page.locator("text=Please wait")
    ).toBeVisible();
  });

  test("Contact form sanitizes and neutralizes XSS payloads", async ({ page }) => {
    let dialogTriggered = false;
    page.on("dialog", (dialog) => {
      dialogTriggered = true;
      dialog.dismiss();
    });

    await page.goto("/contact-us");

    // Attempt XSS in name and message fields
    const xssPayload = "<script>alert('XSS')</script><img src=x onerror=alert(1)>";
    await page.locator('input[name="name"]').fill(xssPayload);
    await page.locator('input[name="email"]').fill("attacker@example.com");
    await page.locator('textarea[name="message"]').fill("Valid message text content.");

    await page.locator('button[type="submit"]:has-text("Send Message")').click();

    // Verify no script execution dialog popped up
    expect(dialogTriggered).toBe(false);
  });

  test("index.html contains nosniff and referrer security meta tags", async ({
    page,
  }) => {
    await page.goto("/");

    const nosniffMeta = page.locator('meta[http-equiv="X-Content-Type-Options"]');
    await expect(nosniffMeta).toHaveAttribute("content", "nosniff");

    const referrerMeta = page.locator('meta[name="referrer"]');
    await expect(referrerMeta).toHaveAttribute("content", "strict-origin-when-cross-origin");
  });
});
