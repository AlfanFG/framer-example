import { HTMLMotionProps, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ScrollAdvancedProps extends HTMLMotionProps<"div"> {
  children: JSX.Element;
  range?: number[];
}

export const ScrollAdvanced = ({
  children,
  range = [10, 300],
  ...props
}: ScrollAdvancedProps): JSX.Element => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollY, range, [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      ref={targetRef}
      style={{ opacity }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
