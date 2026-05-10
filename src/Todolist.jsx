import React, { useState } from 'react';

const TodoList = () => {
  // 1. 할 일 목록을 저장하는 배열 상태입니다. 초기값은 빈 배열([])입니다.
  const [todos, setTodos] = useState([]);

  // 2. 사용자가 입력창에 타이핑하는 텍스트를 저장하는 상태입니다.
  const [inputValue, setInputValue] = useState('');

  // 3. 새로운 할 일을 추가하는 함수입니다.
  const addTodo = () => {
    // 빈 값 입력 방지 (공백만 입력된 경우도 막아줍니다)
    if (inputValue.trim() === '') return;

    // 새로운 할 일 객체 생성 (고유한 id와 텍스트 내용)
    const newTodo = {
      id: Date.now(), // 현재 시간의 밀리초를 고유 ID로 사용합니다.
      text: inputValue,
    };

    // ★ 핵심: 기존 배열(todos)을 직접 수정(push)하지 않고,
    // 스프레드 연산자(...)를 사용해 복사한 후 새로운 항목을 추가한 새 배열을 만듭니다.
    setTodos([newTodo, ...todos]);

    // 추가 후 입력창을 비워줍니다.
    setInputValue('');
  };

  // 4. 할 일을 삭제하는 함수입니다.
  const deleteTodo = (targetId) => {
    // filter 함수를 사용하여, 클릭된 항목의 id와 '다른' 항목들만 남겨서
    // 새로운 배열로 상태를 업데이트합니다. (삭제 효과)
    const updatedTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(updatedTodos);
  };

  // 5. 화면에 그릴 할 일 목록(<li> 요소들)을 담을 빈 배열을 만듭니다.
  const todoElements = [];

  // map 함수 대신 for 반복문을 사용하여 todoElements 배열에 JSX 요소를 채워 넣습니다.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todoElements.push(
      // 리액트에서 배열로 요소를 만들 때는 반드시 고유한 'key'를 부여해야 합니다.
      <li key={todo.id} className='todo-item'>
        <span className='todo-id'>{todo.id}</span>
        <span className='todo-text'>{todo.text}</span>

        <button onClick={() => deleteTodo(todo.id)} className='delete-btn'>
          삭제
        </button>
      </li>,
    );
  }

  return (
    <div className='todo-container'>
      <h2 className='todo-head'>오늘의 할 일</h2>

      <div className='input-group'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='할 일을 입력하세요...'
          className='todo-input'
        />
        <button onClick={addTodo} className='add-btn'>
          추가
        </button>
      </div>

      {/* 위에서 for문으로 만든 <li> 요소들의 배열을 <ul> 안에 렌더링합니다. */}
      <ul className='todo-list'>{todoElements}</ul>
    </div>
  );
};

export default TodoList;
