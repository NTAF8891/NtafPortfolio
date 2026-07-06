const skills = [
  {
    title: 'IA & LLM',
    items: ['LLM', 'RAG', 'Prompt Engineering', 'Azure AI Foundry', 'Agents IA'],
  },
  {
    title: 'Microsoft',
    items: ['Microsoft Fabric', 'Power BI', 'Azure AI', 'Azure Data Factory'],
  },
  {
    title: 'Développement',
    items: ['Python', 'Java', 'Django', 'Spring Boot', 'React'],
  },
  {
    title: 'Data',
    items: ['SQL', 'PostgreSQL', 'Machine Learning', 'ETL', 'Analytics'],
  },
];

const projects = [
  {
    title: 'SmartOps Platform',
    description:
      'Une plateforme de supervision intelligente combinant automatisation, analytics et agents IA pour accélérer la prise de décision opérationnelle.',
    stack: ['Azure', 'Python', 'Fabric', 'Power BI'],
    result: 'Réduction du temps d’analyse et meilleure visibilité sur les KPIs métiers.',
    accent: 'Pilotage intelligent',
  },
  {
    title: 'RAG Assistant',
    description:
      'Assistant conversationnel basé sur un moteur RAG pour répondre à partir de documents métier avec un contexte fiable et traçable.',
    stack: ['Azure AI', 'Python', 'FAISS', 'Streamlit'],
    result: 'Accélération de l’accès à l’information et amélioration de la qualité des réponses.',
    accent: 'Recherche documentaire',
  },
  {
    title: 'Dashboard Intelligence',
    description:
      'Tableau de bord analytique conçu pour suivre des indicateurs clés, automatiser les rapports et transformer les données brutes en décisions.',
    stack: ['Power BI', 'SQL', 'Fabric'],
    result: 'Visualisation claire, reporting plus rapide et exploitation plus simple des données.',
    accent: 'Business Intelligence',
  },
  {
    title: 'Agents IA pour process',
    description:
      'Automatisation de workflows métier avec des agents IA capables d’orchestrer des tâches, d’enrichir des données et de réduire la friction opérationnelle.',
    stack: ['LLM', 'Azure AI', 'Python', 'LangChain'],
    result: 'Gain de productivité et réduction des tâches répétitives.',
    accent: 'Automation',
  },
];

const certifications = ['Microsoft Azure AI Fundamentals', 'Microsoft Power BI Data Analyst', 'AI-900', 'PL-300'];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-tight">Arthur Nemangou</p>
          <p className="text-sm text-slate-400">AI & Data Engineer</p>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#about" className="transition hover:text-cyan-400">À propos</a>
          <a href="#skills" className="transition hover:text-cyan-400">Compétences</a>
          <a href="#projects" className="transition hover:text-cyan-400">Projets</a>
          <a href="#blog" className="transition hover:text-cyan-400">Blog</a>
          <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              Microsoft Fabric • Azure AI • Python • LLM
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Je conçois des solutions intelligentes combinant Data, Cloud et Intelligence Artificielle.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Je développe des plateformes d’automatisation, des assistants IA et des expériences data pour transformer les processus métier.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Voir mes projets
              </a>
              <a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-300">
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Vision IA</p>
            <h2 className="mt-3 text-2xl font-semibold">Créer des systèmes utiles, fiables et orientés métier.</h2>
            <p className="mt-4 text-slate-300">
              Mon approche allie architecture cloud, qualité des données et agents IA pour produire des solutions concrètes, évolutives et rapidement adoptables.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-cyan-400">8+</p>
                <p className="text-sm text-slate-400">compétences clés</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-cyan-400">3</p>
                <p className="text-sm text-slate-400">projets phares</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">À propos</p>
              <h2 className="mt-3 text-3xl font-semibold">Passionné par l’IA, le cloud et la data.</h2>
            </div>
            <div className="text-lg leading-8 text-slate-300">
              Je développe des solutions permettant d’automatiser les processus métier, de faciliter la prise de décision et d’accélérer le développement logiciel grâce aux LLM et aux architectures modernes. Mon objectif est de créer des produits intelligents, utiles et durables.
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Compétences</p>
            <h2 className="mt-3 text-3xl font-semibold">Un profil hybride IA • Data • Cloud</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Projets</p>
              <h2 className="mt-3 text-3xl font-semibold">Des réalisations concrètes, orientées impact</h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              Chaque projet combine données, automatisation et IA pour créer des solutions utiles, scalables et rapidement adoptables.
            </p>
          </div>

          <div className="mb-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projet phare</p>
                <h3 className="mt-2 text-2xl font-semibold">SmartOps Platform</h3>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Une expérience de supervision et d’analytique pensée pour aider les équipes à piloter plus vite, avec une vraie visibilité sur leurs opérations.
                </p>
              </div>
              <a href="#contact" className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10">
                Discuter de ce projet
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">{project.accent}</span>
                  <span className="text-sm text-slate-500">Cas d’usage</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-400">Résultat : {project.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">IA</p>
              <h2 className="mt-3 text-3xl font-semibold">Ce que je fais avec l’IA</h2>
              <p className="mt-4 text-lg text-slate-300">
                Génération de code, revue de code, prompt engineering, création d’agents IA et assistants métiers, toujours au service de l’efficacité et de la qualité.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
              <ul className="space-y-3 text-slate-300">
                <li>• Génération de code et automatisation</li>
                <li>• Revue de code et assistance au développement</li>
                <li>• Création d’agents IA orientés business</li>
                <li>• Optimisation documentaire et workflows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold">Compétences validées</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-300">
                {cert}
              </span>
            ))}
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Blog IA</p>
            <h2 className="mt-3 text-3xl font-semibold">Articles techniques et réflexions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-semibold">Construire un RAG avec Azure AI Foundry</h3>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-semibold">Pourquoi Microsoft Fabric change la data</h3>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-semibold">Utiliser ChatGPT efficacement pour développer</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">Prêt à créer des solutions IA concrètes ?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Je suis ouvert aux opportunités en data, intelligence artificielle et développement cloud.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="mailto:arthur@example.com" className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Me contacter
              </a>
              <a href="#" className="rounded-full border border-slate-700 px-5 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-300">
                Télécharger mon profil technique
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
