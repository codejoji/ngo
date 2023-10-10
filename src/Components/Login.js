import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../assets/images/Untitled design (1).png";
import bg from "../assets/images/loginbg-removebg-preview.png";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import googlesignin from "../assets/images/btn_google_signin_dark_normal_web.png";
import Footer from "./ReusableComponents/Footer";
import Header from "./ReusableComponents/Header";
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#E0E3E7",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 4,
    padding: "4px !important", // override inline-style
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [isclick, setisclick] = useState();
  const [issigninclicked, setissigninclicked] = useState("signup");
  const [signupstatus,setsignupstatus]=useState('')
  const [loginstatus,setloginstatus]=useState('')
  const [userentry,setuserentry]=useState('')


  function handleLogin() {
    setisclick(true);

    let form = {
      email: email,
      password: pass,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {setloginstatus(data?.status);setuserentry(data)}
      // data?.status === "success"
      //     ? sessionStorage.setItem("userid", JSON.stringify(data))
      //     : ""
      );
    // sessionStorage.setItem('userid',userid);
    //data.status==='success'?navigate("/Account"):""

    
  }
  if(loginstatus==="success" && isclick)
  {
    
    sessionStorage.setItem("userid", JSON.stringify(userentry))

    var nm = JSON.parse(sessionStorage?.getItem("userid"));
    console.log("loginstatus",loginstatus)
    
    if(loginstatus==="success"){
      alert("Login successfull")
      navigate("/PlantNow")
      setisclick(false)
    }
    else{
      alert("Invalid Login");
    }

  }

  

  function handleSignup() {
    
    // Prevent the browser from reloading the page
    // e.preventDefault();
    // Read the form data

    let form = {
      email: email,
      password: pass,
      password_confirmation: cpass,
    };

    console.log("form2", form);

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    fetch("http://127.0.0.1:8000/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => setsignupstatus(data?.status));
  }

  return (
    <div>
      <Header />
      <Box>
        <Grid
          container
          spacing={2}
          className="choice1"
          style={{ padding: "40px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Item className="loginitem">
              <img src={logo} style={{ height: "70px" }}></img>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  fontSize: "15px",
                }}
              >
                <Grid xs={6}>
                  <Item
                    onClick={() => setissigninclicked("login")}
                    className="clickbutton"
                  >
                    Login
                  </Item>
                </Grid>
                <Grid xs={6}>
                  <Item
                    onClick={() => setissigninclicked("signup")}
                    className="clickbutton"
                  >
                    Sign Up
                  </Item>
                </Grid>
              </div>


              {issigninclicked === "login" ? (
                <div>
                  <p className="logintext">Email</p>
                  <Box
                    component="form"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "90fr 2fr" },
                      gap: 2,
                    }}
                  >
                    <FormControl variant="standard">
                      <BootstrapInput
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                        id="bootstrap-input"
                      />
                    </FormControl>
                  </Box>
                  {isclick && !email ? (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "red",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Required Field
                    </p>
                  ) : (
                    ""
                  )}

                  <p className="logintext">Password</p>
                  <Box
                    component="form"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "90fr 2fr" },
                      gap: 2,
                    }}
                  >
                    <FormControl variant="standard">
                      <BootstrapInput
                        onChange={(e) => setpass(e.target.value)}
                        placeholder="Enter Password"
                        id="bootstrap-input"
                      />
                    </FormControl>
                  </Box>
                  {isclick && !pass ? (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "red",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Required Field
                    </p>
                  ) : (
                    ""
                  )}

                  <p className="logintext" style={{ color: "green" }}>
                    {" "}
                    Reset Password
                  </p>
                  <p className="logintext" style={{ color: "green" }}>
                    {" "}
                    Request for OTP
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "left",
                      fontWeight: "500",
                    }}
                  >
                    <button
                      onClick={() => handleLogin()}
                      className="loginbutton"
                    >
                      Login
                    </button>
                    {/* </form> */}
                  </div>
                  {/* {loginstatus==="success"?
                    <div className="choice1">
                      <p style={{color:"green",fontSize:"18px"}}><b>Login successfull</b></p>
                    </div>:""
                    } */}
                  
                  <p>
                    Or
                    <hr />
                  </p>
                  <div style={{ display: "flex", alignItems: "left" }}>
                    <img src={googlesignin}></img>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="logintext">Email</p>
                  <Box
                    component="form"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "90fr 2fr" },
                      gap: 2,
                    }}
                  >
                    <FormControl variant="standard">
                      <BootstrapInput
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                        id="bootstrap-input"
                      />
                    </FormControl>
                  </Box>
                  {isclick && !email ? (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "red",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Required Field
                    </p>
                  ) : (
                    ""
                  )}

                  <p className="logintext">Password</p>
                  <Box
                    component="form"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "90fr 2fr" },
                      gap: 2,
                    }}
                  >
                    <FormControl variant="standard">
                      <BootstrapInput
                        onChange={(e) => setpass(e.target.value)}
                        placeholder="Enter Password"
                        id="bootstrap-input"
                      />
                    </FormControl>
                  </Box>
                  {isclick && !pass ? (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "red",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Required Field
                    </p>
                  ) : (
                    ""
                  )}

                  <p className="logintext">Confirm Password</p>
                  <Box
                    component="form"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "90fr 2fr" },
                      gap: 2,
                    }}
                  >
                    <FormControl variant="standard">
                      <BootstrapInput
                        onChange={(e) => setcpass(e.target.value)}
                        placeholder="Enter Password Again"
                        id="bootstrap-input"
                      />
                    </FormControl>
                  </Box>
                  {isclick && !cpass ? (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "red",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Required Field
                    </p>
                  ) : (
                    ""
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "left",
                      fontWeight: "500",
                    }}
                  >
                    {/* <form method="post" onSubmit={(e)=>handleSignup(e)} > */}
                    <button
                      type="submit"
                      onClick={() => {
                        setisclick(true);
                        handleSignup();
                      }}
                      className="loginbutton"
                    >
                      Sign up
                    </button>
                    
                  </div>
                  {signupstatus? 
                    <div className="choice1">
                      <p style={{color:"green",fontSize:"18px"}}><b>Sign up successfull</b></p>
                    </div>:""
                    }
                  <br />
                  <p>
                    Or
                    <hr />
                  </p>
                  <div style={{ display: "flex", alignItems: "left" }}>
                    <img src={googlesignin}></img>
                  </div>
                </div>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
