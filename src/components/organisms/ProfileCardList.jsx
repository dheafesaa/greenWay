import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileCardItem, { profileCardItemShape } from '../molecules/ProfileCardItem';

function ProfileCardList({ profileCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {profileCards.map((profileCard) => (
          <Grid item xs={12} sm={6} md={4} key={profileCard.id}>
            <ProfileCardItem {...profileCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProfileCardList.propTypes = {
  profileCards: PropTypes.arrayOf(PropTypes.shape(profileCardItemShape))
    .isRequired,
};

export default ProfileCardList;
