import { test, expect } from "@playwright/test";

test.describe("Navigation & Routing Suite", () => {
  test("loads home page successfully and renders header and navigation", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/TGCPM Fitness/);

    // Verify main navigation is visible
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Verify header title
    const headerTitle = page.locator("header h1");
    await expect(headerTitle).toBeVisible();
    await expect(headerTitle).toContainText("Transform Your Body");

    // Verify footer is rendered
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("navigates to all application pages via navigation menu", async ({
    page,
  }) => {
    await page.goto("/");

    const routes = [
      { name: "About Us", path: "/about-us", heading: /Your Strength/ },
      { name: "Programs", path: "/programs", heading: /Explore Our Programs/ },
      { name: "Packages", path: "/packages", heading: /Unlock Your Potential/ },
      { name: "Trainers", path: "/trainers", heading: /Meet Our Expert Trainers/ },
      { name: "Contact Us", path: "/contact-us", heading: /Get In Touch/ },
      { name: "Blog", path: "/blog", heading: /Welcome to our Fitness Blogs/ },
    ];

    for (const route of routes) {
      await page.locator(`nav >> text="${route.name}"`).first().click();
      await expect(page).toHaveURL(new RegExp(route.path));
      const heading = page.locator("h1");
      await expect(heading).toContainText(route.heading);
    }
  });

  test("scrolls to top on navigation link click", async ({ page }) => {
    await page.goto("/");

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(100);

    // Click 'About Us' in nav
    await page.locator('nav >> text="About Us"').first().click();
    await page.waitForTimeout(300);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThanOrEqual(50);
  });
});
