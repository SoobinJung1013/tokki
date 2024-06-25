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
import bgImage from "assets/images/bg-image/love-yerin.jpg";

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
          선물은 보통 포장지로 감싸거나 그럴듯한 종이백 안에 넣어 주곤 한다. 앨범의 제목
          &apos;선물&apos;이라는 단어에 담은 것은 온전히 나의 개인적인 감정일 뿐, 결국 선물을 받는
          사람이 포장을 한 겹 한 겹 뜯고 느낄 감정이 무엇일지 나는 알 수 없다. 이 곡들을 다시 부르며
          내가 느낀 것들을 담아 포장을 열심히 해보았는데 잘 전달되었으면 좋겠다.
          <br />
          <br />
          부디 모두 건강하게 다시 만나길 바라요. 반복되는 일상에 조금이나마 위로가 될 수 있길 바라며
          <br />
          <br />
          사랑을 담아, 예린.
        </MKTypography>
      </>
    ),
  };

  const tracks = [
    { title: "그럴때마다", duration: "3:32" },
    { title: "Antifreeze", duration: "4:05" },
    { title: "돌아가자", duration: "4:03" },
    { title: "왜? 날", duration: "4:05" },
    { title: "한계", duration: "3:47" },
    { title: "산책", duration: "3:25" },
  ];

  const videos = [
    { id: "rDd1ZmMjwQs?si=Mpfqp0xiW549-0i7", title: "왜? 날" },
    { id: "Vg0foqYOOt8?si=SAKOjvscGl3VNXGD", title: "한계" },
    { id: "t9aZFgD0mic?si=dvL2Zcnb66eqCANT", title: "산책" },
    { id: "QGgKZlTsriM?si=vbfhwUcdF4K4Ll5R", title: "돌아가자" },
    { id: "Ai94UyJX5gE?si=M0-zJnCMxGGZUu3O", title: "그럴때마다" },
    { id: "74_yqNBhQbA?si=-TN-uWCkHwipqpHi", title: "Antifreeze" },
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
              선물
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
