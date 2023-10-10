import React from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import Aboutbanner from '../assets/images/Cover-image-Mission-Vision-1.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import India from '../assets/images/india.jpeg'
import India2 from '../assets/images/Image-vision.png'
import { useMediaQuery ,useTheme} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    width:'50%',
    margin:'10px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const AboutUs = () => {
    const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
        <Header />
        <div style={{ backgroundImage:`url(${Aboutbanner})`, 
    width:"100%",
    backgrounPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent:"center",
    marginBottom:"50px"}}>
        <div className='bannertext'>
        <h1>
            We are crazy nature-centric enthusiasts, planting trees for the people, by the people
        </h1>
        </div>
        </div>

        <Grid container spacing={0} className='choice1'>
            <Grid item xs={12} lg={4} sm={12} md={6} className='choice1'>
                    <img className='indiaimg' src={India}></img>
            </Grid>
            <Grid item xs={12} lg={8} md={6} sm={12}>
                <div style={{padding:"40px 40px 20px 10px",fontFamily:'Times New Roman'}}>
                    <h1>Our Mission</h1>
                    <p>Our mission is to promote sustainable development and preserve the natural environment through
                        community engagement, education and by implementing innovative techniques. We strive to empower
                        local communities and inspire individuals to take action to protect and 
                        conserve the environment for future generations.</p>
                </div>
            </Grid>
        </Grid>
        {matches? "":
        <Grid container spacing={7} style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"80px"}}>
        <Grid item xs={12} lg={7} sm={12} md={6} className='choice1'>
                <div style={{fontFamily:'Times New Roman'}}>
                    <p style={{textAlign:"right", padding:"20px"}}>Our mission is to promote sustainable development and preserve the natural environment through
                        community engagement, education and by implementing innovative techniques. We strive to empower
                        local communities and inspire individuals to take action to protect and 
                        conserve the environment for future generations.</p>
                </div>
            </Grid>
            <Grid item xs={12} lg={3} sm={12} md={6}>
                    <img className='india2img' src={India2}></img>
            </Grid>
            
        </Grid>}
        
        
        
        
        

        <Footer/>
    </div>
  )
}

export default AboutUs