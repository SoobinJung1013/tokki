/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import React, { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Presentation page sections
import PhotoCards from "pages/Presentation/sections/PhotoCard";
import Albums from "pages/Presentation/sections/Albums";
import Pages from "pages/Presentation/sections/Pages";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import SocialLinks from "./sections/SocialLinks";

// import Icon from "@mui/material/Icon";

function Presentation() {
  // const [collapseStatus, setCollapseStatus] = useState(false);

  // const handleCollapse = () => {
  //   setCollapseStatus(!collapseStatus);
  // };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          color: "info",
        }}
        sticky
      />
      {/* <DefaultNavbarDropdown
        name="menu"
        icon={<Icon>menu</Icon>}
        collapseStatus={collapseStatus}
        light={false}
        route={routes}
        collapse={true}
        onClick={handleCollapse}
      >
        <div>
          <DefaultNavbarDropdown
            name="home"
            icon={<Icon>home</Icon>}
            light={true}
            route="/home"
            collapse={false}
          />
          <DefaultNavbarDropdown
            name="about"
            icon={<Icon>info</Icon>}
            light={true}
            href="https://www.example.com"
            collapse={false}
          />
        </div>
      </DefaultNavbarDropdown> */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Yerin Baek{" "}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -1,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <PhotoCards />
        <Albums />
        <Pages />
        <SocialLinks />
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
