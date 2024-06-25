// components/Cards/GalleryCard.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import Tooltip from "@mui/material/Tooltip";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ImageModal from "components/Modal/ImageModal";

function GalleryCard({ image, name, ...rest }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageRatio, setImageRatio] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;
      setImageRatio(ratio);
    };
    img.src = image;
  }, [image]);

  let widthProp, heightProp;

  if (imageRatio >= 1) {
    widthProp = "auto";
    heightProp = "100%";
  } else {
    widthProp = "100%";
    heightProp = "auto";
  }

  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      width="100%"
      paddingTop="100%"
      position="relative"
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
      onClick={handleOpen}
    >
      <MKBox
        component="img"
        src={image}
        alt={name}
        width={widthProp}
        height={heightProp}
        position="absolute"
        top={0}
        left={0}
        objectFit="cover" // Cover ensures the image fills the square box
        sx={{
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)", // Optional: Add zoom effect on hover
          },
        }}
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {imageTemplate}
      <MKBox mt={1} ml={1} lineHeight={1}>
        {name && (
          <MKTypography variant="h6" fontWeight="bold">
            {name}
          </MKTypography>
        )}
      </MKBox>

      <ImageModal open={open} handleClose={handleClose} image={image} name={name} />
    </MKBox>
  );
}

GalleryCard.defaultProps = {
  name: "",
  type: "",
  pro: false,
};

GalleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  pro: PropTypes.bool,
};

export default GalleryCard;
