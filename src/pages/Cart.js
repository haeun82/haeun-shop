import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, remoteItemFromCart, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const dispatch = useDispatch();
  const cartList = useSelector((selectCartList));

  const formatter = new Intl.NumberFormat('ko-KR');


  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>

          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000</td>
          </tr> */}
          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩하기 */}
          {cartList.map((item, index) => {
            return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <button
                  onClick={() => { dispatch(decreaseCount(item.id)); }}
                >
                  -
                </button>
                {item.count}
                <button onClick={() => { dispatch(increaseCount(item.id)); }}>
                  +
                </button>
              </td>
              <td>{formatter.format(item.price * item.count)}원</td>
              {/* Quiz: 표의 행마다 삭제버튼 만들고 누르면 상품이 삭제되도록 만들기 */}
              <td><button onClick={() => { dispatch(remoteItemFromCart(item.id)); }}>🗑</button></td>
            </tr>
          )})}

          <tr>
            <th>합계</th>
            <td></td>
            <td></td>
            <th>
              {formatter.format(
                cartList.reduce((prev, cart) => {
                  return prev + (cart.price * cart.count);
                }, 0))}원
            </th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Cart;