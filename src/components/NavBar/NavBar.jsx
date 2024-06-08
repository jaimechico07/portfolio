import React, { useState } from 'react';
import { IconHome, IconAddressBook, IconComponents, IconBrandCodesandbox, IconUser } from '@tabler/icons-react';

const NavBar = () => {
  const [leftPosition, setActiveIndex] = useState(50); // Asumimos que el tercer ícono (IconHome) es el activo por defecto

  const handleNavClick = posicion => {
    setActiveIndex(posicion);
  };

  return (
    <>
      <nav className="hidden fixed right-0 lg:grid grid-cols-5 place-items-center top-12 mx-auto left-0 h-14 w-96 rounded-full bg-[#47474734] z-50">
        <a
          href="#aboutme"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(10)}
        >
          <IconUser className="text-white"></IconUser>
        </a>
        <a
          href="#tecnology"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(30)}
        >
          <IconComponents className="text-white"></IconComponents>
        </a>
        <a
          href="#hero"
          className="z-50 w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(50)}
        >
          <IconHome className="text-white "></IconHome>
        </a>
        <a
          href="#projects"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(70)}
        >
          <IconBrandCodesandbox className="text-white"></IconBrandCodesandbox>
        </a>
        <a
          href="#contact"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(90)}
        >
          <IconAddressBook className="text-white"></IconAddressBook>
        </a>
        <div
          style={{ left: `${leftPosition}%` }}
          className={`absolute left-1/2 -z-30 top-1/2 duration-500 -translate-x-1/2 -translate-y-1/2 cursor-pointer h-[70px] w-[70px] bg-[#fc3863] flex items-center justify-center rounded-full`}
        ></div>
      </nav>

      <nav className="lg:hidden fixed top-0 flex justify-center place-items-center left-0 right-0 h-14 w-screen max-w-[600px] mx-auto rounded-b-full bg-[#47474734] z-50">
        <a
          href="#aboutme"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(10)}
        >
          <IconUser className="text-white"></IconUser>
        </a>
        <a
          href="#tecnology"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(30)}
        >
          <IconComponents className="text-white"></IconComponents>
        </a>
        <a
          href="#hero"
          className="z-50 w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(50)}
        >
          <IconHome className="text-white "></IconHome>
        </a>
        <a
          href="#projects"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(70)}
        >
          <IconBrandCodesandbox className="text-white"></IconBrandCodesandbox>
        </a>
        <a
          href="#contact"
          className="w-full h-full flex justify-center items-center"
          onClick={() => handleNavClick(90)}
        >
          <IconAddressBook className="text-white"></IconAddressBook>
        </a>
        <div
          style={{ left: `${leftPosition}%` }}
          className={`absolute left-1/2 -z-30 top-1/2 duration-500 -translate-x-1/2 -translate-y-1/2 cursor-pointer h-[70px] w-[70px] bg-[#fc3863] flex items-center justify-center rounded-full`}
        ></div>
      </nav>
    </>
  );
};

export default NavBar;
