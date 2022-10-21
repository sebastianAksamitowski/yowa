import React from 'react';

import { Link } from 'react-scroll';
import Logo from '../assets/img/logo.svg';

import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pb-[70px]' data-aos='fade-up' data-aos-offset='0'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
          <Link
            to='home'
            className='cursor-pointer transition-all'
            smooth={true}
            duration={1300}
          >
            <img src={Logo} alt='' className='h-[30px]' />
          </Link>
          <p>&copy; 2022. All rights reserved.</p>
          <div className='flex gap-x-4 text-orange text-lg'>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaYoutube />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaInstagram />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
