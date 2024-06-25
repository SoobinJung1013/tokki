/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React components
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront1 from "assets/images/cards/rotating-card-bg-front.jpeg";
import bgBack1 from "assets/images/cards/rotating-card-bg-back.jpeg";
import bgFront2 from "assets/images/cards/rotating-card-bg-front2.jpeg";
import bgBack2 from "assets/images/cards/rotating-card-bg-back2.jpeg";
import bgFront3 from "assets/images/cards/rotating-card-bg-front3.jpeg";
import bgBack3 from "assets/images/cards/rotating-card-bg-back3.jpeg";

function PhotoCard() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront1}
                icon="empty"
                title={
                  <>
                    Hypocreep
                    {/* <br />
                    Plant */}
                  </>
                }
                description="But you know what? I'm who they fucking wanna be"
              />
              <RotatingCardBack
                image={bgBack1}
                title="Summer"
                description="Our eyes are closed But we know when the sun is near us"
                action={{
                  type: "internal",
                  route: "https://open.spotify.com/playlist/10QMRgGM2TWvqswLJjpJzg",
                  label: "Join the TVT",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront2}
                icon="empty"
                title={<>PoPo</>}
                description="Now you know how much your eyes Make me wonder 'bout how deep is our love"
              />
              <RotatingCardBack
                image={bgBack2}
                title="Square"
                description="Come take my arms and go I’ll be yours for sure"
                action={{
                  type: "internal",
                  route:
                    "https://open.spotify.com/playlist/0tASiwvgVOZHA9H1smOAOy?si=VoOycIXbRq-5sy--luKeVA&pi=a-efevtI6ATJiE&nd=1&dlsi=9121b75480e64e4a",
                  label: "Yerin Baek",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront3}
                icon="empty"
                title={
                  <>
                    魔女の花
                    {/* <br />
                    is Great */}
                  </>
                }
                description="또 해가 뜰 때 쯤 내 힘이 사라진대도 그대의 찻잔에 띄워 놓고 싶은 아무도 모르는 그 꽃을 찾아서 "
              />
              <RotatingCardBack
                image={bgBack3}
                title="Zero"
                description={
                  <>
                    이런 하루들 속에 그대는
                    <br />
                    나의 전부같은데
                    <br />
                    이런 날들로 채워질 내 안에 그대는
                    <br />
                    사이사이 피어있는 꽃이길 바래요
                    {/* <br />
                    is Great */}
                  </>
                }
                action={{
                  type: "internal",
                  route: "https://open.spotify.com/playlist/7l1tIiZqxp15Z18k0uZRTQ",
                  label: "COver",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PhotoCard;
