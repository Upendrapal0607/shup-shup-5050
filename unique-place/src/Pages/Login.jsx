import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetAuthntication } from "../Redux/AuthReducer/Action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login", location);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      email,
      password,
    };
    dispatch(GetAuthntication(newObj)).then((res) => {
      navigate(location.state);
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        action=""
        style={{
          width: "70%",
          border: "2px solid #8a9998",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <FormControl isRequired w={"100%"}>
          <FormLabel>Email </FormLabel>
          <Input
            w={"100%"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel>Password </FormLabel>
          <Input
            w={"100%"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormControl>
        <FormControl isRequired w={"100%"}>
          <FormLabel></FormLabel>
          <Input w={"100%"} type="submit" bg={"#13d6cc"} cursor={"pointer"} />
        </FormControl>
      </form>
    </div>
  );
};

export default Login;
