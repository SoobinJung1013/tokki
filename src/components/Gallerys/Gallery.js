import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryCard from "components/Cards/GalleryCards/GalleryCard";

const Gallery = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items.slice(0, 24)); // Initially load 24 items
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (currentItems.length >= items.length) {
      setHasMore(false);
      return;
    }
    // Simulate fetching new data
    setTimeout(() => {
      setCurrentItems((prevItems) => [
        ...prevItems,
        ...items.slice(prevItems.length, prevItems.length + 12),
      ]);
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={currentItems.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}
        >
          <CircularProgress />
          <Typography variant="h5" sx={{ ml: 2 }}>
            Loading...
          </Typography>
        </Box>
      }
      endMessage={
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6">
            <b>You have seen it all!</b>
          </Typography>
        </Box>
      }
    >
      <Grid container spacing={4} justifyContent="center">
        {currentItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GalleryCard image={item.image} name={item.name} pro={item.pro} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      pro: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Gallery;
