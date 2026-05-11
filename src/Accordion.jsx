import { useState } from 'react';

const App = () => {
  const database = [
    { text: '삶이 있는 한 희망은 있다.', author: '키케로' },
    { text: '산다는 것 그것은 치열한 전투이다.', author: '로망로랑' },
    {
      text: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
      author: '사무엘 존슨',
    },
    {
      text: '언제나 현재에 집중할 수 있다면 행복할 것이다.',
      author: '파울로 코엘료',
    },
    { text: '피할 수 없으면 즐겨라.', author: '로버트 엘리엇' },
  ];

  const [currentQuote, setCurrentQuote] = useState(database[0]);
  const [history, setHistory] = useState([]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * database.length);
    const selected = database[randomIndex];
    setCurrentQuote(selected);
    setHistory([selected, ...history]);
  };

  // map을 배제한 for문 렌더링 로직
  const renderHistory = () => {
    const historyList = [];
    for (let i = 0; i < history.length; i++) {
      historyList.push(
        <li
          key={i}
          className='mb-3 p-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg text-white shadow-sm'
        >
          <p className='text-sm italic'>"{history[i].text}"</p>
          <p className='text-xs text-white/60 mt-1'>- {history[i].author}</p>
        </li>,
      );
    }
    return historyList;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6'>
      <div className='max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 text-center'>
        <h1 className='text-3xl font-bold text-white mb-8 tracking-tight'>
          📜 Quote Generator
        </h1>

        {/* 메인 명언 카드 */}
        <div className='min-h-[160px] flex flex-col justify-center mb-8 p-6 bg-white/10 rounded-2xl border border-white/10 shadow-inner'>
          <h2 className='text-xl md:text-2xl font-medium text-white mb-4 leading-relaxed'>
            "{currentQuote.text}"
          </h2>
          <p className='text-white/80 font-light'>- {currentQuote.author}</p>
        </div>

        <button
          onClick={generateQuote}
          className='w-full py-4 bg-white/30 hover:bg-white/40 active:scale-95 transition-all duration-200 rounded-xl text-white font-semibold border border-white/40 shadow-lg mb-10'
        >
          새 명언 생성
        </button>

        {/* 히스토리 영역 */}
        <div className='text-left'>
          <h3 className='text-white/90 font-bold mb-4 flex items-center'>
            <span className='w-8 h-[1px] bg-white/50 mr-2'></span>
            History
          </h3>
          <ul className='max-h-60 overflow-y-auto pr-2 custom-scrollbar'>
            {renderHistory()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
