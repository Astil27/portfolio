import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Player } from '@lottiefiles/react-lottie-player';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';
import SectionTitle from './components/SectionTitle';
import { ArrowUp, BookOpen, Briefcase, FileCode, FileCode2, Github, Linkedin, Mail, MapPin, Phone, Send, UserRound } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import './index.css';

// Skills data
const skills = [
  { name: 'Python', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML/CSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Pandas', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Django', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'SQL', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Data Visualization', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3/d3-plain.svg' },
];

// Projects data
const projects = [
  {
    title: 'Snake Game',
    description: '🧠 Designed a logic-based game with real-time scoring\n🎨 Built using Pygame library for GUI and game loop\n🐍 Focused on player control, collision detection, and game speed',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2574&auto=format&fit=crop',
    technologies: ['Python', 'Pygame', 'GUI Development'],
    github: 'https://github.com/astilraj',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive personal portfolio website built with React and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/astilraj',
    demo: '#'
  }
];

export function App() {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Form handling
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // In a real app, you would send this data to your backend or email service
    alert('Message sent! I will get back to you soon.');
  };

  return (
    <ThemeProvider>
      <div className="bg-[#F5F5F5] dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-['Poppins',sans-serif] transition-colors duration-300">
        <Navbar />
        <FloatingActions />
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Montserrat',sans-serif] mb-4">
                  Hi, I'm <span className="text-blue-600">Astil Raj T</span> 👋
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl mb-4 h-12">
                  <TypeAnimation
                    sequence={[
                      'Data Analyst',
                      2000,
                      'Python Developer',
                      2000,
                      'AI Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-4">
                  🎓 MSc Computer Science Student (2023–2025)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                  I love turning data into insights and building real-world tech solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg transition"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects" 
                    className="px-6 sm:px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-full font-medium transition"
                  >
                    View Projects
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
              >
                <Player
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"
                  style={{ height: '300px', width: '300px', maxWidth: '100%' }}
                  className="sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="About Me" 
              subtitle="Get to know me better - my background, interests, and what drives me."
            />
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex justify-center px-4 md:px-0 mb-8 md:mb-0"
              >
                <div className="relative group max-w-md w-full">
                  {/* Profile Image with enhanced effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse-slow"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl p-2 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                    <img 
                      src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1470&auto=format&fit=crop" 
                      alt="Astil Raj T" 
                      className="w-full h-64 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Astil Raj T</h3>
                      <p className="text-blue-600 dark:text-blue-400">Python Developer & Data Enthusiast</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Hello, I'm <span className="text-blue-600">Astil Raj T</span></h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                      I'm a final-year MSc Computer Science student at Don Bosco College, passionate about transforming data into meaningful insights and developing innovative tech solutions.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                      My expertise in Python, Django, and data analysis tools like Pandas and NumPy allows me to build data-driven applications and extract valuable insights from complex datasets.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Soft Skills</h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-transform hover:translate-x-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                          <UserRound size={20} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Problem Solving</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Breaking down complex issues into manageable solutions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg transition-transform hover:translate-x-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
                          <BookOpen size={20} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Analytical Thinking</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Evaluating problems from multiple perspectives</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg transition-transform hover:translate-x-2">
                        <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                          <Send size={20} className="text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Communication</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Clearly conveying complex technical concepts</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="My Skills" 
              subtitle="Technologies and tools I work with regularly"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center justify-center transition-all duration-300"
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="My Projects" 
              subtitle="Some of the projects I've worked on"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
                >
                  <div className="h-48 sm:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow whitespace-pre-line">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <Github size={18} /> Code
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <FileCode size={18} /> Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Experience & Education" 
              subtitle="My professional journey and educational background"
            />
            
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(59, 130, 246)' }}
                date="June 2024 - Jan 2025"
                iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                icon={<Briefcase />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">Software Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle mt-1">Samaritan Tech</h4>
                <ul className="list-disc pl-5 mt-3">
                  <li>Developed interactive dashboards using Python</li>
                  <li>Created automated reports and Python scripts for analysis</li>
                  <li>Improved team insights using data-driven solutions</li>
                </ul>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(34, 197, 94)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(34, 197, 94)' }}
                date="2023 - 2025"
                iconStyle={{ background: 'rgb(34, 197, 94)', color: '#fff' }}
                icon={<BookOpen />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">MSc Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle mt-1">Don Bosco College</h4>
                <p>
                  Studying advanced algorithms, data analytics, machine learning, and software development with a focus on Python.
                </p>
              </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(236, 72, 153)' }}
                date="Jan 2025 - Mar 2025"
                iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
                icon={<FileCode2 />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">Python Certification</h3>
                <h4 className="vertical-timeline-element-subtitle mt-1">Besant Technologies</h4>
                <p className="mt-3">
                  Comprehensive Python training covering data structures, OOP concepts, web development, and data analysis tools.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Certifications" 
              subtitle="Professional certifications and courses I've completed"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileCode2 size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Python Programming</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive Python course covering basics to advanced topics including OOP, data structures, and web development.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Besant Technologies</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2022</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FileCode size={32} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Frontend and backend web development with HTML, CSS, JavaScript, and modern frameworks.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Udemy</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Contact Me" 
              subtitle="Have a project in mind? Let's work together!"
            />
            
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm currently available for freelance work or full-time positions. 
                  If you have a project that needs some creative work, please don't hesitate to contact me.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Mail size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <a href="mailto:astilraj274@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        astilraj274@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Phone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                      <a href="tel:+919655432397" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        +91 96554 32397
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                      <span className="text-gray-600 dark:text-gray-400">
                        Bengaluru, India
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message?.toString()}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message?.toString()}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your message"
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message?.toString()}</p>
                    )}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow transition flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <a href="#home" className="text-2xl font-bold mb-4 md:mb-0">
                Astil<span className="text-blue-600">Raj</span>
              </a>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/astilraj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/astil-raj-5bb378354/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:astilraj274@gmail.com" 
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                Made with ❤️ using Srcbook | &copy; {new Date().getFullYear()} Astil Raj T. All rights reserved.
              </p>
              <a 
                href="#home"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Back to top</span>
                <ArrowUp size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
