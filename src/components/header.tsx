"use client";

import { MouseEvent, useState } from "react";

import Image from "next/image";

const linksMenu = ["Home", "About", "Examples", "Contact"];

import Logo from "/public/logo.png";
import IconSearch from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import Container from "./container";

const Header = () => {
  const [menuIsActive, setmenuIsActive] = useState<null | string>("Home");

  const setMenuActive = (e: MouseEvent<HTMLAnchorElement>) => {
    const MenuActive = e.currentTarget.innerText;
    setmenuIsActive(MenuActive);
  };
  const isActive = menuIsActive;
  return (
    <header className="w-full absolute z-10 top- left-0">
      <Container>
        <div className="flex justify-between items-end py-11">
          <Image src={Logo} alt="" width={170} height={60} />
          <nav className="flex">
            <ul className="flex gap-8">
              {linksMenu.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={setMenuActive}
                    className={
                      isActive === link
                        ? "text-black  relative transition-all after:content-[''] after:w-[3px] after:h-6 after:absolute after:-top-5 after:bg-gradient-to-t from-[#FCC26B] after:left-1/2 after:-translate-x-1/2 after:rounded-full"
                        : "text-gray-medium"
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-8 items-center">
            <Image src={IconSearch} width={22} height={22} alt="Search" />
            <Image src={IconUser} width={22} height={22} alt="User" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
