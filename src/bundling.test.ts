import { describe, expect, it } from "vitest";
import mainSource from "./main.tsx?raw";

// Entry-import-order guard. The palette must be imported from the entry module
// (never tree-shaken), and the site's own stylesheet must load AFTER the
// @lvucodes/ui imports so site rules win the cascade in the production bundle.
describe("entry import order", () => {
  it("imports the theme palette from the entry module", () => {
    expect(mainSource).toMatch(/import\s+["']@lvucodes\/ui\/theme\.css["']/);
  });

  it("imports the site stylesheet after the @lvucodes/ui imports", () => {
    const lastUi = mainSource.lastIndexOf("@lvucodes/ui");
    const siteCss = mainSource.indexOf("./index.css");
    expect(lastUi).toBeGreaterThanOrEqual(0);
    expect(siteCss).toBeGreaterThan(lastUi);
  });
});
