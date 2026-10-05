import "./App.css";
import { ThemeSwitcher, useTheme } from "@lvucodes/ui";

const GITHUB_URL = "https://github.com/lvuCodes";

const projects = [
  {
    name: "Hex Mirror",
    href: "/hex-mirror",
    blurb:
      "Find the complementary and contrast-balanced counterparts of a hex color as live swatches.",
  },
  {
    name: "eBay Σummer",
    href: "/ebay-summer",
    blurb:
      "A Chrome extension showing the approx. total cost (item + tax + shipping) on every eBay listing.",
  },
  {
    name: "Treasures Dig Optimizer",
    href: "/treasures-app",
    blurb: "A Monopoly GO treasures helper that calculates the best cells to dig on a board.",
  },
  {
    name: "Terminal Themes",
    href: "/terminal-themes",
    blurb:
      "Nine macOS-Terminal-inspired palettes and an ANSI color ramp, packaged as a drop-in theme module with a switcher.",
  },
  {
    name: "Tōng Shū 通书",
    href: "/tong-shu",
    blurb:
      "A Chinese almanac that reads the traditional calendar to find auspicious dates for important events.",
  },
];

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">
          lvuCodes
        </a>
        <nav>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </header>

      <main id="top">
        <section id="about" className="about">
          <h1>Lauren (Ellie) Vu</h1>
          <p className="tagline">Software engineer with a passion for design and a11y.</p>
          <p className="bio">{/* TODO: replace with your own words */}</p>
        </section>

        <section id="projects" className="projects">
          <ul className="grid">
            {projects.map((p) => {
              const external = p.href.startsWith("http");
              return (
                <li key={p.name}>
                  <a
                    className="card"
                    href={p.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="project-name">
                      {p.name}
                      {external ? " ↗" : ""}
                    </span>
                    <span className="project-blurb">{p.blurb}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="theme-row">
          <ThemeSwitcher theme={theme} onChange={setTheme} />
        </div>
        <p>© {new Date().getFullYear()} Lauren Vu</p>
      </footer>
    </>
  );
}

export default App;
