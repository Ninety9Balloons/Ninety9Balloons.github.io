import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[rgb(219,180,180)] bg-white/70 px-4 py-3 text-[rgb(40,15,15)] placeholder-[rgb(190,150,150)] outline-none backdrop-blur-sm transition focus:border-[rgb(235,78,78)] focus:ring-1 focus:ring-[rgb(235,78,78)]";

  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[rgb(160,70,70)]">
          Get in touch
        </p>
        <h1 className="mb-4 text-4xl font-bold text-[rgb(40,15,15)] md:text-6xl">
          Contact
        </h1>
        <p className="text-[rgb(130,75,75)]">
          Have a project in mind? Let's talk.
        </p>
      </header>

      {status === "sent" ? (
        <div className="rounded-2xl border border-[rgb(219,180,180)] bg-white/60 p-10 text-center backdrop-blur-sm">
          <p className="text-lg font-semibold text-[rgb(40,15,15)]">
            Message sent!
          </p>
          <p className="mt-2 text-[rgb(130,75,75)]">
            I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-[rgb(80,35,35)]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-[rgb(80,35,35)]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-[rgb(80,35,35)]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-[rgb(235,78,78)]">
              Something went wrong — please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start rounded-full bg-[rgb(235,78,78)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(210,55,55)] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
