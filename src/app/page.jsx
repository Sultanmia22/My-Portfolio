"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Send,
  Download,
  ExternalLink,
  Menu,
  X,
  Code2,
  Sparkles,
  GraduationCap,
  Calendar,
  Award,
  ArrowLeft,
  Phone,
  MessageCircle,
  Zap,
  Rocket,
  Target,
  TrendingUp,
  Box,
  Database,
  Globe,
  Layers,
  Twitter,
  Facebook,
} from "lucide-react"

const heroImage = '/My-Professional-iamge (1).png'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formStatus, setFormStatus] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const [showHeroImage, setShowHeroImage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHeroImage((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("sending")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setFormStatus(""), 3000)
    }, 1000)
  }

  const skills = {
    frontend: [
      { name: "HTML5", icon: Globe, level: 90 },
      { name: "CSS3", icon: Layers, level: 88 },
      { name: "Tailwind CSS", icon: Sparkles, level: 92 },
      { name: "JavaScript", icon: Zap, level: 85 },
      { name: "React", icon: Box, level: 87 },
    ],
    backend: [
      { name: "Node.js", icon: Code2, level: 83 },
      { name: "Express.js", icon: Rocket, level: 85 },
    ],
    database: [{ name: "MongoDB", icon: Database, level: 80 }],
    tools: [
      { name: "Git", icon: Code2, level: 88 },
      { name: "GitHub", icon: Github, level: 90 },
      { name: "VS Code", icon: Code2, level: 95 },
      { name: "Postman", icon: Target, level: 82 },
    ],
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping platform with cart, checkout, and payment integration",
      fullDescription:
        "A comprehensive e-commerce solution built with the MERN stack featuring user authentication, product browsing, shopping cart functionality, secure checkout process, and payment integration. The platform includes an admin dashboard for managing products, orders, and users.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      mainTech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      image: "/modern-ecommerce-interface.png",
      liveUrl: "#",
      githubUrl: "#",
      challenges: [
        "Implementing secure payment gateway integration while handling different payment methods",
        "Managing complex state for cart items across multiple components and user sessions",
        "Optimizing database queries for fast product search and filtering with large datasets",
      ],
      futurePlans: [
        "Add product recommendation system using machine learning algorithms",
        "Implement real-time inventory management and low-stock alerts",
        "Add multi-language support for international customers",
        "Integrate social media login options (Google, Facebook)",
      ],
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features",
      fullDescription:
        "A full-featured task management application that allows teams to collaborate efficiently with real-time updates, drag-and-drop task organization, team member assignments, deadline tracking, and progress monitoring. Built with real-time communication using Socket.io.",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
      mainTech: "React, Express.js, MongoDB, Socket.io, Tailwind CSS",
      image: "/task-management-dashboard.png",
      liveUrl: "#",
      githubUrl: "#",
      challenges: [
        "Implementing real-time synchronization across multiple users without conflicts",
        "Creating an intuitive drag-and-drop interface that works smoothly on all devices",
        "Handling notification system for task assignments and deadline reminders efficiently",
      ],
      futurePlans: [
        "Add Gantt chart view for better project timeline visualization",
        "Implement file attachment support for tasks with cloud storage integration",
        "Add calendar integration (Google Calendar, Outlook)",
        "Create mobile app version using React Native",
      ],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location search and 7-day forecast",
      fullDescription:
        "An interactive weather dashboard that provides real-time weather information, 7-day forecasts, hourly predictions, and weather maps. Features include location-based auto-detection, city search, weather alerts, and beautiful data visualizations with charts and animations.",
      tech: ["React", "API Integration", "Tailwind"],
      mainTech: "React, OpenWeather API, Chart.js, Tailwind CSS",
      image: "/weather-app-interface.png",
      liveUrl: "#",
      githubUrl: "#",
      challenges: [
        "Handling API rate limits while providing real-time updates for multiple locations",
        "Creating responsive and accessible weather data visualizations with charts",
        "Implementing accurate geolocation with fallback options for denied permissions",
      ],
      futurePlans: [
        "Add severe weather alerts with push notifications",
        "Implement weather map layer with radar and satellite imagery",
        "Add air quality index and pollen count information",
        "Create weather history and trends analysis feature",
      ],
    },
  ]

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries",
      icon: Globe,
      features: ["React Applications", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
    },
    {
      title: "MERN Stack Applications",
      description: "Full-stack web applications using MongoDB, Express, React, and Node.js ecosystem",
      icon: Layers,
      features: ["RESTful APIs", "Database Design", "User Authentication", "Real-time Features"],
    },
    {
      title: "Responsive UI Design",
      description: "Creating mobile-first, pixel-perfect designs that work seamlessly on all devices",
      icon: Sparkles,
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Modern Animations", "Accessibility"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      period: "2021 - 2025",
      status: "Final Year",
      description:
        "Focused on web development, data structures, algorithms, and software engineering principles. Completed multiple projects in MERN stack development and participated in coding competitions.",
      achievements: ["CGPA: 8.5/10", "Top 10% in class", "Led 3 major projects"],
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "ABC Senior Secondary School",
      period: "2019 - 2021",
      status: "Completed",
      description: "Specialized in Science stream with Computer Science as main subject.",
      achievements: ["Percentage: 92%", "School Topper in CS"],
      icon: Award,
    },
  ]

  const handleResumeDownload = () => {
    const resumeReady = false

    if (resumeReady) {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "Alex_Johnson_Resume.pdf"
      link.click()
    } else {
      alert("Resume will be available soon! Button is functional and ready.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="relative">
                <Code2 className="w-7 h-7 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-xl animate-glow"></div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-1 to-chart-5">
                Sultan Mia
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {["home", "about", "skills", "projects", "services", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-4 py-2 rounded-lg transition-all ${
                    activeSection === section
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-lg hover:bg-accent transition-all hover:scale-110"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg hover:bg-accent transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              {["home", "about", "skills", "projects", "services", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                    activeSection === section ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {selectedProject ? (
        // Project Details Page
        <div className="min-h-screen pt-24 pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back button */}
            <Button variant="outline" onClick={() => setSelectedProject(null)} className="mb-8 group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>

            {/* Project header */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">{selectedProject.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">MAIN TECHNOLOGY STACK</h3>
                <p className="text-lg font-medium text-primary">{selectedProject.mainTech}</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    View Live Project
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View GitHub Repository
                  </a>
                </Button>
              </div>
            </div>

            {/* Project image */}
            <Card className="overflow-hidden mb-12">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
            </Card>

            {/* Technologies used */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-base font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Challenges faced */}
            <Card className="p-8 mb-8 border-l-4 border-l-chart-1">
              <h2 className="text-2xl font-bold mb-6">Challenges Faced</h2>
              <ul className="space-y-4">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-1/20 text-chart-1 flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Future improvements */}
            <Card className="p-8 border-l-4 border-l-primary">
              <h2 className="text-2xl font-bold mb-6">Future Improvements & Plans</h2>
              <ul className="space-y-4">
                {selectedProject.futurePlans.map((plan, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{plan}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-background opacity-10"></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-chart-1/10 rounded-full blur-[100px] animate-float animation-delay-300"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              {/* Left Side - Text Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                    👋 Welcome to my portfolio
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-1 to-chart-5 animate-gradient">
                      Sultan Mia
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">MERN Stack Developer</p>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
                    Building scalable full-stack web applications with modern technologies. Passionate about creating
                    elegant solutions to complex problems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Get In Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                    onClick={handleResumeDownload}
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start pt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Professional Photo Card with Glass Effect */}
                  <div className="glass-card p-8 space-y-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
                    {/* Image Container with Gradient Border */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-1 to-chart-5 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

                      <div className="relative rounded-2xl overflow-hidden bg-muted border-2 border-border aspect-square">
                        <img
                          src={heroImage}
                          alt="Alex Johnson - MERN Stack Developer"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-background/80 border border-primary/30 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <p className="text-sm font-bold text-foreground">Available for Work</p>
                              <p className="text-xs text-muted-foreground">Open to opportunities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Code Snippet Decoration */}
                    <div className="relative p-4 bg-muted/50 rounded-xl border border-border/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs text-muted-foreground">developer.js</span>
                      </div>

                      <code className="text-xs font-mono block">
                        <span className="text-chart-3">const</span>
                        <span className="text-foreground"> developer = {"{"}</span>
                        <br />
                        <span className="text-muted-foreground ml-4">name: </span>
                        <span className="text-chart-5">"Sultan Mia"</span>,
                        <br />
                        <span className="text-muted-foreground ml-4">role: </span>
                        <span className="text-chart-5">"MERN Stack Developer"</span>,
                        <br />
                        <span className="text-muted-foreground ml-4">status: </span>
                        <span className="text-green-500">"available"</span>
                        <br />
                        <span className="text-foreground">{"}"}</span>
                      </code>
                    </div>
                  </div>

                  {/* Background Glow Effects */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl rounded-full"></div>
                  <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-chart-1/30 blur-2xl rounded-full animate-float"></div>
                  <div className="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-chart-5/30 blur-2xl rounded-full animate-float animation-delay-300"></div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 right-20 w-72 h-72 bg-chart-1/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Crafting Digital <span className="text-primary">Experiences</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">My Programming Journey</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      My journey into web development began during my university days when I discovered the power of
                      creating interactive websites. What started as a curiosity quickly became a passion. I spent
                      countless hours learning HTML, CSS, and JavaScript, and was amazed by how code could bring ideas
                      to life on the screen.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    As I progressed, I dove deep into the MERN stack (MongoDB, Express.js, React, and Node.js),
                    fascinated by the ability to build complete, full-stack applications. Each project taught me
                    something new, and every challenge made me a better developer. Today, I continue to learn and grow,
                    staying updated with the latest technologies and best practices in web development.
                  </p>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">What I Enjoy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I love building web applications that solve real-world problems. There's something incredibly
                      satisfying about taking an idea from concept to deployment, especially when users benefit from
                      what I create. I particularly enjoy working on projects that challenge me to think creatively and
                      push the boundaries of what's possible with web technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">Beyond Coding</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not coding, I enjoy playing cricket and watching football matches with friends. I'm also
                      passionate about photography and love capturing beautiful moments during my travels. Reading tech
                      blogs, exploring new gadgets, and contributing to open-source projects are some of my favorite
                      pastimes. I believe in maintaining a healthy work-life balance and find that these hobbies help me
                      stay creative and energized.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <Rocket className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-bold text-2xl">3+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-chart-1/5 border border-chart-1/10">
                      <Code2 className="w-6 h-6 text-chart-1" />
                      <div>
                        <div className="font-bold text-2xl">10+</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-chart-5/5 border border-chart-5/10">
                      <TrendingUp className="w-6 h-6 text-chart-5" />
                      <div>
                        <div className="font-bold text-2xl">100%</div>
                        <div className="text-sm text-muted-foreground">Dedicated</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Card className="p-8 glass-card">
                    <h4 className="text-xl font-bold mb-6">What I Do Best</h4>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Full-Stack Development</h5>
                          <p className="text-sm text-muted-foreground">
                            Building complete web applications from database to user interface
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-chart-1/10">
                          <Layers className="w-5 h-5 text-chart-1" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">API Development</h5>
                          <p className="text-sm text-muted-foreground">
                            Creating robust RESTful APIs with proper authentication and security
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-chart-3/10">
                          <Sparkles className="w-5 h-5 text-chart-3" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Modern UI Design</h5>
                          <p className="text-sm text-muted-foreground">
                            Crafting responsive, accessible interfaces with smooth animations
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-chart-5/10">
                          <Database className="w-5 h-5 text-chart-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Database Design</h5>
                          <p className="text-sm text-muted-foreground">
                            Structuring efficient, scalable database schemas and relationships
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-50"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Tech Stack</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Skills & <span className="text-primary">Technologies</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <Card className="p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold">Frontend</h4>
                  </div>
                  <div className="space-y-5">
                    {skills.frontend.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                <Card className="p-8 hover:border-chart-1/50 transition-all hover:shadow-lg hover:shadow-chart-1/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-chart-1/10 group-hover:bg-chart-1/20 transition-colors">
                      <Layers className="w-6 h-6 text-chart-1" />
                    </div>
                    <h4 className="text-2xl font-bold">Backend</h4>
                  </div>
                  <div className="space-y-5">
                    {skills.backend.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-chart-1" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-chart-1 to-chart-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                <Card className="p-8 hover:border-chart-3/50 transition-all hover:shadow-lg hover:shadow-chart-3/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                      <Database className="w-6 h-6 text-chart-3" />
                    </div>
                    <h4 className="text-2xl font-bold">Database</h4>
                  </div>
                  <div className="space-y-5">
                    {skills.database.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-chart-3" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-chart-3 to-chart-4 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                <Card className="p-8 hover:border-chart-5/50 transition-all hover:shadow-lg hover:shadow-chart-5/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-chart-5/10 group-hover:bg-chart-5/20 transition-colors">
                      <Box className="w-6 h-6 text-chart-5" />
                    </div>
                    <h4 className="text-2xl font-bold">Tools</h4>
                  </div>
                  <div className="space-y-5">
                    {skills.tools.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-chart-5" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-chart-5 to-primary rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Featured <span className="text-primary">Projects</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Here are some of my recent works that showcase my skills and experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50"
                  >
                    <div className="relative overflow-hidden aspect-video bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-primary/5 border border-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group/btn bg-transparent"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                          <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="sm" variant="ghost" className="group/btn" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" className="group/btn" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-30"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Services</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  What I <span className="text-primary">Offer</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card
                      key={index}
                      className="p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group"
                    >
                      <div className="space-y-6">
                        <div className="p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>

                        <div>
                          <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Education</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Academic <span className="text-primary">Journey</span>
                </h3>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

                <div className="space-y-12">
                  {education.map((edu, index) => {
                    const Icon = edu.icon
                    return (
                      <div key={index} className="relative">
                        <div className="absolute left-0 top-6 w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center hidden md:flex">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>

                        <Card className="md:ml-24 p-8 hover:border-primary/30 transition-all hover:shadow-lg group">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                                <Calendar className="w-3 h-3" />
                                {edu.period}
                              </span>
                              <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {edu.degree}
                              </h4>
                              <p className="text-lg text-muted-foreground">{edu.institution}</p>
                            </div>
                            <span className="px-4 py-2 bg-chart-1/10 border border-chart-1/20 text-chart-1 text-sm font-medium rounded-full">
                              {edu.status}
                            </span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>

                          <div className="space-y-3">
                            <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                              <Award className="w-4 h-4 text-primary" />
                              Key Achievements
                            </h5>
                            <div className="flex flex-wrap gap-3">
                              {edu.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="px-4 py-2 bg-accent border border-border rounded-lg text-sm font-medium hover:border-primary/30 transition-colors"
                                >
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-30"></div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Get In Touch</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's <span className="text-primary">Connect</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or just want to chat? Feel free to reach out!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <a
                          href="mailto:alex@example.com"
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          alex@example.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-chart-1/10">
                        <Phone className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <a href="tel:+1234567890" className="font-semibold hover:text-primary transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-chart-3/10">
                        <MessageCircle className="w-6 h-6 text-chart-3" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">WhatsApp</div>
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </Card>

                  <div className="flex gap-3 pt-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>

                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full min-h-[150px] px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={formStatus === "sending"}>
                      {formStatus === "sending" ? (
                        "Sending..."
                      ) : formStatus === "success" ? (
                        "Message Sent!"
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border py-8 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Alex Johnson. Built with React & Tailwind CSS
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
