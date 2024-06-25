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
import bgImage from "assets/images/bg-image/L.jpg";

// Import the new sections
import AlbumIntroduction from "components/Albums/AlbumIntroduction";
import MusicVideo from "components/Albums/MusicVideo";
import TrackList from "components/Albums/TrackList";

function Introduction() {
  const albumData = {
    title: "앨범 소개",
    description: "It always starts with an “L”",
  };

  const tracks = [
    { title: "Velvet Glove", duration: "2:44" },
    { title: "Psycho", duration: "4:02" },
    { title: "Tell'em boys", duration: "34:29" },
    { title: "Starfish on your head", duration: "3:12" },
    { title: '"L"', duration: "4:20" },
  ];

  const videos = [{ id: "2mXlFgUpWkI?si=LFWGVyrG28lXLwVBO", title: '"L"' }];

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
              L
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
