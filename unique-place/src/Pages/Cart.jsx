import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Deletecartproduct, GetCartProduct } from "../Redux/CartReducer/Action";
// import { Deletecartproduct, GetCartProduct } from '../Redux/CartReducer/Action';
const Cart = () => {
  const dispatch = useDispatch();
  // const cartDatafromlocal=JSON.parse(localStorage.getItem("cartData"))
  const { cart } = useSelector((store) => store.CartReducer);
  // const [deletedata,setDeleteData]=useState(cartDatafromlocal||[])

  // const [deletedata,setDeleteData]=useState(cartDatafromlocal||[])

  const navigate = useNavigate();
  // console.log("deletedata-->",deletedata);
  // console.log("cart-->",cart);
  useEffect(() => {
    dispatch(GetCartProduct());
  }, []);
  const handleDeleteCartproduct = (id) => {
    // let DeleteData=[...deletedata]
    // DeleteData=DeleteData.filter(el=>el.id!=id)
    // localStorage.setItem("cartData",JSON.stringify(DeleteData))
    // setDeleteData(DeleteData)
    dispatch(Deletecartproduct(id));
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <DIV>
      {cart.length == 0 && (
        <div className="empty-cart">
          <h1>Your cart is empty please add your wished</h1>
          <br />
          <br />
          <button className="add-wish" onClick={handleNavigate}>
            ADD WISH
          </button>
        </div>
      )}
      <div className="main-div">
        {cart?.map(
          (
            { id, image, name, brand, price, color, rating, gender, category },
            index
          ) => (
            <div className="single-cart-card" key={id}>
              <h3 style={{ textAlign: "center" }}>
                {" "}
                <span>Name</span> : {name}
              </h3>
              <div className="img-box">
                <img src={image} alt="" />
              </div>
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
              <div className="btn-main-div">
                <div className="button-div">
                  <Link>
                    <button
                      onClick={() => handleDeleteCartproduct(id)}
                      className="card-btn"
                    >
                      DELET
                    </button>
                  </Link>
                  <Link>
                    <button className="card-btn">BUY</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </DIV>
  );
};

export default Cart;
const DIV = styled.div`
  .main-div {
    position: relative;
    width: 95%;
    display: grid;
    margin: auto;
    gap: 10px;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
  /* style={{width:"95%",margin:"auto",display:'grid',gap:"10px",justifyContent:"center",alignItems:"center",gridTemplateColumns:"repeat(4,1fr)"}} */
  .single-cart-card {
    text-align: left;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #120d0d;
  }

  .img-box {
    border: 0px solid green;
    height: 300px;
  }
  .img-box > img {
    width: 100%;
    height: 100%;
  }

  .card-btn {
    border: 2px solid #6b6d80;
    padding: 5px 10px;
    background-color: #6b6d80;
    border-radius: 5px;
    width: 130px;
  }
  .add-wish {
    border: 2px solid #6b6d80;
    padding: 5px 10px;
    background-color: #6b6d80;
    border-radius: 5px;
    width: 130px;
    font-size: 18;
    font-weight: 550;
  }

  .card-btn:hover {
    background-color: white;
  }
  .add-wish:hover {
    background-color: white;
    color: green;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    color: #1a2fc9;
  }
  .button-div {
    display: flex;

    width: 100%;
    justify-content: space-around;
  }
  .btn-main-div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 7px;
    width: 100%;
    align-items: center;
  }
  .empty-cart {
    margin: auto;
    width: 100%;
    border: 0px solid blue;
  }
  .empty-cart > h1 {
    color: red;
    font-size: 18px;
    font-weight: 550;
  }
`;
