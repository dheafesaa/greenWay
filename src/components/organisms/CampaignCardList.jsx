import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { IoIosArrowForward } from 'react-icons/io';
import CampaignCardItem, { campaignCardItemShape } from '../molecules/CampaignCardItem';

function CampaignCardList({ campaignCards, showSeeAll }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      {showSeeAll && (
        <Box display="flex" justifyContent="end" mb={2}>
          <Button
            component={Link}
            to="/list-campaign"
            variant="contained"
            size="small"
            endIcon={<IoIosArrowForward />}
          >
            See All
          </Button>
        </Box>
      )}
      <Grid container spacing={4}>
        {campaignCards.map((campaignCard) => (
          <Grid item xs={12} sm={6} md={3} key={campaignCard.id}>
            <CampaignCardItem {...campaignCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CampaignCardList.propTypes = {
  campaignCards: PropTypes.arrayOf(
    PropTypes.shape(campaignCardItemShape),
  ).isRequired,
  showSeeAll: PropTypes.bool,
};

CampaignCardList.defaultProps = {
  showSeeAll: false,
};

export default CampaignCardList;
