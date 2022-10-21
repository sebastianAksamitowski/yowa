import React from 'react';

import { Link } from 'react-scroll';
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px] capitalize'>
        {navigation.map((item, index) => {
          return (
            <li className='cursor-pointer' key={index}>
              <Link
                to={item.name}
                activeClass='active'
                smooth='true'
                duration={1300}
                className='transition-all'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
