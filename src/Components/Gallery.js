import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import g1 from "../assets/images/g1.jpeg";
import g2 from "../assets/images/g2.jpeg";
import g3 from "../assets/images/g3.jpeg";
import g4 from "../assets/images/g4.jpeg";
import g5 from "../assets/images/g5.jpeg";
import g6 from "../assets/images/g6.jpeg";
import g7 from "../assets/images/g7.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#353535" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "80%",
}));

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "#EBE2D7",
        paddingBottom: "20px",
        margin: "50px 0px",
      }}
    >
      <div style={{}}>
        <h1 id="loc">GALLERY</h1>
        <p id="loc2">Our impact</p>
      </div>

      <Grid container className="choice1">
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g1} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g2} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g3} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
          <img src={g4} className="galleryimg"></img>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g5} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g6} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g7} className="galleryimg"></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} className="gallerygrid">
          <Item className="galleryitem">
            <img src={g7} className="galleryimg"></img>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gallery;
