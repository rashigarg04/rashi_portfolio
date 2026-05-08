import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 30, stiffness: 100 });
  
  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

export default Counter;
