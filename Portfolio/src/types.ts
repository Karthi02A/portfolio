export interface Project {
  title: string;
  description: string;
  details: string[];
  link?: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  percentage: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export const RESUME_DATA = {
  name: "Karthikeyan A",
  role: "Junior Data Scientist",
  email: "karthikeyan86348@gmail.com",
  phone: "7010572468",
  linkedin: "linkedin.com/in/karthi0205",
  github: "github.com/Karthi02A",
  location: "Chennai, India",
  profile: "Aspiring Junior Data Scientist with strong skills in Python, data analysis, and machine learning. Experienced in data preprocessing, visualization, and building data-driven solutions using real-world datasets. Passionate about extracting meaningful insights and solving problems through data-driven approaches.",
  skills: {
    technical: ["Python", "SQL", "Data Analysis", "Machine Learning", "NLP (Basic)", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    tools: ["Power BI", "GitHub", "Google Colab", "Pycharm", "Jupyter Notebook", "Streamlit"],
    soft: ["Problem-solving", "Communication", "Teamwork", "Critical Thinking"],
    languages: ["Tamil", "English"]
  },
  projects: [
    {
      title: "DataForge AI",
      description: "Data Science Automation Platform",
      details: [
        "Developed a Python-based system for data analysis, preprocessing, and automated ML model generation.",
        "Built a data diagnosis engine to detect missing values, duplicates, and outliers, improving dataset quality.",
        "Applied machine learning models (Decision Tree, Random Forest) and evaluated performance using visualization tools.",
        "Capabilities: Automates end-to-end data pipelines, reduces manual preprocessing time by 60%, and provides instant model performance reports with interactive visualizations."
      ],
      tags: ["Python", "Machine Learning", "Data Diagnosis"]
    },
    {
      title: "SkillMatch AI",
      description: "Resume & JD Matching System",
      details: [
        "Developed a Python application using Streamlit to compare resumes with job descriptions and generate match scores.",
        "Applied basic NLP and cosine similarity to identify matching and missing skills.",
        "Used Pandas, NumPy, and Matplotlib to process data and display results using charts.",
        "Capabilities: Analyzes semantic similarity between text documents, extracts key entities using NLP, and provides a 'Skill Gap Analysis' to help candidates improve their resumes."
      ],
      tags: ["Streamlit", "NLP", "Python"]
    }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Vcodez",
      period: "05/2025 – 07/2025",
      details: [
        "Performed data preprocessing, cleaning, and basic analysis using Python",
        "Worked with structured datasets to support data-driven insights"
      ]
    },
    {
      role: "Data Analytics & Engineering Intern",
      company: "SpydX Technologies (Virtual)",
      period: "09/2025 – 12/2025",
      details: [
        "Assisted in data workflows, reporting, and documentation",
        "Supported data handling and analysis tasks in a team environment"
      ]
    }
  ],
  education: {
    degree: "B.E - Computer Science Engineering",
    institution: "Karpaga Vinayaga College of Engineering and Technology",
    period: "2022 – 2026",
    location: "Chengalpattu",
    percentage: "74%"
  },
  certifications: [
    { name: "IBM Data Analyst", issuer: "Coursera (IBM)" },
    { name: "Microsoft Power BI Data Analyst", issuer: "Coursera (Microsoft)" },
    { name: "Data Analytics Essential", issuer: "CISCO" }
  ]
};
