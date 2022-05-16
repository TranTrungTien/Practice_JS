type Props = {};

const Work = (props: Props) => {
  return (
    <section id="works" className="relative h-auto py-10 lg:py-20">
      <img
        src="/images/vectors/circle-spin.svg"
        alt="Circle Vector"
        className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
      />
      <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          <div className="items-center w-3/4 relative">
            <img
              src="/images/vectors/boxes.svg"
              alt="Box Vector"
              className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
            />
            <div className="flex items-center">
              <hr className="w-16 sm:w-24 mr-1 border-violet" />
              <h4 className="font-light gradient-text text-sm md:text-7xl">
                Orientation?
              </h4>
            </div>
            <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
              Web development, Mobile App development
            </h1>
            <p className="text-inherit text-lg text-gray-200">
              I hope to join a great company during my internship trip
            </p>
            <div className="sm:ml-52 xl:ml-96">
              <img
                src="/images/vectors/arrows-right.svg"
                alt="Next"
                className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translatedown"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col items-center justify-center">
          <img
            src="/images/heiphen.svg"
            alt="Works at"
            className="w-48 lg:w-full p-10 sm:p-24 md:p-4 lg:p-24"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
