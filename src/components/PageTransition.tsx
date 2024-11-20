"use client";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 0.4,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
