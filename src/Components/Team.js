import React from 'react'
import teambg from '../assets/images/DC6D4A72-1620-42DA-8F87-5982BDC354E0_1_201_a.jpeg'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import Grid from '@mui/material/Grid';
import p1 from '../assets/images/p1.jpeg'
import p2 from '../assets/images/p2.jpeg'
import p3 from '../assets/images/p3.jpeg'
import p4 from '../assets/images/p4.jpeg'
import harry from '../assets/images/harry.jpeg'


const Team = () => {
  return (
    <div>
        <Header/>
        <div style={{ backgroundImage:`url(${teambg})`, 
    width:'100%',
    height:'400px',
    backgrounPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"}}>
        <h1 className='headteam'>OUR TEAM</h1>

    </div>


        <Grid container spacing={2} className='choice1' style={{padding:"30px"}}>
            <Grid item xs={12} sm={6} lg={3} md={4}style={{textAlign:"center",padding:"10px"}}>
                <img src={harry} className='teamimg'></img>
                <h2 className='teamtext'>Brand Ambassador</h2>
                <h4 className='teamtext'>Harry Styles</h4>
                <p className='teamtext'>
                Harry Edward Styles (born 1 February 1994) is an English singer and actor. 
                His musical career began in 2010 as part of One Direction, 
                a boy band formed on the British music competition series The X Factor. 
                Each member of the band had been eliminated from the solo contest. 
                </p>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} md={4} style={{textAlign:"center",padding:"30px"}}>
                <img src={p1} className='teamimg'></img>
                <h2 className='teamtext'>Brand Ambassador</h2>
                <h4 className='teamtext'>Harry Styles</h4>
                <p className='teamtext'>
                Harry Edward Styles (born 1 February 1994) is an English singer and actor. 
                His musical career began in 2010 as part of One Direction, 
                a boy band formed on the British music competition series The X Factor. 
                Each member of the band had been eliminated from the solo contest. 
                </p>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} md={4} style={{textAlign:"center",padding:"30px"}}>
                <img src={p2} className='teamimg'></img>
                <h2 className='teamtext'>Brand Ambassador</h2>
                <h4 className='teamtext'>Harry Styles</h4>
                <p className='teamtext'>
                Harry Edward Styles (born 1 February 1994) is an English singer and actor. 
                His musical career began in 2010 as part of One Direction, 
                a boy band formed on the British music competition series The X Factor. 
                Each member of the band had been eliminated from the solo contest. 
                </p>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} md={4} style={{textAlign:"center",padding:"30px"}}>
                <img src={p3} className='teamimg'></img>
                <h2 className='teamtext'>Brand Ambassador</h2>
                <h4 className='teamtext'>Harry Styles</h4>
                <p className='teamtext'>
                Harry Edward Styles (born 1 February 1994) is an English singer and actor. 
                His musical career began in 2010 as part of One Direction, 
                a boy band formed on the British music competition series The X Factor. 
                Each member of the band had been eliminated from the solo contest. 
                </p>
            </Grid>
        </Grid>
        <Footer/>
    </div>
  )
}

export default Team