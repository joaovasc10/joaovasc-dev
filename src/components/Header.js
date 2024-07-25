import React from 'react';

//images
import Logo from '../assets/logo-site.png';
import LogoAlt from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center '>
          {/* logo */}
          <a href='#'>
            {/* <img src={ Logo } alt='logo' style={{ width:"135px", height:"75px" }}/> */}
            {/* <img src={ LogoAlt } alt='logoAlt'/> */}
          </a>
          {/* button */}
          <button className='btn btn-sm'> Trabalhe comigo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
