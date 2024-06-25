import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import MKBox from "components/MKBox";

const ImageModal = ({ open, handleClose, image, name }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
    };
    img.src = image;
  }, [image]);

  const calculateImageSize = () => {
    if (!imageSize.width || !imageSize.height) return {};

    const windowHeight = window.innerHeight * 0.8;
    const windowWidth = window.innerWidth * 0.8;

    if (imageSize.height > windowHeight || imageSize.width > windowWidth) {
      const ratio = Math.min(windowWidth / imageSize.width, windowHeight / imageSize.height);
      return { width: imageSize.width * ratio, height: imageSize.height * ratio };
    } else {
      return { width: imageSize.width, height: imageSize.height };
    }
  };

  const { width, height } = calculateImageSize();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MKBox
        width="100%"
        maxWidth="900px"
        bgcolor="background.paper"
        boxShadow={24}
        p={4}
        borderRadius="15px"
        sx={{
          outline: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MKBox
          bgcolor="white"
          borderRadius="15px"
          p={2}
          boxShadow={3}
          width="100%"
          textAlign="center"
          sx={{
            maxWidth: "100%",
            maxHeight: "80vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              maxWidth: `${width}px`,
              maxHeight: `${height}px`,
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </MKBox>
      </MKBox>
    </Modal>
  );
};

ImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default ImageModal;
