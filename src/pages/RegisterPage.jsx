import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import AuthContent from '../components/molecules/AuthContent';
import RegisterInput from '../components/organisms/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import { imgRegister } from '../utils/data';

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
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
    >
      <Box flex={{ xs: '1 1 100%', sm: '1 1 50%' }}>
        <AuthContent
          src={imgRegister}
          alt="imgLogin"
          title="Welcome!"
          body="&ldquo;As long as you don't have the subtle feeling of seeing nature, your soul is not alive.&rdquo;"
          footer="-Prof. Dr. Hamka"
        />
      </Box>
      <Box flex={{ xs: '1 1 100%', sm: '1 1 50%' }}>
        <RegisterInput register={onRegister} />
      </Box>
    </Box>
  );
}

export default RegisterPage;