'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Meijer',
    logo: '/images/companies/meijer.png',
    position: 'Data Scientist',
    location: 'West Lafayette, IN',
    period: 'January 2025 – April 2025',
    achievements: [
      'Built and deployed predictive and uplift models (Linear Regression, XGBoost) on 400K+ customer records to evaluate campaign ROI and loyalty offer performance, identifying key segments and digital drivers (e.g., +$41 per claim day)',
      'Delivered actionable insights through customer segmentation, campaign attribution, and treatment-effect modeling, leading to 18% improvement in targeting efficiency and enabling data-driven personalization and spend optimization'
    ]
  },
  {
    company: 'ZS Associates',
    logo: '/images/companies/zs.png',
    position: 'Business Technology Solutions Associate',
    location: 'India',
    period: 'June 2022 - July 2024',
    achievements: [
      'Spearheaded data analysis and reporting for a leading US pharmaceutical company, leveraging SQL and SAS to design and implement analytical operations, improving data accuracy by 60%',
      'Automated operational processes with Linux scripting, reducing runtime by 25% and enhancing overall system efficiency',
      'Built and delivered 10+ Qlik Sense dashboards and 4 Power BI visualizations utilizing self-directed learning to communicate KPIs and drive strategic stakeholder decisions',
      'Collaborated with cross-functional teams on high-impact business analyses to ensure data-driven decision-making and trained 3 new team members, improving onboarding and team productivity'
    ]
  },
  {
    company: 'KPMG Global Services',
    logo: '/images/companies/kpmg.png',
    position: 'Trainee – Capability Hubs',
    location: 'India',
    period: 'June 2021 - August 2021',
    achievements: [
      'Conducted comprehensive research and comparative analysis on 200+ parameters, identifying performance gaps and recommending industry best practices',
      'Enhanced client engagement by delivering actionable insights and benchmarking reports'
    ]
  },
  {
    company: 'Ernst & Young',
    logo: '/images/companies/ey.png',
    position: 'Summer Analyst - Supply Chain and Operations',
    location: 'India',
    period: 'July 2020 - August 2020',
    achievements: [
      'Built machine learning models using Alteryx to identify profit maximization opportunities, improving operational efficiency and cost savings'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-400">My professional journey</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-[2px] bg-gradient-to-b from-primary-500 via-primary-400/50 to-transparent shadow-neon" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-dark-500 shadow-neon" />
                
                <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center`}>
                  {/* Date */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pl-8' : 'pr-8'}`}>
                    <span className="text-sm text-primary-400">{exp.period}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-dark-600/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-neon transition-all duration-300 border border-primary-500/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain p-2"
                            priority
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          <p className="text-primary-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                      
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="text-primary-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 