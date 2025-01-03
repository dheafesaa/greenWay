import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title({ title, textAlign }) {
  return (
    <Typography
      variant="h2"
      sx={{ textAlign }}
    >
      {title}
    </Typography>
  );
}

Title.propTypes = {
  title: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
};

Title.defaultProps = {
  textAlign: 'center',
};

export default Title;
