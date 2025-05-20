import { useScrollspy } from "@makotot/ghostui";
import { Home, Layers, Briefcase, Folder, Users, Mail } from "lucide-react";

interface Props {
  sectionRefs: React.RefObject<HTMLElement>[];
}

const Navbar = ({ sectionRefs }: Props) => {
  // Get scroll spy data
  const { currentElementIndexInViewport } = useScrollspy({
    sectionRefs,
    offset: -100, // offset for better accuracy (e.g. navbar height)
  });

  const icons = [Home, Layers, Briefcase, Folder, Users, Mail];

  const handleClick = (index: number) => {
    const ref = sectionRefs[index];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 border border-primary backdrop-blur-lg px-4 py-2 rounded-full shadow-md flex gap-4">
      {icons.map((Icon, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
            currentElementIndexInViewport === i
              ? "bg-primary text-black"
              : "text-white hover:text-primary"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
