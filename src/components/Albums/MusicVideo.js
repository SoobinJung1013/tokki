// sections/MusicVideo.js

import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";

function MusicVideo({ videos }) {
  return (
    <Container component="section" py={4}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <MKTypography variant="h3" mb={2}>
            뮤직 비디오
          </MKTypography>
          {videos.map((video, index) => (
            <div key={index} style={{ marginBottom: "24px" }}>
              <MKTypography variant="h6" mt={2}>
                {video.title}
              </MKTypography>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

MusicVideo.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MusicVideo;
