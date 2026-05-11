import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: '리액트란 무엇인가요?',
    answer: '사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리다.',
  },
  {
    id: 2,
    question: 'useState는 왜 쓰나요?',
    answer:
      '컴포넌트 내에서 변경되는 데이터를 관리하고 화면을 갱신하기 위해 사용한다.',
  },
  {
    id: 3,
    question: '컴포넌트란 무엇인가요?',
    answer: 'UI를 구성하는 재사용 가능한 최소 단위를 의미한다.',
  },
  {
    id: 4,
    question: 'JSX는 무엇인가요?',
    answer:
      '자바스크립트 파일 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법 확장이다.',
  },
];

const Accordian = () => {
  // 현재 열려있는 항목의 Id 값을 저장한다. 초기상태는 null. 모든 내용이 접힌 상태를 의미
  const [activeIndex, setActiveIndex] = useState(null);
  // 사용자가 항목을 클릭하면 상태를 변경시키자
  const toggleAccordian = (id) => {
    // 이미 열려있다면 null로 설정하여 닫고, 새로운 항목을 클릭하면 해당 id를 인지한다
    setActiveIndex(activeIndex === id ? null : id);
  };
  // 화면에 표시할 요소 들을 담을 배열 선언
  const accordianItems = [];

  // for 문을 이용하여 데이터를 순환하면서 작업을 진행한다
  for (let i = 0; i < faqData.length; i++) {
    const item = faqData[i];

    // 현재 저장된 항목의 id와 상태값을 비교하여 같으면 열린 상태
    const isOpen = activeIndex === item.id;

    accordianItems.push(
      <div className='accordian-item' key={item.id}>
        <div
          className={`accordian-title ${isOpen ? 'active' : ''}`}
          onClick={() => toggleAccordian(item.id)}
        >
          <h3>
            Q{i + 1}.{item.question}
          </h3>
          <span className={`icon ${isOpen ? 'rotate' : ''}`}>🔽</span>
        </div>
        {/* 조건부 렌더링 : isOpen이 true 일 떄만 답변 영영기 화면에 그려진다 */}
        {isOpen && (
          <div className='accordian-content'>
            <p>{item.answer}</p>
          </div>
        )}
      </div>,
    );
  }

  return (
    <div className='accordion-container'>
      {/* for문을 이용해서 처음부터 마지막 순서대로 보여준다 */}
      {accordianItems}
    </div>
  );
};

export default Accordian;
