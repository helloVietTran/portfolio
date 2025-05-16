import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skill = ({ src, width, height, index, skillName }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="inline-block cursor-pointer"
    >
      <img
        src={src}
        width={width}
        height={height}
        alt={`skill ${skillName}`}
        className="rounded-xl transform scale-50 sm:scale-60 md:scale-85"
      />
    </motion.div>
  );
};

export default Skill;
