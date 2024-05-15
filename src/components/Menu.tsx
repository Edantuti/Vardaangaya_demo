import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Site_Icon.png';

const Menu = (props: {
  visible: boolean;
  changeVisibility: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <>
      <nav
        className={
          props.visible
            ? 'fixed right-0 top-0 z-10 mb-4 h-full w-full bg-white shadow-lg transition-all sm:w-96'
            : 'fixed -right-96 top-0 z-10 mb-4 h-full w-96 bg-white transition-all sm:w-96'
        }
      >
        <img src={Logo} alt='' className='mx-auto my-28 h-24 w-24' />
        <div className='mx-auto grid grid-flow-row'>
          <Link
            to='/'
            onClick={() => {
              props.changeVisibility(!props.visible);
            }}
            className='px-2 py-1 text-center'
          >
            Home
          </Link>
          <Link
            to='/gallery'
            onClick={() => {
              props.changeVisibility(!props.visible);
            }}
            className='px-2 py-1 text-center'
          >
            Photo Gallery
          </Link>
          <Link
            to='/blogs'
            onClick={() => {
              props.changeVisibility(!props.visible);
            }}
            className='px-2 py-1 text-center'
          >
            Blog
          </Link>

          <Link
            to='/contact'
            onClick={() => {
              props.changeVisibility(!props.visible);
            }}
            className='px-2 py-1 text-center'
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
