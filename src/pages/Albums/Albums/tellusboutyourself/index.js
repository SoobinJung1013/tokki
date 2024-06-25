// pages/Introduction.js

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-image/tellusboutyourself.jpg";

// Import the new sections
import AlbumIntroduction from "components/Albums/AlbumIntroduction";
import MusicVideo from "components/Albums/MusicVideo";
import TrackList from "components/Albums/TrackList";

function Introduction() {
  const albumData = {
    title: "앨범 소개",
    description: <>“우리에게 너의 이야기를 들려줘”</>,
  };

  const tracks = [
    { title: "Lovegame", duration: "3:33" },
    { title: "You’re so lonely now, so you need me back by your side again", duration: "3:42" },
    { title: "I am not your ocean anymore", duration: "3:17" },
    { title: "Hall&Oates", duration: "2:46" },
    { title: "Ms. Delicate", duration: "3:59" },
    { title: "Interlude", duration: "1:43" },
    { title: "Loner", duration: "3:56" },
    { title: '"HOMESWEETHOME"', duration: "3:26" },
    { title: "Loveless", duration: "3:48" },
    { title: "Hate you", duration: "3:39" },
    { title: "0415", duration: "4:24" },
    { title: "I’ll be your family!", duration: "3:49" },
    { title: "I’m in love", duration: "4:40" },
    { title: "Bubbles&Mushrooms", duration: "3:57" },
  ];

  const videos = [
    { id: "K9ivJTc1Ls4?si=ul7WP769bU23R9qJ", title: "0415" },
    { id: "z19ceDKYAlo?si=LBzZefdjrT3gFAYI", title: "Hate you" },
    { id: "m45t1ezxq3E?si=Pqr0-ZJvGADeFlvh", title: "I'll be you family!" },
    { id: "F95LMvw6Iwc?si=XpkCqV6G9gwnM4eh", title: "I'm in love" },
    {
      id: "U-OlsYhSnEg?si=6R_gJyIVUxOu-DoU",
      title: "You’re so lonely now, so you need me back by your side again",
    },
  ];

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="55vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              tellusboutyourself
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <AlbumIntroduction title={albumData.title} description={albumData.description} />
        <TrackList tracks={tracks} />
        <MusicVideo videos={videos} />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Introduction;
