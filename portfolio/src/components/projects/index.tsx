import { projects } from "../../constants/project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects">
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/heart.svg"
          alt="Circle Vector"
          className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
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
                  Let’s walk the talk!
                </h4>
              </div>
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Some awesome{" "}
                <span className="text-pink font-bold">products</span>
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Something I has{" "}
                <span className="text-pink font-bold">built.</span>
              </h1>
              <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                <img
                  src="/images/vectors/arrows-right.svg"
                  alt="Next"
                  className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
            <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
              <div className="bg-violet w-64 h-auto rounded-lg p-6">
                <div className="underline mb-2 font-semibold text-6xl">
                  Websites
                </div>
                <div className="font-normal text-7xl">
                  Certain special hidden recipes and making websites look
                  enticing.
                </div>
              </div>
            </div>
            <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
              <div className="bg-pink w-64 h-auto rounded-lg p-6 flex flex-col gap-y-3">
                <div className="w-1/2 h-5 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-1/2 h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-1/3 h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
              </div>
            </div>
            <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
              <div className="bg-violet w-64 h-auto rounded-lg p-6 flex flex-col gap-y-3">
                <div className="w-1/2 h-5 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-2/3 h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-full h-3 bg-[#aaa] rounded-xl"></div>
                <div className="w-1/2 h-3 bg-[#aaa] rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16"
        id="projects"
      >
        <div className="grid md:grid-cols-2 gap-4 place-items-center">
          {projects.map((project, index) => {
            return (
              <a key={index} href={project.link} className="block">
                <div className="my-4 xl:h-[260px] mx-8 lg:mx-16 rounded-2xl transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
                  <img
                    src={project.imageLink}
                    alt="My Project"
                    className="rounded-2xl w-full h-full object-center object-cover"
                  />
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex justify-center mt-10 lg:mt-4">
          <a
            href="https://github.com/TranTrungTien?tab=repositories"
            className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    hover:shadow-light-xl
                    bg-pink text-blue hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none
                   "
          >
            Show me more! 🔥
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
