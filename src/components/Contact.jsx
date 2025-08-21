import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS configuration is missing");
      setError(
        "Email service is not configured properly. Please try again later."
      );
      setStatus("");
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setFormData({ user_name: "", user_email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again later.");
      setStatus("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out bg-white/50 text-stone-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out bg-white/50 text-stone-900"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-stone-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out bg-white/50 text-stone-900 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`px-8 py-3 rounded-lg font-medium transition duration-200 ease-in-out
                ${
                  status === "sending"
                    ? "bg-stone-400 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-600 active:bg-teal-700"
                } 
                text-stone-100`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="mt-4 text-teal-600 animate-fade-in">
                Message sent successfully!
              </p>
            )}

            {error && (
              <p className="mt-4 text-red-600 animate-fade-in">{error}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
