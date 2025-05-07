import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingAvatar = () => {
  const [tooltip, setTooltip] = useState("👋 Welcome!");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 400) setTooltip("💬 Let's build something great.");
      else if (y < 1000) setTooltip("🛠️ Check out my projects!");
      else if (y < 1600) setTooltip("📈 Don't miss my experience.");
      else setTooltip("📬 Let's connect!");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-xs text-white bg-black/80 px-3 py-1 rounded-full border border-primary">
        {tooltip}
      </div>
      <motion.img
        src="/profile.png" // ✅ Correct public path — don't use /public/
        alt="Floating Avatar"
        className="w-16 h-16 rounded-full border-2 border-primary shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FloatingAvatar;
