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
import bgImage from "assets/images/bg-image/olig.jpg";

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
          <strong>1. 야간비행(魔女の花)</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름 / 편곡: 구름
          <br />
          영화 &quot;마녀와 메리의 꽃&quot;을 보고 영감을 받은 가사, 영화에 대한 나의 해석을 덧대
          완성한 노래다. 영화에서 등장하는 &apos;야간비행&apos;이라는 푸른 꽃은 툭하면 실수만 하는
          보잘것없는 아이, 메리에게 하룻밤 사이 특별한 힘을 주는 꽃인데, 나도 누군가에게 그런 힘이
          담긴 꽃을 찾아 주고 싶다는 마음에 만든 노래다.
          <br />
          <br />
          <strong>2. 그건 아마 우리의 잘못은 아닐 거야 [Title]</strong>
          <br />
          작사: 백예린, 구름 / 작곡: 백예린, 구름 / 편곡: 구름
          <br />
          관계 안에서 서로 의도치 않게 피어난 불안함은 우리 잘못이 아니며, 결국 그것은 우리를 더
          크게 만들어 줄 것이라고 말해주고 싶다.
          <br />
          <br />
          <strong>3. Dear my blue</strong>
          <br />
          작사: 백예린 / 작곡: 백예린 / 편곡: 백예린, 윤석철
          <br />
          소중한 사람이 슬퍼할 때 내가 할 수 있는 일 중에 가장 진실된 방법으로 위로하고 싶어 이 곡을
          만들었다.
          <br />
          <br />
          <strong>4. Our love is great</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름 / 편곡: 구름
          <br />
          사랑하는 사람들과 같이 연주하기 위해 수록한 곡이다. 결국은 사랑과 늘 함께 해온 내 주변과
          내 모습들을 얘기하고 싶었다.
          <br />
          <br />
          <strong>5. 내가 날 모르는 것처럼 (Feat. 카더가든)</strong>
          <br />
          작사: 백예린, 카더가든 / 작곡: 백예린, 구름, 카더가든 / 편곡: 구름
          <br />
          내가 느끼고 있는 감정이 어떤 것인지, 감히 들춰보아도 되는 것인지 잘 모르겠어서 두서 없이
          쓴 노래다.
          <br />
          <br />
          <strong>6. 지켜줄게</strong>
          <br />
          작사: 백예린 / 작곡: 백예린 / 편곡: 백예린, 구름
          <br />
          세상에 지켜주고 싶은 모든 것, 지켜주고 싶은 모든 사람들이 들어줬으면 하는 노래다. 누군가
          시키지 않아도, 나에게 무언가 돌아오지 않아도 줄 수 있는 순수한 사랑에 대해 얘기하고
          싶었다. 처음엔 가장 친한 친구를 떠올리며, 나랑 아무 상관없는 지나가는 고양이, &quot;다시
          만날 수 있을까&quot; 싶은 시골에 있는 강아지들, 고가도로에 삐져나온 꽃, 잎, 등을 보고
          느꼈던 마음들을 눌러 담았다.
          <br />
          <br />
          <strong>7. 내가 날 모르는 것처럼 (2019 ver.)</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름 / 편곡: 구름
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "야간비행(魔女の花)", duration: "3:52" },
    { title: "그건 아마 우리의 잘못은 아닐 거야", duration: "4:24" },
    { title: "Dear my blue", duration: "3:26" },
    { title: "Our love is great", duration: "4:10" },
    { title: "내가 날 모르는 것처럼 (Feat. 카더가든)", duration: "3:40" },
    { title: "지켜줄게", duration: "4:20" },
    { title: "내가 날 모르는 것처럼 (2019 ver.)", duration: "3:30" },
  ];

  const videos = [
    { id: "IRNBtocmQ58?si=-0_k48CNNrJoBNTX", title: "그건 아마 우리의 잘못은 아닐거야" },
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
              Our love is greate
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
