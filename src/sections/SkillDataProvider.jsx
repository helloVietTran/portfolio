import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillDataProvider = ({ src, width, height, index }) => {
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
    >
      <img
        src={src}
        width={0.85 * width}
        height={0.85 * height}
        alt="skill image"
        className='rounded-xl'
      />
    </motion.div>
  );
};

export default SkillDataProvider;
