import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartList: [
    // {
    //   id: "1",
    //   title: "Arcsaber 11 Pro",
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: "3",
    //   title: "Aerus Z",
    //   price: 199000,
    //   count: 1
    // },
  ],
};


// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState ,
  reducers: {
    // Quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find(item => item.id === action.payload );
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find(item => item.id === id );
      targetItem.count -= 1;
    },
    // Quiz: 초기값과 동일한 형태의 객체를 넘겨주면 cartList(장바구니)에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가..
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload : cart }) => {
      const targetItem = state.cartList.find(item => item.id === cart.id);
      if (targetItem) {
        targetItem.count += cart.count;
      } else {
        state.cartList.push(cart);
      }
    },
    // Quiz: 장바구니에서 삭제하는 리듀서 만들기
    remoteItemFromCart: (state, { payload : id }) => {
      // 방법1
      // const targetIndex = state.cartList.findIndex(item => item.id === id);
      // state.cartList.splice(targetIndex, 1);

      // 방법2
      const newCartList = state.cartList.filter(item => item.id !== id);
      state.cartList = newCartList;

    },
  }
});

// 액션 생성 함수
export const { increaseCount, decreaseCount, addItemToCart, remoteItemFromCart } = cartSlice.actions;

// 선택자 함수
export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;