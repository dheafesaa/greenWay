import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
function ProfileCardItem({ photo, name, role1, role2 }) {
  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={photo} alt={`photo ${name}`} sx={{ width: 150, height: 150, marginBottom: 2 }} />
        <Typography variant="body1" fontWeight="600">{name}</Typography>
        <Typography variant="body1">{role1}</Typography>
        <Typography variant="body1">{role2}</Typography>
      </CardContent>
    </Card>
  );
}

const profileCardItemShape = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role1: PropTypes.string.isRequired,
  role2: PropTypes.string.isRequired,
};

ProfileCardItem.propTypes = {
  ...profileCardItemShape,
};

export { profileCardItemShape };

export default ProfileCardItem;
