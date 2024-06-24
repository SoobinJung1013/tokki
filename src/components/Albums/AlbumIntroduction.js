// sections/AlbumIntroduction.js

import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AlbumIntroduction({ title, description }) {
  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" mb={2}>
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="textSecondary">
              {description}
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

AlbumIntroduction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AlbumIntroduction;
