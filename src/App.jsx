import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [btnColor1, setBtnColor1] = useState('');
  const [btnColor2, setBtnColor2] = useState('');

  const onClickEnter = () => {
    setMessage('안녕하세요');
    setColor1('red');
    setColor2('');
  };
  const onClickLeave = () => {
    setMessage('안녕히 가세요');
    setColor2('green');
    setColor1('');
  };

  const onClickColor1 = () => setBtnColor1('red');
  const onClickColor2 = () => setBtnColor2('green');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color1 || color2 }}>{message}</h1>
      <button
        onClick={onClickColor1}
        style={{ backgroundColor: btnColor1, color: 'white' }}
      >
        빨간색
      </button>
      <button
        onClick={onClickColor2}
        style={{ backgroundColor: btnColor2, color: 'white' }}
      >
        초록색
      </button>
    </>
  );
};

export default App;
