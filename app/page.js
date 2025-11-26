'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);

  const changePage = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const projects = [
    {
      title: "My Kao Shop",
      description: "Headless • 6 brands • Shared cart functionality • Multi-language",
      link: "https://mykaoshop.com/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Philosophy",
      description: "Custom theme • Pixel-perfect design • 3rd party APIs",
      link: "https://philosophy.com/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Red Bull Shop US",
      description: "Vue framework • Custom Shopify Functions • Custom Rebuy API integration",
      link: "https://www.redbullshopus.com/",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "OOFOS",
      description: "Vue framework • Custom theme • Shopify Functions",
      link: "https://www.oofos.com/",
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Exploding Kittens",
      description: "Complex Shopify Functions • Blended shipping rates",
      link: "https://www.explodingkittens.com/",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Natural Life",
      description: "Vue framework • Algolia-powered PLP/PDP",
      link: "https://www.naturallife.com/",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "BizChair",
      description: "Multi-brand • 9 cloned stores",
      link: "https://www.bizchair.com/",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Cabot Creamery",
      description: "Custom Shopify theme",
      link: "https://cabotcreamery.com/",
      gradient: "from-amber-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Owen Dupree
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-8">
              <button 
                onClick={() => changePage('home')} 
                className={`hidden md:block font-medium transition-colors ${activePage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => changePage('work')} 
                className={`hidden md:block font-medium transition-colors ${activePage === 'work' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Work
              </button>
              <button 
                onClick={() => changePage('resume')} 
                className={`hidden md:block font-medium transition-colors ${activePage === 'resume' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Resume
              </button>
              <button 
                onClick={() => changePage('contact')} 
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium"
              >
                Contact
              </button>

              {/* Mobile Menu Button with Animation */}
              <button 
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
                onClick={toggleMobileMenu}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top right' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <button 
            onClick={() => changePage('home')} 
            className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => changePage('work')} 
            className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => changePage('resume')} 
            className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            Resume
          </button>
          <button 
            onClick={() => changePage('contact')} 
            className="text-3xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-20">
        {activePage === 'home' && (
          <div className="animate-fadeIn min-h-screen flex items-center px-6 py-20">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Circular Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl shadow-blue-500/20">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4E03AQHJ5AhP0xeF6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685462742417?e=1740614400&v=beta&t=vqwfqVpQQhZfqXLqQsFZjSMNqsqHVz-KV0bqNxnfpxg"
                      alt="Owen Dupree"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Intro Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-semibold mb-6">
                    📍 Sanford, Florida
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Shopify Developer with <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4+ Years</span> Building Custom Solutions
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Specializing in custom themes, Shopify Functions, checkout extensions, and headless commerce. 
                    I build scalable e-commerce solutions for major brands and mentor developers along the way.
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <button 
                      onClick={() => changePage('work')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-semibold"
                    >
                      View My Work
                    </button>
                    <button 
                      onClick={() => changePage('contact')}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold"
                    >
                      Let's Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'work' && (
          <div className="animate-fadeIn py-20 px-6 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">My Work</h2>
                <p className="text-xl text-gray-600">Custom Shopify solutions for leading brands</p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {projects.map((project, i) => (
                  <div 
                    key={i}
                    className="relative group aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Placeholder Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <div className="text-white/20 text-8xl font-bold">
                        {project.title[0]}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
                      hoveredProject === i ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <h3 className="text-3xl font-bold text-white text-center mb-4">{project.title}</h3>
                      <p className="text-white/80 text-center text-lg mb-6 max-w-2xl">{project.description}</p>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                      >
                        Visit Site <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'resume' && (
          <div className="animate-fadeIn py-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Owen Dupree</h1>
                <p className="text-xl text-gray-600 mb-4">Shopify Developer</p>
                <p className="text-gray-600">Sanford, Florida</p>
                <div className="flex gap-4 justify-center mt-4">
                  <a href="mailto:owen@example.com" className="text-blue-600 hover:underline">owen@example.com</a>
                  <span className="text-gray-400">•</span>
                  <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
                  <span className="text-gray-400">•</span>
                  <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>
                </div>
              </div>

              {/* Summary */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shopify Developer with 4+ years of specialized experience building custom e-commerce solutions for Fortune 500 brands. 
                  Expert in Shopify Functions, checkout extensions, headless commerce, and complex third-party integrations. Proven track record 
                  of developing innovative solutions including the first-ever shared cart functionality across multiple Shopify brands. Strong 
                  communicator with experience mentoring developers and leading technical training programs.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Professional Experience</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Custom Software Engineering Analyst</h3>
                      <p className="text-gray-700 font-semibold">Accenture</p>
                    </div>
                    <span className="text-gray-600">Jun 2025 - Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Advanced to analyst role focusing on custom software engineering solutions</li>
                    <li>Lead technical strategy for enterprise Shopify implementations</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                      <p className="text-gray-700 font-semibold">Accenture (formerly The Stable)</p>
                    </div>
                    <span className="text-gray-600">May 2022 - Jun 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Developed first-ever shared cart functionality across 6 Shopify brands for My Kao Shop</li>
                    <li>Built 6-7 complex Shopify Functions for custom business logic and employee discount systems</li>
                    <li>Created pixel-perfect custom themes and checkout extensions for major brands (Philosophy, Red Bull, OOFOS)</li>
                    <li>Implemented headless commerce solutions using Hydrogen, Contentful, and GraphQL</li>
                    <li>Led mentorship program with bi-weekly 1-on-1s, code reviews, and training for junior developers</li>
                    <li>Integrated complex third-party systems (Algolia, Rebuy, Klaviyo, Yotpo) using custom API solutions</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Teaching Assistant</h3>
                      <p className="text-gray-700 font-semibold">Trilogy Education / 2U Bootcamp at UCF</p>
                    </div>
                    <span className="text-gray-600">Dec 2021 - Jun 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Taught MERN stack through hands-on instruction and code reviews</li>
                    <li>Provided individualized support to students learning web development</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
                      <p className="text-gray-700 font-semibold">Capco</p>
                    </div>
                    <span className="text-gray-600">Jan 2022 - May 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Developed backend services using Java, Spring Boot, and Maven for financial applications</li>
                    <li>Worked with MySQL databases and REST APIs</li>
                  </ul>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Technical Skills</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-900">Shopify:</span>
                    <span className="text-gray-700"> Shopify Functions, Checkout Extensions, Custom Themes, Liquid, Hydrogen, Headless Commerce</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Languages & Frameworks:</span>
                    <span className="text-gray-700"> JavaScript, Vue.js, React, Remix, TypeScript, HTML5, CSS3, SCSS, Tailwind, Java, Spring Boot, Angular</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">APIs & Databases:</span>
                    <span className="text-gray-700"> GraphQL, REST APIs, MySQL, NoSQL, MongoDB</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Tools & Platforms:</span>
                    <span className="text-gray-700"> Git, GitHub, Contentful, Figma, Node.js, Algolia, Rebuy, Klaviyo, Yotpo</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Professional:</span>
                    <span className="text-gray-700"> Technical Documentation, Developer Mentorship, Code Reviews, Client Communication, Feature Solutioning</span>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Certifications</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black rounded-lg overflow-hidden">
                    <img 
                      src="https://i.imgur.com/headless-shopify.jpg"
                      alt="Headless at Shopify for Developers - Verified Skill"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="p-6 bg-gray-50 hidden">
                      <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-3">
                        VERIFIED SKILL
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Headless at Shopify for Developers</h3>
                      <p className="text-gray-700 mt-1">Shopify Academy</p>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg overflow-hidden">
                    <img 
                      src="https://i.imgur.com/shopify-fundamentals.jpg"
                      alt="Shopify Development Fundamentals - Verified Skill"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="p-6 bg-gray-50 hidden">
                      <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-3">
                        VERIFIED SKILL
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Shopify Development Fundamentals</h3>
                      <p className="text-gray-700 mt-1">Shopify Academy</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
                <div>
                  <h3 className="font-bold text-gray-900">Full Stack Web Development Certificate</h3>
                  <p className="text-gray-700">University of Central Florida • Apr 2021 - Sep 2021</p>
                </div>
              </section>
            </div>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="animate-fadeIn min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="max-w-4xl mx-auto text-center text-white w-full">
              <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
              <p className="text-2xl text-blue-50 mb-12">
                I'm always looking for new opportunities and collaborations!
              </p>
              <div className="flex gap-6 justify-center mb-8">
                <a 
                  href="mailto:owen@example.com"
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Mail size={40} />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Github size={40} />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Linkedin size={40} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}