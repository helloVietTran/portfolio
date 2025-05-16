import { projects } from '../constants';
import { PinContainer } from '../components/Pin';
import LocationArrowIcon from '../icons/LocationArrowIcon';

const Projects = () => {
  return (
    <div className="my-20 scroll-mt-28" id="projects">
      <h2 className="hero_tag text-gray_gradient font-raleway text-5xl">
        Các dự án
      </h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map((item) => (
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer title={item.title}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                <img
                  src={item.img}
                  alt="cover"
                  className="absolute bottom-0 z-10 rounded-sm"
                />
              </div>

              <p
                className="line-clamp-2 text-sm font-light lg:text-lg lg:font-normal"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="mt-7 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-neutral-500/80 lg:h-10 lg:w-10"
                     
                    >
                      <img src={icon} alt="icon" className='p-1 rounded-xl'/>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2">
                  <a className="text-base text-gray-200" href={item.link} target='_blank'>
                     Demo
                  </a>
                  <LocationArrowIcon color="#fff" width={16} height={16} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
