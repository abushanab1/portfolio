import { useState } from "react";
import { motion } from "framer-motion";
import ResumeModal from "../components/ResumeModal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" className="py-16 px-6 bg-transparent text-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Whether you want to collaborate, hire, or just say hi — my inbox is always open.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <motion.a
            href="mailto:abushanabmohanad@gmail.com"
            whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(35, 213, 7, 0.4)" }}
            className="bg-primary text-black font-medium px-6 py-3 rounded-full border border-primary transition duration-200"
          >
            Email Me
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/muhannad-abu-shanab-06789521b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(35, 213, 7, 0.4)" }}
            className="border border-primary text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-black transition duration-200"
          >
            Connect on LinkedIn
          </motion.a>

          {/* View Resume */}
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(35, 213, 7, 0.4)" }}
            className="border border-primary text-primary font-medium px-6 py-3 rounded-full hover:bg-primary hover:text-black transition duration-200"
          >
            View Resume
          </motion.button>
        </div>

        {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
      </motion.div>
    </section>
  );
};

export default Contact;
