function HeroSection() {
  return (
    <section className="relative flex items-center justify-between px-32 pt-40">
      <div className="relative bg-white z-[2]">
        <h1 className="text-[5rem] font-bold tracking-[-0.1rem] text-[#42446e] leading-[120%] max-w-[45rem] font-ibarra">
          Hello there, I'm Olatoyan George and I'm a fullstack developer
        </h1>
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
