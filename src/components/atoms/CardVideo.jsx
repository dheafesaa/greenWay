import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

function CardVideo({ src, alt }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Card
        component="video"
        autoPlay
        loop
        controls
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '16px',
        }}
      />
    </Box>
  );
}

CardVideo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardVideo;
