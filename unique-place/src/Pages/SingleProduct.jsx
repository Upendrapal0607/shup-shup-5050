import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const SingleProduct = () => {
  const { id } = useParams();
  const [SingleProductdata, setSingleProduct] = useState({});
  console.log(SingleProductdata);
  React.useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setSingleProduct(res.data);
    });
  }, [id]);

  const { image, name, brand, price, color, rating, gender, category } =
    SingleProductdata;
  return (
    <DIV>
      <div className="main-div">
        <div className="img-box">
          <img className="img" src={image} alt="" />
        </div>
        <div className="other-contant-main">
          <div className="extra-infarmation">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="10"
              scrolldelay="100"
            >
              Quikcly buy the product with 25% discount
            </marquee>
            <marquee
              behavior="scroll"
              direction="right"
              scrollamount="10"
              scrolldelay="100"
            >
              Quikcly buy the product with 25% discount
            </marquee>
          </div>
          <div className="other-contant">
            <div className="content">
              <h1 className="name">{name}</h1>
              <p>
                {" "}
                <span>Price </span>
                {`: ${price}`}
              </p>
              <p>
                {" "}
                <span>Brand </span>:{brand}
              </p>
              <p>
                {" "}
                <span>Gender </span>:{gender}
              </p>
              <p>
                {" "}
                <span>Category </span>:{category}
              </p>
              <p>
                {" "}
                <span>Rating</span> : {rating}
              </p>
              <p>
                {" "}
                <span>Color </span>: {color}
              </p>
            </div>
            <div>Price and Discount</div>
          </div>
        </div>
      </div>
    </DIV>
  );
};
export default SingleProduct;
const DIV = styled.div`
  .main-div {
    border: 0px solid red;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .other-contant-main {
    width: 55%;
    border: 0px solid red;
    /* display: flex;
  flex-direction: column;
  gap:20px; */
  }
  .extra-infarmation {
    width: 100%;
    margin-bottom: 30px;
    border: 0px solid green;
    padding: 8px;
    background-color: #1abdc9;
    font-size: 20px;
    font-weight: 600;
    color: #4400ff;
  }
  .other-contant {
    width: 100%;
    /* height: 500px; */
    border: 0px solid red;
    display: flex;
    justify-content: space-around;
  }
  .img-box {
    width: 40%;
    height: 500px;
    border: 0px solid red;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .content {
    text-align: start;
    border: 0px solid blue;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin-left: 10px;
  }
  .name {
    font-size: 20px;
    font-weight: 500;
    color: #1a2fc9;
    text-align: center;
  }
`;
