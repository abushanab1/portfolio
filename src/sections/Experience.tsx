import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer",
    company: "Jacob Javits Center",
    location: "New York, NY",
    date: "Dec 2024 – Present",
    bullets: [
      "Built an AI-driven chatbot using Microsoft CoPilot and adaptive cards, reducing vendor tickets by 20%.",
      "Migrated company website from Umbargo 7 to 13, securing 10+ outdated pages.",
      "Configured 20+ routers and performed VLAN migrations using Cisco DNA.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Make It Viral Media & Technologies",
    location: "Tampa, FL",
    date: "Oct 2023 – Nov 2024",
    bullets: [
      "Built responsive websites and apps with React, HTML, and SQL.",
      "Integrated SQL/REST APIs and automated CI/CD pipelines via GitHub Actions.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "USF CSE Department",
    location: "Tampa, FL",
    date: "Aug 2023 – Aug 2024",
    bullets: [
      "Mentored 300+ students in C/C++, improving performance by 15%.",
      "Reviewed code submissions and gave structured feedback on style and efficiency.",
    ],
  },
  {
    role: "Electric Consultant",
    company: "Sunrun",
    location: "Tampa, FL",
    date: "Aug 2024 – Dec 2024",
    bullets: [
      "Knocked 100+ doors weekly to pitch solar solutions, sharpening resilience and communication.",
      "Improved lead conversion rates by clearly tailoring pitches to diverse customer needs."
    ],
  },
];

const Experience = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-transparent text-white">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Experience</h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(35, 213, 7, 0.3)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="border border-primary p-6 rounded-xl bg-dark shadow-md transition-transform duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-primary">
                {exp.role} – <span className="text-white">{exp.company}</span>
              </h3>
              <span className="text-sm text-gray-400">{exp.date}</span>
            </div>
            <p className="text-sm text-gray-400 italic mb-3">{exp.location}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
