import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { asyncReceiveAboutUs } from "../states/aboutUS/action";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/atoms/Header";
import Loader from "../components/atoms/Loader";
import ProfileCardList from "../components/organisms/ProfileCardList";

function AboutUsPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const aboutUs = useSelector((state) => state.aboutUs.aboutUs);

  useEffect(() => {
    dispatch(asyncReceiveAboutUs());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header
              title={"Tim Visioner"}
              subtitle={
                <>
                  Tim kami adalah kumpulan individu hebat yang bekerja bersama
                  sebagai sebuah kelompok, {isTabletOrDesktop && <br />}
                  menggabungkan kreativitas, keahlian teknis, dan kerja sama
                  untuk mengembangkan aplikasi yang inovatif dan bermanfaat.
                </>
              }
            />
            <ProfileCardList profileCards={aboutUs} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default AboutUsPage;
