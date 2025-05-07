import { useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface Props {
  onClose: () => void;
}

const ResumeModal = ({ onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
  onClick={onClose} // Clicking background closes the modal
>
      <div className="bg-white rounded-lg max-w-3xl w-full h-[80vh] p-4 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-600"
        >
          ×
        </button>

        <Worker workerUrl="/pdf.worker.js">
          <Viewer fileUrl="/resume.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default ResumeModal;
