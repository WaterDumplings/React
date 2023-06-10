import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';
import { addCount } from '../store.js'

function Cart() {

  let basket = useSelector((state) => { return state });
  // store.js로 요청보내주는 함수
  let dispatch = useDispatch()

  return (
    <div>
      
      <h6> {basket.user.name} 나이 {basket.user.age}의 장바구닝 </h6>
      <button onClick={() => {dispatch(changeName())}}> 이름변경 </button>
      <button onClick={() => {dispatch(changeAge(100))}}> 나이변경 </button>
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            basket.basket.map((a, i) => {
              return (
                <tr key = {i}>
                  <td>{basket.basket[i].id}</td>
                  <td>{basket.basket[i].name}</td>
                  <td>{basket.basket[i].count}</td>
                  <td><button onClick={() => { 
                    dispatch(addCount(basket.basket[i].id))
                   }}>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
/* 
function CartList(props) {
  return (
    <tr>
      <td>{props.a.basket[0].id}</td>
      <td>{props.a.basket[0].name}</td>
      <td>{props.a.basket[0].count}</td>
      <td><input type="checkbox" /></td>
    </tr>
  )
} */


export default Cart