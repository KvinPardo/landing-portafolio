import React from "react";
import { navData } from "../data";

const Nav = () => {
  // Destructure
  const { items } = navData;

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className="link hover:border-b-2 hover:border-white  text-white font-bold cursor-pointer text-[13px] transition duration-300">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
