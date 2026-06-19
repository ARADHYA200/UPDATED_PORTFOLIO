import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Send, Loader2 } from "lucide-react";
import { contactInfo, emailJsConfig } from "../../data/contact";
import SocialCard from "../ui/SocialCard";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../effects/RevealOnScroll";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { serviceId, templateId, publicKey } = emailJsConfig;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service not configured. Please set EmailJS environment variables.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm(initialForm);
      setErrors({});
    } catch {
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto" aria-label="Contact section">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      <SectionHeading
        label="Contact"
        title="Let's Build Something"
        highlight="Amazing"
        description="I'm actively looking for Software Development, Full Stack, and AI/ML opportunities. Feel free to connect or reach out."
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16">
        <RevealOnScroll direction="left">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <SocialCard key={item.title} {...item} />
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="mb-5">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-xl bg-slate-900/80 p-4 outline-none border transition ${
                  errors.name ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-xl bg-slate-900/80 p-4 outline-none border transition ${
                  errors.email ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-xl bg-slate-900/80 p-4 outline-none border transition resize-none ${
                  errors.message ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
