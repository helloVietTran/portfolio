import Timeline from '../components/TimeLine';
import Description from '../components/Description';

const About = () => {
  return (
    <div id="about" className="mx-auto mt-20 px-12 scroll-mt-28">
      <Description />
      <h2 className="hero_tag text-gray_gradient font-raleway mt-20">
        Quá trình học tập
      </h2>

      <Timeline />
    </div>
  );
};

export default About;
