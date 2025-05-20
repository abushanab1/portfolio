import { motion } from 'framer-motion';

const projects = [
  {
    name: "AI Resume Matcher",
    tech: "JavaScript, Node.js, React, OpenAI API, OCR",
    description: "Full-stack tool that matches resumes to job descriptions using GPT-3.5 and OCR. Boosted matching accuracy by 50%.",
    link: "https://github.com/abushanab1/resume-matcher", // Replace if different
  },
  {
    name: "SecureCLI Chat",
    tech: "C++, OpenSSL, AES-256, Unix/Linux",
    description: "Encrypted Unix-based CLI messaging tool with Base64 encoding, AES-256 encryption, and secure key validation.",
    link: "https://github.com/abushanab1/securecli-chat", // Replace if different
  },
  {
    name: "Portfolio Website",
    tech: "TypeScript, React, TailwindCSS, AWS S3, CloudFront",
    description: "Responsive, animated portfolio deployed via AWS. CI/CD with GitHub Actions and custom domain setup.",
    link: "https://muhannadabushanab.com", // Live site
  },
  {
    name: "Image Classifier",
    tech: "React, REST APIs, TTS API",
    description: "Uploads images and returns results via a speech API for accessibility.",
    link: "https://github.com/abushanab1/ImageClassifier",
  },
  {
    name: "21 Day Habit Challenge",
    tech: "Java, Swing, OOP",
    description: "A desktop app to help users build lasting habits through streak logic and journaling.",
    link: "https://github.com/abushanab1/21-day-challenge",
  },
  {
    name: "Prompted",
    tech: "JavaScript, React, CSS, Chrome Extension APIs",
    description: "A Chrome extension to optimize AI prompts, boost accuracy, and improve UX.",
    link: "https://github.com/abushanab1/prompted",
  },
  {
    name: "Friendly Fitness",
    tech: "React Native, Django, PostgreSQL",
    description: "A mobile app that tracks meals and weight using the USDA Food API.",
    link: "https://github.com/abushanab1/friendly-fitness",
  },
  {
    name: "Stock Handler",
    tech: "Object-Oriented C#, .NET",
    description: "C#/.NET app for analyzing stock performance with interactive charts. Optimized render time by 30%.",
    link: "https://github.com/abushanab1/stock-handler",
  },
  {
    name: "Bulls E-Market",
    tech: "SQL, PostgreSQL, Express.js, Bootstrap, React, GitHub Actions",
    description: "Full-stack platform with advanced search and responsive UI. CI/CD improved deployment speed and UX.",
    link: "https://github.com/abushanab1/bulls-e-market",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-transparent text-white">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(35, 213, 7, 0.3)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="border border-primary p-6 rounded-xl bg-dark shadow-md transition-transform duration-200 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">{proj.name}</h3>
            <p className="text-gray-300">{proj.description}</p>
            <p className="mt-2 text-sm text-gray-400 italic">{proj.tech}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
