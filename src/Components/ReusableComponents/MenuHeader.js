import React, { useState , useEffect} from "react";
import logo from "../../assets/images/sankalptaru-new-logo-white.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#e3e0ab",
}));

const MenuHeader = (userid) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));

  const [entry, setEntry] = useState("");
  var nm = JSON.parse(sessionStorage.getItem("userid"));

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };
    fetch(`http://127.0.0.1:8000/api/user/${userid}`)
      .then((res) => res.json())
      .then((json) => setEntry(json));
  }, []);

  function handlecartclick() {
    alert("Cart Empty. Please login first");
  }

  return (
    <div className="headercontainer">
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src={logo}
            id="logo"
            onClick={() => navigate("/")}
            style={{ marginLeft: "5px", height: "50px" }}
          ></img>
        </Box>
        {matches ? (
          ""
        ) : (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box className="boxheader">
              <Item onClick={() => navigate("/AboutUs")} className="headertags">
                ABOUT US
              </Item>
            </Box>
            <Box>
              <Item className="headertags">GALLERY</Item>
            </Box>
            <Box>
              <Item
                onClick={() => navigate("/ContactUs")}
                className="headertags"
              >
                CONTACT
              </Item>
            </Box>
            <Box>
              <Item onClick={() => navigate("/Career")} className="headertags">
                CAREERS
              </Item>
            </Box>
          </Box>
        )}

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            justifyContent: "center",
          }}
        >
          <Box>
            <Item onClick={() => navigate("/PlantNow")} className="plantnow">
              PLANT A TREE
            </Item>
          </Box>
          <Box
            style={{
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className="rightheader">
              <ShoppingCartIcon
              onClick={() =>{nm? navigate("/Cart"):handlecartclick()}}
              className="loginbuttonheader"
                style={{ color: "white", fontSize: "25px", display: "block" }}
              />
            </Box>
            <Box>
              <p onClick={() => {nm?navigate("/Cart"):handlecartclick()}}
                className="loginbuttonheader"
              style={{ color: "white", marginTop: "2px", fontSize: "15px" }}>
                CART
              </p>
            </Box>
          </Box>

          <Box style={{ marginRight: "5px" }}>
            <Box className="rightheader">
              <AccountCircleIcon
                onClick={() => {
                  nm ? navigate("/Account") : navigate("/Login");
                }}
                className="loginbuttonheader"
                style={{ color: "white", fontSize: "20px" }}
              />
            </Box>
            
            <Box>
              <p
                onClick={() => {
                  nm ? navigate("/Account") : navigate("/Login");
                }}
                className="loginbuttonheader"
                style={{ color: "white", marginTop: "2px", fontSize: "15px" }}
              >
                {nm ? "ACCOUNT" : "LOGIN"}
              </p>
            </Box>
          </Box>
          {matches2 ? (
            ""
          ) : (
          <Box style={{ marginRight: "10px" }}>
            <Box className="rightheader">
              <CloseIcon
                onClick={() => navigate("/")}
                className="loginbuttonheader"
                style={{ color: "white", fontSize: "25px", display: "block" }}
              />
            </Box>
            <Box>
              <p
                onClick={() => navigate("/")}
                className="loginbuttonheader"
                style={{ color: "white", marginTop: "2px", fontSize: "15px" }}
              >
                CLOSE
              </p>
            </Box>
          </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default MenuHeader;
