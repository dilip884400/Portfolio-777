import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";

const contactInfo = [
  {
    icon: <HiOutlineMail size={18} className="text-violet-400" />,
    label: "Email",
    value: "dilip.884400@gmail.com",
    href: "mailto:dilip.884400@gmail.com",
  },
  {
    icon: <HiOutlinePhone size={18} className="text-emerald-400" />,
    label: "Phone",
    value: "+91 7775026259",
    href: "tel:+917775026259",
  },
  {
    icon: <HiOutlineLocationMarker size={18} className="text-fuchsia-400" />,
    label: "Location",
    value: "Nagpur, India 🇮🇳",
    href: null,
  },
];

const socials = [
  {
    href: "https://github.com/dilip884400",
    icon: <AiFillGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dilip884400/",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/DilipLovev18944",
    icon: <AiOutlineTwitter size={20} />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/lovevanshi.dilip/",
    icon: <AiFillInstagram size={20} />,
    label: "Instagram",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    fetch("https://formsubmit.co/ajax/dilip.884400@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        } else {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 px-6"
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            — Contact
          </p>
          <h2 id="contact-heading" className="section-heading">
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind, or just want to say hi? My inbox is always
            open.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left: Contact Info ── */}
          <AnimatedSection direction="left" className="lg:col-span-2 flex flex-col gap-6">
            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-4 border border-white/[0.08] flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-200 text-sm hover:text-violet-300 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-5 border border-white/[0.08]">
              <p className="text-slate-400 text-sm mb-4 font-display font-medium">
                Connect on social
              </p>
              <ul className="flex items-center gap-3" aria-label="Social media links">
                {socials.map(({ href, icon, label }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} profile`}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/[0.08] transition-colors duration-200"
                    >
                      {icon}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ── Right: Contact Form ── */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.08] h-full">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center gap-4 py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <BsCheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm text-center max-w-xs">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h3 className="font-display font-semibold text-white text-lg mb-6">
                    Send a Message
                  </h3>

                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-slate-400 text-xs font-mono mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        autoComplete="name"
                        className="input-glass"
                        aria-required="true"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-slate-400 text-xs font-mono mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        autoComplete="email"
                        className="input-glass"
                        aria-required="true"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-slate-400 text-xs font-mono mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Hey Dilip, I'd love to discuss..."
                        rows={5}
                        className="input-glass resize-none"
                        aria-required="true"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      id="contact-submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary justify-center w-full font-display disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <BsArrowRight size={16} />
                        </>
                      )}
                    </motion.button>

                    {status === "error" && (
                      <p className="text-rose-400 text-xs font-mono text-center mt-2">
                        Oops! Something went wrong. Please try again or email directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;
