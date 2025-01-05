import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/action';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loader from '../components/atoms/Loader';
import Title from '../components/atoms/Title';
import CampaignCardList from '../components/organisms/CampaignCardList';
import HeroLayout from '../components/organisms/HeroLayout';
import WelcomImg from '../assets/landing-1.png'

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const campaigns = useSelector((state) => state.campaign.campaigns);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
  }, [dispatch]);

  const limitedCampaigns = campaigns.slice(0, 4);

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <HeroLayout
              title="TRAVEL AND SAVE NATURE "
              description="Welcome to a new era of travel where adventure meets environmental stewardship.
              Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse
              Indonesia in a more responsible, eco-conscious manner."
              imageUrl={WelcomImg}
            />
            <Box py={6}>
              <Title title="Campaign" />
              <CampaignCardList campaignCards={limitedCampaigns} showSeeAll />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default HomePage;
