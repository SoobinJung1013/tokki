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
import bgImage from "assets/images/bg-image/fish.jpg";

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
          작년 즈음 평소와 다름없이 가사가 될 만한 것들을 메모하다가 그때의 단어와 문장을 나열하면서
          이번 앨범이 만들어졌어요. 저는 우리 모두가 지금보다 어릴 때의 기억, 성장하던 시기의
          경험들이 원동력이 되어 현재의 삶을 살아간다고 생각해요. 사랑받던 순간의 기억으로 하루를
          살아내고, 하루들이 모여서 1년이 되고, 그렇게 나이를 먹고.
          <br />
          <br />
          항상 저는 어딜 가나 막내였는데 요즘은 조금씩 나이가 들면서 누군가에게 선배의 역할을 해야
          할 때가 생기고, 귀감이 되어야 하는 순간도 찾아오는 것 같아요. 그래서 저를 예뻐해 주고
          소중히 해주는 제 주변을 보면서 &apos;언니도, 오빠도, 우리 아빠도 어딘가에선 막내고 그저
          응석을 부려도 상관없는 존재야.&apos;하고 말해주고 싶었어요. 물론, &apos;막내&apos;가 가장
          중요한 노래라는 건 아니지만.. 흐하하
          <br />
          <br />
          이렇게 제가 요즘 드는 생각들, 배워가는 과정을 많은 분께 들려줄 수 있다는 것에 감사하고, 제
          마음이 여러분의 일상에 닿아 위로가 되고 원동력이 되길 바라요! 잦은 자괴와 혼란 속에도 저를
          지켜주는 사람들에게 감사하며, 항상 돌아올 때마다 기쁘게 맞이해줘서 고맙습니다.
          <br />
          <br />
          From 예린
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "그게 나였네", duration: "3:20" },
    { title: "물고기 (Title)", duration: "3:47" },
    { title: "막내", duration: "3:54" },
  ];

  const videos = [
    { id: "DNf6mIZz6Zo?si=Wn0Lsu9nWPTHeyoc", title: "물고기" },
    {
      id: "hKHnXJEy7Zw?si=bODdgPApuG7knEZ5",
      title: "예린의 영업비밀 EP.2 물고기편🐠(feat. 바다토끼 이야기) ",
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
              물고기(Pisces)
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
