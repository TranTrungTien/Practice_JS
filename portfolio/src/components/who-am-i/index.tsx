type Props = {};

const WhoAmI = (props: Props) => {
  function downloadResume() {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "/data/TTT_resume.pdf");
    anchor.setAttribute("download", "");
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }
  return (
    <section
      style={{ opacity: 1, transform: "none", transitionDuration: "0.2s" }}
    >
      <div className="grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16">
        <div className="col-span-12 md:col-span-7 lg:col-span-7 flex flex-col justify-center items-center">
          <div className="items-center w-3/4 -mt-10 relative">
            <img
              src="/images/vectors/triangle.svg"
              alt="Triangle 3d Vector"
              className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
            />
            <div className="flex items-center">
              <hr className="w-16 sm:w-24 mr-1 border-violet" />
              <h4 className="font-light gradient-text text-sm md:text-7xl">
                Who Am I?
              </h4>
            </div>
            <h1 className="text-4xl sm:text-3xl xl:text-2xl font-extrabold text-white leading-none mb-3">
              Tran Trung Tien
            </h1>
            <h5 className="text-7xl font-light text-violet text-justify">
              "A developer with no experience but reliable, self-taught,
              hard-working", this line says exactly Who Am I. I hope to join a
              great company to improve my talent.
            </h5>
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              <div className="sm:col-span-1 xl:col-span-1">
                <button
                  type="button"
                  className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    hover:shadow-light-xl
                    bg-pink text-blue hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none
                   "
                >
                  Know More
                </button>
              </div>
              <div className="sm:col-span-1 xl:col-span-1">
                <button
                  onClick={downloadResume}
                  type="button"
                  className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    hover:shadow-light-xl
                    text-pink bg-transparent border-pink hover:outline-none hover:bg-pink hover:text-blue hover:border-pink focus:outline-none
                   "
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:col-span-5 lg:col-span-5 text-justify text-white justify-end items-end ">
          <img
            src="/images/bongo-cat-codes.gif"
            alt="Harsh Goel"
            className="ml-auto w-full h-auto lg:w-4/5 pointer-events-none text-right self-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
