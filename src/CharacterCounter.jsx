import { useState } from 'react';

function CharacterCounter() {
  // 입력된 텍스트를 저장하는 상태
  const [text, setText] = useState('');
  // 최대 허용 글자 수 설정(상수)
  const MAX_LENTH = 50;
  // 입력 내용이 변경될 때마다 실행되는 기능(함수)
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENTH) {
      setText(e.target.value);
    }
  };
  // 공백을 제외한 글자 수 계산
  const textWithoutSpaces = text.replace(/\s/g, '');
  // 진척도를 의미하는 수평방향 막대 그래프 모양을 표시하기
  // 0~100% 표시하기
  const progressPercentage = Math.min((text.length / MAX_LENTH) * 100, 100);
  // 최대 허용 값을 초과하는지 여부를 점검하기 위한 변수
  const isOverLimit = text.length > MAX_LENTH;

  return (
    <div className='counter-card'>
      <h2>메모 작성하기</h2>
      <textarea
        className={`text-input ${isOverLimit ? 'input-error' : ''}`}
        placeholder='내용을 입력하세요(최대 50글자)'
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className='progress-container'>
        <div
          className={`progress-bar ${isOverLimit ? 'progress-error' : ''}`}
          style={{ width: `${progressPercentage}` }}
        ></div>
      </div>
      {/* 전체 글자 수 및 공백 제외 글자 수 표시*/}
      <div className='status-bar'>
        <div className='count-info'>
          <p className={`count-text ${isOverLimit ? 'limit-reached' : ''}`}>
            전체: <strong>{text.length}</strong> / {MAX_LENTH}
          </p>
          <p className='count-text-small'>
            (공백 제외 : {textWithoutSpaces.length}자)
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
