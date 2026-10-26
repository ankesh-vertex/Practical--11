import { Link } from "react-router-dom";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center px-5 py-20">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600">
          <FileQuestion size={38} />
        </div>

        <p className="mt-7 text-sm font-bold uppercase tracking-widest text-indigo-600">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white hover:bg-indigo-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}