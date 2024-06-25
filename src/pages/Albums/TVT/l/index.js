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
// import AlbumIntroduction from "components/Albums/AlbumIntroduction";
// import MusicVideo from "components/Albums/MusicVideo";
// import TrackList from "components/Albums/TrackList";

function Introduction() {
  // const albumData = {
  //   title: "앨범 소개",
  //   // description: "As long as we walk our path - honey, it don't matter.",
  // };

  // const tracks = [
  //   // { title: "Violet", duration: "3:31" },
  //   // { title: "PINKTOP", duration: "3:59" },
  //   // { title: "Let Me Go!", duration: "3:08" },
  //   // { title: "Time to Fight Back In My Way", duration: "3:34" },
  //   // { title: "Radio", duration: "4:22" },
  //   // { title: "Crap", duration: "4:53" },
  //   // { title: "Nicer", duration: "4:24" },
  //   // { title: "Medicine", duration: "2:53" },
  //   // { title: "S.A.D (Song About Drinking)", duration: "3:41" },
  //   // { title: "Summer", duration: "3:28" },
  // ];

  // const videos = [
  //   // { id: "8Y5dL2XdIMo?si=NMuMbf0ppYr8rt4O", title: "Let Me Go!" },
  //   // { id: "13EWqjMqkiY?si=_QckuJqeV-9p0reb", title: "Summer" },
  //   // { id: "Mr0aqxOppu8?si=r3GYQByw0kKLcDvv", title: "S.A.D" },
  //   // { id: "xxNWPCXnlPU?si=Kddcj_y2ruB2mbXb", title: "Radio" },
  // ];

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
        <MKTypography variant="body2" color="textSecondary" display="grid" placeItems="center">
          Coming Sooooon 🖤
        </MKTypography>
        {/* <AlbumIntroduction title={albumData.title} description={albumData.description} />
        <TrackList tracks={tracks} />
        <MusicVideo videos={videos} /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Introduction;
