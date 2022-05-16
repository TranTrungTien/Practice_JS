type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full mx-auto py-4 text-white h-auto bg-blue flex justify-center items-center">
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />

      <p className="mx-3 md:mx-6 text-sm sm:text-7xl font-light">
        2022-Tran Trung Tien based on
        <span role="img" aria-label="emoji" className="mx-2 animate-pulse">
          ❤️
        </span>
        <a href="https://harshgoel.me/" className="text-pink">
          Harsh Goel
        </a>
      </p>
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
    </footer>
  );
};

export default Footer;
