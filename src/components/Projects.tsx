'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '../types/project'

const projects: Project[] = [
  {
    title: 'SAS EM Kaggle Competition',
    description: 'Developed a comprehensive data analytics solution using SAS Enterprise Miner for a Kaggle competition, focusing on advanced predictive modeling and machine learning techniques to analyze complex datasets.',
    technologies: ['SAS Enterprise Miner', 'Statistical Analysis', 'Machine Learning', 'Data Preprocessing', 'Predictive Modeling'],
    achievements: [
      'Implemented various modeling techniques including Decision Trees, Neural Networks, and Regression models',
      'Achieved significant accuracy improvements through feature engineering and model optimization',
      'Created automated data preprocessing pipelines for efficient analysis',
      'Collaborated with team members using version control for model iterations'
    ],
    date: '2023',
    githubUrl: 'https://github.com/muskan09092000/SAS-EM-Kaggle'
  },
  {
    title: 'SQL-California Retail Analytics',
    description: 'Conducted comprehensive research on county-level expansion opportunities for clothing stores in California using SQL analytics and SafeGraph data. Analyzed store locations, demographics, and consumer behavior patterns to identify strategic expansion opportunities.',
    technologies: ['Google BigQuery', 'SQL', 'Data Analytics', 'SafeGraph Data', 'Market Research'],
    achievements: [
      'Identified prime expansion locations through analysis of high-income population distribution',
      'Analyzed consumer behavior patterns to optimize store operations and promotional timing',
      'Developed specialized store recommendations based on demographic analysis',
      'Created comprehensive SQL queries for complex data analysis across multiple tables'
    ],
    date: '2024',
    githubUrl: 'https://github.com/muskan09092000/SQL-California-Retail-Analytics'
  },
  {
    title: 'Environmental Effects Dashboard',
    description: 'Developed an interactive Tableau dashboard visualizing environmental impacts and metrics.',
    technologies: ['Tableau', 'Data Visualization', 'Environmental Analytics'],
    achievements: [
      'Created interactive visualizations for environmental data',
      'Implemented dynamic filtering and drill-down capabilities',
      'Designed user-friendly interface for data exploration'
    ],
    date: '2023'
  },
  {
    title: 'Coca-Cola Digital Transformation',
    description: 'Analyzed and contributed to digital transformation strategies for Coca-Cola\'s retail operations.',
    technologies: ['Digital Strategy', 'Business Analytics', 'Transformation Planning'],
    achievements: [
      'Evaluated digital transformation opportunities',
      'Analyzed potential impact on business operations',
      'Developed implementation recommendations'
    ],
    date: '2023'
  },
  {
    title: 'Dunhumby Retail Analytics',
    description: 'Applied retail analytics solutions using Dunhumby tools and methodologies for customer insights.',
    technologies: ['Retail Analytics', 'Customer Insights', 'Data Analysis'],
    achievements: [
      'Analyzed customer behavior patterns',
      'Generated actionable retail insights',
      'Developed customer segmentation strategies'
    ],
    date: '2023'
  },
  {
    title: 'Brewing Connections: A/B Testing',
    description: 'Conducted A/B testing for persuasion strategies in Latea Bubble Tea & Coffee\'s marketing campaigns.',
    technologies: ['A/B Testing', 'Marketing Analytics', 'Statistical Analysis'],
    achievements: [
      'Designed and implemented A/B testing experiments',
      'Analyzed customer response data',
      'Provided recommendations for marketing optimization'
    ],
    date: '2023'
  },
  {
    title: 'Global Product Inventory Dataset',
    description: 'Created and managed a comprehensive global product inventory dataset for retail analysis.',
    technologies: ['Database Management', 'Data Modeling', 'Inventory Analytics'],
    achievements: [
      'Designed database schema for global inventory',
      'Implemented data quality controls',
      'Created reporting systems for inventory insights'
    ],
    date: '2023'
  },
  {
    title: 'Big Data Retail Intelligence',
    description: 'Leveraged big data technologies to enhance retail intelligence and decision-making processes.',
    technologies: ['Big Data', 'Retail Analytics', 'Business Intelligence'],
    achievements: [
      'Implemented big data solutions for retail analysis',
      'Developed predictive models for retail trends',
      'Created automated reporting systems'
    ],
    date: '2023'
  },
  {
    title: 'Pawpularity Project',
    description: 'Developed analytics solution for pet adoption platform optimization.',
    technologies: ['Machine Learning', 'Image Analysis', 'Python'],
    achievements: [
      'Created prediction models for pet adoption likelihood',
      'Analyzed factors affecting adoption rates',
      'Implemented image-based recommendation system'
    ],
    date: '2023'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-400">A selection of my recent work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-600/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  {project.title.toLowerCase().includes('sas') && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                  )}
                  {project.title.toLowerCase().includes('sql') && (
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,194,255,0.05)_25%,transparent_25%,transparent_75%,rgba(0,194,255,0.05)_75%)] bg-[length:20px_20px]" />
                  )}
                  {project.title.toLowerCase().includes('tableau') && (
                    <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(0,194,255,0.05)_90deg,transparent_90deg)] bg-[length:20px_20px]" />
                  )}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-dark-600/80 backdrop-blur-sm rounded-lg border border-primary/20" />
                    <span className="relative text-2xl text-primary/60">
                      {project.technologies[0].charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2">
                  <span className="text-sm font-mono text-primary/40 shadow-glow">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-1 text-sm text-gray-400 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                  <span className="text-xs text-gray-500">{project.date}</span>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 