import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Title from './Title';
import Subtitle from './Subtitle';
import Colors from './Colors';

function Header({ title, subtitle, color }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Title title={title} color={color} />
      <Subtitle subtitle={subtitle} />
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Header.defaultProps = {
  color: Colors.primary.soft,
};

export default Header;
