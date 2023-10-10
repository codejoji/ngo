import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import find from "../assets/images/find.png";
import tree from "../assets/images/tree-removebg-preview.png";
import location from "../assets/images/location.png";
import zodiac from "../assets/images/zodiac2.png";
import typeofplant from "../assets/images/typeofplant.png";
import Gallery from "./Gallery";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/928596AD-CE46-4F87-B9C4-0CC376DC2EFD_4_5005_c.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#353535" : "#b2967d",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: "10px",
  textAlign: "center",
  color: "theme.palette.text.secondary",
  borderRadius: "40px",
}));

const Middle = () => {
  const navigate = useNavigate();

  return (
    <div className="middlecontainer">
      <Banner />
      <div id="howitworks">
        <div style={{ margin: "0px" }}>
          <h1 id="easy">Planting Trees made easy!</h1>
          <p id="loc2">How it works!</p>
        </div>

        <Box className="boxeasy" style={{ marginBottom: "50px" }}>
          <Grid
            container
            spacing={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} lg={2} sm={6} className="grideasy">
              <Item>
                <div className="diveasy">
                  <img src={find} className="imgeasy"></img>
                  01
                </div>
                <div className="diveasy2">
                  Select a plant, zodiac, place you wish to plant for
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} lg={2} sm={6} className="grideasy">
              <Item>
                <div className="diveasy">
                  <img src={find} className="imgeasy"></img>
                  02
                </div>
                <div className="diveasy2">
                  Proceed to payment and receive your tree certificate
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} lg={2} sm={6} className="grideasy">
              <Item>
                <div className="diveasy">
                  <img src={find} className="imgeasy"></img>
                  03
                </div>
                <div className="diveasy2">
                  Then your sapling will get planted on the chosen ground
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} lg={2} sm={6} className="grideasy">
              <Item>
                <div className="diveasy">
                  <img src={find} className="imgeasy"></img>
                  04
                </div>
                <div className="diveasy2">
                  Track live location of your tree and get updates on growth
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <hr style={{ width: "90%" }}></hr>

      <div style={{ margin: "50px 0px" }}>
        <div>
          <h1 id="easy">What will you receive?</h1>
          <p id="loc2">Whats in it for you</p>
        </div>
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${img})`,
            width: "100%",
            height: "350px",
            backgrounPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Grid item xs={12} sm={12} lg={6}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={12} lg={4}>
                <Item
                  style={{
                    backgroundColor: "#a3b18a",
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Tree Certificate
                </Item>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <Item
                  style={{
                    backgroundColor: "#a3b18a",
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  A healthy environment
                </Item>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <Item
                  style={{
                    backgroundColor: "#a3b18a",
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Growth updates of your plant
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Gallery />

      <div
        style={{
          backgroundColor: "#EBE2D7",
          paddingBottom: "20px",
          margin: "50px 0px",
        }}
      >
        <div>
          <h1 id="loc">Plant today whatever, wherever</h1>
          <p id="loc2">
            With so many options to choose from, customise your plant your tree
            whenever and wherever you want!
          </p>
        </div>
        <Grid
          container
          spacing={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:"20px 0px"
          }}
        >
          <Grid item xs={12} sm={12} lg={2.5} className="choice">
            <Item
              style={{
                backgroundColor: "#6f5e5c",
                width: "50%",
                fontSize: "20px",
                color: "#FFFFFF",
              }}
            >
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <img className="locationimg" src={location}></img>
                <p style={{ color: "white", marginTop: "2px" }}>Location</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} lg={2.5} className="choice">
            <Item
              style={{
                backgroundColor: "#6f5e5c",
                width: "50%",
                fontSize: "20px",
                color: "#FFFFFF",
              }}
            >
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <img className="locationimg" src={zodiac}></img>
                <p style={{ color: "white", marginTop: "2px" }}>Zodiac</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} lg={2.5} className="choice">
            <Item
              style={{
                backgroundColor: "#6f5e5c",
                width: "50%",
                fontSize: "20px",
                color: "#FFFFFF",
              }}
            >
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <img className="locationimg" src={typeofplant}></img>
                <p style={{ color: "white", marginTop: "2px" }}>Type</p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>


      <div style={{ paddingBottom: "30px" , margin: "20px 0px" }}>
        <div>
          <h2 id="loc">Join Us</h2>
          <p id="loc2">Take a small step towards a green surrounding</p>
        </div>

        <Grid
          container
          
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={12} lg={3} className="choice">
            <Item
              onClick={() => navigate("/Volunteer")}
              style={{
                backgroundColor: "#780000",
                width: "40%",
                fontSize: "20px",
                color: "#FFFFFF",
                padding: "10px",
              }}
            >
              Volunteer
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} lg={3} className="choice">
            <Item
              onClick={() => navigate("/Volunteer")}
              style={{
                backgroundColor: "#780000",
                width: "60%",
                fontSize: "20px",
                color: "#FFFFFF",
                padding: "10px",
              }}
            >
              Become a partner
            </Item>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
};

export default Middle;
