import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/action';
import { asyncReceiveReviews } from '../states/reviews/action';
import { categoryCards, videoWonderfulIndonesia } from '../utils/data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardVideo from '../components/atoms/CardVideo';
import Loader from '../components/atoms/Loader';
import Title from '../components/atoms/Title';
import CampaignCardList from '../components/organisms/CampaignCardList';
import CategoryCardList from '../components/organisms/CategoryCardList';
import CommunityCard from '../components/organisms/CommunityCard';
import HeroLayout from '../components/organisms/HeroLayout';
import ReviewCardList from '../components/organisms/ReviewCardList';
import WelcomeImg from '../assets/landing-welcome.png'
import CommunityImg from '../assets/landing-community.png'

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const campaigns = useSelector((state) => state.campaign.campaigns);
  const reviews = useSelector((state) => state.review.reviews);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
    dispatch(asyncReceiveReviews())
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
              imageUrl={WelcomeImg}
            />
            <CategoryCardList categoryCards={categoryCards} />
            <Box py={6}>
              <Title title="Campaign" />
              <CampaignCardList campaignCards={limitedCampaigns} showSeeAll />
            </Box>
            <Box py={6}>
              <Title title="People Are Talking . ." />
              <ReviewCardList testimoniCards={reviews} />
            </Box>
            <Box py={6}>
              <Title title="Nature of Indonesia" />
              <CardVideo
                src={videoWonderfulIndonesia}
                alt="Wonderful Indonesia"
              />
            </Box>
            <Box py={6}>
              <CommunityCard
                title="Community Is Calling, No Need to Stalling"
                description="Join our discussion community! Discover new ideas and exchange experience
                with thousands of members. Let's join now!"
                imageUrl={CommunityImg}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default HomePage;
