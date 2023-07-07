import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../Componants/ProductList";
import { Getproducsuccess } from "../Redux/ProductReducer/Action";
import SideNavbar from "../Componants/SideNavbar";
import { Spinner } from "@chakra-ui/react";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, Products } = useSelector(
    (store) => store.ProductReducer
  );

  const dispatch = useDispatch();
  const GetData = () => {
    let paramObj = {
      params: {
        gender: searchParams.getAll("gender"),
        category: searchParams.getAll("category"),
        _sort: searchParams.get("sortBy") && "price",
        _order: searchParams.get("sortBy"),
      },
    };
    dispatch(Getproducsuccess(paramObj));
  };
  useEffect(() => {
    GetData();
  }, [searchParams]);
  return (
    <DIV>
      {isLoading ? (
        <div>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : isError ? (
        <div className="error-div">
          <h1 className="error-massage">
            Somthing Went Wrong please refresh the page or try later
          </h1>
          <img
            className="error-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_error-destructive.svg/2048px-OOjs_UI_icon_error-destructive.svg.png"
            alt=""
          />
        </div>
      ) : (
        <div className="sidebar-product-list">
          <SideNavbar />
          {Products.length == 0 ? (
            <div className="product-not-found">
              <h1>Product Not Found</h1>
            </div>
          ) : (
            <ProductList Products={Products} />
          )}
        </div>
      )}
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  .sidebar-product-list {
    display: flex;
    justify-content: space-between;
    margin: 15px;
    border: 0px solid blue;
  }
  .error-massage {
    color: red;
    font-size: 20px;
    font-weight: 500;
  }
  .error-img {
    width: 20%;
  }
  .error-div {
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .product-not-found {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 550;
    color: red;
    border: 0px solid green;
  }
`;
