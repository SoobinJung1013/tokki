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

// Material Kit 2 React examples
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";

// Images
import vogueFront from "assets/images/interview/vogue-back.jpg";
import vogueBack from "assets/images/interview/vogue-front.jpg";
import elleFront from "assets/images/interview/elle-front.jpg";
import elleBack from "assets/images/interview/elle-front2.jpg";
import poclanosFront from "assets/images/interview/poclanos-back.jpg";
import poclanosBack from "assets/images/interview/poclanos-front.jpg";
import dazedKoreaFront from "assets/images/interview/dazed-korea-front.jpg";
import dazedKoreaBack from "assets/images/interview/dazed-korea-back.jpg";
import wkoreaFront from "assets/images/interview/wkorea-front.jpg";
import wkoreaBack from "assets/images/interview/wkorea-back.jpg";
import mapsFront from "assets/images/interview/maps-back.jpg";
import mapsBack from "assets/images/interview/maps-front.jpg";

function PhotoCard() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={vogueFront} icon="empty" title={<>Vogue</>} />
              <RotatingCardBack
                image={vogueBack}
                title={<>Vogue</>}
                description="백예린의 영감은 우울에서 온다"
                action={{
                  type: "internal",
                  route:
                    "https://www.vogue.co.kr/2022/05/27/%EB%B0%B1%EC%98%88%EB%A6%B0%EC%9D%98-%EC%98%81%EA%B0%90%EC%9D%80-%EC%9A%B0%EC%9A%B8%EC%97%90%EC%84%9C-%EC%98%A8%EB%8B%A4/",
                  label: "Link",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={elleFront} icon="empty" title={<>Elle</>} />
              <RotatingCardBack
                image={elleBack}
                title={<>Elle</>}
                description="온전한 백예린"
                action={{
                  type: "internal",
                  route: "https://www.elle.co.kr/article/77081",
                  label: "Link",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={poclanosFront} icon="empty" title={<>Poclanos</>} />
              <RotatingCardBack
                image={poclanosBack}
                title={<>Poclanos</>}
                description="tellusboutyourself 앨범 인터뷰"
                action={{
                  type: "internal",
                  route: "https://poclanos.com/interview/yerinbaek/",
                  label: "Link",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={dazedKoreaFront} icon="empty" title={<>Dazed Korea</>} />
              <RotatingCardBack
                image={dazedKoreaBack}
                title={<>Dazed Korea</>}
                description="열아홉부터 스물셋, 차곡차곡 모은 선물을 든 백예린이 드디어 자신의 세상으로 나왔다."
                action={{
                  type: "internal",
                  route: "http://www.dazedkorea.com/fashion/article/731/detail.do",
                  label: "Link",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={wkoreaFront} icon="empty" title={<>W Korea</>} />
              <RotatingCardBack
                image={wkoreaBack}
                title={<>W Korea</>}
                description="스타 이즈 본(백예린 밴드 ‘더 발룬티어스’)"
                action={{
                  type: "internal",
                  route:
                    "https://www.wkorea.com/2021/05/27/%EC%8A%A4%ED%83%80-%EC%9D%B4%EC%A6%88-%EB%B3%B8%EB%B0%B1%EC%98%88%EB%A6%B0/",
                  label: "Link",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={mapsFront} icon="empty" title={<>Newsis</>} />
              <RotatingCardBack
                image={mapsBack}
                title={<>Newsis</>}
                description="tellusboutyourself"
                action={{
                  type: "internal",
                  route: "https://www.newsis.com/view/NISX20220523_0001881147",
                  label: "Link",
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
