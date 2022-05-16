import { socialMedia } from "../../constants/social-media";

type Props = {};

const SocialMedia = (props: Props) => {
  return (
    <div className="fixed left-3 md:left-5 top-24 z-30">
      <div className="flex flex-col justify-center items-center ">
        {socialMedia.map((link, index) => {
          return (
            <a href={link.link} key={index}>
              <img
                src={link.imageLink}
                alt={link.content}
                className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
              />
            </a>
          );
        })}
        <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
