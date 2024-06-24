// pages/Introduction.js

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-image/lyoc.jpeg";

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
          <strong>Love you on Christmas</strong>
          <br />
          작사: 백예린 / 작곡: 백예린 / 편곡: 윤석철, 구름 &quot;
          <br />
          특별한 날이라서 행복한 게 아냐 그저 그대와 함께라서&quot; 라는 가사에서 보여지듯 특별한
          날이라서가 아닌 특별한 누군가와 함께 보내 더욱 행복한 크리스마스 임을 노래한 곡. 백예린
          특유의 감성 넘치는 가사와 뛰어난 가창력이 듣는 이들의 마음 깊숙히 백예린이 생각하는
          크리스마스에 대한 느낌을 전달한다.
          <br />
          <br />
          <strong>November song</strong>
          <br />
          작사: 백예린 / 작곡: 백예린 / 편곡: 백예린
          <br />
          겨울에 대한 백예린의 낭만이 가득 담겨있는 곡. &quot;사랑을 듬뿍 담았다&quot;라는 백예린의
          설명처럼 사랑스런 겨울에 대한 느낌을 백예린의 경쾌하면서도 귀여운, 또 청아한 보이스로
          해석해낸 노래다.
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "Love you on Christmas", duration: "3:31" },
    { title: "November song", duration: "3:14" },
  ];

  const videos = [{ id: "IpjKwU7ZeBY?si=2tM4QGXBA3FSZLwc", title: "Love you on christmas" }];

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
              Love you on Christmas
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
