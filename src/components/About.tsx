'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Data Analysis', level: 90 },
  { name: 'Power BI', level: 85 }
];

const additionalSkills = {
  'Programming & Query Languages': [
    'SAS',
    'HiveQL',
    'Linux Bash'
  ],
  'Data Processing & Tools': [
    'Hadoop',
    'Alteryx',
    'Spark',
    'Data Wrangling',
    'Feature Engineering',
    'Simulation & Optimization'
  ],
  'Analytics & Modeling': [
    'Predictive Modeling',
    'Uplift Modeling',
    'A/B Testing',
    'Segmentation',
    'Linear Regression',
    'XGBoost',
    'Time Series Forecasting'
  ],
  'Visualization & BI': [
    'Qlik Sense',
    'Tableau',
    'Excel (Advanced Modeling)',
    'Streamlit'
  ],
  'Cloud & Big Data': [
    'Microsoft Azure (AI-900, AZ-900 Certified)',
    'Google BigQuery',
    'Databricks'
  ],
  'Machine Learning Tools': [
    'Scikit-learn',
    'Keras',
    'CNNs',
    'Hyperparameter Tuning',
    'Model Evaluation (MAPE, Accuracy, Confusion Matrix)'
  ],
  'Development Tools': [
    'Git',
    'Jupyter Notebook',
    'VS Code',
    '@Risk (Monte Carlo Simulation)',
    'Agile & Jira'
  ]
};

const education = [
  {
    degree: 'Master of Science in Business Analytics and Information Management',
    school: 'Purdue University, Daniels School of Business',
    year: '2025',
    location: 'West Lafayette, IN',
    courses: [
      'Data Mining',
      'Machine Learning',
      'Big Data and MLOps',
      'Spreadsheet Modeling & Simulation',
      'Cloud Computing',
      'Visual analytics',
      'AI for business Decisions',
      'Economic Analysis of Technology Markets',
      'IT Project Management',
      'Consumer Behavior & Marketing',
      'Computing for analytics',
      'Industry Practicum'
    ]
  },
  {
    degree: 'Bachelor of Technology in Electronics and Communication',
    school: 'Shiv Nadar University',
    year: '2022',
    location: 'India',
    minor: 'Minor in Communications',
    courses: [
      'Applied Machine Learning',
      'Applied Deep Learning',
      'Big Data Modeling, Integration, and Processing',
      'Digital Signal Processing',
      'Control Systems',
      'Probability and Statistics',
      'Communication Networks',
      'Signals and Systems',
      'Embedded Systems',
      'Internet of Things (IoT)',
      'VLSI Design',
      'Editing, Post Production, Cinema Courses'
    ]
  }
];

export default function About() {
  const [activeCourses, setActiveCourses] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 mb-8">Passionate about transforming data into actionable insights</p>
          
          <motion.a
            href="/files/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-dark-600/80 text-white rounded-lg font-medium border border-primary-500/20 hover:shadow-neon transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2 text-primary-400 group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-dark-600/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-10 hover:shadow-neon transition-all duration-300 border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-primary-500 before:to-primary-500/20 before:shadow-neon">
                  <h4 className="font-semibold text-lg text-white">{edu.degree}</h4>
                  {edu.minor && (
                    <p className="text-primary-400 mt-1 text-sm">{edu.minor}</p>
                  )}
                  <p className="text-primary-400 mt-1">{edu.school}</p>
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>{edu.location}</span>
                    <span>{edu.year}</span>
                  </div>
                  
                  <motion.button
                    onClick={() => setActiveCourses(activeCourses === index ? null : index)}
                    className="mt-3 px-4 py-1.5 text-sm bg-dark-700/50 text-primary-400 rounded-lg 
                              border border-primary-500/20 hover:shadow-neon transition-all duration-300 
                              flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeCourses === index ? (
                      <>Hide Courses <ChevronUpIcon className="w-4 h-4" /></>
                    ) : (
                      <>View Select Courses <ChevronDownIcon className="w-4 h-4" /></>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {activeCourses === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 space-y-1 text-sm text-gray-400 pl-4">
                          {edu.courses.map((course, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-600/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-10 hover:shadow-neon transition-all duration-300 border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-400 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-neon"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-dark-600/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 relative z-10 hover:shadow-neon transition-all duration-300 border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              {Object.entries(additionalSkills).map(([category, skillList]) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-md font-semibold text-white">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-700/50 text-primary-400 rounded-lg text-sm border border-primary-500/20 
                                 hover:shadow-neon transition-all duration-300 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 