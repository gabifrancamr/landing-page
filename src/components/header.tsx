import logo from "/assets/logo.png";

import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuOptions = [
    { id: "home", title: "Início" },
    { id: "services", title: "Serviços" },
    { id: "contact", title: "Contato" },
  ];

  function handleShowMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="gama engenharia" className="h-[40px]" />

      <IoMenu
        size={30}
        className="yellow cursor-pointer block md:hidden"
        onClick={handleShowMenu}
      />

      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } py-3 px-1 bg-slate-950 absolute top-0 right-0 mx-3 my-16 min-w-[140px] rounded-xl sidebar md:hidden`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1 gap-2">
          {menuOptions.map((item) => (
            <li
              key={item.id}
              className={`font-normal cursor-pointer text-[16px] yellow hover:text-white`}
            >
              <a href={`#${item.id}`} onClick={handleShowMenu}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="hidden md:flex gap-8">
        {menuOptions.map((item) => (
          <a
            key={item.id}
            className="font-normal text-[16px] yellow hover:text-white"
            href={`#${item.id}`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
