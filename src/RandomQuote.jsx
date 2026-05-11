// 1. 화면에 출력할 명언 데이터 배열

import { useState } from 'react';

// 개발자, 크리에이터의 성장을 돕는 문구들로 구성했다.

const quotes = [
  { text: '버그는 코드를 작성한 사람의 거울이다.', author: '미상' },

  {
    text: '컴퓨터는 당신이 원하는 것을 하지 않고, 명령한 것을 한다.',
    author: '리처드 파인만',
  },

  {
    text: '완벽한 코드는 존재하지 않는다. 끊임없이 개선할 뿐이다.',
    author: '미상',
  },

  {
    text: '훌륭한 프롬프트가 훌륭한 결과물을 만든다.',
    author: 'AI 크리에이터',
  },

  {
    text: '대충 흑백사진에 글 쓰면 명언 같다.',
    author: '이병건',
  },
  {
    text: '늦었다고 생각할 때가 진짜 너무 늦었다.',
    author: '박명수',
  },
];

const RandomQuote = () => {
  // 현재 화면에 보여줄 명언 관리
  // 초기값은 배열의 첫 번째 명언으로 설정한다
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  //  위에서 본 명언들의 기록을 저장하는 배열
  // 최초에는 첫 번째 명언마 기록에 넣어둔다
  const [history, setHistory] = useState([quotes[0]]);

  // 새로운 명언을 생성하고 기록에 추가하는 기능 : 0~5까지의 정수
  // Math.random() 0부터 5까지의 정수를 무작위로 만들어서
  // 배열에서 그 위치의 내용을 가져온다
  // 진정한 Random은 시간의 변화를 포함하여야 한다.
  // seed(시간 정보)를 추가한다
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    // 현재 보여지는 명언을 교체한다
    setCurrentQuote(selectedQuote);

    // 기로 배열을 업데이트한다(최대 5개 까지만 유지하기)
    // 기존 기록의(prevHistory) 맨 앞에 새 명언을 추가, 5개가 넘으면 맨 끝을 자르기
    setHistory((prevHistory) => {
      const newHistory = [selectedQuote, ...prevHistory];
      if (newHistory.length > 5) {
        // 배열의 길이를 강제로 5로 설정 -> 오래된 기록을 삭제한다
        newHistory.length = 5;
      }
      return newHistory;
    });
  };

  const historyElements = [];
  for (let i = 0; i < history.length; i++) {
    const item = history[i];
    historyElements.push(
      // 반복문에는 생성되는 요소에 반드시 고유한 key가 필요하다
      // 이 코드에서는 인덱스(i)를 키로 사용한다
      <li className='history-item' key={i}>
        <span className='history-text'>{item.text}</span>
        <span className='history-author'>{item.author}</span>
      </li>,
    );
  }

  return (
    <div className='quote-container'>
      {/* 메인 영어 카드 영역 */}
      <div className='quote-card'>
        <div className='quote-content'>
          <p className='quote-text'>{currentQuote.text}</p>
          <p className='quote-author'>{currentQuote.author}</p>
        </div>
        <button className='quote-btn' onClick={generateRandomQuote}>
          명언제조
        </button>
      </div>
      {/* 이전의 기록을 보여주는 영역 */}
      <div className='history-board'>
        <h3>최근 열람 기록(최대 5개)</h3>
        <ul className='history-list'>
          {/* for문을 이룔하여 배열을 그대로 출력한다 */}
          {historyElements}
        </ul>
      </div>
    </div>
  );
};

export default RandomQuote;
