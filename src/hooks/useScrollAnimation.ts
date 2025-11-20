import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

interface ScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({ 
  threshold = 0.1, 
  triggerOnce = true 
}: ScrollAnimationProps = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};

export default useScrollAnimation;
