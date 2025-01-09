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
                  Mari Bersama Lindungi Alam,{" "}
                  {isTabletOrDesktop && <br />}
                  Lestarikan Keindahan
                </>
              }
              subtitle={
                <>
                  Jadilah bagian dari perjalanan untuk melestarikan warisan alam Indonesia. 
                  {isTabletOrDesktop && <br />}
                  Ikuti perjalanan kami dalam melindungi keindahan alam dan mendukung
                  keberlanjutan lingkungan.
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
