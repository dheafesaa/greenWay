import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";
import Box from "@mui/material/Box";
import AuthContent from "../components/molecules/AuthContent";
import LoginInput from "../components/organisms/LoginInput";
import LoginImg from "../assets/login.jpg";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }, navigate));
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box flex={{ xs: "1 1 100%", sm: "1 1 50%" }}>
        <AuthContent src={LoginImg} alt="LoginImg" />
      </Box>
      <Box flex={{ xs: "1 1 100%", sm: "1 1 50%" }}>
        <LoginInput login={onLogin} />
      </Box>
    </Box>
  );
}

export default LoginPage;
