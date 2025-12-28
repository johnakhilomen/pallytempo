import './App.css'
import { landingData } from './data'

function App() {
  const { navLeft, navRight, brand, hero, scrollLabel, player, catalogue } =
    landingData

  return (
    <div className="page">
      <div className="stage">
        <section
          className="hero"
          aria-label={hero.ariaLabel}
          style={{
            backgroundImage: `${hero.overlayGradient}, url(${hero.backgroundImage})`,
          }}
        >
          <nav className="nav">
            <div className="nav-group">
              {navLeft.map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>
            <div className="brand">{brand}</div>
            <div className="nav-group nav-group-right">
              {navRight.map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="hero-content">
            <p className="hero-kicker">{hero.kicker}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
          </div>

          <div className="hero-bottom">
            <a className="scroll-cta" href="#catalogue">
              {scrollLabel} <span aria-hidden="true">↓</span>
            </a>

            <div className="player">
              <p className="player-label">{player.label}</p>
              <div className="player-card">
                <img
                  src={player.coverImage}
                  alt={`${player.trackTitle} cover`}
                  className="player-cover"
                />
                <div className="player-meta">
                  <p className="player-title">{player.trackTitle}</p>
                  <p className="player-artist">{player.artist}</p>
                </div>
                <div className="player-controls" aria-label="Playback controls">
                  <button type="button" className="icon-button" aria-label="Previous">
                    ⏮
                  </button>
                  <button type="button" className="icon-button" aria-label="Play">
                    ⏵
                  </button>
                  <button type="button" className="icon-button" aria-label="Next">
                    ⏭
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="catalogue" id="catalogue" aria-label="Catalogue">
          <div className="catalogue-header">
            <p className="catalogue-eyebrow">{catalogue.eyebrow}</p>
            <div>
              <h2 className="catalogue-title">{catalogue.title}</h2>
              <p className="catalogue-description">{catalogue.description}</p>
            </div>
          </div>

          <div className="catalogue-grid">
            {catalogue.cards.map((card) => (
              <article key={card.title} className="catalogue-card">
                <div className="catalogue-card-top">
                  <p className="catalogue-card-title">{card.title}</p>
                  <span className="catalogue-card-year">{card.year}</span>
                </div>
                <p className="catalogue-card-subtitle">{card.subtitle}</p>
              </article>
            ))}
          </div>

          <div className="catalogue-metrics">
            {catalogue.metrics.map((metric) => (
              <div key={metric.label} className="catalogue-metric">
                <p className="catalogue-metric-value">{metric.value}</p>
                <p className="catalogue-metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
