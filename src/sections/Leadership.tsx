import { motion } from "framer-motion";

const leadership = [
  {
    role: "Sales Lead",
    company: "Cole Haan",
    location: "Tampa, FL",
    date: "Feb 2022 – Aug 2023",
    bullets: [
      "Led daily operations and coached associates on clienteling, achieving 110% of sales goals.",
      "Trained and mentored 5+ new team members, increasing team efficiency and service quality.",
    ],
  },
  {
    role: "Key Holder",
    company: "Sunglass Hut",
    location: "Tampa, FL",
    date: "Nov 2020 – Feb 2022",
    bullets: [
      "Managed open/close procedures and handled POS/returns with accuracy and speed.",
      "Boosted accessory sales through consultative upselling and customer rapport.",
    ],
  },
  {
    role: "Vice President",
    company: "Egyptian Student Organization, USF",
    location: "Tampa, FL",
    date: "Aug 2021 – May 2022",
    bullets: [
      "Led event planning and managed team coordination for cultural and fundraising initiatives.",
      "Grew member engagement by 40% through outreach, marketing, and inclusive programming.",
    ],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 px-6 bg-transparent text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">Leadership</h2>

        <div className="space-y-10">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(35, 213, 7, 0.3)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="border border-primary p-6 rounded-xl bg-dark shadow-md transition-transform duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary">
                  {item.role} – <span className="text-white">{item.company}</span>
                </h3>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <p className="text-sm text-gray-400 italic mb-3">{item.location}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;
