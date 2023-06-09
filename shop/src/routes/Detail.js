import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';
import { addItem } from '../store.js'
import { useDispatch } from "react-redux";

function Detail(props) {
  let [count, setCount] = useState(0)
  let [modal, setModal] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch()

  let {id} = useParams();
  let findContent = props.shoes.find(function(x) {
    return x.id == id
  });

    // useEffect안에 있는 코드는
    //  html 렌더링 후에 동작함
  useEffect(() => {
    let a = setTimeout(() => { setModal(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('ㄴㄴㄴㄴㄴㄴㄴ그러지마.')
    }
  }, [num])

  return (
    <div className="container">
      <input onChange={(e) => {setNum(e.target.value)}} />
      {
        modal == true 
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div> 
        : null
      }
      {count}
      <button onClick={() => { setCount(count++) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findContent.title}</h4>
          <p>{findContent.content}</p>
          <p>{findContent.price}원</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }))
          }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {
            setTab(0)
          }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {
            setTab(1)
          }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {
            setTab(2)
          }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <TabContent tab = {tab} />

    </div>
  )
}

function TabContent({tab}) {
  /* if (tab == 0) {
    return <div>내용0</div>
  }
  if (tab == 1) {
    return <div>내용1</div>
  }
  if (tab == 2) {
    return <div>내용2</div>
  } */
  let [fade, setFade] = useState('')

  useEffect(() => {
    let a = setTimeout(() => { setFade('end') }, 100)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
  </div>)
}

export default Detail;