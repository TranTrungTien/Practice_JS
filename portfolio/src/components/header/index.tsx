import Nav from "../nav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mx-auto bg-[#232946] w-full fixed z-30 false">
      <Nav />
    </header>
  );
};

export default Header;
