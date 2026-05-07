import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  once?: boolean;
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  style = {},
  threshold = 0.1,
  animation = "slide-up",
  delay = 0,
  once = true
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClass = `reveal-${animation}`;

  return (
    <div
      ref={ref}
      className={`${className} reveal-hidden ${isVisible ? "reveal-visible" : ""} ${animationClass}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
