import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function PopularCardItem({ category, onClick }) {
  return (
    <Button variant="outlined" size="small" sx={{ fontWeight: 'regular' }} onClick={onClick}>
      #
      {category}
    </Button>
  );
}

PopularCardItem.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PopularCardItem;
