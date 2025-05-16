import Description from "../components/Description";


const Hero = () => {
  return (
    <section
      className="relative flex w-full scroll-mt-28 flex-col"
      id="home"
    >
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36">
        <p className="font-nunito text-center text-xl font-medium text-gray-200 sm:text-3xl">
          Xin chào, mình là Việt Anh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient font-raleway text-gradient">
          Fullstack Developer Learner
        </p>
      </div>
    </section>
  );
};

export default Hero;
