import { useEffect, useRef, useState } from 'react'
import './App.css'

const resumeLink = '/pdfs/tushar-bhat-resume.pdf'
const portfolioPages = [1, 2, 3, 4, 5, 6, 7, 8]

const navItems = ['about', 'experience', 'projects', 'portfolio', 'contact']

const skills = [
  'MATLAB',
  'ANSYS Workbench (CFD, FEA)',
  'Siemens NX',
  'CAD/CAM',
  'XFLR5',
  'Teamcenter',
  'GD&T',
  'Additive Manufacturing',
  'CNC Machining',
  'Python',
  'GitHub',
  'Data Analysis',
  'Basic ML',
  'Signal Processing',
]

const sectionLabels = {
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  portfolio: 'Portfolio',
  contact: 'Contact',
}

const experience = [
  {
    title: 'Systems R&D Intern',
    company: 'HCLTech / Boeing Contracting',
    period: 'June 2026 – August 2026',
    details:
      'Built a MATLAB RSSI model for GPS-denied cargo, achieving 1.05 m median localization error across five simulated positions.',
  },
  {
    title: 'RF Signal Processing Analyst',
    company: 'Purdue Data Mine & The Aerospace Corporation',
    period: 'August 2025 – May 2026',
    details:
      'Classified GNSS jamming across 20+ GB of RF data, contributing to an ensemble with 76.91% test accuracy.',
  },
  {
    title: 'Senior Design Engineer',
    company: 'Purdue Undergraduate Rocket Propulsion Labs',
    period: 'October 2025 – Present',
    details:
      'Applied CFD/FEA to a 500 lbf regeneratively cooled rocket engine and led the club’s first resonance igniter through Phase 1 review.',
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Purdue Propulsion and Energy Lab',
    period: 'August 2025 – May 2026',
    details:
      'Evaluated docking and fluid-transfer concepts for autonomous UAV hydrogen refueling through trade studies and vendor input.',
  },
]

const projects = [
  {
    title: 'Torch Igniter',
    context: 'Independent project',
    period: '2025 – Present',
    details:
      'Designed and CNC-machined a methane-GOX torch igniter. Benchmarked a combustion simulation against a NASA CEA ideal baseline, estimating 84% efficiency and a 1,700 K exit temperature.',
  },
  {
    title: 'Autonomous Fixed-Wing UAV',
    context: 'Personal project',
    period: 'May – August 2025',
    details:
      'Designed and prototyped a 2.65 m fixed-wing aircraft in XFLR5 and Siemens NX for a 30 mph target. Integrated and bench-tested the flight controller, Raspberry Pi, GPS, motors, and servos.',
  },
  {
    title: 'Axisymmetric Ramjet Design',
    context: 'Collaborative design project',
    period: 'Current design work',
    details:
      'Leading inlet design for a Mach 3.2 mixed-compression ramjet and evaluating shock geometry and pressure recovery with NASA SUPIN.',
  },
  {
    title: 'Regeneratively Cooled Rocket Engine',
    context: 'Purdue Undergraduate Rocket Propulsion Labs',
    period: '2025 – Present',
    details:
      'Performed thermal-fluid CFD and structural FEA for a 500 lbf LOx–RP-1 engine, focusing on regen-channel temperatures, coolant pressures, and hardware operating margins.',
  },
  {
    title: 'GNSS Interference Classification',
    context: 'Purdue Data Mine & The Aerospace Corporation',
    period: 'August 2025 – May 2026',
    details:
      'Developed a PyTorch 2D ResNet pipeline for nine interference classes in a 20+ GB RF dataset. The model reached 68% accuracy and contributed to a team ensemble with 76.91% test accuracy.',
  },
  {
    title: 'Autonomous UAV Hydrogen Refueling',
    context: 'Purdue Propulsion and Energy Lab',
    period: 'August 2025 – May 2026',
    details:
      'Researched docking and fluid-transfer concepts for autonomous UAV hydrogen refueling, using trade studies and vendor input to compare alignment, clamping, materials, and mechanisms.',
  },
]

const galleryImages = [
  { src: '/images/gallery-engine-render.jpeg', alt: 'Regenerative rocket engine CAD model' },
  { src: '/images/gallery-regen-engine.jpeg', alt: 'Regenerative engine cutaway CAD model' },
  { src: '/images/gallery-fluid-analysis.jpeg', alt: 'ANSYS velocity streamlines for engine flow' },
  { src: '/images/gallery-concept-sketch.jpeg', alt: 'Annotated resonance igniter concept sketch' },
  { src: '/images/gallery-cavity-sizing-code.jpeg', alt: 'Code sizing a resonance igniter cavity' },
  { src: '/images/gallery-cargo-bay-simulation.jpeg', alt: '3D cargo-bay payload placement simulation' },
  { src: '/images/gallery-rf-classification.jpeg', alt: 'RF signal classification heatmap' },
  { src: '/images/gallery-confusion-matrix.jpeg', alt: 'RF classifier confusion matrix' },
  { src: '/images/gallery-training-data.jpeg', alt: 'Training and test class distribution chart' },
  { src: '/images/gallery-igniter-cross-section.jpeg', alt: 'Resonance igniter CAD cross-section' },
  { src: '/images/gallery-igniter-cad.jpeg', alt: 'Resonance igniter 3D CAD model' },
  { src: '/images/gallery-thermal-analysis.jpeg', alt: 'Igniter temperature contour analysis' },
  { src: '/images/gallery-uav-test.jpeg', alt: 'Fixed-wing UAV electronics and hardware' },
  { src: '/images/gallery-wing-analysis.jpeg', alt: 'XFLR5 wing geometry comparison plot' },
  { src: '/images/gallery-ramjet-cad.jpeg', alt: 'Ramjet CAD model' },
  { src: '/images/gallery-ramjet-profile.jpeg', alt: 'Ramjet side-profile geometry' },
]

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activePortfolioPage, setActivePortfolioPage] = useState(portfolioPages[0])
  const contentAreaRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 2600)

    return () => clearInterval(timer)
  }, [])

  const renderSection = () => {
    if (activeSection === 'experience') {
      return (
        <section className="content-panel experience-panel">
          <div className="section-header">
            <h2>Engineering, research, and design</h2>
          </div>

          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.title}>
                <p className="experience-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="experience-card-company">{item.company}</p>
                <p className="experience-summary">{item.details}</p>
              </article>
            ))}
          </div>
        </section>
      )
    }

    if (activeSection === 'portfolio') {
      return (
        <section className="content-panel portfolio-panel">
          <div className="section-header portfolio-heading">
            <h2>Portfolio</h2>
          </div>

          <div className="portfolio-viewer">
            <button
              className="portfolio-arrow"
              type="button"
              aria-label="Previous portfolio page"
              disabled={activePortfolioPage === portfolioPages[0]}
              onClick={() =>
                setActivePortfolioPage((page) => Math.max(portfolioPages[0], page - 1))
              }
            >
              <span aria-hidden="true">&#8592;</span>
            </button>

            <figure className="portfolio-page">
              <img
                src={
                  activePortfolioPage === 1
                    ? '/images/portfolio-view-page-1-anonymized.png'
                    : `/images/portfolio-view-page-${activePortfolioPage}.png`
                }
                alt={`Portfolio PDF page ${activePortfolioPage}`}
              />
            </figure>

            <button
              className="portfolio-arrow"
              type="button"
              aria-label="Next portfolio page"
              disabled={activePortfolioPage === portfolioPages[portfolioPages.length - 1]}
              onClick={() =>
                setActivePortfolioPage((page) =>
                  Math.min(portfolioPages[portfolioPages.length - 1], page + 1),
                )
              }
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>

          <p className="portfolio-page-count" aria-live="polite">
            Page {activePortfolioPage} of {portfolioPages[portfolioPages.length - 1]}
          </p>
        </section>
      )
    }

    if (activeSection === 'projects') {
      return (
        <section className="content-panel projects-panel">
          <div className="section-header">
            <h2>Engineering Project Work</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="experience-card project-list-card" key={project.title}>
                <p className="experience-period">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="experience-card-company">{project.context}</p>
                <p className="experience-summary">{project.details}</p>
              </article>
            ))}
          </div>
        </section>
      )
    }

    if (activeSection === 'contact') {
      return (
        <section className="content-panel contact-panel">
          <div className="section-header">
            <h2>Let’s connect</h2>
          </div>

          <div className="contact-grid">
            <section className="contact-card contact-details" aria-label="Contact information">
              <h3>Tushar Bhat</h3>
              <p>Sammamish, WA 98074</p>
              <a href="tel:+12067053505">(206) 705-3505</a>
              <a href="mailto:bhat.tushar@outlook.com">bhat.tushar@outlook.com</a>
              <a href="https://www.linkedin.com/in/tusharbhat13" target="_blank" rel="noreferrer">
                linkedin.com/tusharbhat13
              </a>
              <p className="citizenship">Citizenship: USA</p>
            </section>

            <section className="contact-card additional-experiences" aria-label="Additional experiences">
              <h3>Additional Experiences</h3>
              <article>
                <div className="additional-experience-heading">
                  <h4>Link Crew</h4>
                  <span>August 2022 – June 2024</span>
                </div>
                <p className="additional-experience-company">Eastlake High School</p>
                <p>Guided freshmen at school events, helped with club sign-ups, facilitated workshops, and led campus tours.</p>
              </article>
              <article>
                <div className="additional-experience-heading">
                  <h4>Pavilion Ambassador</h4>
                  <span>August 2022 – June 2024</span>
                </div>
                <p className="additional-experience-company">Museum of Flight</p>
                <p>Supervised aircraft displays and introduced visitors to aircraft history and capabilities, from WWII bombers to 787 Dreamliners.</p>
              </article>
            </section>
          </div>
        </section>
      )
    }

    return (
      <section className="content-panel landing-panel">
        <div className="landing-grid">
          <div className="intro-copy">
            <p className="eyebrow">Aerospace Engineer • Researcher • Builder</p>
            <h1>I turn ambitious aerospace ideas into systems you can test.</h1>
            <p>
              I’m a Purdue aerospace engineering student working across propulsion, thermal-fluid
              analysis, RF signal processing, and autonomous aircraft. My experience ranges from
              analyzing a regeneratively cooled rocket engine and designing a methane-GOX igniter to
              building GNSS interference classifiers and exploring UAV systems. I’m curious,
              collaborative, and happiest pairing careful analysis with hands-on work to make a
              design better.
            </p>
          </div>

          <div className="interest-box landing-interest-box">
            <div className="gallery-loop inside-interests-gallery">
              {galleryImages.map((image, index) => (
                <img
                  key={image.src}
                  className={index === activeImageIndex ? 'active' : ''}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    )
  }

  return (
    <div className="app-shell theme-dark">
      <aside className="sidebar">
        <div className="profile-block">
          <div className="avatar-wrap">
            <img src="/images/TusharImage.png" alt="Tushar Bhat headshot" />
          </div>
          <div>
            <p className="mini-label">Portfolio</p>
          </div>
        </div>

        <nav className="side-nav" aria-label="Sidebar navigation">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={item === activeSection ? 'nav-item active' : 'nav-item'}
              onClick={() => {
                setActiveSection(item)
                contentAreaRef.current?.scrollTo({ top: 0 })
              }}
            >
              {sectionLabels[item]}
            </button>
          ))}
        </nav>

        <a className="sidebar-resume" href={resumeLink} target="_blank" rel="noreferrer">
          Resume PDF
        </a>

      </aside>

      <div className="main-shell">
        <header className="topbar">
          <div className="identity-block">
            <p className="mini-label">About me</p>
            <h1>Tushar Bhat</h1>
            <p className="title-line">Aerospace Engineer • Researcher • Builder</p>
          </div>

          <div className="topbar-actions">
            <p className="mini-label header-skills-label">Technical Skills</p>
            <div className="pill-row">
              {skills.map((skill) => (
                <span key={skill} className="top-pill">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </header>

        <main className="content-area" ref={contentAreaRef}>
          {renderSection()}
        </main>

        <footer className="site-footer">
          <div className="site-footer-education">
            <p className="mini-label">Education</p>
            <p><strong>B.S. Aerospace Engineering</strong> · Purdue University · Class of 2028</p>
            <p className="site-footer-coursework">
              <strong>Relevant Coursework:</strong> Turbomachinery, Fluid Mechanics, Aerodynamics,
              Structures, Signal Analysis, Propulsion Foundations, Intro to CFD, Thermodynamics
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
