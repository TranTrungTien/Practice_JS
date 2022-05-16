type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="relative h-auto py-10 lg:py-20">
      <img
        src="/images/vectors/cylinder.svg"
        alt="Cylinder Vector"
        className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
      />
      <img
        src="/images/vectors/l-vector.svg"
        alt="L Vector"
        className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
      />
      <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          <div className="items-center w-3/4 relative">
            <div className="flex items-center">
              <hr className="w-16 sm:w-24 mr-1 border-violet" />
              <h4 className="font-light gradient-text text-sm md:text-7xl">
                What can I do?
              </h4>
            </div>
            <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
              I creates elegant, logical modern web app.
            </h1>
            <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
              Think. <span className="text-pink">Code.</span> Debug.
            </h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
          <div className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
            <img
              src="/images/skills/mongodb.svg"
              alt="MongoDB"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/node.svg"
              alt="NodeJS"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/react.svg"
              alt="ReactJS"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/js.svg"
              alt="Javascript"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/ts.svg"
              alt="AngularJS"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/react-native.svg"
              alt="React Native"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/angular.svg"
              alt="ExpressJS"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/express.svg"
              alt="MongoDB"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/figma.svg"
              alt="Figma"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/tailwindcss.svg"
              alt="Tailwind"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
            <img
              src="/images/skills/git.svg"
              alt="Git"
              className="p-2 sm:p-6 h-16 sm:h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
