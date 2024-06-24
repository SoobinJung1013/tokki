// sections/TrackList.js

import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TrackList({ tracks }) {
  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" mb={2}>
              트랙 리스트
            </MKTypography>
            {tracks.map((track, index) => (
              <MKBox key={index} mb={1}>
                <MKTypography variant="body1">
                  {index + 1}. {track.title} - {track.duration}
                </MKTypography>
              </MKBox>
            ))}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrackList;
