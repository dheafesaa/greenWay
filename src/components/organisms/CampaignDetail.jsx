import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Alert from '../atoms/Alert';
import CardImage from '../atoms/CardImage';
import HeaderDetail from '../atoms/HeaderDetail';
import DetailCardItem from '../molecules/DetailCardItem';

function CampaignDetail({
  id, picture, name, location, date, link, description, authUser,
}) {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <CardImage src={picture} alt={name} borderRadius maxHeight={{ xs: '100%', md: '600px' }} />
      <HeaderDetail location={location} title={name} />
      <DetailCardItem title="ID Campaign" content={id} />
      <DetailCardItem title="Time Periode" content={date} />
      {authUser ? (
        <DetailCardItem title="Link Enrollment" content="Click Me!" link={link} isLink />
      ) : (
        <DetailCardItem
          title="Link Enrollment"
          content={<Alert title="Permission Required" body="Please login or create an account to join campaign!" />}
        />
      )}
      <DetailCardItem title="Description" content={description} />
    </Box>
  );
}

CampaignDetail.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authUser: PropTypes.string,
};

CampaignDetail.defaultProps = {
  authUser: null,
};

export default CampaignDetail;
