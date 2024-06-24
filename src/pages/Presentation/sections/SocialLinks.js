import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

function SocialLinks() {
  return (
    <MKBox pt={8} pb={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
            <MKTypography variant="body1" color="text">
              Official Links
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            my={{ xs: 5, lg: "auto" }}
            mr={{ xs: 0, lg: "auto" }}
            sx={{ textAlign: { xs: "center", lg: "right" } }}
          >
            <MKSocialButton
              component="a"
              href="https://www.instagram.com/yerin_the_genuine/"
              target="_blank"
              sx={{ backgroundColor: "#E1306C", color: "white", mr: 1 }}
            >
              <i className="fab fa-instagram" />
              &nbsp;Instagram
            </MKSocialButton>
            <MKSocialButton
              component="a"
              href="https://www.youtube.com/c/YerinBaekOfficial"
              target="_blank"
              color="youtube"
              sx={{ mr: 1 }}
            >
              <i className="fab fa-youtube" />
              &nbsp;YouTube
            </MKSocialButton>

            <MKSocialButton
              component="a"
              href="https://soundcloud.com/eyriej"
              target="_blank"
              sx={{ backgroundColor: "#FF5500", color: "white" }}
            >
              <i className="fab fa-soundcloud" />
              &nbsp;SoundCloud
            </MKSocialButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SocialLinks;
