import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtocart, GetCartProduct } from "../Redux/CartReducer/Action";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Deleteproductsuccesfull } from "../Redux/ProductReducer/Action";
import axios from "axios";
// import { legacy_createStore } from "redux";
const ProductCard = ({
  id,
  image,
  name,
  brand,
  price,
  color,
  rating,
  gender,
  category,
}) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const { cart } = useSelector((store) => store.CartReducer);
  // const cartDatafromlocal=JSON.parse(localStorage.getItem("cartData"))
  // console.log("cartDatafromlocal",cartDatafromlocal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCartProduct());
  }, []);

  const handleAdd = () => {
    if (CartAlert(id)) {
      alert("Product Alraidy into the cart");
    } else {
      axios.get(`http://localhost:8080/products/${id}`).then((res) => {
        dispatch(Addtocart(res.data));
        // let newData=[...cartData];
        //  newData= [...newData,res.data]
        // setCartData(prev=>[...prev,res.data])
        // localStorage.setItem("cartData",JSON.stringify(cartData))
      });
      alert("Product Added into the cart");
    }
  };
  const CartAlert = (id) => {
    for (let el of cart) {
      if (el.id == id) {
        return true;
      }
    }
    return false;
  };
  const handleDelete = () => {
    dispatch(Deleteproductsuccesfull(id));
  };

  return (
    <DIV key={id}>
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
          <button className="card-btn" onClick={handleAdd}>
            ADD TO CART
          </button>
          <Link to={`/products/${id}`}>
            <button className="card-btn">{`MORE>`}</button>
          </Link>
        </div>
        {isAuth && (
          <div className="button-div">
            <Link>
              <button onClick={handleDelete} className="card-btn">
                DELET
              </button>
            </Link>
            <Link to={`/products/${id}/edit`}>
              <button className="card-btn">EDIT</button>
            </Link>
          </div>
        )}
      </div>
    </DIV>
  );
};

export default ProductCard;

const DIV = styled.div`
  text-align: left;
  /* border:2px solid #120d0d; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #120d0d;

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

  .card-btn:hover {
    background-color: white;
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
`;
