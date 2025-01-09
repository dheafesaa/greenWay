import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReviewCardItem, { reviewCardItemShape } from '../molecules/ReviewCardItem';

function ReviewCardList({ testimoniCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {testimoniCards.map((testimoniCard) => (
          <Grid item xs={12} sm={6} md={4} key={testimoniCard.id}>
            <ReviewCardItem {...testimoniCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ReviewCardList.propTypes = {
  testimoniCards: PropTypes.arrayOf(
    PropTypes.shape(reviewCardItemShape),
  ).isRequired,
};

export default ReviewCardList;
