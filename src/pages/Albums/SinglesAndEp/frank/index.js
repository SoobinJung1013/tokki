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
import bgImage from "assets/images/bg-image/across-the-universe.jpg";

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
          1. <strong>Blue</strong>
          <br />
          작사: 백예린/ 작곡: 백예린, 구름/ 편곡: 구름
          <br />
          백예린의 첫 번째 솔로 앨범 [FRANK]의 포문을 여는 곡. 백예린의 매력적인 음색과 시원한
          코러스, 기타 연주가 돋보인다. &lsquo;뻔한 가사처럼 버스 창가에 기대어 잘 생각도 나지 않는
          가사를 끄적이고&rsquo;와 같은 노랫말을 듣고 있으면 한편의 영화가 전개되는 듯한 착각에
          빠진다.
          <br />
          <br />
          2. <strong>우주를 건너</strong>
          <br />
          작사, 작곡: 백예린, 구름/ 편곡: 구름
          <br />
          [FRANK]의 타이틀곡으로 가사의 감정과 악기 연주가 절묘한 조화를 이룬다. 백예린은 이 곡을
          통해 사람과 사람 사이의 공간과 그 공간이 갖고 있는 독특한 느낌을 음악으로 표현하기 위해
          노력했다. 보컬적으로도 쓸쓸함을 담아내는 데 가장 많은 공을 들였다.
          <br />
          <br />
          3. <strong>As I am</strong>
          <br />
          작사, 작곡: 백예린/ 편곡: 구름
          <br />
          어쿠스틱 기타와 퍼커션이 중심이 돼 끌어가는 곡이다. 담담한 목소리로 귀를 사로잡는 백예린의
          매력을 느낄 수 있다.
          <br />
          <br />
          4. <strong>혼자 두지 마</strong>
          <br />
          작사, 작곡: 백예린/ 편곡: 구름
          <br />
          오르간 연주와 백예린의 목소리만으로 가득 차는 발라드 곡. 백예린의 목소리가 가장 잘 들릴 수
          있게 편곡은 미니멀하게 구성했다. 2014년부터 작곡을 시작한 백예린이 처음으로 완성한
          자작곡이란 점에서 의미가 남다르다.
          <br />
          <br />
          5. <strong>잠들고 싶어 (zZ)</strong>
          <br />
          작사: 백예린 / 작곡: 백예린, 구름/ 편곡: 구름
          <br />
          깔끔한 스윙 리듬과 클라리넷, 플루트 등 다채로운 악기 연주가 어우러진 곡이다. 억지로
          만들어낸 멋있는 말, 그럴싸한 표현을 붙이기 보다는 평소의 말투와 생각을 담기 위해
          노력했다는 백예린의 말처럼 굉장히 일상적이지만 공감을 불러일으키는 노랫말이 인상적이다.
          <br />
          <br />
          6. <strong>That&rsquo;s Why</strong>
          <br />
          작사, 작곡: 백예린 / 편곡: 구름
          <br />
          타이틀곡 &quot;우주를 건너&quot;와 더불어 이번 앨범의 감성을 가장 잘 표현한 곡. 기교를
          빼고 읊조리듯 노래하는 백예린의 목소리를 듣고 있으면 마음이 편안해지는 느낌이다.
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "Blue", duration: "3:45" },
    { title: "우주를 건너", duration: "4:07" },
    { title: "As I am", duration: "3:53" },
    { title: "혼자 두지 마", duration: "3:27" },
    { title: "잠들고 싶어 (zZ)", duration: "3:37" },
    { title: "That’s Why", duration: "3:45" },
  ];

  const videos = [{ id: "cQuqs2LrXbo?si=FXCUADEHiThL5wNz", title: "우주를 건너" }];

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
              The Volunteers
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
