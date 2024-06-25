import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import data from "pages/Presentation/sections/data/pagesData";
import AlbumCard from "components/Cards/AlbumCards/AlbumCard";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={4} key={name} sx={{ display: "flex", justifyContent: "center" }}>
      <Link to={route} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <AlbumCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 3, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold" mb={2}>
            Pages
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 4, lg: 8 } }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12} sx={{ mt: 2, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3} justifyContent="center">
              {renderData}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
