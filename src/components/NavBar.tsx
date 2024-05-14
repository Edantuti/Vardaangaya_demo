import Logo from '../assets/Site_Icon.png';
import Menu from './Menu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

import { useState } from 'react';

function NavBar() {
  const [drawerState, changeDrawerState] = useState(false);
  return (
    <header className='grid-flow-row items-center gap-4 p-5 text-center md:grid-flow-col'>
      <div className='flex items-center gap-4 p-4'>
        <img src={Logo} alt='logo' className='h-16 w-16' />
        <h1 className='flex-1 text-center text-lg font-semibold md:text-3xl'>
          VARDAAN HOSPITAL & MATERNITY CENTER, GAYA
        </h1>
        {!drawerState ? (
          <GiHamburgerMenu
            onClick={() => changeDrawerState(!drawerState)}
            className='flex-2 absolute right-4 top-16 h-5 w-5 cursor-pointer '
          />
        ) : (
          <RiCloseFill
            onClick={() => changeDrawerState(!drawerState)}
            className='flex-2 fixed right-4 top-16 z-20 h-5 w-5 cursor-pointer'
          />
        )}
      </div>
      <Menu visible={drawerState} changeVisibility={changeDrawerState} />
      <a
        href='https://goo.gl/maps/GQ7vDQbR9p3r1ChK6'
        target='_blank'
        rel='noopner'
        className='grid'
      >
        <span className='mx-auto flex items-center'>
          Gewalbigha, Gaya, Bihar 823001 <FiExternalLink />
        </span>
      </a>
      <div className='md:text-md mx-auto my-5 grid w-52 grid-flow-col gap-5 text-center text-[12px] font-medium uppercase'>
        {' '}
        <a
          href='tel:+916203188133'
          className='border-2 border-black p-3 transition-all hover:bg-black hover:text-white '
        >
          Phone
        </a>
        <a
          href='mailto:contact@vardaangaya.com'
          className='border-2 border-black p-3 transition-all hover:bg-black hover:pb-1 hover:text-white'
        >
          Email
        </a>
      </div>
    </header>
  );
}

export default NavBar;
