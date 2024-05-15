import { Link } from 'react-router-dom';
import Logo from '../assets/Site_Icon.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { FaMap } from 'react-icons/fa';
import {useState} from 'react'
import Menu from './Menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
const Header = () => {
  const [drawerState, changeDrawerState] = useState(false);
  return (
    <>
    <header className='flex justify-between md:p-0 p-2 md:py-5 relative'>
      <div className='flex'>
        <img
          src={Logo}
          alt='Hospital Logo'
          className='h-16 w-16 md:h-20 md:w-20'
        />
        <div className='ml-2 mt-auto'>
          <h1 className='font-bold uppercase md:text-2xl text-sm'>
            Vardaan Hospital & Maternity Center, Gaya
          </h1>
          <div className='flex items-center gap-4'>
            <HeaderContactComponent
              data='Gewalbigha, Gaya, Bihar 823001'
              type='Location'
              value='https://maps.app.goo.gl/YFWeheWM4dmsn1s49'
              className='text-blue-700'
              Icon={<FaMap className='h-6 w-6' />}
            />
            <HeaderContactComponent
              data='Phone:+916203188133'
              value='tel:+916203188133'
              type='Phone Number'
              Icon={<FaPhoneAlt className='h-5 w-5' />}
            />
            <HeaderContactComponent
              data='Email:contact@vardaangaya.com'
              value='mailto:contact@vardaangaya.com'
              type='E-mail'
              Icon={<MdMailOutline className='h-6 w-6' />}
            />
          </div>
        </div>
      </div>
      <nav className='mt-auto hidden gap-5 text-xl font-medium xl:flex'>
        <Link to='/' className='transition-all hover:underline'>
          Home
        </Link>
        <Link to='/gallery' className='transition-all hover:underline'>
          Photo Gallery
        </Link>
        <Link to='/blogs' className='transition-all hover:underline'>
          Blog
        </Link>
        <Link to='/contact' className='transition-all hover:underline'>
          Contact
        </Link>
      </nav>
      {!drawerState ? (
          <GiHamburgerMenu
            onClick={() => changeDrawerState(!drawerState)}
            className='flex-2 absolute right-4 md:top-16 top-10 h-5 w-5 cursor-pointer xl:hidden'
          />
        ) : (
          <RiCloseFill
            onClick={() => changeDrawerState(!drawerState)}
            className='flex-2 fixed right-4 md:top-16 top-10 z-20 h-5 w-5 cursor-pointer xl:hidden'
          />
        )}
    </header>
    <Menu visible={drawerState} changeVisibility={changeDrawerState} />
    </>
  );
};

const HeaderContactComponent = ({
  data,
  type,
  value,
  className,
  Icon,
}: {
  data: string;
  type: string;
  value: string;
  className?: string;
  Icon: JSX.Element;
}) => {
  return (
    <span className='md:text-md text-xs font-medium'>
      <a href={value} target='_blank' className={className} title={type}>
        <span className='hidden md:block'>{data}</span>
        <span className='block md:hidden'>{Icon}</span>
      </a>
    </span>
  );
};

export default Header;
