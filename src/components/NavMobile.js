import React, { useState } from 'react';

import { BiMenu } from 'react-icons/bi';

import { Link } from 'react-scroll';
import { navigation } from '../data';

import ClickAwayListener from 'react-click-away-listener';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <nav>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'
        >
          <BiMenu />
        </div>

        <ul
          className={`${
            isOpen ? 'max-h-90 p-8' : 'max-h-0 p-0'
          } flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden capitalize transition-all`}
        >
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to={item.name}
                  activeClass='active'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer transition-all'
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </ClickAwayListener>
  );
};

export default NavMobile;
