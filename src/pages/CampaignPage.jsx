import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { asyncReceiveCampaigns } from "../states/campaign/action";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/atoms/Header";
import Loader from "../components/atoms/Loader";
import CampaignCardList from "../components/organisms/CampaignCardList";

function CampaignPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const campaigns = useSelector((state) => state.campaign.campaigns);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header
              title={
                <>
                  Join the Campaign for Protecting Nature,{" "}
                  {isTabletOrDesktop && <br />}
                  Preserving Beauty
                </>
              }
              subtitle={
                <>
                  Join our efforts to safeguard the natural wonders of
                  Indonesia. {isTabletOrDesktop && <br />}
                  Explore our environmental initiatives and be part of the
                  change for a sustainable future.
                </>
              }
            />
            <CampaignCardList campaignCards={campaigns} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default CampaignPage;
