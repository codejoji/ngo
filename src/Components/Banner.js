import React from 'react'
import banner1 from '../assets/images/banner1.jpeg'
import Grid from '@mui/material/Grid';
import img1 from '../assets/images/pexels-photo-5231143.jpeg'
import img2 from '../assets/images/pexels-photo-6272310.jpeg'
import img3 from '../assets/images/pexels-photo-7125434.jpeg'

const Banner = () => {
  return (
    <div className='bannercontainer' 
    style={{width:"100%",
    backgrounPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent:"center",
    marginBottom:"50px",
    display:"flex",
    }}>
      <Grid container spacing={2}>
        <Grid item xs={4} className='bannergrid'>
        <img src={img1} class='bannerimage'></img>
        </Grid>
        <Grid item xs={4} className='bannergrid'>
        <img src={img2} class='bannerimage'></img>
        </Grid>
        <Grid item xs={4} className='bannergrid'>
        <img src={img3} class='bannerimage'></img>
        </Grid>
      </Grid>
        
    </div>
  )
}

export default Banner