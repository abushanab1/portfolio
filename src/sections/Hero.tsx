import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      {/* 👤 Profile image inside Hero */}
      <motion.img
        src="/profile.png" // ✅ Put cartoon avatar in public/profile.png
        alt="Profile"
        className="w-28 h-28 rounded-full border-2 border-primary mb-4 shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span className="text-primary">Muhannad</span>
        <br />
        <span className="text-xl md:text-2xl mt-2 block text-gray-300 font-medium">
          I’m a{" "}
          <span className="text-primary">
            <Typewriter
              words={[
                "Full-Stack Developer.",
                "Problem Solver.",
                "Creative Coder.",
                "Open to Collaborate.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-400 max-w-xl mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Passionate about crafting efficient, accessible, and beautiful digital experiences.
      </motion.p>
    </section>
  );
};

export default Hero;
