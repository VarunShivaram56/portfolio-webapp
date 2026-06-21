import { useEffect, useMemo, useRef, useState } from 'react';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/varun-shivaram-32538132b/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/varunshivaram56',
  },
  {
    label: 'Codolio',
    href: 'https://codolio.com/profile/VarunShivaram',
  },
];

const education = [
  {
    title: 'Dayananda Sagar College of Engineering',
    meta: 'B.E. - CSE (Data Science) · Bengaluru, India · 2026',
    score: 'CGPA 9.1',
  },
  {
    title: 'Sri RamaKrishna Vidyashala',
    meta: 'XII - KSEEB · Mysuru, India · 2022',
    score: '96.33%',
  },
  {
    title: 'Royale Apollo International School',
    meta: 'X - KSEEB · Hassan, India · 2020',
    score: '95.83%',
  },
];

const skills = {
  Languages: ['C/C++', 'Python', 'JavaScript'],
  Frameworks: [
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'LangChain',
    'LangGraph',
    'FastAPI',
  ],
  Tools: ['Git/GitHub', 'Postman', 'MySQL', 'PostgreSQL', 'Claude Code', 'Azure DevOps', 'Jira'],
  Databases: ['SQL', 'MongoDB', 'SQLite', 'ChromaDB'],
  Cloud: ['Azure', 'AWS'],
};

const experience = [
  {
    company: 'Nous Infosystems',
    role: 'Research Engineer Intern',
    period: 'Feb 2025 - Present · Bengaluru, India',
    bullets: [
      'Developing AI proof-of-concepts focused on workflow automation, intelligent decision-making, and enterprise use cases.',
      'Building end-to-end full-stack AI applications by integrating LLMs, AI agents, REST APIs, databases, and modern web technologies.',
      'Leveraging Claude Code, Azure Cloud services, and AI tooling to accelerate application development, experimentation, and deployment.',
      'Collaborating across functions to design, test, optimize, and deploy scalable AI solutions with strong engineering practices.',
    ],
  },
  {
    company: 'Edunet Foundation',
    role: 'AI Project-Based Intern',
    period: 'Dec 2024 - Jan 2025 · Bengaluru, India',
    bullets: [
      'Completed the TechSaksham AI internship by Microsoft and SAP CSR initiative.',
      'Built an end-to-end machine learning project and gained hands-on experience in applied AI and deployment.',
    ],
  },
];

const projects = [
  {
    title: 'My Finance Buddy',
    tech: 'Electron, React, FastAPI, SQLite, Groq LLM, ChromaDB',
    description:
      'A local-first AI-powered finance desktop app with PDF statement parsing, transaction categorization, spending analytics, and a secure SQL-RAG chatbot.',
  },
  {
    title: 'RAG-Based Course Navigator & Topic Guide',
    tech: 'Ollama Llama 3.2, bge-m3, Whisper, Streamlit, Python',
    description:
      'A fully local learning assistant for educational videos with transcription, semantic chunking, retrieval, timestamped answers, and contextual explanations.',
  },
  {
    title: 'Dino Game',
    tech: 'HTML5, CSS3, JavaScript, GitHub Actions',
    description:
      'A Chrome Dino-style browser game with custom animations, collision detection, scoring, responsiveness, and automated deployment through GitHub Actions.',
  },
];

const quickFacts = [
  { value: 'Full Stack', label: 'developer' },
  { value: 'Agentic AI', label: 'focus' },
  { value: 'Data Science', label: 'CSE track' },
  { value: '2026', label: 'graduation' },
];

const contactInitial = {
  name: '',
  email: '',
  message: '',
};

export default function App() {
  const shellRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.35 });
  const [contact, setContact] = useState(contactInitial);
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio message from ${contact.name || 'a visitor'}`;
    const body = [
      `Name: ${contact.name || 'N/A'}`,
      `Email: ${contact.email || 'N/A'}`,
      '',
      contact.message || 'No message provided.',
    ].join('\n');

    return `mailto:varunshivaram2024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [contact]);

  useEffect(() => {
    const root = shellRef.current ?? document.documentElement;
    let frame = 0;

    const handleMove = (event) => {
      const next = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setCursor(next);
        root.style.setProperty('--pointer-x', `${next.x * 100}%`);
        root.style.setProperty('--pointer-y', `${next.y * 100}%`);
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoHref;
    setSubmitted(true);
    setContact(contactInitial);
  };

  return (
    <div
      className="shell"
      ref={shellRef}
      style={{
        '--cursor-x': `${cursor.x * 100}%`,
        '--cursor-y': `${cursor.y * 100}%`,
      }}
    >
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="sky-image" />
      <div className="starfield" />
      <div className="cursor-dust" />
      <div className="blackhole" aria-hidden="true">
        <span className="blackhole-core" />
        <span className="blackhole-ring blackhole-ring-one" />
        <span className="blackhole-ring blackhole-ring-two" />
        <span className="blackhole-ring blackhole-ring-three" />
      </div>

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <p>Varun Shivaram</p>
            <span>Profession, passion, and projects</span>
          </div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Developer · Agentic AI · Cloud Builder</p>
            <h1>
              Exploring systems, intelligence, and interfaces
              <span> beyond visible horizons.</span>
            </h1>
            <p className="lede">
              I build thoughtful web applications with strong foundations in frontend systems,
              database design, data analysis, and backend workflows. My learning instinct aims
              far beyond boundaries, like a quiet orbit around a gargantuan black hole.
            </p>

            <div className="hero-actions">
              {links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="chip-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="facts">
              {quickFacts.map((fact) => (
                <article key={fact.label} className="fact-card">
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img
                src="/assets/varun-portrait.jpeg"
                alt="Varun Shivaram portrait"
                className="portrait"
              />
              <div className="portrait-caption">
                <span className="signal-dot" />
                Learning without boundaries
              </div>
            </div>
            <div className="orbit-note">
              <span>Current orbit</span>
              <strong>Research Engineer Intern at Nous Infosystems</strong>
            </div>
          </div>
        </section>

        <section className="section grid-section" id="about" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Built for product thinking, AI systems, and clean execution.</h2>
          </div>
          <div className="glass-panel narrative">
            <p>
              Passionate Full Stack Developer with a strong foundation in frontend systems,
              backend practice, databases, cloud workflows, and AI-powered product building.
              I enjoy turning complex problems into clear systems and user-centric experiences.
            </p>
            <p>
              My current focus sits at the intersection of AI agents, workflow automation, and
              practical full-stack delivery. I like building software that feels precise,
              lightweight, and genuinely useful.
            </p>
          </div>
        </section>

        <section className="section" id="education" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Strong academics, always moving outward.</h2>
          </div>
          <div className="card-grid three-up">
            {education.map((item) => (
              <article className="glass-panel info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
                <strong>{item.score}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Tooling that supports fast iteration and reliable delivery.</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <article className="glass-panel skill-card" key={category}>
                <h3>{category}</h3>
                <div className="skill-chips">
                  {items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Work shaped by AI experimentation and production-minded building.</h2>
          </div>
          <div className="timeline">
            {experience.map((entry) => (
              <article className="glass-panel timeline-card" key={entry.company}>
                <div className="timeline-head">
                  <div>
                    <h3>{entry.company}</h3>
                    <p>{entry.role}</p>
                  </div>
                  <span>{entry.period}</span>
                </div>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected builds with a strong product and AI angle.</h2>
          </div>
          <div className="card-grid project-grid">
            {projects.map((project, index) => (
              <article className="glass-panel project-card" key={project.title}>
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Send a message and let’s start a new orbit.</h2>
          </div>
          <div className="contact-layout">
            <div className="glass-panel contact-copy">
              <p>
                For collaborations, opportunities, or just a thoughtful conversation about
                product, AI, and engineering, feel free to write a note.
              </p>
              <div className="contact-links">
                <a href="mailto:varunshivaram2024@gmail.com">varunshivaram2024@gmail.com</a>
                <span>+91-8431604583</span>
              </div>
            </div>

            <form className="glass-panel contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  value={contact.name}
                  onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  value={contact.email}
                  onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))}
                />
              </label>
              <label>
                Message
                <textarea
                  rows="5"
                  placeholder="Tell me what you'd like to build or discuss."
                  value={contact.message}
                  onChange={(event) => setContact((current) => ({ ...current, message: event.target.value }))}
                />
              </label>
              <button type="submit">Send via email</button>
              {submitted ? (
                <p className="form-note">
                  Your email app should open with the message prefilled.
                </p>
              ) : (
                <p className="form-note">This opens your mail client with the message prefilled.</p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
