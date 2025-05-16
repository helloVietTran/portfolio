import { timeline_elements } from '../constants';
import schoolIcon from '/assets/school.svg';
import workIcon from '/assets/work.svg';
import { motion } from 'framer-motion';

const colorMap = {
  lime: 'bg-lime-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  emerald: 'bg-emerald-500',
  gray: 'bg-gray-500',
};

const Activities = ({ defaultColor }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      {timeline_elements.map((element, index) => {
        const colorClass =
          defaultColor || colorMap[element.color] || colorMap.gray;

        return (
          <motion.div
            key={element.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative m-4 flex"
          >

            {/* Timeline icon and left info */}
            <div className="relative hidden w-44 items-start pt-0.5 sm:flex">
              <div className="w-4/5 text-gray-200">{element.date}</div>
              <div
                className={`${colorClass} h-full w-px translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <img
                src={element.icon === 'school' ? schoolIcon : workIcon}
                alt="icon"
                className={`${colorClass} z-20 w-10 rounded-lg p-1`}
              />
              <div
                className={`${colorClass} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>

            {/* Card content */}
            <div className="z-10 w-full rounded-2xl border border-white/[0.1] bg-zinc-900 px-8 py-4 text-center transition hover:border-white/[0.2] hover:bg-zinc-900 hover:text-gray-200 sm:w-96">
              <div className="text-xl font-medium text-gray-200">
                {element.title}
              </div>
              <div className="mb-6 text-gray-100 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden"> | {element.date}</span>
              </div>
              <div className="mb-4 text-left text-gray-200">
                {element.description}
              </div>
              <div className="mb-6 flex flex-wrap justify-center">
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="m-1 rounded-xl bg-zinc-800 px-2 py-1 text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <img
                src={element.icon === 'school' ? schoolIcon : workIcon}
                alt="icon"
                className={`${colorClass} absolute top-4 left-4 z-20 w-8 rounded-lg p-1 sm:hidden`}
              />
              {element.buttonText && element.buttonHref && (
                <a
                  href={element.buttonHref}
                  target="_blank"
                  className={`${colorClass} mx-auto cursor-pointer rounded-md px-4 py-1 font-medium text-gray-100 transition hover:opacity-75`}
                >
                  {element.buttonText}
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}


export default Activities;