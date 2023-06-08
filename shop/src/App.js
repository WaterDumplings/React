import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pageError from './images/404_page.jpg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'
import axios from 'axios'
import loding from './images/loding.gif'
import Cart from './routes/Cart.js';

function App() {

  let [shoes, setShoes] = useState(data)
  // 페이지 이동을 도와줌
  let navigate = useNavigate();
  let [modalLoding, setModalLoding] = useState(false);

  return (
    <div className="App">
      {/* ---------- 네비게이션 바 ---------- */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>무슨 쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/evnet') }}>evnet</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        {/* ------------------- 컨텐츠 --------------------- */}
      {/* 리액트 라우터 돔 -> 내 페이지들을 만들기 */}
      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
            {modalLoding == true ? lodingImg() : null}
          <Container>
            <Row>
              {
                shoes.map(function (a, i) {
                  return (
                    <Content shoes={shoes[i]} i={i + 1} key = {i} navigate = {navigate} />
                  )
                })
              }
            </Row>
          </Container>
          <button onClick={() => { 
            let count = 0
            count++
            console.log(count)
            if (count == 1) {
              setModalLoding(true)
            // ajax 라이브러리 사용해서 외부 데이터 가져오기(axios 사용)
            axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => { 
              let copy = [...shoes, ...result.data] 
              setShoes(copy)
              setModalLoding(false)
            })
            .catch(() => {
              console.log('실패했습니다.')
            })
            }
            
           }}>더보깅</button>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes = {shoes}/>} />

          {/* 이벤트 */}
        <Route path='/evnet' element={ EventPage() }>
          <Route path='one' element = { <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path='two' element = { <div>생일기념 쿠폰받기</div> } />
        </Route>

        <Route path='/about' element={About()} > 
          <Route path='member' element={<div>멤보임</div>} />
          <Route path='location' element={<div>회사위치임</div>} />
        </Route>

        <Route path='/cart' element = {<Cart />} ></Route>

        <Route path='*' element={ <img src={pageError} width="80%" /> } />
      </Routes>

      
      
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet />
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사 정보입니다.</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Content(props) {
  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" onClick={() => { props.navigate('/detail/' + (props.i-1)) }} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

function lodingImg() {
  return (
    <img src = {loding}></img>
  )
}

export default App;
