import './App.css'

const GITHUB_URL = 'https://github.com/lvuCodes'

const projects = [
  {
    name: 'Hex Mirror',
    href: '/hex-mirror',
    blurb:
      'Give it a hex color and it computes the contrast mirror set — complementary and contrast-balanced counterparts, as live swatches.',
  },
  {
    name: 'eBay Σummer',
    href: 'https://github.com/lvuCodes/ebay-summer',
    blurb:
      'A Chrome extension showing the approx. total cost — item + tax + shipping — on every eBay listing.',
  },
  {
    name: 'Treasures Dig Optimizer',
    href: '/treasures-app',
    blurb:
      'A Monopoly GO treasures helper that ranks every cell by the odds an undiscovered item covers it, updating live as you dig.',
  },
  {
    name: 'Terminal Themes',
    href: '/terminal-themes',
    blurb:
      'Nine macOS-Terminal-inspired palettes and an ANSI color ramp, packaged as a drop-in theme module with a switcher.',
  },
]

function App() {
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
          <p className="bio">
            {/* TODO: replace with your own words */}
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>

        <section id="projects" className="projects">
          <ul className="grid">
            {projects.map((p) => {
              const external = p.href.startsWith('http')
              return (
                <li key={p.name}>
                  <a
                    className="card"
                    href={p.href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <span className="project-name">
                      {p.name}
                      {external ? ' ↗' : ''}
                    </span>
                    <span className="project-blurb">{p.blurb}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Lauren Vu</p>
      </footer>
    </>
  )
}

export default App
