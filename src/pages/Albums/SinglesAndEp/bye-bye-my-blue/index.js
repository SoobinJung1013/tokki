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
import bgImage from "assets/images/bg-image/bbmb.jpg";

// Import the new sections
import AlbumIntroduction from "components/Albums/AlbumIntroduction";
import MusicVideo from "components/Albums/MusicVideo";
import TrackList from "components/Albums/TrackList";

function Introduction() {
  const albumData = {
    title: "앨범 소개",
    description: (
      <>
        <MKTypography variant="body2" color="textSecondary">
          1. <strong>Bye bye my blue</strong>
          <br />
          작사: 구름, 백예린 / 작곡: 구름 / 편곡: 구름
          <br />
          타이틀곡 &quot;Bye bye my blue&quot;는 &apos;백예린&apos;이 지난 앨범 [FRANK]에서 함께
          작업한 &apos;구름&apos;과의 두 번째 협업으로 탄생했다. 감성적인 피아노 선율이 인상적인 R&B
          곡으로, 후렴부의 &apos;나의 나의 나의 그대여 이름만 불러봐도 맘이 벅차요&apos;라는 가사가
          사랑에 대한 불안하고 공허한 감성을 고스란히 전달한다.
          <br />
          <br />
        </MKTypography>
        <MKTypography variant="body2" color="textSecondary">
          2. <strong>그의 바다</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름 / 편곡: 구름
          <br />
          &quot;그의 바다&quot;는 물 위를 걷는 듯 귀에 착 감기는 선율과 서정적인 가사가 인상적인
          곡으로, &apos;백예린&apos;이 직접 작사와 작곡에 참여했다. 연인과의 관계에서
          &apos;바다&apos;로 표현되는 자신을 있는 그대로 사랑해주길 바란다는 노랫말이 감성적인
          연애편지를 읽는 듯한 느낌을 전달한다.
          <br />
          <br />
        </MKTypography>
        <MKTypography variant="body2" color="textSecondary">
          3. <strong>Zero</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름 / 편곡: 구름
          <br />
          &apos;백예린&apos;이 작사, 작곡에 모두 참여한 곡으로, &apos;백예린&apos; 특유의
          아련하면서도 감성 짙은 음색을 엿볼 수 있는 매력적인 트랙이다. 행복하고 좋은 일만
          일어나지는 않지만 그런 날들 중에 당신이 있기를 바란다는 사랑에 빠진 여성의 순수한 설렘과
          바람을 가득 담아 노래했다.
          <br />
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "Bye bye my blue", duration: "3:23" },
    { title: "그의 바다", duration: "3:37" },
    { title: "Zero", duration: "3:28" },
  ];

  const videos = [{ id: "WbhK3wMXluE?si=Ar-NFTbKInyg5K5E", title: "Bye bye my blue" }];

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
              Bye bye my blue
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
