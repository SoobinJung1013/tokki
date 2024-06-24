// sections/Information.js

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "./CenteredBlogCard";

// Image link
import yerinImage from "assets/images/yerinImage.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={yerinImage}
              title="Yerin Baek(Singer, Songwriter)"
              description={
                <>
                  <MKTypography variant="body3" color="textPrimary">
                    <strong>Age:</strong> 25 (Born on June 26, 1997)
                    <br />
                  </MKTypography>
                  <MKTypography variant="body3" color="textPrimary">
                    <strong>Agency:</strong> JYP, Blue Vinyl(-2024), peoplelikepeole(2024-)
                    <br />
                  </MKTypography>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} mb={3}>
                <MKBox>
                  <MKTypography variant="h3" mb={1}>
                    Yerin Baek
                  </MKTypography>
                  <MKTypography variant="body1" color="textSecondary">
                    Yerin Baek is a South Korean singer and songwriter, known for her outstanding
                    vocal skills and emotional music. She debuted as a duo in 15& and later gained
                    more popularity through her solo activities. She has numerous hit songs and is a
                    versatile artist capable of handling various genres.
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
