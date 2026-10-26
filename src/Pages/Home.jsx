import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Smartphone,
  Code2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={25} />,
    title: "Lightning Fast",
    description:
      "Navigate between pages instantly without full browser reloads.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: <Smartphone size={25} />,
    title: "Fully Responsive",
    description:
      "Enjoy a consistent experience across phones, tablets, and desktops.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: <Code2 size={25} />,
    title: "Reusable Components",
    description:
      "Build maintainable interfaces using clean, reusable React components.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: <ShieldCheck size={25} />,
    title: "Modern Architecture",
    description:
      "Organize your application with dedicated pages and shared layouts.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:py-32 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              React + Tailwind CSS
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Build better
              <span className="block text-indigo-400">
                web experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore a modern React application with seamless navigation,
              beautiful UI components, and responsive design.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-bold transition hover:bg-indigo-400"
              >
                Explore more <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/20 px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                No full page reloads
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />
                Mobile friendly
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-sm text-slate-400">
                app.jsx
              </span>
            </div>

            <div className="space-y-4 py-6 font-mono text-sm leading-7 sm:text-base">
              <p className="text-violet-300">
                {"<BrowserRouter>"}
              </p>
              <p className="pl-5 text-sky-300">
                {"<Routes>"}
              </p>
              <p className="pl-10 text-emerald-300">
                {'<Route path="/" element={<Home />} />'}
              </p>
              <p className="pl-10 text-emerald-300">
                {'<Route path="/about" element={<About />} />'}
              </p>
              <p className="pl-10 text-emerald-300">
                {'<Route path="/contact" element={<Contact />} />'}
              </p>
              <p className="pl-5 text-sky-300">
                {"</Routes>"}
              </p>
              <p className="text-violet-300">
                {"</BrowserRouter>"}
              </p>
            </div>

            <div className="rounded-xl bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              <CheckCircle2 className="mr-2 inline" size={17} />
              Client-side routing enabled
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Why ReactFlow?
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to get started
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A simple foundation for building modern, fast, and accessible
            React websites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <div
                className={`inline-flex rounded-xl p-3 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-indigo-600 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to explore?
            </h2>
            <p className="mt-3 text-indigo-100">
              Learn about our project or send us a message.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 hover:bg-indigo-50"
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}