import React from "react";
import { useTheme } from "@mui/material/styles";
import { profileData } from "../utils/data";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/atoms/Header";
import ProfileCardList from "../components/organisms/ProfileCardList";

function AboutUsPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  console.log({ profileData });

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Header
          title={"Tim Visioner"}
          subtitle={
            <>
              Tim kami adalah kumpulan individu hebat yang bekerja bersama
              sebagai sebuah kelompok, {isTabletOrDesktop && <br />}
              menggabungkan kreativitas, keahlian teknis, dan kerja sama untuk
              mengembangkan aplikasi yang inovatif dan bermanfaat.
            </>
          }
        />
        <ProfileCardList profileCards={profileData} />
      </Container>
    </Box>
  );
}

export default AboutUsPage;
