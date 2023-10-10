import React, { useState } from "react";
import Header from "./ReusableComponents/Header";
import Footer from "./ReusableComponents/Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Volunteer = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  //   const state = [
  //     { name: "Andaman and Nicobar Islands" },
  //     { name: "Andhra Pradesh" },
  //     { name: "Arunachal Pradesh" },
  //     { name: "Assam" },
  //     { name: "Bihar" },
  //     { name: "Chandigarh" },
  //     { name: "Chhattisgarh" },
  //     { name: "Dadra and Nagar Haveli and Daman and Diu" },
  //     { name: "Delhi" },
  //     { name: "Goa" },
  //     { name: "Gujarat" },
  //     { name: "Haryana" },
  //     { name: "Himachal Pradesh" },
  //     { name: "Jammu and Kashmir" },
  //     { name: "Jharkhand" },
  //     { name: "Karnataka" },
  //     { name: "Kerala" },
  //     { name: "Ladakh" },
  //     { name: "Lakshadweep" },
  //     { name: "Madhya Pradesh" },
  //     { name: "Maharashtra" },
  //     { name: "Manipur" },
  //     { name: "Meghalaya" },
  //     { name: "Mizoram" },
  //     { name: "Nagaland" },
  //     { name: "Odisha" },
  //     { name: "Puducherry" },
  //     { name: "Punjab" },
  //     { name: "Rajasthan" },
  //     { name: "Sikkim" },
  //     { name: "Tamil Nadu" },
  //     { name: "Telangana" },
  //     { name: "Tripura" },
  //     { name: "Union territory" },
  //     { name: "Uttar Pradesh" },
  //     { name: "Uttarakhand" },
  //     { name: "West Bengal" },
  //   ];
  const [age, setAge] = React.useState("");
  const [value, setvalue] = useState(0);

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Header />
      <Grid container spacing={2} className="choice1">
        <Grid item xs={8} style={{ padding: "30px", margin: "40px" }}>
          <div
            style={{
              marginBottom: "2px",
              backgroundColor: "#e5e5e5",
              padding: "10px 20px",
            }}
          >
            <h1 style={{ color: "#4c4f4d" }}>Volunteer Form</h1>
          </div>
          <div style={{ backgroundColor: "#e5e5e5", padding: "20px" }}>
            <Grid container spacing={2} className="choice1">
              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <TextField fullWidth label="Your Name*" id="fullWidth" />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <TextField fullWidth label="Email ID*" id="fullWidth" />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <TextField fullWidth label="Phone No.*" id="fullWidth" />
                </Box>
              </Grid>
            </Grid>

            <div className="choice1" style={{ justifyContent: "left" }}>
              <Checkbox {...label} defaultChecked />
              <p>
                Subscribe for WhatsApp updates of plantation events. (To avail
                this, WhatsApp number is mandatory)
              </p>
            </div>

            <div className="choice1" style={{ justifyContent: "left" }}>
              <Checkbox {...label} defaultChecked />
              <p>Subscribe to our Monthly Newsletter</p>
            </div>

            <TextField
              fullWidth
              label="Address"
              multiline
              rows={4}
              style={{ marginBottom: "20px" }}
            />

            <Grid container spacing={2} className="choice1">
              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <TextField fullWidth label="State*" id="fullWidth" />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <TextField fullWidth label="City*" id="fullWidth" />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange2}
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Others</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <div className="choice1" style={{justifyContent:"left"}}>
              <p>
                Have you ever been associated with an Environmental
                Organisation?*
              </p>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>YES</p>
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
                <p>NO</p>
            </div>

            <TextField
              fullWidth
              label="If yes, Please specify:"
              multiline
              rows={4}
              style={{ marginBottom: "20px" }}
            />

            <TextField
              fullWidth
              label="Tell us why u wish to join SankalpTaru - Share your green story"
              multiline
              rows={6}
              style={{ marginBottom: "20px" }}
            />

            <button className='loginbutton'>SUBMIT</button>

          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Volunteer;
