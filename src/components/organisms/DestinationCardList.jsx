import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DestinationCardItem, { destinationCardItemShape } from '../molecules/DestinationCardItem';

function DestinationCardList({ destinationCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {destinationCards.map((destinationCard) => (
          <Grid item xs={12} sm={6} md={3} key={destinationCard.id}>
            <DestinationCardItem {...destinationCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

DestinationCardList.propTypes = {
  destinationCards: PropTypes.arrayOf(
    PropTypes.shape(destinationCardItemShape),
  ).isRequired,
};

export default DestinationCardList;
