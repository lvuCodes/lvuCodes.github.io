// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { THEMES, THEME_STORAGE_KEY } from "@lvucodes/ui";
import { seedDefaultTheme } from "./theme-boot";

// RTL's automatic cleanup only runs under vitest `globals: true`; unmount
// explicitly so renders don't stack across tests.
afterEach(cleanup);

const PROJECTS = [
  { name: "Hex Mirror", href: "/hex-mirror" },
  { name: "eBay Σummer", href: "/ebay-summer" },
  { name: "Treasures Dig Optimizer", href: "/treasures-app" },
  { name: "Terminal Themes", href: "/terminal-themes" },
];

describe("App", () => {
  it("renders the nav brand", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "lvuCodes" })).toBeTruthy();
  });

  it("renders the four project cards with the correct hrefs", () => {
    const { container } = render(<App />);
    const cards = [...container.querySelectorAll("a.card")];
    expect(cards).toHaveLength(4);
    for (const p of PROJECTS) {
      const card = cards.find((c) => c.textContent?.includes(p.name));
      expect(card, p.name).toBeTruthy();
      expect(card!.getAttribute("href")).toBe(p.href);
    }
  });

  it("shows the footer copyright for the current year", () => {
    const { container } = render(<App />);
    const footer = container.querySelector("footer.footer")!;
    expect(footer.textContent).toContain(`© ${new Date().getFullYear()}`);
  });

  it("renders one theme button per catalog entry", () => {
    render(<App />);
    for (const t of THEMES) {
      expect(screen.getByRole("button", { name: t.label })).toBeTruthy();
    }
  });

  it("applies and persists the theme picked from the switcher", async () => {
    render(<App />);
    const picked = THEMES.find((t) => t.id !== "lvucodes")!;
    await userEvent.click(screen.getByRole("button", { name: picked.label }));
    expect(document.documentElement.dataset.theme).toBe(picked.id);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe(picked.id);
  });

  it("seeds lvuCodes as the default when storage is empty", () => {
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
    seedDefaultTheme();
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("lvucodes");
  });
});
