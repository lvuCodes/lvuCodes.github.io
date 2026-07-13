import './App.css'

const GITHUB_URL = 'https://github.com/lvuCodes'

const projects = [
  {
    name: 'Hex Mirror',
    href: '/hex-mirror',
    blurb: 'An interactive hex-grid mirror toy.',
  },
  {
    name: 'eBay Σummer',
    href: 'https://github.com/lvuCodes/ebay-summer',
    blurb: 'A Chrome extension showing the approx. total cost — item + tax + shipping — on every eBay listing.',
  },
]

function App() {
  return (
    <>
      <div className="brand-stripe">
        <span className="a"></span>
        <span className="b"></span>
        <span className="c"></span>
      </div>

      <header className="nav">
        <a className="brand" href="#top">
          lvuCodes
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </header>

      <main id="top">
        <section id="about" className="about">
          <h1>Lauren Vu</h1>
          <p className="tagline">Software engineer building small, sharp things for the web.</p>
          <p className="bio">
            {/* TODO: replace with your own words */}
            Placeholder bio — write a couple of sentences about who you are, what you like to build,
            and what you&apos;re currently working on. This is where visitors get to know you before
            they dig into the projects below.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="btn btn-ghost" href="#projects">
              See projects
            </a>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <p className="section-lead">Things I&apos;ve built and shipped.</p>
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
