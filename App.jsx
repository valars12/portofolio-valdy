import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail, Phone, Globe, ChevronRight, ExternalLink, Moon, Sun } from "lucide-react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-slate-900/10 bg-white/70 p-0 text-slate-900 shadow-[0_25px_45px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-[0_30px_60px_-30px_rgba(6,182,212,0.45)] ${className}`}>
    {children}
  </div>
);

const Button = ({ as: Tag = "a", className = "", children, ...props }) => (
  <Tag
    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mb-12 text-center">
    {eyebrow && (
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h2>
    {desc && <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-white/70">{desc}</p>}
  </div>
);

const LINKS = {
  github: "https://github.com/valars12?tab=repositories",
  wa: "https://wa.me/6282292996138",
  ig: "https://www.instagram.com/valarss_/",
  email: "mailto:arivyarsyad@gmail.com",
};

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Istimewa Plafon",
    url: "https://istimewaplafon.com/",
    img: "assets/img/istimewaplafon-website.jpg",
    logo: "assets/img/istimewa-logo.png",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    blurb: "Company profile bersih, mobile-first, cepat, dan SEO-ready.",
  },
  {
    title: "Brutal Rental",
    url: "https://brutal-rental.vercel.app/",
    img: "assets/img/brutalrental-website.jpg",
    logo: "assets/img/brutal-logo.jpg",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    blurb: "Landing modern untuk sewa kendaraan dengan CTA WhatsApp yang jelas.",
  },
  {
    title: "LapakBuku",
    url: "#",
    imgs: [
      "assets/img/lapakbuku-website.jpg",
      "assets/img/lapakbuku-website2.jpg",
      "assets/img/lapakbuku-website3.jpg",
    ],
    logo: "assets/img/lapakbuku-website.jpg",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
    blurb: "Toko buku sederhana dengan slider otomatis untuk tiga varian tampilan.",
  },
  {
    title: "Kahuy House",
    url: "https://kahuyhouse.com/",
    img: "assets/img/kahuy-logo.png",
    logo: "assets/img/kahuy-logo.png",
    stack: ["WordPress", "Tailwind CSS", "SEO"],
    blurb: "Showcase rumah kayu dengan visual immersif, CTA cepat ke WhatsApp, dan copy ramah pengguna.",
    fit: "contain",
  },
];

const SERVICES = [
  {
    title: "Company Profile / Portofolio",
    desc: "Website brand yang clean, cepat, dan mudah dikelola.",
  },
  {
    title: "Landing Page Campaign",
    desc: "Berfokus pada konversi dengan tracking yang siap pakai.",
  },
  {
    title: "Optimasi Kecepatan & SEO",
    desc: "Skor Lighthouse tinggi dengan praktik teknis SEO yang benar.",
  },
  {
    title: "Maintenance & Iteration",
    desc: "Update rutin, analytics, dan eksperimen berbasis data.",
  },
];

const TESTIMONIALS = [
  {
    name: "A. Pratama",
    quote: "Komunikatif dan cepat. Hasil akhir rapi, skor performanya tinggi.",
  },
  {
    name: "R. Sari",
    quote: "Landing page-nya konversi bagus, integrasi WhatsApp sangat membantu.",
  },
];

const LANGUAGES = [];

const SITE_LINKS = [
  { title: "Istimewa Plafon", url: "https://istimewaplafon.com/" },
  { title: "Brutal Rental", url: "https://brutal-rental.vercel.app/" },
  { title: "Kahuy House", url: "https://kahuyhouse.com/" },
];

const useDarkMode = () => {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    const stored = window.localStorage.getItem("valdy-theme");
    return stored ? stored === "dark" : true;
  });

  React.useEffect(() => {
    const stored = window.localStorage.getItem("valdy-theme");
    if (stored) {
      setDark(stored === "dark");
    }
  }, []);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("valdy-theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
};

const Badge = ({ children }) => (
  <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 transition-colors duration-300 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
    {children}
  </span>
);

const FadeIn = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const AutoSlider = ({ images = [], alt = "Slide", interval = 3000, fit = "cover", overlay = null }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    const id = window.setInterval(() => setIndex((value) => (value + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 h-full w-full ${fitClass}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ visibility: i === index ? "visible" : "hidden" }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent" />
      {overlay}
      <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full transition-colors duration-300 ${i === index ? "bg-cyan-400" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};


const ProjectCard = ({ project }) => {
  const isSlider = Array.isArray(project.imgs);
  const fitClass = project.fit === "contain" ? "object-contain" : "object-cover";

  const renderLogoOverlay = () => {
    if (!project.logo) {
      return null;
    }
    return (
      <div className="pointer-events-none absolute left-5 top-5 z-20 flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/90 shadow-lg shadow-slate-900/20 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-0.5 dark:border-white/20 dark:bg-slate-900/70 dark:shadow-cyan-500/20">
          <img src={project.logo} alt={`${project.title} logo`} className="h-8 w-8 object-contain" />
        </div>
      </div>
    );
  };

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)] dark:hover:shadow-[0_35px_65px_-35px_rgba(6,182,212,0.6)]">
      {isSlider ? (
        <AutoSlider images={project.imgs} alt={project.title} fit={project.fit} overlay={renderLogoOverlay()} />
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className={`h-full w-full ${fitClass} transition-transform duration-500 group-hover:scale-105`}
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent" />
          {renderLogoOverlay()}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-500 hover:text-cyan-400"
          >
            Live <ExternalLink size={16} />
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};


const TiltCard = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((event) => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 18;
    const rotateX = (0.5 - y) * 18;
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const resetTilt = React.useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[2rem] border border-slate-900/10 bg-white/80 p-0 text-slate-900 shadow-[0_25px_45px_-20px_rgba(15,23,42,0.3)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-[0_35px_65px_-30px_rgba(6,182,212,0.45)] ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/20" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2rem]">{children}</div>
    </motion.div>
  );
};

const FancyContactForm = () => {
  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const intro = name ? `Halo Valdy, saya ${name}.` : "Halo Valdy, saya ingin berdiskusi.";
    const contactLine = email ? ` Email: ${email}.` : "";
    const encoded = encodeURIComponent(`${intro}${contactLine} ${message}`);
    window.open(`${LINKS.wa}?text=${encoded}`, "_blank");
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>Rencanakan proyek</span>
      </div>
      <div className="title-2">
        <span>SPACE</span>
      </div>
      <div className="input-container">
        <input name="name" placeholder="Nama" type="text" className="input-mail" required />
        <span aria-hidden="true"> </span>
      </div>
      <section className="bg-stars" aria-hidden="true">
        <span className="star" />
        <span className="star" />
        <span className="star" />
        <span className="star" />
      </section>
      <div className="input-container">
        <input name="email" placeholder="Email" type="email" className="input-mail" required />
      </div>
      <div className="input-container">
        <textarea name="message" placeholder="Ceritakan kebutuhan project" rows={3} className="input-textarea" required />
      </div>
      <button className="submit" type="submit">
        <span className="sign-text">Kirim via WhatsApp</span>
      </button>
      <p className="signup-link">
        Butuh balasan cepat?
        <a className="up" href={LINKS.wa} target="_blank" rel="noopener">
          Chat langsung
        </a>
      </p>
    </form>
  );
};

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/30 selection:text-slate-900 transition-colors duration-500 ease-out dark:bg-[#030712] dark:text-white dark:selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-white/80 backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-[#030712]/70">
        <Container>
          <nav className="flex h-20 items-center justify-between gap-6">
            <a href="#" className="brand-3d" aria-label="Valdy logo">
              <span>VA</span>
            </a>
            <div className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-white/70 p-1 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-cyan-500/10 md:flex">
              {NAV_LINKS.map((link) => (
                <a key={link.href} className="nav-pill" href={link.href}>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button
                as="button"
                type="button"
                onClick={() => setDark(!dark)}
                className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                <span className="hidden sm:inline">Theme</span>
              </Button>
              <Button
                href={LINKS.wa}
                target="_blank"
                rel="noopener"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/50"
              >
                <Phone size={16} /> Hire Me
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_90%_0,rgba(14,165,233,0.16),transparent_45%)] dark:bg-[radial-gradient(circle_at_10%_-10%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_90%_0,rgba(14,165,233,0.2),transparent_45%)]" />
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10">
                <FadeIn>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Web Developer
                  </span>
                </FadeIn>
                <FadeIn delay={0.1} className="mt-6">
                  <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                    Saya membangun website <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">cepat</span> dengan pengalaman premium.
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-5 max-w-xl text-base text-slate-600 dark:text-white/70">
                    Dari landing page hingga company profile: mobile-first, SEO-ready, dan siap scale. Integrasi analytics, copy yang fokus hasil, dan handover yang rapi.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      href="#work"
                      className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
                    >
                      Lihat Proyek <ChevronRight size={16} />
                    </Button>
                    <Button
                      href={LINKS.wa}
                      target="_blank"
                      rel="noopener"
                      className="bg-transparent ring-1 ring-slate-900/10 text-slate-900 hover:bg-slate-900/5 dark:ring-white/20 dark:text-white dark:hover:bg-white/10"
                    >
                      <Phone size={16} /> WhatsApp
                    </Button>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                    <span>Tech</span>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "Next.js", "React", "Tailwind", "SEO"].map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2} className="relative z-10">
                <TiltCard className="mx-auto max-w-md md:max-w-full">
                  <div className="relative">
                    <img
                      src="assets/img/bg-portofolio.jpg"
                      alt="Portfolio preview"
                      className="h-72 w-full object-cover md:h-[28rem]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-500/25 mix-blend-screen" />
                    <div className="pointer-events-none absolute bottom-6 left-6 flex gap-3">
                      <Badge>Performance 95+</Badge>
                      <Badge>Aksesibilitas</Badge>
                    </div>
                  </div>
                </TiltCard>
                <motion.div
                  className="pointer-events-none absolute -right-10 top-10 hidden h-28 w-28 rounded-3xl bg-gradient-to-br from-cyan-400/40 to-transparent blur-3xl md:block"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </FadeIn>
            </div>
          </Container>
        </section>

        <section id="work" className="py-16 sm:py-20 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Selected Work"
              title="Proyek Terpilih"
              desc="Beberapa pekerjaan terbaru dengan fokus pada pengalaman pengguna, performa tinggi, dan hasil bisnis yang terukur."
            />
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:snap-none">
              {PROJECTS.map((project, index) => (
                <FadeIn key={project.title} delay={0.05 * index} className="min-w-[280px] snap-center md:min-w-0">
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section id="services" className="py-16 sm:py-20 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Services"
              title="Layanan"
              desc="Paket fleksibel sesuai kebutuhan proyek — dari build pertama sampai optimasi lanjutan."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((service, index) => (
                <FadeIn key={service.title} delay={0.05 * index}>
                  <Card className="p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)] dark:hover:shadow-[0_35px_65px_-35px_rgba(6,182,212,0.55)]">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{service.desc}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section id="about" className="py-16 sm:py-20 md:py-24">
          <Container>
            <SectionTitle eyebrow="About" title="Tentang Saya" />
            <Card className="p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <p className="text-base text-slate-600 dark:text-white/70">
                    Saya Valdy, web developer yang fokus pada performa, aksesibilitas, dan desain yang bersih. Saya suka
                    membangun UI tajam, animasi yang halus, serta arsitektur yang mudah dirawat oleh tim berikutnya.
                  </p>
                  <p className="mt-4 text-base text-slate-500 dark:text-white/60">
                    Alur kerja saya sederhana: riset kebutuhan, desain yang relevan, build yang rapi, lalu iterasi berdasarkan data. Tools favorit termasuk Next.js, React, Tailwind, dan Vercel.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      href={LINKS.github}
                      target="_blank"
                      rel="noopener"
                      className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                    >
                      <Github size={16} /> GitHub
                    </Button>
                    <Button
                      href={LINKS.ig}
                      target="_blank"
                      rel="noopener"
                      className="bg-transparent ring-1 ring-slate-900/10 text-slate-900 hover:bg-slate-900/5 dark:ring-white/20 dark:text-white dark:hover:bg-white/10"
                    >
                      <Instagram size={16} /> Instagram
                    </Button>
                    <Button
                      href={LINKS.email}
                      className="bg-transparent ring-1 ring-slate-900/10 text-slate-900 hover:bg-slate-900/5 dark:ring-white/20 dark:text-white dark:hover:bg-white/10"
                    >
                      <Mail size={16} /> Email
                    </Button>
                  </div>
                  {LANGUAGES.length > 0 && (
                    <div className="mt-8">
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                        Bahasa Pemrograman
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {LANGUAGES.map((lang) => (
                          <Badge key={lang}>{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-100/60 shadow-inner dark:border-white/10 dark:bg-white/5">
                    <img src="assets/img/self.jpg" alt="Foto Valdy" className="h-80 w-full object-cover object-center" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  </div>
                  <Card className="p-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                      Highlight
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/70">
                      <li>• Fokus pada loading cepat dan skor performa tinggi.</li>
                      <li>• Workflow kolaboratif dengan dokumentasi yang jelas.</li>
                      <li>• Support pasca-launch untuk iterasi dan maintenance.</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <Container>
            <SectionTitle eyebrow="Social Proof" title="Testimoni" />
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, index) => (
                <FadeIn key={testimonial.name} delay={0.05 * index}>
                  <Card className="p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)] dark:hover:shadow-[0_35px_65px_-35px_rgba(6,182,212,0.55)]">
                    <p className="text-base text-slate-600 dark:text-white/70">“{testimonial.quote}”</p>
                    <div className="mt-4 text-sm font-semibold text-slate-500 dark:text-white/60">— {testimonial.name}</div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-16 sm:py-20 md:py-24">
          <Container>
            <SectionTitle
              eyebrow="Contact"
              title="Ayo Diskusi"
              desc="Punya proyek atau ide? Ceritakan singkat, saya akan bantu siapkan solusi terbaik."
            />
            <Card className="p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
                <div className="flex justify-center">
                  <FancyContactForm />
                </div>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-5 text-slate-900 shadow-md transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                      Kontak Langsung
                    </div>
                    <div className="mt-4 space-y-3 text-sm">
                      <a
                        href={LINKS.wa}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-500 dark:text-white/70 dark:hover:text-cyan-400"
                      >
                        <Phone size={18} />
                        <span>082292996138 — WhatsApp</span>
                      </a>
                      <a
                        href={LINKS.email}
                        className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-500 dark:text-white/70 dark:hover:text-cyan-400"
                      >
                        <Mail size={18} />
                        <span>arivyarsyad@gmail.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-5 text-slate-900 shadow-md transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                      Sosial & Repositori
                    </div>
                    <div className="mt-4 space-y-3 text-sm">
                      <a
                        href={LINKS.github}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-500 dark:text-white/70 dark:hover:text-cyan-400"
                      >
                        <Github size={18} />
                        <span>GitHub Projects</span>
                      </a>
                      <a
                        href={LINKS.ig}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-500 dark:text-white/70 dark:hover:text-cyan-400"
                      >
                        <Instagram size={18} />
                        <span>@valarss_</span>
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-5 text-slate-900 shadow-md transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                      Featured Sites
                    </div>
                    <div className="mt-4 space-y-3 text-sm">
                      {SITE_LINKS.map((site) => (
                        <a
                          key={site.title}
                          href={site.url}
                          target="_blank"
                          rel="noopener"
                          className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-500 dark:text-white/70 dark:hover:text-cyan-400"
                        >
                          <Globe size={18} />
                          <span>{site.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-900/10 py-10 text-sm text-slate-500 transition-colors duration-500 dark:border-white/10 dark:text-white/60">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>© {new Date().getFullYear()} Valdy. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href={LINKS.github} target="_blank" rel="noopener" className="hover:text-cyan-500">
                <Github size={18} />
              </a>
              <a href={LINKS.ig} target="_blank" rel="noopener" className="hover:text-cyan-500">
                <Instagram size={18} />
              </a>
              <a href={LINKS.email} className="hover:text-cyan-500">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
