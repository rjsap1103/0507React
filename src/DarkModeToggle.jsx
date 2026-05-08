import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/*theme-box 라는 클래스 와 ${}안에있는 클래스 두개 중 하나 를 적용한다. */}
      <h2>{isDarkMode ? '어둠' : '빛'}</h2>
      <p>상태값(isDarkMode): {isDarkMode.toString()}</p>
      <button onClick={toggleTheme} className='toggle-btn'>
        {isDarkMode ? '밝게 보기' : '어둡게 보기'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
