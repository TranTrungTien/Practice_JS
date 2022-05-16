import Contact from "../contact";
import Footer from "../footer";
import Projects from "../projects";
import Skills from "../skills";
import WhoAmI from "../who-am-i";
import Work from "../work";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="pt-28 bg-[#232946]">
      <div className="overflow-x-hidden">
        <img
          src="/images/vectors/ellipse.svg"
          alt="Ellipse Vector"
          className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
        ></img>
        <img
          src="/images/vectors/triangle.svg"
          alt="Triangle 3d Vector"
          className="block md:hidden absolute right-1/3 top-28 w-1/4 md:w-16 animate-spin pointer-events-none"
        ></img>
        <WhoAmI />
        <Skills />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Main;
