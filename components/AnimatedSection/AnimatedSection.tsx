import React, { ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { AnimatedProps } from '../../shared/interface';




const AnimatedSection:React.FC<AnimatedProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const fadeInStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(0.8)' : 'scale(0.5)',
    config: { duration: 500},
  });

  return (
    <animated.div  ref={ref} style={fadeInStyles}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;