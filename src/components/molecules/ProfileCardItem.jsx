import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ProfileCardItem({
  photo, name, nim, prodi,
}) {
  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={photo} alt={`photo ${name}`} sx={{ width: 150, height: 150, marginBottom: 2 }} />
        <Typography variant="body1" fontWeight="600">{name}</Typography>
        <Typography variant="body1">{prodi}</Typography>
        <Typography variant="body1">{nim}</Typography>
      </CardContent>
    </Card>
  );
}

const profileCardItemShape = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nim: PropTypes.string.isRequired,
  prodi: PropTypes.string.isRequired,
};

ProfileCardItem.propTypes = {
  ...profileCardItemShape,
};

export { profileCardItemShape };

export default ProfileCardItem;
