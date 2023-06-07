import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let {id} = useParams();
  let findContent = props.shoes.find(function(x) {
    return x.id == id
  });

  let [count, setCount] = useState(0)
  let [modal, setModal] = useState(true);
  let [num, setNum] = useState('')

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
      alert('하앙그러지마.')
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;