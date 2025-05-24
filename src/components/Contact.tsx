'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muskan-aggarwal-18149516b/',
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/muskan09092000',
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Kaggle',
    href: 'https://www.kaggle.com/muskan0909',
    icon: () => (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
      </svg>
    ),
  }
]

const contactInfo = {
  location: 'West Lafayette, Indiana',
  emails: ['aggar158@purdue.edu', 'aggarwalmuskan09@gmail.com']
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-600/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-10 hover:shadow-neon transition-all duration-300 border border-primary-500/20"
          >
            {/* Location */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 text-primary-400">
                <MapPinIcon className="w-5 h-5" />
                <p className="text-lg">{contactInfo.location}</p>
              </div>
            </div>

            {/* Emails */}
            <div className="space-y-3 mb-8">
              {contactInfo.emails.map((email, index) => (
                <motion.a
                  key={index}
                  href={`mailto:${email}`}
                  className="flex items-center justify-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <EnvelopeIcon className="w-6 h-6" />
                  <span className="font-mono">{email}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 