import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ActionButton({
  Icon, label, color, onClick,
}) {
  return (
    <Box display="flex" alignItems="center" onClick={onClick} sx={{ cursor: 'pointer' }}>
      <Icon color={color} style={{ marginRight: '4px', width: '20px', height: '20px' }} />
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
}

ActionButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.number.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  color: 'inherit',
  onClick: () => {},
};

export default ActionButton;
