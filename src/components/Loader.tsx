import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-black text-primary flex items-center justify-center text-3xl font-bold"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            MUHANNAD ABU SHANAB
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
