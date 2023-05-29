import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className='py-4 flex justify-between'>
        <div className="logo-wrapper">
          <Image
          className='logo-image'
          src={ theme === 'light' ? '/loon_logo_light.svg' : '/loon_logo_dark.svg' }
          alt="Loon"
          width={ 80 }
          height={ 50 } />
        </div>
        <div className="month-year-filter flex justify-between">
          <button className='pr-2'>
            <Image
            className='rotate-90'
            src={ theme === 'light' ? '/loon_arrow_light.svg' : '/loon_arrow_dark.svg' }
            alt="Previous Month"
            width={ 10 }
            height={ 10 } />
          </button>
          <p>April, 2023</p>
          <button className='pl-2'>
            <Image
            className='-rotate-90'
            src={ theme === 'light' ? '/loon_arrow_light.svg' : '/loon_arrow_dark.svg' }
            alt="Next Month"
            width={ 10 }
            height={ 10 } />
          </button>
        </div>
      </header>
  );
};

export default Header;
