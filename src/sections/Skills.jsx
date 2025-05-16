import Skill from '../components/Skill';
import { backend_skill, frontend_skill, other_skill } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="mt-20 scroll-mt-20">
      <div className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden">
        <h2 className="hero_tag text-gray_gradient font-raleway text-5xl">
          Kĩ năng
        </h2>

        <div className="mt-12 flex flex-row items-center justify-around md:gap-8">
          {frontend_skill.map((skill, index) => (
            <Skill
              key={index}
              src={skill.Image}
              width={skill.width}
              height={skill.height}
              index={skill}
              skillName={skill.skill_name}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-row flex-wrap items-center justify-around md:gap-8">
          {backend_skill.map((skill, index) => (
            <Skill
              key={index}
              src={skill.Image}
              width={skill.width}
              height={skill.height}
              index={skill}
              skillName={skill.skill_name}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-row flex-wrap items-center justify-around md:gap-8">
          {other_skill.map((skill, index) => (
            <Skill
              key={index}
              src={skill.Image}
              width={skill.width}
              height={skill.height}
              index={skill}
              skillName={skill.skill_name}
            />
          ))}
        </div>

        <div className="absolute h-full w-full">
          <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
            <video
              className="h-auto w-full"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="assets/cards-video.webm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
