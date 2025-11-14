'use client';

import { motion } from "framer-motion";

const manifesto = [
  {
    title: "Radical Honesty",
    description:
      "Surfaces stay raw, edges stay loud. We celebrate the scaffolding and amplify the bones of the web.",
    tone: "bg-[var(--accent)] text-[var(--foreground)] border-[var(--foreground)]",
  },
  {
    title: "Chromatic Fury",
    description:
      "Neon gradients collide with saturated pigments. We weaponize color to spark unexpected emotion.",
    tone: "bg-white text-[var(--foreground)] border-[var(--accent-strong)]",
  },
  {
    title: "Motion as Oxygen",
    description:
      "Scroll breathes life into each block. Kinetic choreography guides the eye without ever whispering.",
    tone: "bg-[#1200ff] text-white border-[var(--accent)]",
  },
];

const experiments = [
  {
    label: "Sound Graphite",
    detail: "UI detuning with brutal grids and haptic typography.",
  },
  {
    label: "Soft Violence",
    detail: "Candy-coated palettes shielding raw industrial angles.",
  },
  {
    label: "Electric Fog",
    detail: "Perpetual gradients mutating with reactive light.",
  },
  {
    label: "Ghost Systems",
    detail: "Hidden interactions exposed through deliberate glitches.",
  },
];

const timeline = [
  {
    year: "2025",
    module: "Orbital Zine Launch",
    summary:
      "Limited run of 500, hand-bound with conductive ink that lights up on touch.",
  },
  {
    year: "2024",
    module: "City Beacon Installation",
    summary:
      "An urban monolith projecting real-time motion studies onto brutalist architecture.",
  },
  {
    year: "2023",
    module: "Hyper-Slab Framework",
    summary:
      "Design system for crafting unapologetic, accessible neobrutalist experiences at scale.",
  },
];

const easeSoft = [0.22, 1, 0.36, 1] as const;
const easeHero = [0.16, 1, 0.3, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeSoft },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: easeSoft },
  }),
};

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden pb-32 text-[var(--foreground)]"
    >
      <div className="pointer-events-none fixed inset-0 opacity-70 mix-blend-multiply">
        <div className="absolute -left-32 top-16 h-64 w-64 rotate-3 rounded-[48px] border-4 border-[var(--foreground)] bg-[var(--accent)] blur-[2px] md:h-72 md:w-72 lg:h-96 lg:w-96 animate-[floatOrb_14s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-1/4 h-80 w-80 -rotate-6 rounded-[44px] border-4 border-[var(--accent)] bg-[#1200ff] blur-[6px] opacity-80 animate-[floatOrb_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rotate-[12deg] rounded-full border-8 border-[var(--foreground)] bg-[#fdf257] mix-blend-screen animate-[floatOrb_16s_ease-in-out_infinite]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:px-12 lg:px-16">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeSoft }}
          className="z-10 flex flex-col items-center justify-between gap-6 rounded-[28px] border-4 border-[var(--foreground)] bg-white/80 px-6 py-5 shadow-neon backdrop-blur-lg md:flex-row"
        >
          <div className="flex items-center gap-4 text-2xl font-black uppercase tracking-[0.4em]">
            <span className="h-10 w-10 rounded-full border-[3px] border-[var(--foreground)] bg-[var(--accent)]" />
            N•BRUT
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase">
            <a href="#manifesto" className="rounded-full border-2 border-[var(--foreground)] px-5 py-2 transition hover:bg-[var(--foreground)] hover:text-white">
              Manifesto
            </a>
            <a href="#experiments" className="rounded-full border-2 border-[var(--foreground)] px-5 py-2 transition hover:bg-[var(--foreground)] hover:text-white">
              Experiments
            </a>
            <a href="#palette" className="rounded-full border-2 border-[var(--foreground)] px-5 py-2 transition hover:bg-[var(--foreground)] hover:text-white">
              Palette
            </a>
            <a href="#log" className="rounded-full border-2 border-[var(--foreground)] px-5 py-2 transition hover:bg-[var(--foreground)] hover:text-white">
              Studio Log
            </a>
          </nav>
        </motion.header>

        <section className="relative z-10 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeHero }}
              className="text-glow text-5xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-7xl"
            >
              Neobrutalist playground for future interfaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: easeHero }}
              className="max-w-xl text-lg font-medium leading-relaxed md:text-xl"
            >
              We craft kinetic visual systems that slam saturated color into pure structural geometry. Scroll to detonate delight, disrupt assumptions, and experience unapologetic digital brutalism.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeSoft }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#manifesto"
                className="rounded-3xl border-4 border-[var(--foreground)] bg-[var(--accent)] px-10 py-4 text-lg font-black uppercase tracking-[0.2em] text-[var(--foreground)] shadow-neon transition hover:-translate-y-1 hover:rotate-1 hover:shadow-[16px_16px_0_#0a0614]"
              >
                Ignite
              </a>
              <a
                href="#experiments"
                className="rounded-3xl border-4 border-[var(--foreground)] bg-[#fdf257] px-10 py-4 text-lg font-black uppercase tracking-[0.2em] text-[var(--foreground)] shadow-card transition hover:-translate-y-1 hover:-rotate-2 hover:shadow-[12px_12px_0_#1200ff]"
              >
                Dive Deep
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: easeSoft }}
            className="relative rounded-[36px] border-4 border-[var(--foreground)] bg-white/90 p-6 shadow-neon backdrop-blur-lg"
          >
            <div className="absolute -top-10 right-6 rounded-full border-[3px] border-[var(--foreground)] bg-[#fdf257] px-4 py-2 text-xs font-black uppercase tracking-[0.4em]">
              2025
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase leading-none tracking-tight">
                Studio Signal
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.3em]">
                Live prototypes • tactile motion • chromatic research
              </p>
              <div className="grid gap-3 text-sm">
                <span className="flex items-center justify-between rounded-2xl border-2 border-dashed border-[var(--foreground)] bg-[#e8ddff]/60 px-4 py-3 font-semibold uppercase">
                  <span>Neon Field Tests</span>
                  <span>IDX 07</span>
                </span>
                <span className="flex items-center justify-between rounded-2xl border-2 border-dashed border-[var(--foreground)] bg-[#fdf257]/70 px-4 py-3 font-semibold uppercase">
                  <span>Motion Vignettes</span>
                  <span>IDX 12</span>
                </span>
                <span className="flex items-center justify-between rounded-2xl border-2 border-dashed border-[var(--foreground)] bg-white px-4 py-3 font-semibold uppercase">
                  <span>Interface Glitches</span>
                  <span>IDX 04</span>
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="manifesto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="relative z-10 space-y-12 rounded-[42px] border-4 border-[var(--foreground)] bg-white/75 p-10 shadow-neon backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              Manifesto
            </h2>
            <p className="max-w-xl text-base font-medium leading-relaxed">
              Every module is a provocation. We remix acid color, raw texture, and fearless motion to rewire the senses. This is our blueprint for an expressive, human web.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {manifesto.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4, once: false }}
                className={`flex flex-col gap-4 rounded-[28px] border-4 p-6 text-left text-sm font-semibold uppercase leading-relaxed shadow-card transition duration-500 hover:-translate-y-2 hover:-rotate-2 hover:shadow-[18px_18px_0_rgba(10,6,20,0.95)] ${item.tone}`}
              >
                <span className="text-xs tracking-[0.5em] text-[var(--foreground)]/80">
                  Pillar
                </span>
                <h3 className="text-2xl font-black leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm normal-case text-[var(--foreground)]/90">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experiments"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="relative z-10 grid gap-12 rounded-[42px] border-4 border-[var(--foreground)] bg-[#1200ff]/90 p-10 shadow-neon backdrop-blur-xl md:grid-cols-[1fr_1fr]"
        >
          <div className="flex flex-col gap-5 text-white">
            <h2 className="text-4xl font-black uppercase tracking-tight text-glow">
              Experiment Lab
            </h2>
            <p className="max-w-md text-base font-medium leading-relaxed">
              We iterate through provocations that tilt perception. Each experiment is a living build—the grid bends, typography screams, and motion invites play.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.4em]">
              <span className="rounded-full border-2 border-white/80 bg-white/10 px-5 py-2">
                Scroll Sync
              </span>
              <span className="rounded-full border-2 border-white/80 bg-white/10 px-5 py-2">
                Kinetic Grids
              </span>
              <span className="rounded-full border-2 border-white/80 bg-white/10 px-5 py-2">
                Chromatic Noise
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: false }}
                className="group relative overflow-hidden rounded-[32px] border-4 border-white bg-white/15 p-6 text-white shadow-[12px_12px_0_rgba(10,6,20,0.85)] transition hover:-translate-y-2 hover:shadow-[22px_22px_0_rgba(10,6,20,0.85)]"
              >
                <div className="absolute -right-12 top-1/2 h-24 w-24 -translate-y-1/2 rotate-12 rounded-full border-4 border-white/70 bg-[var(--accent)] opacity-70 transition group-hover:translate-x-6 group-hover:opacity-100" />
                <h3 className="text-2xl font-black uppercase tracking-wide">
                  {experiment.label}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
                  {experiment.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="palette"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="relative z-10 space-y-10 rounded-[42px] border-4 border-[var(--foreground)] bg-white/80 p-10 shadow-neon backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              Palette &amp; Texture
            </h2>
            <p className="max-w-xl text-base font-medium leading-relaxed">
              Bold tones meet unapologetic texture. Our surfaces collide matte pigments with reflective light leaks, stitched together with loud vector geometry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-48 flex-col justify-between rounded-[28px] border-4 border-[var(--foreground)] bg-[var(--accent)] p-6 text-sm font-black uppercase text-[var(--foreground)] shadow-card">
              <span>Solar Candy</span>
              <span>#FF4ECB</span>
            </div>
            <div className="flex h-48 flex-col justify-between rounded-[28px] border-4 border-[var(--foreground)] bg-[#fdf257] p-6 text-sm font-black uppercase text-[var(--foreground)] shadow-card">
              <span>Voltage Field</span>
              <span>#FDF257</span>
            </div>
            <div className="flex h-48 flex-col justify-between rounded-[28px] border-4 border-[var(--foreground)] bg-[#1200ff] p-6 text-sm font-black uppercase text-white shadow-card">
              <span>Midnight Core</span>
              <span>#1200FF</span>
            </div>
            <div className="flex h-48 flex-col justify-between rounded-[28px] border-4 border-[var(--foreground)] bg-[#e8ddff] p-6 text-sm font-black uppercase text-[var(--foreground)] shadow-card">
              <span>Static Mist</span>
              <span>#E8DDFF</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
            <div className="relative overflow-hidden rounded-[32px] border-4 border-[var(--foreground)] bg-gradient-to-br from-[var(--accent)] via-[#1200ff] to-[#0f0328] p-8 text-white shadow-neon">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
              <div className="relative space-y-4">
                <span className="rounded-full border-2 border-white/70 bg-white/20 px-4 py-1 text-xs font-black uppercase tracking-[0.4em]">
                  Surface Study
                </span>
                <h3 className="text-3xl font-black uppercase leading-tight">
                  Gradient Noise
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/90">
                  Depth emerges from layered mesh gradients and noisy highlights, creating a soft friction against strict brutalist forms.
                </p>
              </div>
            </div>
            <div className="relative rounded-[32px] border-4 border-[var(--foreground)] bg-white p-6 text-sm font-medium uppercase shadow-card">
              <div className="absolute right-6 top-6 h-16 w-16 rotate-6 rounded-full border-4 border-[var(--foreground)] bg-[#fdf257]" />
              <div className="relative space-y-4">
                <span className="text-xs font-black tracking-[0.4em]">Texture Codes</span>
                <ul className="space-y-2">
                  <li>• Grain overlays</li>
                  <li>• Industrial halftones</li>
                  <li>• Vector scaffolds</li>
                  <li>• Silken reflections</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="log"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="relative z-10 grid gap-10 rounded-[42px] border-4 border-[var(--foreground)] bg-[#fdf257]/80 p-10 shadow-neon backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-5">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              Studio Log
            </h2>
            <p className="text-base font-medium leading-relaxed">
              We archive every experiment, from spatial typography rigs to reactive lighting studies. The log is a living document of our chromatic research.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-3xl border-4 border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-black uppercase tracking-[0.4em] text-white transition hover:-translate-y-1 hover:rotate-1 hover:bg-[#1200ff]"
            >
              View Archive
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs">
                ⤴
              </span>
            </a>
          </div>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.module}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4, once: false }}
                className="relative overflow-hidden rounded-[32px] border-4 border-[var(--foreground)] bg-white/90 p-6 shadow-card transition hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(10,6,20,0.9)]"
              >
                <div className="absolute -left-6 top-6 flex h-16 w-16 -rotate-6 items-center justify-center rounded-full border-4 border-[var(--foreground)] bg-[var(--accent)] text-sm font-black uppercase">
                  {item.year}
                </div>
                <div className="pl-16">
                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {item.module}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className="relative z-10 overflow-hidden rounded-[46px] border-4 border-[var(--foreground)] bg-[#1200ff]/90 p-10 text-white shadow-neon backdrop-blur-xl"
        >
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-0 h-48 w-48 -rotate-6 rounded-[44px] border-4 border-white bg-[var(--accent)] blur-[2px]" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rotate-12 rounded-[60px] border-4 border-white/60 bg-[#fdf257]/80 blur-[4px]" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tight text-glow">
                Collaborate with us
              </h2>
              <p className="max-w-xl text-base font-medium leading-relaxed text-white/90">
                We design digital stages for bold voices. Bring your concept—installation, editorial, interactive narrative—and we’ll amplify it with brutalist energy.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.4em]">
                <span className="rounded-full border-2 border-white/80 bg-white/10 px-6 py-3">
                  Spatial Web
                </span>
                <span className="rounded-full border-2 border-white/80 bg-white/10 px-6 py-3">
                  Motion Systems
                </span>
                <span className="rounded-full border-2 border-white/80 bg-white/10 px-6 py-3">
                  Experiential Design
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[32px] border-4 border-white bg-white/10 p-6 text-sm font-medium uppercase tracking-[0.3em]">
              <label className="flex flex-col gap-2">
                <span className="text-xs text-white/80">Your Name</span>
                <input
                  type="text"
                  placeholder="Futurist Alias"
                  className="rounded-2xl border-2 border-white/70 bg-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs text-white/80">Project Signal</span>
                <input
                  type="text"
                  placeholder="Immersive Narrative"
                  className="rounded-2xl border-2 border-white/70 bg-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs text-white/80">Mood Frequency</span>
                <select className="rounded-2xl border-2 border-white/70 bg-white/20 px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option className="text-black">Voltaic</option>
                  <option className="text-black">Serotonin Storm</option>
                  <option className="text-black">Chrome Reverie</option>
                </select>
              </label>
              <button className="group mt-2 inline-flex items-center justify-between rounded-3xl border-4 border-white bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.4em] text-[var(--foreground)] transition hover:-translate-y-1 hover:bg-[#fdf257]">
                Send Pulse
                <span className="ml-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)] px-2 py-1 text-xs">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.section>

        <footer className="relative z-10 flex flex-col items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--foreground)]/70">
          <span className="h-[3px] w-32 bg-[var(--foreground)]" />
          <span>Neon Brutalist Playground • 2025</span>
          <span>Built with love + Tailwind • Hosted on Vercel</span>
        </footer>
      </main>
    </div>
  );
}
