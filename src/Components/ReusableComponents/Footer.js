import React from 'react'
import footerbg from '../../assets/images/footerbg.jpeg'
import logo from '../../assets/images/sankalptaru-new-logo-white.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import Insta from '../../assets/images/icons8-insta-50.png'
import Spotify from '../../assets/images/icons8-spotify-50.png'
import google from '../../assets/images/googleplaystore-min-1.png'
import apple from '../../assets/images/icon_app_store.png'
import { useMediaQuery ,useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  const navigate=useNavigate();
  const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('sm'));
  const footer1 = [{name:'How it works',click:"/",href:"/#howitworks"},{name:'Imapct',click:"/",href:"/#gallery"}];
  const footer2 = [{name:'Mission',click:"/Aboutus"},{name: 'Gallery',click:"/",href:"/#gallery"}, {name:'Our team',click:"/OurTeam"}];
  const footer3 = [{name:'Careers',click:"/Career"},{name: 'Contact us',click:"/ContactUs"}, {name:'Volunteer',click:"/Volunteer"},, {name:'Terms & Conditions',click:"/Terms"}];

  
  return (
    <div style={{ backgroundImage:`url(${footerbg})`, 
    opacity:0.7,
    width:"100%",
    backgrounPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent:"center"}}>

      <Grid container spacing={0} className='choice1' style={{padding:"100px 20px 20px 0px"}} >

        <Grid xs={12} sm={12} lg={4} style={{textAlign:"center"}}>
          <Grid xs={12}>
            <img src={logo} style={{height:"100px",textAlign:"center"}}></img>
          </Grid>
          <Grid xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <MailIcon style={{color:"white"}}/>
            <p style={{color:"white",padding:"0px"}}>sankalptaru@gmail.com</p>
          </Grid>
          <Grid xs={12}style={{display:"flex", alignItems:"center", justifyContent:"center",padding:"5px"}}>
            <FacebookRoundedIcon style={{color:"white",fontSize:"50px",padding:"5px"}}/>
            <SubscriptionsRoundedIcon style={{color:"white",fontSize:"50px",padding:"5px"}}/>
            <img src={Insta} style={{color:"white",fontSize:"50px",padding:"5px"}}/>
            <img src={Spotify} style={{color:"white",fontSize:"50px",padding:"5px"}}/>
          </Grid>
          <Grid xs={12}style={{display:"flex", alignItems:"center",justifyContent:"center", padding:"5px"}}>
            <img src={google} style={{width:"150px",padding:"5px",filter:"brightness(300%)"}}/>
            <img src={apple} style={{width:"150px",padding:"5px",filter:"brightness(300%)"}}/>
          </Grid>
        </Grid>

        
        <Grid xs={12} sm={12} lg={5} className='choice1' >

        <Grid xs={12} sm ={6} lg={3} >
          <div  >
            <h3 className='footertext'><u>Company</u></h3>
            <ul className='footertext' style={{listStyle:"none"}}>
            {footer1.map(list => {
                return (
                  <li onClick={()=>navigate(list.click)} className='list'>
                    <a href={list.href}>{list.name}</a>
                  </li>)})}
            </ul>
            </div>
        </Grid>
        <Grid xs={12} sm ={6} lg={3}>
        <div >
            <h3 className='footertext'><u>About us</u></h3>
            <ul  className='footertext'style={{listStyle:"none"}}>
            {footer2.map(list => {
                return (
                  <li onClick={()=>navigate(list.click)} className='list'>
                    <a href={list.href}>{list.name}</a>
                    </li>
                    )})}
            </ul>
            </div>
        </Grid>
        <Grid xs={12} sm ={6} lg={3}>
        <div >
            <h3 className='footertext'><u>Resources</u></h3>
            <ul className='footertext'style={{listStyle:"none"}}>
            {footer3.map(list => {
                return (
                  <li onClick={()=>navigate(list.click)} className='list'>
                    {list.name}
                  </li>
                  )})}
            </ul>
            </div>
        </Grid>

        </Grid>
        
      </Grid>
      {matches? "":
      <Grid container spacing={3} className='choice1'  >
        <Grid  md={5} lg={5} className='choice1' style={{padding:"40px 20px 20px 0px"}}>
        
        <Box component="form"
          sx={{
            '& > :not(style)': { width: '35ch' },
            }}
          autoComplete="off">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
         </Box>
          
          <button className='buttongo'>GO</button>
        </Grid>
        <Grid  md={3} lg={3} className='choice1'  style={{padding:"40px 20px 20px 0px"}} >
        <button className='buttonnews'>LATEST NEWSREPORT</button>
        <button className='buttonnews'>VOLUNTEER</button>
        </Grid>
      </Grid>
}



    </div>
  )
}

export default Footer