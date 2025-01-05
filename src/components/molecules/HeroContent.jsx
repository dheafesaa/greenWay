import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';

function HeroContent({ title, description }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Typography variant={isMobile ? 'h2' : 'h1'}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'black',
          textAlign: { xs: 'center', md: 'justify' },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

HeroContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

HeroContent.defaultProps = {
  title: '',
  description: '',
};

export default HeroContent;
