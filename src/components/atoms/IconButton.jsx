import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const IconButtonCustom = styled(Button)(({ size }) => ({
  minWidth: 'auto',
  padding: 0,
  color: '#000',
  '& svg': {
    fontSize: size,
  },
}));

function IconButton({ to, icon: Icon, size }) {
  return (
    <IconButtonCustom
      component={Link}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
    >
      <Icon />
    </IconButtonCustom>
  );
}

IconButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconButton.defaultProps = {
  size: '24px',
};

export default IconButton;
