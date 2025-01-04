import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function HeaderDetail({ location, title }) {
  return (
    <Box pt={{ xs: 2, md: 4 }}>
      <Typography
        variant="h6"
        color="black"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <LocationOnRoundedIcon sx={{ marginRight: '4px' }} />
        {location}
      </Typography>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}

HeaderDetail.propTypes = {
  location: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default HeaderDetail;
