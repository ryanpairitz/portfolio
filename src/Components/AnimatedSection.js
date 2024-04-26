import { useInView, animated } from '@react-spring/web';

const AnimatedSection = ({ className, style, children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 89,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-5% 0%',
      once: true
    }
  );
  return (
    <animated.section ref={ref} style={{ ...style, ...springs }} className={className}>
      {children}
    </animated.section>
  );
};

export default AnimatedSection;