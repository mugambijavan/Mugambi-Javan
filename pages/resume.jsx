import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp, FaCode, FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Resume = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/javan-mugambi-2351a81b0/', color: 'hover:text-[#0077b5]' },
    { icon: <FaGithub />, href: 'https://github.com/mugambijavan', color: 'hover:text-[#333]' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/+254727761646', color: 'hover:text-[#25D366]' },
    { icon: <AiOutlineMail />, href: 'mailto:mugambijavan@gmail.com', color: 'hover:text-[#EA4335]' },
    { icon: <FaTwitter />, href: 'https://twitter.com/mugambi_javan', color: 'hover:text-[#1DA1F2]' },
    { icon: <FaTelegram />, href: 'https://t.me/KamiriJavan', color: 'hover:text-[#0088cc]' }
  ];

  const technicalSkills = [
    { name: 'JavaScript/TypeScript' },
    { name: 'React/Next.js'},
    { name: 'Node.js/Express'},
    { name: 'Python'},
    { name: 'Flutter/Dart'},
    { name: 'SQL/NoSQL' },
    { name: 'Ruby on Rails'},
    { name: 'AWS/Cloud Services'},
    { name: 'Git/GitHub' },
    { name: 'Agile/Scrum' }
  ];

  const certifications = [
    { title: 'Software Engineering', institution: 'Moringa School', year: '2023' },
    { title: 'Ethical Hacking', institution: 'Cisco Networking Academy', year: '2022' },
    { title: 'AI Certification', institution: 'Huawei (HCIA)', year: '2023' },
    { title: 'React Development', institution: 'Andela', year: '2022' },
    { title: 'Jira/Agile', institution: 'Atlassian University', year: '2023' }
  ];

  const experience = [
    {
      company: 'Sirikwa Dairies LTD',
      role: 'Software Developer',
      website: 'https://sirikwadairies.co.ke',
      achievements: [
        'Collaboratively designed and developed a feature-rich, responsive corporate website increasing user engagement by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 30%',
        'Integrated analytics dashboard for real-time business insights'
      ]
    },
    {
      company: 'M-FAMA Technologies Holding',
      role: 'Full Stack Developer',
      website: 'https://mfama.co.ke',
      achievements: [
        'Developed microservices architecture handling 10k+ daily requests',
        'Optimized application performance reducing load times by 25%',
        'Mentored 3 junior developers in React best practices'
      ]
    },
    {
      company: 'Lux-Lounge',
      role: 'Frontend Developer',
      website: 'https://luxlounge.co.ke',
      achievements: [
        'Created booking system increasing conversions by 35%',
        'Implemented responsive design achieving 99% mobile compatibility',
        'Integrated payment gateway processing $50k+ monthly'
      ]
    },
    {
      company: 'Kimori Foundation',
      role: 'Software Developer',
      website: 'https://kimorifoundation.com',
      achievements: [
        'Designed and developed sophisticated website using modern frontend technologies',
        'Implemented responsive design ensuring cross-device compatibility',
        'Integrated donation system increasing contributor engagement by 25%'
      ]
    },
    {
      company: 'Kimmj Tours and Travel',
      role: 'Frontend Developer',
      website: 'https://kimmj.vercel.app/',
      achievements: [
        'Developed dynamic booking platform with real-time availability checks',
        'Implemented interactive maps and location-based services',
        'Optimized site speed improving Google PageSpeed score by 40%'
      ]
    },
    {
      company: 'STEM for Life Kenya',
      role: 'Web Developer',
      website: 'https://stem-flk.vercel.app/index.html',
      achievements: [
        'Built responsive educational platform with interactive learning modules',
        'Integrated CMS for easy content updates by non-technical staff',
        'Implemented accessibility features meeting WCAG 2.1 standards'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Mugambi Javan - Professional Resume</title>
        <meta name="description" content="Senior Software Engineer with expertise in full-stack development" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Mugambi Javan Nyaga
          </motion.h1>
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full bg-gray-100 ${link.color} transition-colors`}
              >
                <span className="text-xl">{link.icon}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-xl text-gray-600">Software Engineer | Full Stack Developer | AI Enthusiast</p>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#5651e5] mb-6 flex items-center">
              <FaCode className="mr-2" /> 
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a Full-stack software engineer with 3+ years of experience delivering scalable web solutions. 
              Proven expertise in modern JavaScript ecosystems (React, Next.js, Node.js) and cross-platform 
              mobile development (Flutter, React Native). Agile practitioner focused on building 
              efficient workflows and mentoring development teams.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#5651e5] mb-8 flex items-center">
              <FaTools className="mr-2" /> 
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#5651e5] mb-8 flex items-center">
              <FaBriefcase className="mr-2" /> 
            </h2>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mb-8 last:mb-0 border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border-2 border-black text-black rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#5651e5] mb-8 flex items-center">
              <FaGraduationCap className="mr-2" /> 
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-gray-600">{cert.institution}</p>
                  <p className="text-sm text-gray-500 mt-2">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Goals */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#5651e5] mb-6">Career Goals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3">Short-Term Goals</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lead development of scalable AI-powered applications</li>
                  <li>Mentor junior developers in modern tech stacks</li>
                  <li>Obtain AWS Solutions Architect certification</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3">Long-Term Aspirations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Develop open-source tools for developer community</li>
                  <li>Found tech education initiative in East Africa</li>
                  <li>Publish research on ethical AI implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Resume;