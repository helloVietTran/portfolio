import { motion } from 'framer-motion';

const Skill = ({ src, width, height, index, skillName, shouldAnimate }) => {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.15;

  return (
    <motion.div
      initial="hidden"
      variants={imageVariants}
      animate={shouldAnimate ? 'visible' : 'hidden'}
      transition={{
        delay: index * animationDelay,
        duration: 0.4,
        ease: 'easeOut',
      }}
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
