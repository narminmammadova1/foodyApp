
import { useSpring } from "@react-spring/web";

export const useAnimatedStyles = () => {
  const springStyles = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 30 },
    config: { duration: 3000 },
  });

  const springStyles2 = useSpring({
    loop: { reverse: true },
    from: { y: 30 },
    to: { y: 0 },
    config: { duration: 3000 },
  });

  const fadeInStyles = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 300}, 
    loop: false,
  });

  return { springStyles, springStyles2, fadeInStyles };
};