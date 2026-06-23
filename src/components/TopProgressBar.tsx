import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    setProgress(30);

    const step1 = setTimeout(() => setProgress(70), 100);
    const step2 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setProgress(0), 200); // Reset after fade out
      }, 300); // Wait for transition to 100% to finish
    }, 400); // Complete after arbitrary time, or better yet, sync with page transition duration (~300ms)

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ width: `${progress}%` }}
          className="fixed top-0 left-0 h-1 bg-[#00b4d8] z-[9999] transition-all duration-300 ease-out"
        />
      )}
    </AnimatePresence>
  );
}
