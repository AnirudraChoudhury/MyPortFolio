import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaChevronDown, FaExternalLinkAlt, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaCog, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaBuilding
} from 'react-icons/fa';

// Fixing the missing module declaration for 'lucide-react'
// Ensure the package is installed using `npm install lucide-react` or `yarn add lucide-react`

// Adding type definitions for projects and blogs
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  impact: string;
  year: string;
  url: string;
}

interface Blog {
  id: number;
  title: string;
  url: string;
  date: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API calls to MongoDB Atlas
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch('https://anirudrachoudhury.vercel.app/api/projects/').then(res => res.json()),
      fetch('https://anirudrachoudhury.vercel.app/api/blogs/').then(res => res.json()),
      fetch('https://anirudrachoudhury.vercel.app/api/skills/').then(res => res.json()),
      fetch('https://anirudrachoudhury.vercel.app/api/experiences/').then(res => res.json()),
    ]).then(([projectsData, blogsData, skillsData, experienceData]) => {
      setProjects(projectsData);
      setBlogs(blogsData);
      setSkills(skillsData);
      setExperience(experienceData);
      setIsLoading(false);
    }).catch(() => setIsLoading(false));
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Anirudra Choudhury | Engineering Automation | Solution Architect</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-blue-400">Anirudra Choudhury</div>
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'projects', 'blog', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : 'text-slate-300'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Engineering
                <br />
                <span className="text-white">Automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Solution Architect specializing in PLM/PDM systems, automation, and digital transformation.
                <br />
                <span className="text-blue-400">Turning manual workflows into self-running systems.</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <FaCog className="w-5 h-5 text-blue-400" />
                <span>Autodesk Vault Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <FaCode className="w-5 h-5 text-green-400" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <FaDatabase className="w-5 h-5 text-purple-400" />
                <span>PLM/PDM Specialist</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 group"
              >
                View Projects
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FaChevronDown className="w-6 h-6 text-slate-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Engineering Background</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Started as a mechanical engineer with a passion for automation. From designing utensil polishing machines
                  to building complex PLM systems, I've always looked for ways to make processes more efficient.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My unique journey combines hands-on mechanical design experience with modern software development,
                  giving me a deep understanding of both engineering workflows and the technology needed to optimize them.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Technical Evolution</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Evolved from Excel macros and VBA scripts to building full-stack applications with Next.js and MongoDB.
                  Specialized in Autodesk Vault customization, having automated migrations of 3000+ parts and built
                  enterprise-grade monitoring systems.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Currently working as a Solution Architect, helping organizations transform their engineering processes
                  through intelligent automation and modern PLM/PDM implementations.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.category}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/30 p-8 rounded-lg border border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <FaBuilding className="w-4 h-4 text-slate-400" />
                          <span className="text-lg text-slate-300">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-400">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <FaCalendarAlt className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
                <p className="mt-4 text-slate-400">Loading projects from MongoDB...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-600 text-xs px-2 py-1 rounded">{project.category}</span>
                        <span className="text-slate-400 text-sm">{project.year}</span>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} project`}
                      >
                        <FaExternalLinkAlt className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                      </a>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech: string, idx: number) => (
                        <span key={idx} className="bg-slate-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-green-400 text-sm font-semibold">
                      Impact: {project.impact}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Latest Articles</h2>
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
                <p className="mt-4 text-slate-400">Loading articles from MongoDB...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {blogs.map((blog) => (
                  <div key={blog.id} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-purple-400 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-slate-300 mb-3">{blog.description}</p>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <FaCalendarAlt className="w-4 h-4" />
                          {new Date(blog.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <a
                          href={blog.url}
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Read Article
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Ready to transform your engineering processes? Whether you need PLM/PDM consultation,
              custom automation solutions, or full-stack development, I'm here to help.
            </p>

            <div className="flex justify-center gap-8 mb-12">
              <a href="mailto:anirudra.choudhury@yahoo.in" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <FaEnvelope className="w-5 h-5" />
                <span>Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/anirudra-choudhury/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AnirudraChoudhury" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4">What I Can Help With</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">PLM/PDM Solutions</h4>
                  <p className="text-slate-300 text-sm">Autodesk Vault customization, migration strategies, and system optimization</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Process Automation</h4>
                  <p className="text-slate-300 text-sm">Custom scripts, workflow automation, and digital transformation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Full-Stack Development</h4>
                  <p className="text-slate-300 text-sm">Web applications, dashboards, and integration solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-8 border-t border-slate-700">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2015-{new Date().getFullYear()} Anirudra Choudhury. All rights reserved.<br />
              Built with Next.js. APIs hosted on Vercel. Database hosted on MongoDB Atlas.<br />
              This site and its content are the property of Anirudra Choudhury.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;