import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const click = (e: MouseEvent) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 500); // ripple duration
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  return (
    <>
      {/* cursor glow dot */}
      <div
        className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-4 h-4 rounded-full bg-[#23d507] blur-sm animate-pulse opacity-90" />
      </div>

      {/* click ripples */}
      {clicks.map((c) => (
        <div
          key={c.id}
          className="fixed z-40 pointer-events-none animate-ripple"
          style={{
            left: c.x,
            top: c.y,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "2px solid #23d507",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
