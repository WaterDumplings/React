import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [post, setPost] = useState(['리엑트', '자바', 'HTML', '배고픔', '배부름', '오잉']);
  let [good, setGood] = useState(0);


  return (
    <div className="App">
      <div className="back">
        <div className="nav-bar">
          <h4>Blog</h4>
        </div>

        <button onClick={() => { 
          let copy = [...post.sort()]
          setPost(copy)
         }}>가나다 정렬</button>

         <button onClick={() => {
          let copy1 = [...post]
          copy1[0] = 'React'
          setPost(copy1)
         }}>오잉</button>

        <div className="list">
          <h4>{post[0]} <span onClick={() => { setGood(good+1) }}>👏</span> {good} </h4>
          <p>2020년 2월 22일</p>
        </div>
        <div className="list">
          <h4>{post[1]}</h4>
          <p>2020년 2월 22일</p>
        </div>
        <div className="list">
          <h4>{post[2]}</h4>
          <p>2020년 2월 22일</p>
        </div>
        <div className="list">
          <h4>{post[3]}</h4>
          <p>2020년 2월 22일</p>
        </div>
        <div className="list">
          <h4>{post[4]}</h4>
          <p>2020년 2월 22일</p>
        </div>
        <div className="list">
          <h4>{post[5]}</h4>
          <p>2020년 2월 22일</p>
        </div>
      </div>
    </div>
  );
}

export default App;
