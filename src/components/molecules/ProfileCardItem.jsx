import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { MdOutlineMail } from 'react-icons/md';
import IconButton from '../atoms/IconButton';

function ProfileCardItem({
  photo, name, role1, role2, linkedin, github, email,
}) {
  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={photo} alt={`photo ${name}`} sx={{ width: 150, height: 150, marginBottom: 2 }} />
        <Typography variant="body1" fontWeight="600">{name}</Typography>
        <Typography variant="body1">{role1}</Typography>
        <Typography variant="body1">{role2}</Typography>
        <Box display="flex" gap={2} mt={2}>
          <IconButton to={linkedin} icon={AiOutlineLinkedin} />
          <IconButton to={github} icon={VscGithub} />
          <IconButton to={`mailto:${email}`} icon={MdOutlineMail} />
        </Box>
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
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

ProfileCardItem.propTypes = {
  ...profileCardItemShape,
};

export { profileCardItemShape };

export default ProfileCardItem;
