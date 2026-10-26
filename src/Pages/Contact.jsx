import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
          Contact us
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Let's start a conversation.
        </h1>
        <p className="mt-5 leading-7 text-slate-600">
          Have a question, an idea, or feedback? Fill out the form
          and explore how a contact page works in React.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-extrabold">
            Contact information
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            This sample interface demonstrates common contact details.
            Replace them with your actual business information.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <span className="rounded-xl bg-white/10 p-3 text-indigo-300">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:hello@example.com"
                  className="mt-1 block text-sm text-slate-300 hover:text-white"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="rounded-xl bg-white/10 p-3 text-indigo-300">
                <Phone size={22} />
              </span>
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+15550102000"
                  className="mt-1 block text-sm text-slate-300 hover:text-white"
                >
                  +1 555 010 2000
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="rounded-xl bg-white/10 p-3 text-indigo-300">
                <MapPin size={22} />
              </span>
              <div>
                <p className="font-semibold">Location</p>
                <p className="mt-1 text-sm text-slate-300">
                  Your city, your country
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
            >
              <CheckCircle2 className="mt-0.5 shrink-0" size={21} />
              <div>
                <p className="font-bold">Form submitted successfully!</p>
                <p className="mt-1 text-sm">
                  This is a demo confirmation. No message was sent
                  to a server.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            >
              Send message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}