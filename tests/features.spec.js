import { test, expect } from "@playwright/test";

test.describe("Interactive Features Suite", () => {
  test("Programs page switches between Ladies and Gents programs", async ({
    page,
  }) => {
    await page.goto("/programs");

    // By default, Ladies programs should be shown
    await expect(page.locator("text=Ladies' Toning & Fitness")).toBeVisible();
    await expect(page.locator("text=Weight Loss Program")).toBeVisible();
    await expect(page.locator("text=Muscle Gain Program")).not.toBeVisible();

    // Click 'For Gents'
    await page.locator('button:has-text("For Gents")').click();

    // Now Gents programs should be visible
    await expect(page.locator("text=Muscle Gain Program")).toBeVisible();
    await expect(page.locator("text=Strength & Powerlifting")).toBeVisible();
    await expect(page.locator("text=Ladies' Toning & Fitness")).not.toBeVisible();
  });

  test("Packages page updates cards and comparison table when switching tabs", async ({
    page,
  }) => {
    await page.goto("/packages");

    // Table should contain 'Monthly Flex', 'Committed', 'All-In'
    await expect(page.locator("text=Monthly Flex").first()).toBeVisible();
    await expect(page.locator("text=Committed").first()).toBeVisible();
    await expect(page.locator("text=All-In").first()).toBeVisible();

    // In Ladies tab, comparison table should have 'Monthly Wellness Assessment'
    await expect(
      page.locator("td:has-text('Monthly Wellness Assessment')")
    ).toBeVisible();

    // Switch to Gents tab
    await page.locator('button:has-text("For Gents")').click();

    // In Gents tab, comparison table should have 'Monthly Fitness Assessment'
    await expect(
      page.locator("td:has-text('Monthly Fitness Assessment')")
    ).toBeVisible();
  });

  test("Trainers page filters trainers by specialty", async ({ page }) => {
    await page.goto("/trainers");

    // Initially "All" is active, all trainers visible
    await expect(page.locator("text=Nuwan Perera")).toBeVisible();
    await expect(page.locator("text=Anjalee Wijesinghe")).toBeVisible();

    // Filter by 'Yoga & Flexibility'
    await page.locator('button:has-text("Yoga & Flexibility")').click();

    // Yoga trainers should be visible
    await expect(page.locator("text=Anjalee Wijesinghe")).toBeVisible();
    await expect(page.locator("text=Tharushi Senanayake")).toBeVisible();

    // Strength trainers should be filtered out
    await expect(page.locator("text=Nuwan Perera")).not.toBeVisible();
  });

  test("SnowEffect renders non-blocking snowfall canvas with pointer-events: none", async ({
    page,
  }) => {
    await page.goto("/");

    // Locate canvas elements from Snowfall
    const canvases = page.locator("canvas");
    await expect(canvases.first()).toBeAttached();

    // Verify pointer-events is none so it never blocks user interactions
    const pointerEvents = await canvases.first().evaluate((el) => {
      return window.getComputedStyle(el).pointerEvents;
    });
    expect(pointerEvents).toBe("none");
  });
});
