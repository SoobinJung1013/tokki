// CarouselComponent.jsx
import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const CarouselComponent = ({ items, maxWidth }) => {
  const youtubePrefix = "https://www.youtube.com/embed/";

  return (
    <Carousel
      navButtonsAlwaysVisible
      NextIcon={<ArrowForwardIos />}
      PrevIcon={<ArrowBackIos />}
      indicators={false}
      autoPlay={false}
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          borderRadius: 0,
        },
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ flex: "0 0 auto", width: "20%", textAlign: "center", opacity: 0.5 }}>
            {i > 0 && (
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10px",
                  textAlign: "center",
                  margin: "0 auto",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <MKBox
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={`${youtubePrefix}${items[i - 1].videoId}`}
                    title={items[i - 1].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </MKBox>
              </Paper>
            )}
          </div>
          <div style={{ flex: "1 0 auto", textAlign: "center" }}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                textAlign: "center",
                maxWidth: maxWidth || "100%",
                margin: "0 auto",
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <MKBox
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%", // 16:9 aspect ratio
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={`${youtubePrefix}${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </MKBox>
              <MKTypography variant="h5" mt={2}>
                {item.name}
              </MKTypography>
              <MKTypography variant="body2">{item.description}</MKTypography>
            </Paper>
          </div>
          <div style={{ flex: "0 0 auto", width: "20%", textAlign: "center", opacity: 0.5 }}>
            {i < items.length - 1 && (
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10px",
                  textAlign: "center",
                  margin: "0 auto",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <MKBox
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={`${youtubePrefix}${items[i + 1].videoId}`}
                    title={items[i + 1].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </MKBox>
              </Paper>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      videoId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  maxWidth: PropTypes.string,
};

export default CarouselComponent;
