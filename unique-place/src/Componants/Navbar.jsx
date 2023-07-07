import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { LogedOut } from "../Redux/AuthReducer/Action";
const Navbar = () => {
  const { cart } = useSelector((store) => store.CartReducer);
  const { isAuth, token } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const handleLogedout = () => {
    dispatch(LogedOut());
  };
  return (
    <DIV>
      <Link to="/">HOME</Link>
      <Link to="/admin">ADMIN</Link>
      <div className="cart-div">
        <Link to="/cart">CART</Link>
        <h1 className="count-number">{cart.length == 0 ? "" : cart.length}</h1>
      </div>

      {isAuth ? (
        <div className="log-out">
          <h1 className="log-out-text">{token}</h1>
          <button className="log-out-btn" onClick={handleLogedout}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">LOGIN</Link>
      )}
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  width: 100%;
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  margin-bottom: 30px;
  background-color: black;
  color: wheat;
  .count-number {
    color: red;
    font-size: 18px;
    font-weight: 500;
  }
  .cart-div {
    display: flex;
  }
  .log-out {
    display: flex;
    gap: 5px;
  }
  .log-out-btn {
    border: 2px solid #6b6d80;
    padding: 5px 10px;
    background-color: #6b6d80;
    border-radius: 5px;
    width: 120px;
  }
  .log-out-text {
    border: 2px solid #6b6d80;
    padding: 5px 10px;
    background-color: #6b6d80;
    border-radius: 5px;
    width: 180px;
  }
`;
