import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const contactMethods = [
  {
    icon: Mail,
    label: 'email',
    value: 'ankitbbb162@gmail.com',
    href: 'mailto:ankitbbb162@gmail.com',
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+91 8875519489',
    href: 'tel:+918875519489',
  },
  {
    icon: MessageCircle,
    label: 'whatsapp',
    value: 'wa.me/918875519489',
    href: 'https://wa.me/918875519489',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: 'in/ankitbansal2101',
    href: 'https://in.linkedin.com/in/ankitbansal2101',
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Contact"
        title="Get In"
        highlight="Touch"
        subtitle="Interested in collaborating or discussing product opportunities? I'd love to hear from you."
      />

      <div className="space-y-4">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className="section-card flex items-center gap-4 p-4 transition-colors hover:border-term-accent group"
              whileHover={{ x: 2 }}
            >
              <Icon size={16} className="text-term-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-term-dim text-xs">{method.label}</p>
                <p className="text-term-text truncate group-hover:text-term-accent transition-colors">
                  {method.value}
                </p>
              </div>
              <span className="text-term-dim text-xs">→</span>
            </motion.a>
          );
        })}

        <div className="section-card p-4 flex items-center gap-3 mt-6">
          <MapPin size={16} className="text-term-accent shrink-0" />
          <div>
            <p className="text-term-dim text-xs">location</p>
            <p className="text-term-text">Mumbai, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
