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
import bgImage from "assets/images/bg-image/every.jpg";

// Import the new sections
import AlbumIntroduction from "components/Albums/AlbumIntroduction";
import MusicVideo from "components/Albums/MusicVideo";
import TrackList from "components/Albums/TrackList";

function Introduction() {
  const albumData = {
    title: "앨범 소개",
    description: (
      <>
        내가 너에게 보냈던 모든 편지들.
        <br />
        <br />
        이번 앨범은 19살부터 23살까지 제 생각과 고민, 추억들이 담겨있어요. 정확한 주소가 있진
        않았지만 꾸준히 제 마음을 곡에 담아 부치곤 했는데, 이제 여러분들에게 정말로 보낼 수 있게
        되어 기쁘네요! 그 동안 저의 성장을 지켜봐 주시고 애정해주신 분들께 감사하는 마음을
        담았습니다.
        <br />
        <br />
        사랑을 담아, 예린 올림.
        <br />
        <br />
        -
        <br />
        <br />
        Every letter I sent you.
        <br />
        <br />
        This album reflects memories, dilemmas, and thought processes I had from when I was nineteen
        to twenty three. With no specific address, I’ve been mailing my feelings in form of songs.
        And I’m really glad that I can finally mail them to you all. This album is my way of
        thanking everyone who has been loving me and supporting my journey as a musician.
        <br />
        <br />
        Lots of love,
        <br />
        Yerin
      </>
    ),
  };

  const tracks = [
    { title: "Intro", duration: "1:42" },
    { title: "Rest", duration: "3:28" },
    { title: "Popo (How deep is our love?)", duration: "4:31" },
    { title: "Can I B U", duration: "2:13" },
    { title: "Meant To Be", duration: "3:01" },
    { title: "Mr.Gloomy", duration: "3:35" },
    { title: "Lovelovelove", duration: "4:34" },
    { title: "Bunny", duration: "3:57" },
    { title: "0310", duration: "4:58" },

    { title: "Berlin", duration: "1:38" },
    { title: "Datoom", duration: "3:49" },
    { title: "Not a girl", duration: "3:49" },
    { title: "Newsong2", duration: "3:35" },
    { title: "Amy", duration: "2:21" },
    { title: "True lover", duration: "3:20" },
    { title: "Point(feat. Loopy)", duration: "4:13" },
    { title: "Square (2017)", duration: "4:21" },
    { title: "London", duration: "3:21" },
  ];

  const videos = [
    { id: "Im5VyhlZQXs?si=j6P5vqXlxsZOge_R", title: "Popo (How deep is our love?)" },
    { id: "ryGjZ2f6yQU?si=7Ze67sY6IlKqGQQc", title: "0310" },
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
              Every Letter I Sent You.
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
