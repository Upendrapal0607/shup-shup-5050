import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Postproducsuccess } from "../Redux/ProductReducer/Action";
import { useNavigate } from "react-router-dom";
const initialValue = {
  name: "",
  image: "",
  description: "",
  price: 0,
  rating: 0,
  brand: "",
  color: "",
  gender: "",
  category: "",
};
const AdminePage = () => {
  const [data, setData] = useState(initialValue);
  const [Color, setColor] = useState("");
  const navigate = useNavigate();
  console.log("Color", Color);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: name == "price" || name == "rating" ? +value : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Postproducsuccess(data)).then((res) => {
      navigate("/");
    });
    setData(initialValue);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const {
    name,
    image,
    description,
    rating,
    price,
    color,
    brand,
    gender,
    category,
  } = data;
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        action=""
        style={{
          backgroundColor: " #0adbb8",
          width: "70%",
          border: "2px solid #8a9998",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <FormControl isRequired w={"100%"}>
          <FormLabel>Name </FormLabel>
          <Input
            w={"100%"}
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Image</FormLabel>
          <Input
            w={"100%"}
            value={image}
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Image url"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Description</FormLabel>
          <Input
            w={"100%"}
            value={description}
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="About product"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Price</FormLabel>
          <Input
            w={"100%"}
            value={price}
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Price"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Rating</FormLabel>
          <Input
            w={"100%"}
            value={rating}
            onChange={handleChange}
            name="rating"
            type="number"
            placeholder="Rating"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select Category"
            value={category}
            name="category"
            onChange={handleChange}
          >
            <option value="topwear">Top Wear</option>
            <option value="bottonwear">Bottom Wear</option>
            <option value="footwear">Foot Wear</option>
          </Select>
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Brand</FormLabel>
          <Input
            w={"100%"}
            value={brand}
            onChange={handleChange}
            name="brand"
            type="text"
            placeholder="Brand"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Color</FormLabel>
          <Select
            placeholder="Select Color"
            value={color}
            name="color"
            onChange={handleChange}
          >
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
          </Select>
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select Gender"
            value={gender}
            name="gender"
            onChange={handleChange}
          >
            <option value="male">Man</option>
            <option value="female">Woman</option>
            <option value="kids">Kids</option>
          </Select>
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel></FormLabel>
          <Input w={"100%"} type="submit" bg={"#23d613"} cursor={"pointer"} />
        </FormControl>
      </form>
    </div>
  );
};

export default AdminePage;
