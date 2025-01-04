import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailCampaign } from '../states/campaign/action';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loader from '../components/atoms/Loader';
import CampaignDetail from '../components/organisms/CampaignDetail';

function CampaignDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const loading = useSelector((state) => state.loading.loading);
  const detailCampaign = useSelector((state) => state.campaign.detailCampaign);

  useEffect(() => {
    dispatch(asyncReceiveDetailCampaign(id));
  }, [id, dispatch]);


  console.log({detailCampaign});
  
  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <CampaignDetail
            {...detailCampaign}
            authUser={authUser ? authUser.id : null}
          />
        )}
      </Container>
    </Box>
  );
}

export default CampaignDetailPage;
