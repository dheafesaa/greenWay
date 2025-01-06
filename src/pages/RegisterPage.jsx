import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action";
import Box from "@mui/material/Box";
import AuthContent from "../components/molecules/AuthContent";
import RegisterInput from "../components/organisms/RegisterInput";
import RegisterImg from "../assets/register.jpg"

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }, navigate));
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
        <AuthContent src={RegisterImg} alt="RegisterImg" />
      </Box>
      <Box flex={{ xs: "1 1 100%", sm: "1 1 50%" }}>
        <RegisterInput register={onRegister} />
      </Box>
    </Box>
  );
}

export default RegisterPage;
