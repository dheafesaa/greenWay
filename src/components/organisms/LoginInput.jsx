import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useInput from '../../hooks/useInput';
import Alert from '../atoms/Alert';
import Colors from '../atoms/Colors';
import InputText from '../atoms/InputText';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill out all fields.');
    } else {
      setError('');
      login({ email, password });
    }
  };

  return (
    <Box component="form" width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" px={6} gap={2}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h1">
          <span style={{ color: Colors.secondary }}>Green</span>
          <span style={{ color: '#000' }}>Way</span>
        </Typography>
        {error && <Alert severity="error" body={error} />}
        <InputText id="email" name="email" label="Email" value={email} onChange={onEmailChange} />
        <InputText id="password" name="password" label="Password" type="password" value={password} onChange={onPasswordChange} />
        <Button variant="contained" size="large" fullWidth onClick={handleLogin}>Sign In</Button>
      </Box>
      <Typography variant="body1">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </Typography>
    </Box>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
