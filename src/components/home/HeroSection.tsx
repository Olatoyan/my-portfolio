function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between px-32 pt-48"
    >
      <div className="relative bg-white z-[2]">
        <h1 className="text-[5rem] font-bold tracking-[-0.1rem] text-[#42446e] leading-[120%] max-w-[45rem] font-ibarra pb-4">
          Hello there, I'm Olatoyan George
        </h1>
        <p className="text-[1.8rem] text-[#666] leading-[2.6rem] max-w-[45rem]">
          I'm a fullstack developer skilled in building beautiful and functional
          user interfaces. I enjoy working on projects that utilize both
          front-end and back-end technologies to create seamless user
          experiences.
        </p>
      </div>

      <div className="">
        <img
          src="./code.png"
          alt="image"
          className="h-[50rem] w-full object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
