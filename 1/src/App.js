import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집 :)';
  // state쓰는 이유 -> html이 자동으로 재렌더링이 된다. : 자동으로 바꿔줌
  let [글제목, 글제목변경] = useState(['하입보이 잘 추는법', '남자 코트 추천', '배곧 공원 추천', '한라비발디1차맛집']);
  let [날짜, c] = useState(['2023년 5월 10일', '2023년 5월 20일', '2023년 5월 25일', '2023년 5월 27일']);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className='black-nav'>
      <h4>블로그 로고 입니다.</h4>
      </div>
      {/* <div className='list'>
        <button onClick={() => {
          let copy2 = [...글제목];
          copy2.sort()
          글제목변경(copy2);
        }}>가나다순 정렬</button>
      <span className='womanButton' onClick={() => {
        // ...을 사용하는 이유는 기존 arr랑 신규 arr랑 다르다는것을 알려주기 위함임
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>여자</span>
        <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>{날짜[0]}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{날짜[1]}</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal)
        }}>{글제목[3]}</h4>
        <p>{날짜[3]}</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key = {i}>
            <h4 onClick={() => {
              setModal(!modal)
            }}>{ a } <span onClick={() => {따봉변경[i](따봉[i]+1)}}>👍</span> {따봉[i]}  </h4>
            <p>{날짜[i]}</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

// 컴포넌트 만들기
/* 
  컴포넌트를 언제 많이 사용하는가?
    1. 반복적인 html 축약할 때
    2. 큰 페이지들 만들때
    3. 자주변경 되는 것들
*/
function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
