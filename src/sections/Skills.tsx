import { motion } from 'framer-motion';

const skills = {
  Languages: ["JavaScript", "Python", "Java", "C#", "C/C++", "SQL", "HTML/CSS"],
  Frameworks: ["React", "React Native", "Node.js", "Express", "TailwindCSS", "Django", ".NET", "Bootstrap"],
  Technologies: [
    "OpenAI API", 
    "OCR (Tesseract.js)", 
    "pdfjs-dist", 
    "REST APIs", 
    "Chrome Extension APIs", 
    "Text-to-Speech APIs", 
    "ImageMagick", 
    "Ghostscript"
  ],
  Tools: [
    "Git", 
    "GitHub Actions", 
    "Postman", 
    "AWS", 
    "Agile", 
    "CI/CD", 
    "Multer", 
    "Power BI", 
    "Excel", 
    "JIRA"
  ],
};


const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-transparent text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-primary mb-3">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 12px rgba(35, 213, 7, 0.4)',
                    }}
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-black transition duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
