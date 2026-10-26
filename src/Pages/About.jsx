import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = [
  "Clean and maintainable code",
  "Accessible, user-friendly design",
  "Continuous learning and improvement",
  "Collaboration and teamwork",
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            About us
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Building the web,
            <span className="block text-indigo-400">
              one component at a time.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ReactFlow is a demonstration project showing how React,
            React Router, and Tailwind CSS work together to create
            polished and seamless web experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Our story
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Simple ideas. Thoughtful execution.
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            This project demonstrates a practical approach to frontend
            development. Instead of creating separate HTML pages for
            every screen, React renders the appropriate page based on
            the current URL.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Shared components keep the interface consistent, while
            Tailwind CSS helps create responsive layouts without
            maintaining a large custom stylesheet.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white hover:bg-indigo-700"
          >
            Talk to us <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-700">
              <Target size={27} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Our mission</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Make modern frontend concepts approachable through
              clear, reusable examples.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
              <Eye size={27} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Our vision</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Create websites that are intuitive, responsive,
              maintainable, and enjoyable to use.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:col-span-2">
            <div className="inline-flex rounded-xl bg-rose-100 p-3 text-rose-600">
              <HeartHandshake size={27} />
            </div>
            <h3 className="mt-5 text-xl font-bold">Our values</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-600"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}