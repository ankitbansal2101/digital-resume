import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ankitbbb162@gmail.com',
    href: 'mailto:ankitbbb162@gmail.com',
    color: 'text-brand-700 bg-brand-50 border-brand-200',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8875519489',
    href: 'tel:+918875519489',
    color: 'text-brand-800 bg-brand-100 border-brand-200',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/918875519489',
    color: 'text-brand-700 bg-cream-200 border-brand-200',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://in.linkedin.com/in/ankitbansal2101',
    color: 'text-brand-800 bg-brand-50 border-brand-200',
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Contact"
        title="Get In"
        highlight="Touch"
        subtitle="Interested in collaborating or discussing product opportunities? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          className="lg:col-span-3 section-card p-6 sm:p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3 className="text-lg font-semibold text-brand-950 mb-5">Contact Information</h3>
          <div className="space-y-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group flex items-center gap-4 rounded-xl border border-brand-100/80 bg-cream-100/50 p-4 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50/40 hover:shadow-sm"
                >
                  <div className={`rounded-xl border p-2.5 ${method.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-stone-500">{method.label}</h4>
                    <p className="text-brand-950 font-medium truncate">{method.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-brand-300 transition-all duration-200 group-hover:text-brand-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 section-card p-6 sm:p-8 bg-gradient-to-br from-brand-100 via-cream-100 to-brand-50 border-brand-200/60 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-cream-50/80 px-3 py-1 text-xs font-medium text-brand-800 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Available for opportunities
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-brand-950">Let's build something impactful.</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Whether you're hiring for a PM role, exploring a partnership, or want to
              discuss AI product strategy, reach out and I'll respond promptly.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand-200/60 bg-cream-50/80 p-4">
            <div className="rounded-lg border border-brand-200/60 bg-brand-50 p-2">
              <MapPin size={18} className="text-brand-700" />
            </div>
            <div>
              <p className="text-xs text-stone-500">Based in</p>
              <p className="font-medium text-brand-900">Mumbai, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
