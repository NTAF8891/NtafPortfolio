import { useEffect, useRef, useState } from 'react';

const links = {
  email: 'arthurnemangou@gmail.com',
  github: 'https://github.com/NTAF8891',
  linkedin: 'https://www.linkedin.com/in/nemangou-arthur',
  cv: '/cv-arthur.pdf',
};

const nav = [
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#competences', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];

const pipeline = [
  { step: 'Sources', detail: 'Données internes & services de l’entreprise' },
  { step: 'Microsoft Fabric', detail: 'Centralisation et gouvernance des données' },
  { step: 'Azure AI Foundry', detail: 'Modèle de Machine Learning + architecture RAG' },
  { step: 'Power BI', detail: 'Tableaux de bord et rapports personnalisés' },
];

const projects = [
  {
    tag: 'Business Intelligence',
    title: 'Gestion automatisée des DLC',
    context: 'SCOOP HACIENDA · Yaoundé',
    description:
      'Système calculant dynamiquement les remises selon la durée de vie restante des produits, pour réduire les pertes et améliorer la rotation des stocks.',
    stack: ['Power BI', 'SQL', 'DAX', 'Power Query (M)'],
  },
  {
    tag: 'Analyse des ventes',
    title: 'Prédiction des produits à fort potentiel',
    context: 'SCOOP HACIENDA · Yaoundé',
    description:
      'Modèles d’analyse des tendances du marché, en collaboration avec le marketing, pour identifier les produits à fort potentiel et adapter les offres commerciales.',
    stack: ['Power BI', 'SQL', 'DAX'],
  },
  {
    tag: 'Application métier',
    title: 'Suivi des activités du Secrétaire Permanent',
    context: 'Programme National de Lutte contre la Tuberculose',
    description:
      'Conception d’une application de gestion des tâches avec suivi personnalisé, plus maintenance corrective et évolutive des applications web existantes.',
    stack: ['Django', 'Python', 'PostgreSQL'],
  },
  {
    tag: 'Opérations',
    title: 'Standardisation des procédures (SOP)',
    context: 'SSC Consolidation · Lyon',
    description:
      'Création et suivi des SOP pour des équipes basées en Inde, documentation bilingue FR/EN : exécution plus rapide et nettement moins d’erreurs opérationnelles.',
    stack: ['Excel', 'Word', 'Microsoft Teams'],
  },
];

const timeline = [
  {
    period: 'Depuis juil. 2025',
    title: 'Chargé de projets Data & IA',
    place: 'SSC Consolidation · Lyon',
    text: 'Projet SmartOps Platform : Microsoft Fabric, Power BI, Machine Learning et RAG sur Azure AI Foundry.',
  },
  {
    period: 'Depuis juil. 2025',
    title: 'Suivi des opérations',
    place: 'SSC Consolidation · Lyon',
    text: 'Création et suivi des SOP, coordination d’équipes en Inde, documentation FR/EN.',
  },
  {
    period: 'Depuis sept. 2024',
    title: 'Master IA & Gestion de Données',
    place: 'Nexa Digital School · Lyon',
    text: 'Diplômé en octobre 2026.',
    school: true,
  },
  {
    period: 'Mars – juin 2022',
    title: 'Développeur et soutien technique',
    place: 'PNLT · Yaoundé',
    text: 'Applications Django/Python, administration PostgreSQL, support utilisateurs et infrastructure intranet.',
  },
  {
    period: 'Juil. 2021 – oct. 2022',
    title: 'Data Analyst',
    place: 'SCOOP HACIENDA · Yaoundé',
    text: 'Analyse des tendances marché avec Power BI, modèles prédictifs de ventes, gestion automatisée des DLC.',
  },
  {
    period: '2017 – 2022',
    title: 'Licence informatique, génie logiciel',
    place: 'Université protestante d’Afrique centrale',
    text: 'Yaoundé, Cameroun.',
    school: true,
  },
];

const skills = [
  { title: 'Data & BI', items: ['Power BI', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Excel', 'VBA'] },
  { title: 'IA & Machine Learning', items: ['Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'LLMs', 'RAG', 'Azure AI Foundry'] },
  { title: 'Développement', items: ['Python', 'Java', 'JavaScript', 'Django', 'Spring Boot', 'React', 'Node.js', 'REST API'] },
  { title: 'Bases de données', items: ['PostgreSQL', 'SQLite', 'MongoDB', 'Oracle', 'SQL'] },
  { title: 'Cloud & outils', items: ['Azure', 'Docker', 'GitHub', 'Postman', 'Trello', 'ClickUp'] },
  { title: 'Web scraping', items: ['Selenium', 'Beautiful Soup'] },
];

const certifications = ['Microsoft PL-300', 'Microsoft AI-900', 'GitHub Administration'];

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    github: (
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    ),
    linkedin: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      {paths[name]}
    </svg>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-6 motion-safe:opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-600">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-stone-600">{children}</p>}
    </Reveal>
  );
}

function NewApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] font-sans text-stone-800 selection:bg-amber-200">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#f7f5f0]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-stone-900 font-display text-sm font-bold text-amber-400">AN</span>
            <span className="font-display font-semibold text-stone-900">Arthur Nemangou</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-stone-900">{item.label}</a>
            ))}
            <span className="h-5 w-px bg-stone-300" />
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-stone-900"><Icon name="github" /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[#0a66c2]"><Icon name="linkedin" /></a>
          </nav>
          <button
            type="button"
            className="rounded-lg border border-stone-300 px-3 py-2 text-sm md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="grid gap-1 border-t border-stone-200 px-5 py-3 text-sm md:hidden" aria-label="Navigation mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 hover:bg-stone-200/60">{item.label}</a>
            ))}
            <div className="flex gap-4 px-3 py-3">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Position actuelle : Lyon · Disponibilité : Mobile toute la France
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Je transforme les données en <span className="bg-gradient-to-t from-amber-300/70 from-[35%] to-transparent to-[35%] px-1">décisions</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              <strong className="font-semibold text-stone-900">Data Analyst & BI Developer</strong>, diplômé d’un Master en Intelligence
              Artificielle et Gestion de Données. J’accompagne les métiers avec Power BI, Microsoft Fabric, le Machine Learning et l’IA générative.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.cv} download className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-medium text-white transition hover:bg-stone-700">
                Télécharger mon CV
                <span aria-hidden="true">↓</span>
              </a>
              <a href="#projets" className="rounded-full border border-stone-300 px-5 py-3 font-medium text-stone-800 transition hover:border-stone-900">
                Voir mes projets
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-stone-500">
              <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm transition hover:text-stone-900"><Icon name="github" /> NTAF8891</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm transition hover:text-[#0a66c2]"><Icon name="linkedin" /> nemangou-arthur</a>
            </div>
          </Reveal>

          {/* Carte façon rapport Power BI */}
          <Reveal delay={150}>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xl shadow-stone-900/5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <p className="font-mono text-xs uppercase tracking-widest text-stone-400">profil.pbix</p>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { value: '2021', label: 'Premiers projets data' },
                  { value: 'Bac+5', label: 'Master IA & Data' },
                  { value: 'C1', label: 'Anglais professionnel' },
                  { value: '3', label: 'Certifications en cours' },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-xl bg-stone-50 p-4">
                    <p className="font-display text-2xl font-semibold text-stone-900">{kpi.value}</p>
                    <p className="mt-1 text-xs text-stone-500">{kpi.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-stone-50 p-4">
                <p className="text-xs text-stone-500">Stack principale</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Power BI', 'DAX', 'Python', 'SQL', 'Microsoft Fabric', 'Azure AI', 'RAG'].map((tech) => (
                    <span key={tech} className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projet phare */}
        <section id="projets" className="scroll-mt-20 bg-stone-900 py-20 text-stone-100">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">Projet phare · SSC Consolidation · depuis 2025</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">SmartOps Platform</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-300">
                Une plateforme intelligente qui centralise les services et les données de l’entreprise. Les équipes posent leurs questions,
                obtiennent des réponses contextualisées et génèrent des tableaux de bord adaptés à leurs besoins métier.
              </p>
            </Reveal>

            <ol className="mt-12 grid gap-4 md:grid-cols-4">
              {pipeline.map((item, index) => (
                <Reveal key={item.step} delay={index * 120}>
                  <li className="relative h-full rounded-2xl border border-stone-700 bg-stone-800/60 p-5">
                    <span className="font-mono text-xs text-amber-400">0{index + 1}</span>
                    <p className="mt-2 font-display text-lg font-semibold">{item.step}</p>
                    <p className="mt-2 text-sm text-stone-400">{item.detail}</p>
                    {index < pipeline.length - 1 && (
                      <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-amber-400 md:block">→</span>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-700 p-6">
                <p className="text-sm font-semibold text-amber-400">Impact</p>
                <p className="mt-2 text-stone-300">
                  Utilisation simplifiée des outils de l’écosystème : chaque équipe obtient rapidement résultats, analyses et tableaux de bord sans dépendre d’un intermédiaire.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-700 p-6">
                <p className="text-sm font-semibold text-amber-400">Environnement technique</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Power BI', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Azure AI Foundry', 'Python', 'Java', 'PostgreSQL', 'Docker', 'GitHub', 'Postman'].map((tech) => (
                    <span key={tech} className="rounded-md bg-stone-800 px-2.5 py-1 text-xs text-stone-300">{tech}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Autres projets */}
        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionTitle eyebrow="Autres réalisations" title="Des projets concrets, au service du métier" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 120}>
                <article className="group h-full rounded-2xl border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">{project.tag}</span>
                    <span className="text-xs text-stone-400">{project.context}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-stone-900">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-stone-100 px-2.5 py-1 text-xs text-stone-600">{tech}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Parcours */}
        <section id="parcours" className="scroll-mt-20 border-y border-stone-200 bg-white/60 py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle eyebrow="Parcours" title="Expériences & formation" />
            <ol className="relative ml-2 border-l-2 border-stone-200">
              {timeline.map((item) => (
                <li key={item.title} className="mb-10 ml-8 last:mb-0">
                  <Reveal>
                    <span
                      className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-[#f7f5f0] ${item.school ? 'bg-stone-400' : 'bg-amber-500'}`}
                    />
                    <p className="font-mono text-xs uppercase tracking-wider text-stone-500">{item.period}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-stone-900">{item.title}</h3>
                    <p className="text-sm text-amber-700">{item.place}</p>
                    <p className="mt-2 max-w-2xl text-stone-600">{item.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Compétences */}
        <section id="competences" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-8">
          <SectionTitle eyebrow="Compétences" title="Un profil hybride : BI, IA et développement" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 100}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-6">
                  <h3 className="font-display font-semibold text-stone-900">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md border border-stone-200 px-2.5 py-1 text-sm text-stone-700">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl bg-stone-900 p-6 text-stone-100">
                <h3 className="font-display font-semibold">Certifications en préparation</h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3 text-sm">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-amber-400 font-bold text-stone-900">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-display font-semibold text-stone-900">Langues</h3>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="flex items-center justify-between"><span>Français</span><span className="font-medium text-stone-900">Natif</span></div>
                  <div className="flex items-center justify-between"><span>Anglais</span><span className="font-medium text-stone-900">C1</span></div>
                  <p className="text-stone-500">Documentation et coordination quotidiennes en anglais avec des équipes basées en Inde.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-display font-semibold text-stone-900">Atouts</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Discipline', 'Agilité', 'Communication', 'Adaptation', 'Autonomie', 'Esprit d’équipe', 'Résolution de problèmes'].map((item) => (
                    <span key={item} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 px-5 pb-20 lg:px-8">
          <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-stone-900 px-6 py-14 text-center text-stone-100 sm:px-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">Contact</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Un projet data, BI ou IA ? Parlons-en.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-400">
              Ouvert aux opportunités en Data Analysis et Business Intelligence, à Lyon ou partout en France.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${links.email}`} className="rounded-full bg-amber-400 px-5 py-3 font-medium text-stone-900 transition hover:bg-amber-300">
                M’écrire un email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-full border border-stone-600 px-5 py-3 font-medium transition hover:border-stone-300"
              >
                {copied ? 'Email copié ✓' : links.email}
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-stone-400">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white"><Icon name="github" className="h-6 w-6" /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><Icon name="linkedin" className="h-6 w-6" /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Arthur Nemangou · Data Analyst & BI Developer
      </footer>
    </div>
  );
}

export default NewApp;
