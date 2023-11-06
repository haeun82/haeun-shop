import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";

// 방법1: 스타일드 컴포넌트로 스타일 확장
// const StyledCol = styled(Col)`
//   cursor: pointer;
// `;

// 방법2: GlobalStyle에 공통 스타일로 작성
// className='cursor-pointer'


function ProductListItem(props) {
  const { product: { id, title, price, imagePath} } = props;
  // console.log(props);

  const navigate = useNavigate();

  return (
    <Col md={4} className='cursor-pointer'>
      <img src={imagePath} width="80%"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      />
      <h4>{title}</h4>
      <p>{price}</p>
    </Col>
  );
}

export default ProductListItem;