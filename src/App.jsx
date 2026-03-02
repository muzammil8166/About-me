const skills = ['React.js', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'Responsive Design', 'Git & GitHub']

const projects = [
  {
    name: 'E-Commerce UI',
    description: 'A modern store interface with filters, cart flow, and mobile-first layout.',
    tech: ['React', 'Tailwind', 'Context API'],
  },
  {
    name: 'Task Manager',
    description: 'A smooth productivity app with categories, priorities, and local storage.',
    tech: ['JavaScript', 'React', 'CSS Animation'],
  },
  {
    name: 'Weather Dashboard',
    description: 'Live weather cards with search, condition icons, and clean glassmorphism UI.',
    tech: ['REST API', 'React', 'Tailwind'],
  },
]

function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <header className="glass-card animate-fade-up p-8 sm:p-12 [animation-delay:80ms]">
        <p className="mb-4 inline-flex rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-300">
          Frontend Developer Portfolio
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m <span className="text-sky-300">Muzammil Kureshi</span>
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300 sm:text-lg">
          I build responsive and animated web experiences using React, JavaScript, and Tailwind CSS.
          This portfolio is crafted with smooth motion and modern UI vibes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-sky-300/50 px-6 py-3 font-semibold text-sky-200 transition hover:bg-sky-400/10"
          >
            Contact Me
          </a>
        </div>
      </header>

      <section className="mt-16 animate-fade-up [animation-delay:200ms]" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass-card animate-pulse-glow p-4 text-center font-medium text-sky-100 transition hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 animate-fade-up [animation-delay:320ms]" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="glass-card group p-6 transition hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-sky-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16 animate-fade-up [animation-delay:440ms]">
        <div className="glass-card animate-float p-8 text-center sm:p-10">
          <h2 className="text-3xl font-bold text-white">Let&apos;s Build Something Amazing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I&apos;m open for internships, freelance projects, and collaboration opportunities.
          </p>
          <a
            href="mailto:muzammil@example.com"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
          >
            Send an Email
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
