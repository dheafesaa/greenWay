import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { FiPlus } from 'react-icons/fi';

function AddButton({ link }) {
  return (
    <Button variant="contained" size="medium" component={Link} to={link}>
      <FiPlus size={24} />
      {' '}
      Add Discussion
    </Button>
  );
}

AddButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default AddButton;
