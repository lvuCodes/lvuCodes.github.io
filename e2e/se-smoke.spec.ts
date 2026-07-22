import { expect, test } from "@playwright/test";
import { defineSeSmoke, SE_VIEWPORT } from "@lvucodes/ui/se-smoke";

defineSeSmoke({ expectBackLink: false });

test.describe("home page project cards", () => {
  test.use({ viewport: SE_VIEWPORT });

  test("the four project cards are visible and within the viewport width", async ({ page }) => {
    await page.goto("/");
    const cards = page.locator(".card");
    await expect(cards).toHaveCount(4);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      await expect(card).toBeVisible();
      const box = await card.boundingBox();
      expect(box, `card #${i}`).not.toBeNull();
      expect(box!.x, `card #${i} left edge`).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width, `card #${i} right edge`).toBeLessThanOrEqual(SE_VIEWPORT.width);
    }
  });
});
