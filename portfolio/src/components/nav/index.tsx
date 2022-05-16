import { useState } from "react";
import { navLinks } from "../../constants/nav-links";
import "./style.css";
type Props = {};

const Nav = (props: Props) => {
  const [active, setActive] = useState("Home");
  return (
    <nav className="block md:flex justify-between items-center p-2 px-8 shadow-lg">
      <div className="flex justify-between">
        <div>
          <a href="/">
            <div className="animation-container">
              <h1>
                <span>T</span>
                <span>T</span>
                <span>T</span>
              </h1>
            </div>
          </a>
        </div>
        <div className="flex md:hidden">
          <button type="button" className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
          {navLinks.map((link, index) => {
            return (
              <a
                onClick={() => setActive(link.content)}
                href={link.links}
                key={index}
              >
                <li
                  className="
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
          border-b-2 md:border-none 
          "
                >
                  <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
                    {link.content}
                  </p>
                  {link.content === active ? (
                    <img
                      src="/images/vectors/nav_active.svg"
                      alt="nav-active"
                      className="hidden md:block md:opacity-100 md:w-100"
                    />
                  ) : null}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
