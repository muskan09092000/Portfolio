'use client'

import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-500">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5" />
        
        {/* Data flow animation */}
        <div className="absolute inset-0 bg-data-flow opacity-10 animate-pulse-slow" />
        
        {/* Lens flare effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lens-flare opacity-20 animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lens-flare opacity-15 animate-float-slower" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-r from-primary-500/20 to-primary-400/10 rounded-full mix-blend-screen filter blur-xl animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-96 h-96 bg-gradient-to-l from-secondary-500/20 to-secondary-400/10 rounded-full mix-blend-screen filter blur-xl animate-float-slower" />
        <div className="absolute bottom-20 left-[20%] w-64 h-64 bg-gradient-to-tr from-primary-400/20 to-secondary-500/10 rounded-full mix-blend-screen filter blur-lg animate-float" />
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left relative"
            >
              {/* Decorative line */}
              <div className="hidden lg:block absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-primary-500 to-transparent rounded-full shadow-neon" />
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative text-white">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Muskan Aggarwal
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary-500/30 -skew-x-6 -z-10" />
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-lg sm:text-xl text-gray-300 mb-8">
                  Business Analyst and MS Business Analytics student passionate about transforming data into impactful insights
                </p>
                <div className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-primary-500/50 to-transparent rounded-full" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a 
                  href="#contact" 
                  className="px-8 py-3 bg-primary-500 text-dark-500 rounded-lg font-medium hover:shadow-neon transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get in Touch</span>
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className="px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-medium hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View Projects</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-2 backdrop-blur-3xl shadow-neon">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/Muskan Aggarwal Linkedin.png"
                    alt="Muskan Aggarwal"
                    fill
                    className="object-cover scale-[1.75]"
                    style={{ 
                      objectPosition: '50% 35%'
                    }}
                    priority
                    sizes="(max-width: 768px) 224px, 224px"
                    quality={100}
                  />
                </div>
                <div className="absolute inset-0 bg-circuit-pattern opacity-20 rounded-full pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors"
              whileHover={{ y: 5 }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDownIcon className="w-5 h-5 animate-bounce" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
} 