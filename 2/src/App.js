import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [post, setPost] = useState(['리엑트', '자바', 'HTML', '배고픔', '배부름', '오잉']);
  let [good, setGood] = useState([0, 0, 0, 0, 0]);
  let [modal, setModal] = useState(false);

  // map 함수 -> 반복문으로 생각하면 될 듯?
  /* 
    파라미터에 넣을경우 array만큼 반복함
    return을 넣을 경우 return을 array에 담아준다.
  */
  [1, 2, 3].map(function(e){
    return '디지몬'
  })


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

         {
          post.map(function(e, i){
            return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal)
              }}>
                { post[i] }  <span onClick={() => { 
                let copyGood = [...good]
                copyGood[i] += 1
                setGood(copyGood)
                }}>👏</span> {good[i]} 
              </h4>
              <p>2020년 2월 22일</p>
            </div>
          )
          })
         }

          {/* 조건문 -> 조건식 ? 참 코드 : 거짓 코드 */}
        {
          // 1 == 1 ? '맞아' : '아니야'
          modal == true ? <Modal /> : null
        }


      </div>
    </div>
  );
}

  // component -> div 뭉치들을 함수로 묶어버려서 가독성 좋게 만드는 작업
    // component : 반복적인 html 축약, 큰 페이지, 자주변경되는 것들
                //  단점 : 데이터 바인딩 하기 어려움 
function Modal() {
  return (
    <div className='modal'>
    <h4>글 제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
   </div>
  )
}

export default App;
