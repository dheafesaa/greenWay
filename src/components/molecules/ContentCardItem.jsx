import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ContentCardItem({ title, description }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">{title}</Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: { xs: 'center', md: 'justify' },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

ContentCardItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ContentCardItem.defaultProps = {
  title: '',
  description: '',
};

export default ContentCardItem;
