import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Subtitle({ subtitle, color }) {
  return (
    <Typography
      variant="body1"
      color={color}
      sx={{ textAlign: 'center' }}
    >
      {subtitle}
    </Typography>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Subtitle.defaultProps = {
  color: '',
};

export default Subtitle;
