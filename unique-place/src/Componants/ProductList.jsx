import React from "react";
import ProductCard from "./ProductCard";
import { border } from "@chakra-ui/react";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const ProductList = ({ Products }) => {
  // const CartData=JSON.parse(localStorage.getItem("cartData"))
  // const [cartData,setCartData]=React.useState(CartData||[])
  // localStorage.setItem("cartData",JSON.stringify(cartData))
  // console.log("cartData-->",cartData)
  return Products.lenght == 0 ? (
    <div>Product Not Found</div>
  ) : (
    <DIV>
      {Products?.map((item, index) => (
        <ProductCard {...item} />
      ))}
    </DIV>
  );
};

export default ProductList;
// style={{width:"80%",display:'grid',gap:"10px",justifyContent:
// "center",alignItems:"center",gridTemplateColumns:"repeat(4,1fr)"}}
const DIV = styled.div`
  position: relative;
  width: 80%;
  display: grid;
  gap: 10px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
