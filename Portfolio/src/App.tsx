/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Globe,
  Layers,
  Smartphone,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  Code,
  Database,
  Brain,
  Terminal,
  BarChart3,
  Settings,
  Cpu,
  Activity
} from "lucide-react";

// --- Galaxy Motion Tails Background ---
const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars: { x: number; y: number; z: number; prevZ: number }[] = [];
    const count = 800;
    const speed = 25;

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * w,
        prevZ: 0,
      });
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 1.2;

      stars.forEach((s) => {
        s.prevZ = s.z;
        s.z -= speed;

        if (s.z <= 0) {
          s.z = w;
          s.prevZ = w;
          s.x = Math.random() * w - w / 2;
          s.y = Math.random() * h - h / 2;
        }

        const x1 = (s.x / s.z) * 500 + w / 2;
        const y1 = (s.y / s.z) * 500 + h / 2;
        const x2 = (s.x / s.prevZ) * 500 + w / 2;
        const y2 = (s.y / s.prevZ) * 500 + h / 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- Galaxy Motion Tails Background (Red Version) ---
const GalaxyBackgroundRed = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars: { x: number; y: number; z: number; prevZ: number }[] = [];
    const count = 1000;
    const speed = 15;

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * w,
        prevZ: 0,
      });
    }

    const draw = () => {
      // Dark teal-to-black gradient background
      const bgGrad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
      bgGrad.addColorStop(0, "rgba(0, 245, 255, 0.1)"); // Faint cyan center
      bgGrad.addColorStop(1, "rgba(0, 0, 0, 1)"); // Black edges
      
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"; // Very light white stars
      ctx.lineWidth = 1;

      stars.forEach((s) => {
        s.prevZ = s.z;
        s.z -= speed;

        if (s.z <= 0) {
          s.z = w;
          s.prevZ = w;
          s.x = Math.random() * w - w / 2;
          s.y = Math.random() * h - h / 2;
        }

        const x1 = (s.x / s.z) * 500 + w / 2;
        const y1 = (s.y / s.z) * 500 + h / 2;
        const x2 = (s.x / s.prevZ) * 500 + w / 2;
        const y2 = (s.y / s.prevZ) * 500 + h / 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- Starfield Background for Phase 3 ---
const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const count = 150;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.3})`;
        ctx.fill();

        p.y += p.speed;
        if (p.y > h) {
          p.y = -p.size;
          p.x = Math.random() * w;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] pointer-events-none" />;
};

// --- Square Chips Background ---
const SquareChipsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    interface Chip {
      x: number;
      y: number;
      size: number;
      baseSpeed: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
      drift: number;
      layer: number; // 0: bg, 1: mid, 2: fg
      blur: number;
      accentColor: string;
    }

    const chips: Chip[] = [];
    const chipCount = 100; // Slightly reduced for better performance
    const accentColors = ["#00F5FF", "#7C3AED", "#A1A1AA", "#00F5FF"];

    for (let i = 0; i < chipCount; i++) {
      const layer = Math.floor(Math.random() * 3);
      let size, baseSpeed, blur;

      if (layer === 0) { // Background
        size = 4 + Math.random() * 6;
        baseSpeed = 0.5 + Math.random() * 0.5;
        blur = 0; // Removed expensive blur filter
      } else if (layer === 1) { // Medium
        size = 12 + Math.random() * 10;
        baseSpeed = 1.2 + Math.random() * 1;
        blur = 0;
      } else { // Foreground
        size = 25 + Math.random() * 20;
        baseSpeed = 2.5 + Math.random() * 2;
        blur = 0;
      }

      chips.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size,
        baseSpeed,
        opacity: layer === 0 ? 0.2 : (layer === 1 ? 0.5 : 0.8), // Use opacity for depth
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        drift: (Math.random() - 0.5) * 0.5, // Wind effect
        layer,
        blur,
        accentColor: accentColors[Math.floor(Math.random() * accentColors.length)],
      });
    }

    // Sort chips by layer once during initialization for correct parallax rendering
    chips.sort((a, b) => a.layer - b.layer);

    const draw = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      chips.forEach((c) => {
        // Gravity-like easing: faster as they fall
        const gravityEffect = 1 + (c.y / h) * 0.5;
        c.y += c.baseSpeed * gravityEffect;
        c.x += c.drift;
        c.rotation += c.rotationSpeed;

        // Reset position
        if (c.y > h + c.size) {
          c.y = -c.size;
          c.x = Math.random() * w;
        }
        if (c.x > w + c.size) c.x = -c.size;
        if (c.x < -c.size) c.x = w + c.size;

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        
        ctx.globalAlpha = c.opacity;

        // 1. Subtle Inner Gradient Lighting
        const innerGrad = ctx.createLinearGradient(-c.size/2, -c.size/2, c.size/2, c.size/2);
        innerGrad.addColorStop(0, "#05060A"); // Deep Space Black fill
        innerGrad.addColorStop(1, "#7C3AED"); // Neon Violet
        ctx.fillStyle = innerGrad;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);

        // 2. Multi-color Neon Border
        const borderGrad = ctx.createLinearGradient(-c.size/2, -c.size/2, c.size/2, c.size/2);
        borderGrad.addColorStop(0, "#00F5FF"); // Electric Cyan
        borderGrad.addColorStop(0.33, "#7C3AED"); // Neon Violet
        borderGrad.addColorStop(0.66, "#00F5FF"); // Electric Cyan
        borderGrad.addColorStop(1, "#7C3AED"); // Neon Violet
        
        ctx.strokeStyle = borderGrad;
        ctx.lineWidth = 1.5;
        
        // 3. Soft Neon Glow (Optimized blur value)
        ctx.shadowBlur = c.layer === 0 ? 5 : 10;
        ctx.shadowColor = c.accentColor;
        ctx.strokeRect(-c.size / 2, -c.size / 2, c.size, c.size);
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- Intro Phase One (Particle Text + Galaxy Red Dark) ---
const IntroPhaseOne = ({ onComplete }: { onComplete: () => void; key?: string }) => {
  return (
    <motion.div
      key="intro-phase-one"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[110] bg-[#000000] flex items-center justify-center overflow-hidden"
    >
      <GalaxyBackgroundRed />
      
      <div className="relative text-center z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          animate="visible"
          onAnimationComplete={onComplete}
          className="flex justify-center items-center gap-1 md:gap-4"
        >
          {"DRIVE IN".split("").map((letter, idx) => (
            <motion.span
              key={`letter-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative text-4xl md:text-9xl font-got tracking-tighter uppercase"
              style={{
                // Strong dual shadow: soft aquamarine glow + sharp black drop shadow + subtle white edge highlight
                textShadow: `
                  0 0 15px rgba(0, 245, 255, 0.4), 
                  2px 2px 0px rgba(0, 0, 0, 1),
                  -1px -1px 0px rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <span className="relative z-10 bg-gradient-to-b from-[#ffffff] via-[#00F5FF] to-[#7C3AED] bg-clip-text text-transparent">
                {letter === " " ? "\u00A0" : letter}
              </span>
              
              {/* Floating particles around each letter (Reduced opacity) */}
              {letter !== " " && [...Array(3)].map((_, pIdx) => (
                <motion.div
                  key={`particle-${idx}-${pIdx}`}
                  animate={{ 
                    x: [0, (Math.random() - 0.5) * 40],
                    y: [0, (Math.random() - 0.5) * 40],
                    opacity: [0, 0.4, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random(), 
                    repeat: Infinity, 
                    delay: Math.random() * 2 
                  }}
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#00F5FF]/40 rounded-full"
                />
              ))}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      {/* Advanced Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-[#05060A] pointer-events-none opacity-80" />
    </motion.div>
  );
};

// --- 3D Tilt Card with Neon Gradient Border ---
const TiltCard: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = "" }) => {
  return (
    <div 
      className={`neon-card ${className}`}
    >
      <div className="neon-card-bg"></div>
      <div className="neon-card-inner">
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

const AIInferenceAnimation = () => {
  return (
    <div className="w-full py-12 md:py-16 overflow-hidden relative bg-black/40">
      <div className="container mx-auto px-6 md:px-20 h-48 md:h-64 relative flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5 grid grid-cols-12 grid-rows-6 pointer-events-none">
          {[...Array(72)].map((_, i) => (
            <div key={`grid-${i}`} className="border-[0.5px] border-[#00F5FF]/20" />
          ))}
        </div>

        <div className="flex items-center justify-center w-full max-w-5xl relative z-10">
          {/* Central Model Block */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: 360,
                boxShadow: ["0 0 15px rgba(0,245,255,0.2)", "0 0 30px rgba(167,139,250,0.3)", "0 0 15px rgba(0,245,255,0.2)"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 md:w-40 md:h-40 border border-[#00F5FF]/30 rounded-xl md:rounded-2xl bg-black/40 backdrop-blur-sm relative flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={`cell-${i}`}
                      animate={{ opacity: [0.1, 0.5, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="border-[0.5px] border-[#00F5FF]/20"
                    />
                  ))}
                </div>
              </div>
              
              <Brain className="w-10 h-10 md:w-16 md:h-16 text-[#00F5FF] relative z-10" />
              
              {/* Scanning Line */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent shadow-[0_0_10px_#00F5FF] md:shadow-[0_0_15px_#00F5FF] z-20"
              />
            </motion.div>
            
            {/* Orbiting Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A78BFA] rounded-full shadow-[0_0_8px_#A78BFA] md:shadow-[0_0_10px_#A78BFA]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataScienceAnimation = () => <AIInferenceAnimation />;

const TracingGradient = () => (
  <svg style={{ height: 0, width: 0, position: 'absolute' }}>
    <defs>
      <linearGradient id="tracing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#67E8F9" />
      </linearGradient>
    </defs>
  </svg>
);

const TracingCard: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = "" }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group h-full ${className}`}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="url(#tracing-gradient)"
          strokeWidth="1"
          pathLength="100"
          strokeDasharray="60 40"
          className="tracing-rect"
          rx="16"
          style={{ filter: 'drop-shadow(0 0 5px #A78BFA) drop-shadow(0 0 5px #67E8F9)' }}
        />
      </svg>
      <div className="relative z-10 bg-[#05060A]/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/5 group-hover:border-[#00F5FF]/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,245,255,0.07)] group-hover:shadow-[0_0_40px_rgba(0,245,255,0.25)]">
        {children}
      </div>
    </motion.div>
  );
};

// Typing Animation Hook
const useTypingEffect = (words: string[], typingSpeed = 100, erasingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, erasingSpeed, delay]);

  return text;
};

export default function App() {
  const [introPhase, setIntroPhase] = useState(0); // 0: Liquid, 1: Name, 2: Content
  const typingText = useTypingEffect([
    "Building Data-Driven Solutions"
  ]);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (introPhase === 2 && mainRef.current) {
      // Main Box Animation for sections
      const sections = gsap.utils.toArray(".section-reveal") as HTMLElement[];
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { 
            opacity: 0, 
            y: 100, 
            scale: 0.9,
            rotationX: 15,
            clipPath: "inset(100% 0% 0% 0%)" 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );

        // Underline Expansion
        const underline = section.querySelector(".underline-expand");
        if (underline) {
          gsap.to(underline, {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          });
        }

        // Line Reveal Animation for elements inside the section
        const lines = section.querySelectorAll(".line-reveal");
        if (lines.length > 0) {
          gsap.fromTo(
            lines,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
              }
            }
          );
        }
      });
    }
  }, [introPhase]);

  useEffect(() => {
    if (introPhase === 1) {
      const timer = setTimeout(() => setIntroPhase(2), 4000);
      return () => clearTimeout(timer);
    }
  }, [introPhase]);

  const resumeData = {
    name: "Karthikeyan A",
    role: "Junior Data Scientist",
    tagline: "Data Science Enthusiast | ML & Analytics Specialist",
    email: "karthikeyan86348@gmail.com",
    phone: "7010572468",
    linkedin: "linkedin.com/in/karthi0205",
    github: "github.com/Karthi02A",
    location: "Chennai, India",
    goal: "Data Scientist Role",
    focus: "Machine Learning + Analytics",
    about: [
      "I am an aspiring Junior Data Scientist with strong skills in Python, data analysis, and machine learning. I have hands-on experience in data preprocessing, visualization, and building data-driven applications using real-world datasets.",
      "I enjoy solving complex problems and extracting meaningful insights from data. My goal is to build intelligent systems that can make impactful decisions."
    ],
    skills: {
      technical: ["Python 🐍", "SQL 📊", "Data Analysis 🔍", "Machine Learning 🤖", "NLP (Basic) 💬"],
      libraries: ["Pandas 🐼", "NumPy 🔢", "Scikit-learn ⚙️", "Matplotlib 📉"],
      tools: ["Power BI 📊", "GitHub 🐙", "Google Colab ☁️", "Jupyter Notebook 📓", "PyCharm 💻", "Streamlit 🚀"],
      soft: ["Problem-solving 💡", "Communication 🗣️", "Teamwork 🤝", "Critical Thinking 🧠"],
      languages: ["Tamil", "English"]
    },
    projects: [
      {
        title: "DataForge AI – Data Science Automation Platform",
        desc: "Developed a Python-based system that automates data analysis, preprocessing, and machine learning model generation.",
        features: [
          "Automated data diagnosis (missing values, duplicates, outliers detection)",
          "End-to-end preprocessing pipeline",
          "Machine learning model generation (Decision Tree, Random Forest)",
          "Performance evaluation with visual analytics"
        ],
        impact: [
          "Improved efficiency of data preprocessing and model building by automating repetitive tasks.",
          "Reduced manual data cleaning time by 60% through automated pipelines.",
          "Enabled faster decision-making with real-time visual performance analytics."
        ],
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit"],
        link: "https://ai-data-forge.streamlit.app/",
        github: "https://github.com/Karthi02A"
      },
      {
        title: "SkillMatch AI – Resume & Job Description Matcher",
        desc: "Built an NLP-based system to compare resumes with job descriptions and calculate match scores.",
        features: [
          "Cosine similarity-based matching algorithm",
          "Skill gap identification system",
          "Interactive dashboard for analysis",
          "Data visualization for insights"
        ],
        impact: [
          "Helps job seekers understand missing skills and improve job alignment.",
          "Increased resume match accuracy by 40% using advanced NLP techniques.",
          "Streamlined the job application process by providing instant feedback on skill relevance."
        ],
        tech: ["Python", "NLP", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
        link: "https://skillmatchai.streamlit.app/",
        github: "https://github.com/Karthi02A"
      }
    ],
    experience: [
      {
        company: "Vcodez",
        role: "Data Science Intern",
        period: "May 2025 – July 2025",
        work: [
          "Performed data preprocessing and cleaning on structured datasets",
          "Conducted exploratory data analysis to extract insights",
          "Improved dataset quality for downstream machine learning tasks"
        ]
      },
      {
        company: "SpydX Technologies",
        role: "Data Analytics & Engineering Intern",
        period: "Sep 2025 – Dec 2025",
        work: [
          "Supported data workflows and reporting processes",
          "Collaborated with teams on data handling and documentation",
          "Assisted in organizing and analyzing business data"
        ]
      }
    ],
    education: {
      degree: "B.E Computer Science Engineering",
      college: "Karpaga Vinayaga College of Engineering and Technology",
      year: "2022 – 2026",
      location: "Chengalpattu",
      score: "74%"
    },
    certifications: [
      { name: "IBM Data Analyst Professional Certificate", issuer: "IBM" },
      { name: "Microsoft Power BI Data Analyst Professional Certificate", issuer: "Microsoft" },
      { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy" },
      { name: "AI for Entrepreneurship", issuer: "Intel Technology India" },
      { name: "Data Science & Analytics", issuer: "HP LIFE" },
      { name: "Data Analytics and Visualization Job Simulation", issuer: "Accenture (Forage)" },
      { name: "Data Visualization: Empowering Business with Effective Insights", issuer: "Tata (Forage)" }
    ],
    extra: {
      whatIDo: [
        { name: "Data Cleaning & Preprocessing 🧹", icon: <Settings className="w-6 h-6" /> },
        { name: "Machine Learning Model Building 🤖", icon: <Cpu className="w-6 h-6" /> },
        { name: "Data Visualization 📊", icon: <BarChart3 className="w-6 h-6" /> },
        { name: "Dashboard Creation 🖼️", icon: <Layers className="w-6 h-6" /> }
      ]
    }
  };

  return (
    <>
      <TracingGradient />
      <AnimatePresence mode="wait">
        {introPhase === 0 && <IntroPhaseOne key="intro-phase-0" onComplete={() => setIntroPhase(1)} />}
      
      {introPhase === 1 && (
        <motion.div
          key="name-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* The Dot to Text Animation */}
            <div className="relative flex items-center justify-center">
              {/* Initial Dot that splits into 4 */}
              <div className="absolute flex items-center justify-center">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 1, 0],
                      x: [0, 0, (i % 2 === 0 ? -1 : 1) * 10, (i % 2 === 0 ? -1 : 1) * 20],
                      y: [0, 0, (i < 2 ? -1 : 1) * 10, (i < 2 ? -1 : 1) * 20],
                    }}
                    transition={{ 
                      duration: 1.2, 
                      times: [0, 0.3, 0.6, 1],
                      ease: "easeInOut" 
                    }}
                    className="bg-[#00F5FF] rounded-full absolute w-3 h-3"
                  />
                ))}
              </div>

              {/* The Name Reveal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="flex overflow-hidden">
                  {"KARTHIKEYAN A".split("").map((letter, i) => (
                    <motion.span
                      key={`name-letter-${i}`}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 1 + i * 0.05, 
                        duration: 0.8, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="text-2xl sm:text-4xl md:text-8xl font-black text-[#00F5FF] tracking-tighter uppercase font-outfit inline-block"
                      style={{ textShadow: "0 0 15px rgba(0, 245, 255, 0.6)" }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>

                {/* Blueprint Lines Effect */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.4, scaleX: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-[-10px] left-0 w-full h-[1px] bg-[#00F5FF]/30" />
                  <div className="absolute bottom-[-10px] left-0 w-full h-[1px] bg-[#00F5FF]/30" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00F5FF]/20" />
                  
                  {/* Vertex Dots on corners */}
                  <div className="absolute top-[-10px] left-0 w-1 h-1 bg-[#00F5FF] rounded-full" />
                  <div className="absolute top-[-10px] right-0 w-1 h-1 bg-[#00F5FF] rounded-full" />
                  <div className="absolute bottom-[-10px] left-0 w-1 h-1 bg-[#00F5FF] rounded-full" />
                  <div className="absolute bottom-[-10px] right-0 w-1 h-1 bg-[#00F5FF] rounded-full" />
                </motion.div>
              </motion.div>
            </div>

            {/* Role Reveal */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="text-[#00F5FF]/80 mt-4 text-[10px] sm:text-sm md:text-xl tracking-[0.15em] uppercase font-bold font-outfit text-center px-4"
                style={{ textShadow: "0 0 8px rgba(0, 245, 255, 0.4)" }}
              >
                Data Scientist | AI/ML Engineer
              </motion.p>
          </div>

          {/* Vertex Dots (Blueprint Style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`vertex-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ 
                  delay: 1.8 + i * 0.1, 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute w-1.5 h-1.5 bg-[#00F5FF] rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {introPhase === 2 && (
        <motion.div 
          key="main"
          ref={mainRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen text-[#A1A1AA] selection:bg-[#00F5FF] selection:text-[#05060A] relative"
        >
          <StarfieldBackground />
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 bg-black z-50 py-5 px-6 md:px-10 border-b border-white/5">
            <nav className="container mx-auto flex justify-between items-center">
              <ul className="hidden lg:flex gap-8 fade-up">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#experience" className="nav-link">Experience</a></li>
                <li><a href="#education" className="nav-link">Education</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
              <a href="#contact" className="hidden md:block btn !mt-0 !rounded-full px-6 fade-up">Hire Me</a>
            </nav>
          </header>

          {/* 1. Hero Section */}
          <section id="home" className="pt-32 pb-12 px-6 md:px-20 min-h-[80vh] flex items-center relative">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-2 fade-up">
                  <span className="text-[#00F5FF]">{resumeData.name}</span>
                </h1>
                <div className="fade-up mb-10">
                  <p className="text-xl md:text-3xl text-white/80 font-bold mb-2">
                    {resumeData.tagline}
                  </p>
                  <p className="text-base md:text-xl text-[#00F5FF]/70 font-medium">
                    <span className="typing-cursor">{typingText}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-5 fade-up">
                  <a href="#projects" className="btn px-8 py-4 text-base">Explore Work 💼</a>
                  <a href="/resume.pdf" download="Karthikeyan_A_Resume.pdf" type="application/pdf" className="btn px-8 py-4 text-base bg-transparent border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#22D3EE] hover:text-[#05060A] hover:border-[#22D3EE]">Download Resume 📄</a>
                  <a href="#contact" className="btn px-8 py-4 text-base bg-white/[0.02] border-2 border-white/5 text-white hover:bg-white/10">Let's Connect 📬</a>
                </div>
              </div>
            </div>

            {/* Scroll Indicator removed as requested */}
          </section>

          <DataScienceAnimation />

          {/* 2. About Me Section */}
          <section id="about" className="pt-12 pb-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">About <span className="text-[#00F5FF]">Me</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <div className="space-y-6 text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-10">
                    {resumeData.about.map((p, i) => (
                      <motion.p 
                        key={`about-p-${i}`} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="line-reveal"
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { icon: <MapPin />, label: "Location", value: resumeData.location },
                      { icon: <Award />, label: "Goal", value: resumeData.goal },
                      { icon: <Briefcase />, label: "Focus", value: resumeData.focus }
                    ].map((item, i) => (
                      <motion.div
                        key={`about-card-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      >
                        <TracingCard className="line-reveal">
                          <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/[0.02] rounded-xl text-[#00F5FF] group-hover:scale-110 transition-transform border border-white/5 glow-pulse">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-xs text-[#888] uppercase tracking-widest">{item.label}</p>
                              <p className="font-bold">{item.value}</p>
                            </div>
                          </div>
                        </TracingCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Skills Section */}
          <section id="skills" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Technical <span className="text-[#00F5FF]">Expertise</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Technical Skills */}
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="space-y-4 line-reveal"
                    >
                      <h3 className="text-lg md:text-xl font-bold flex items-center gap-3"><Code className="text-[#00F5FF] w-5 h-5 glow-pulse rounded-full" /> Technical Skills</h3>
                      <TracingCard>
                        <div className="flex flex-wrap gap-3">
                          {resumeData.skills.technical.map((skill, i) => (
                            <motion.span 
                              key={`tech-${i}`} 
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 255, 0.1)" }}
                              className="px-5 py-2 bg-black rounded-xl text-sm border border-white/10 hover:border-[#00F5FF]/50 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </TracingCard>
                    </motion.div>

                  {/* Libraries & Frameworks */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 line-reveal"
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3"><Layers className="text-[#00F5FF] w-5 h-5 glow-pulse rounded-full" /> 🔹 Libraries & Frameworks</h3>
                    <TracingCard>
                      <div className="flex flex-wrap gap-3">
                        {resumeData.skills.libraries.map((s, i) => (
                          <motion.span 
                            key={`lib-${i}`} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 255, 0.1)" }}
                            className="px-5 py-2 bg-black rounded-xl text-sm border border-white/10 hover:border-[#00F5FF]/50 transition-colors"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </TracingCard>
                  </motion.div>

                  {/* Tools & Platforms */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 line-reveal"
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3"><Database className="text-[#00F5FF] w-5 h-5 glow-pulse rounded-full" /> 🔹 Tools & Platforms</h3>
                    <TracingCard>
                      <div className="flex flex-wrap gap-3">
                        {resumeData.skills.tools.map((s, i) => (
                          <motion.span 
                            key={`tool-platform-${i}`} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 255, 0.1)" }}
                            className="px-5 py-2 bg-black rounded-xl text-sm border border-white/10 hover:border-[#00F5FF]/50 transition-colors"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </TracingCard>
                  </motion.div>

                  {/* Soft Skills */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 line-reveal"
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3"><Brain className="text-[#00F5FF] w-5 h-5 glow-pulse rounded-full" /> 🔹 Soft Skills</h3>
                    <TracingCard>
                      <div className="flex flex-wrap gap-3">
                        {resumeData.skills.soft.map((skill, i) => (
                          <motion.span 
                            key={`soft-${i}`} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 255, 0.1)" }}
                            className="px-5 py-2 bg-black rounded-xl text-sm border border-white/10 hover:border-[#00F5FF]/50 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </TracingCard>
                  </motion.div>

                  {/* Languages */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 lg:col-span-2 line-reveal"
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3"><Globe className="text-[#00F5FF] w-5 h-5 glow-pulse rounded-full" /> 🔹 Languages</h3>
                    <TracingCard>
                      <div className="flex flex-wrap gap-3">
                        {resumeData.skills.languages.map((s, i) => (
                          <motion.span 
                            key={`lang-${i}`} 
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 255, 0.1)" }}
                            className="px-5 py-2 bg-black rounded-xl text-sm border border-white/10 hover:border-[#00F5FF]/50 transition-colors"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </TracingCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* 4. Projects Section */}
          <section id="projects" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Featured <span className="text-[#00F5FF]">Projects</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {resumeData.projects.map((project, i) => (
                      <motion.div
                        key={`proj-${i}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                      >
                        <TracingCard className="line-reveal group">
                          <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                              <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#00F5FF] transition-colors leading-tight">{project.title}</h3>
                              <div className="flex gap-2">
                                <motion.a 
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className="p-2 bg-white/[0.02] rounded-lg hover:bg-[#00F5FF] hover:text-[#05060A] transition-all"
                                  title="GitHub Repository"
                                >
                                  <Github className="w-5 h-5" />
                                </motion.a>
                                <motion.a 
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className="p-2 bg-white/[0.02] rounded-lg hover:bg-[#00F5FF] hover:text-[#05060A] transition-all"
                                  title="Live Demo"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </motion.a>
                              </div>
                            </div>
                            <p className="text-[#A1A1AA] mb-8 leading-relaxed">{project.desc}</p>
                            <div className="space-y-4 mb-8 flex-grow">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-[#888]">Key Features</h4>
                              <ul className="space-y-3">
                                {project.features.map((f, j) => (
                                  <motion.li 
                                    key={`feat-${i}-${j}`} 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + j * 0.1 }}
                                    className="flex items-start gap-3 text-sm text-[#808080]"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0 mt-0.5" />
                                    {f}
                                  </motion.li>
                                ))}
                              </ul>
                              
                              {project.impact && (
                                <div className="mt-6">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#888] mb-3">Impact</h4>
                                  <ul className="space-y-2">
                                    {(Array.isArray(project.impact) ? project.impact : [project.impact]).map((imp, idx) => (
                                      <li key={`impact-${idx}`} className="text-sm text-[#808080] leading-relaxed flex items-start gap-2">
                                        <span className="text-[#00F5FF] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5FF] shrink-0" />
                                        {imp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            <div className="pt-6 border-t border-white/5">
                              <p className="text-xs font-bold uppercase tracking-widest text-[#888] mb-4">Tech Stack</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, k) => (
                                  <span 
                                    key={`tech-stack-${i}-${k}`}
                                    className="px-3 py-1 bg-black rounded-lg text-[10px] font-bold text-[#00F5FF] border border-white/10"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-4 mt-8">
                              <motion.a 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn !w-full text-center !rounded-full bg-white/[0.05] border-white/10 text-white hover:bg-white/10"
                              >
                                🐙 GitHub
                              </motion.a>
                              <motion.a 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn !w-full text-center !rounded-full"
                              >
                                🚀 Live Demo
                              </motion.a>
                            </div>
                          </div>
                        </TracingCard>
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </section>

          {/* 5. Internship Experience Section */}
          <section id="experience" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Internship <span className="text-[#00F5FF]">Experience</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <div className="space-y-16">
                    {resumeData.experience.map((exp, i) => (
                      <motion.div
                        key={`exp-${i}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                      >
                        <TracingCard className="line-reveal">
                          <div className="relative pl-12 border-l-2 border-white/5">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#00F5FF] rounded-full shadow-[0_0_10px_#00F5FF]" />
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                              <div>
                                <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                                <p className="text-lg md:text-xl text-[#00F5FF] font-bold mt-1">{exp.role}</p>
                              </div>
                              <span className="px-5 py-2 bg-white/[0.02] rounded-full text-xs font-bold tracking-widest text-[#888] border border-white/5">
                                {exp.period}
                              </span>
                            </div>
                            <ul className="space-y-4">
                              {exp.work.map((w, j) => (
                                <motion.li 
                                  key={`work-${i}-${j}`} 
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.4 + j * 0.1 }}
                                  className="flex items-start gap-4 text-[#A1A1AA] text-base md:text-lg leading-relaxed"
                                >
                                  <div className="w-2 h-2 bg-[#00F5FF] rounded-full mt-2.5 shrink-0" />
                                  {w}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </TracingCard>
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </section>

          {/* 6. Education Section */}
          <section id="education" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Academic <span className="text-[#00F5FF]">Background</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <TracingCard className="line-reveal">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">{resumeData.education.degree}</h3>
                          <p className="text-lg md:text-xl text-[#00F5FF] font-bold mt-1">{resumeData.education.college}</p>
                        </div>
                        <span className="px-5 py-2 bg-white/[0.02] rounded-full text-xs font-bold tracking-widest text-[#888] border border-white/5">
                          {resumeData.education.year}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/[0.02] rounded-xl text-[#00F5FF] border border-white/5 glow-pulse">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-[#888] uppercase tracking-widest">Location</p>
                            <p className="font-bold">{resumeData.education.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/[0.02] rounded-xl text-[#00F5FF] border border-white/5 glow-pulse">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-[#888] uppercase tracking-widest">Academic Score</p>
                            <p className="font-bold">{resumeData.education.score}</p>
                          </div>
                        </div>
                      </div>
                    </TracingCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Certifications Section */}
          <section id="certifications" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Validated <span className="text-[#00F5FF]">Expertise</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {resumeData.certifications.map((cert, i) => (
                      <motion.div
                        key={`cert-${i}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <TracingCard className="line-reveal group">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-5 bg-[#00F5FF]/10 rounded-2xl mb-6 group-hover:bg-[#00F5FF]/20 transition-colors glow-pulse">
                              <Award className="w-10 h-10 text-[#00F5FF]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-[#00F5FF] transition-colors">{cert.name}</h3>
                            <p className="text-[#00F5FF] font-bold text-xs uppercase tracking-widest">{cert.issuer}</p>
                          </div>
                        </TracingCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Extra Section (What I Do) */}
          <section className="py-24 px-6 md:px-20">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <div className="flex flex-col gap-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex-1 line-reveal"
                    >
                      <h2 className="text-4xl font-bold mb-12">What <span className="text-[#00F5FF]">I Do</span></h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {resumeData.extra.whatIDo.map((item, i) => (
                          <motion.div
                            key={`what-i-do-${i}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <TracingCard>
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#00F5FF]/10 rounded-xl text-[#00F5FF] glow-pulse">
                                  {item.icon}
                                </div>
                                <p className="font-bold text-sm leading-tight">{item.name}</p>
                              </div>
                            </TracingCard>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Contact Section */}
          <section id="contact" className="py-24 px-6 md:px-20 perspective-container">
            <div className="container mx-auto flex justify-start">
              <div className="max-w-4xl w-full">
                <div className="fade-up section-reveal">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="underline-container mb-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-left">Contact <span className="text-[#00F5FF]">Me</span></h2>
                    <div className="underline-expand"></div>
                  </motion.div>
                </div>
                <div className="flex flex-col lg:flex-row gap-20">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 fade-up line-reveal"
                  >
                    <p className="text-lg md:text-xl font-bold mb-6">Let's Work Together</p>
                    <p className="text-[#A1A1AA] mb-12 text-base md:text-lg leading-relaxed">
                      I am currently looking for opportunities in Data Science and Analytics. Feel free to reach out if you'd like to collaborate or just say hi!
                    </p>
                    <div className="space-y-8">
                      {[
                        { icon: <Mail className="w-5 h-5 md:w-7 md:h-7" />, label: "Email", value: resumeData.email, link: `mailto:${resumeData.email}` },
                        { icon: <Phone className="w-5 h-5 md:w-7 md:h-7" />, label: "Phone", value: resumeData.phone, link: `tel:${resumeData.phone}` },
                        { icon: <Github className="w-5 h-5 md:w-7 md:h-7" />, label: "GitHub", value: resumeData.github, link: `https://${resumeData.github}` },
                        { icon: <Linkedin className="w-5 h-5 md:w-7 md:h-7" />, label: "LinkedIn", value: resumeData.linkedin, link: `https://${resumeData.linkedin}` }
                      ].map((item, i) => (
                        <motion.div
                          key={`contact-info-${i}`}
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <a href={item.link} target={item.link.startsWith('http') ? "_blank" : undefined} rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}>
                            <TracingCard>
                              <div className="flex items-center gap-3 md:gap-5 group">
                                <div className="p-3 md:p-4 bg-white/[0.02] rounded-2xl group-hover:bg-[#00F5FF] group-hover:text-[#05060A] transition-all border border-white/5">
                                  {item.icon}
                                </div>
                                <div>
                                  <p className="text-xs text-[#888] uppercase tracking-widest mb-1">{item.label}</p>
                                  <p className="text-sm sm:text-lg md:text-xl font-bold break-all sm:break-normal">{item.value}</p>
                                </div>
                              </div>
                            </TracingCard>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full fade-up line-reveal"
                  >
                    <TiltCard>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Name</label>
                            <input type="text" placeholder="Enter Your Name" className="form-input" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Email</label>
                            <input type="email" placeholder="Enter Your Email" className="form-input" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Subject</label>
                          <input type="text" placeholder="Enter Your Subject" className="form-input" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#888]">Message</label>
                          <textarea placeholder="Enter Your Message" className="form-input h-40 resize-none" required></textarea>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 77, 0, 0.4)" }}
                          whileTap={{ scale: 0.98 }}
                          type="submit" 
                          className="w-full py-4 bg-[#FF4D00] text-white font-bold rounded-xl transition-all duration-300 uppercase tracking-widest"
                        >
                          Send Message
                        </motion.button>
                      </form>
                    </TiltCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Footer */}
          <footer className="py-16 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tighter mb-6 fade-up"
              >
                {resumeData.name.split(' ')[0].toUpperCase()}<span className="text-[#00F5FF]">.</span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium text-[#A1A1AA] mb-10 italic fade-up"
              >
                “Turning data into actionable insights.”
              </motion.p>
              <div className="flex justify-center gap-8 mb-12 fade-up">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, link: `https://${resumeData.linkedin}` },
                  { icon: <Github className="w-6 h-6" />, link: `https://${resumeData.github}` },
                  { icon: <Mail className="w-6 h-6" />, link: `mailto:${resumeData.email}` }
                ].map((social, i) => (
                  <motion.a 
                    key={`footer-social-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -5, color: "#00F5FF" }}
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#888] transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-sm text-[#555] uppercase tracking-[0.3em] fade-up"
              >&copy; 2026 {resumeData.name}. All rights reserved.</motion.p>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
