import { useState } from 'react';

const InputMirror = () => {
  // 1. 현재 입력창에 타이핑 중인 문자열을 관리하는 상태다.

  const [text, setText] = useState('');

  // 2. '저장하기' 버튼을 눌렀을 때 기록들을 보관할 배열 상태다.

  const [savedList, setSavedList] = useState([]);

  // 3. input 창에 변화가 생길 때마다 실행되어 상태를 갱신한다.

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 4. 현재 입력된 텍스트를 기록 배열에 추가하는 함수다.

  const handleSave = () => {
    // 텍스트가 비어있지 않을 때만 저장하도록 방어 코드를 작성한다.

    if (text.trim() !== '') {
      // 기존 배열(prevList)을 복사하고 그 뒤에 새로운 텍스트를 추가하여 상태를 변경한다.

      setSavedList((prevList) => [...prevList, text]);

      // 저장이 완료되면 다음 입력을 위해 입력창을 비운다.

      setText('');
    }
  };

  // 5. 현재 입력창의 내용만 지우는 함수다.

  const handleReset = () => {
    setText('');
  };

  // 6. 전체 기록을 삭제하는 함수다.

  const handleClearHistory = () => {
    setSavedList([]);
  };

  // 7. map 함수 대신 for 문을 사용하여 저장된 기록 목록 UI를 생성한다.

  const historyElements = [];

  for (let i = 0; i < savedList.length; i++) {
    // 배열에 담긴 문자열을 차례대로 꺼내어 <li> 태그로 감싼다.

    // 리액트에서 반복 생성되는 요소는 반드시 고유한 key 값을 가져야 한다.

    historyElements.push(
      <li className='history-item' key={i}>
        <span className='bullet'>📌</span> {savedList[i]}
      </li>,
    );
  }

  return (
    <div className='mirror-container'>
      <h2>실시간 미러링 및 기록장</h2>

      {/*

제어 컴포넌트의 핵심:

value를 상태인 'text'에 연결하고, onChange를 통해 상태를 업데이트한다.

*/}

      <input
        type='text'
        className='mirror-input'
        placeholder='여기에 내용을 입력하세요'
        value={text}
        onChange={handleChange}
        // 엔터 키를 눌렀을 때도 저장되도록 이벤트를 추가한다.

        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
      />

      <div className='result-area'>
        <p className='label'>실시간 미러링:</p>

        <h3 className='display-text'>{text || '입력 대기 중...'}</h3>
      </div>

      {/* 버튼들을 나란히 배치하는 영역 */}

      <div className='button-group'>
        <button className='save-btn' onClick={handleSave}>
          저장하기
        </button>

        <button className='reset-btn' onClick={handleReset}>
          초기화
        </button>
      </div>

      {/* 저장된 기록이 1개라도 있을 때만 아래 영역을 화면에 렌더링한다. (조건부 렌더링) */}

      {savedList.length > 0 && (
        <div className='history-area'>
          <div className='history-header'>
            <p className='label'>저장된 기록 ({savedList.length}건)</p>

            <button className='clear-history-btn' onClick={handleClearHistory}>
              전체 삭제
            </button>
          </div>

          <ul className='history-list'>
            {/* for 문으로 조립해둔 <li> 요소들의 배열을 출력한다. */}

            {historyElements}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputMirror;
