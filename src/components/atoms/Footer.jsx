import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Colors from './Colors';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 2 },
        backgroundColor: Colors.primary.hard,
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" color="inherit">
          {'© '}
          {new Date().getFullYear()}
          {' GreenWay. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
