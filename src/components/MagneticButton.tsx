import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const MagneticButton = ({ children, className = "", onClick, href }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [8, -8]);
  const rotateY = useTransform(x, [-30, 30], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    const offsetY = e.clientY - bounds.top - bounds.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      onClick={onClick}
      className={`border border-primary text-primary px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-primary hover:text-black transition duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default MagneticButton;
