import React from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import careerbg from '../assets/images/careerbg.jpeg'
import Grid from '@mui/material/Grid';
import tree from '../assets/images/icons8-forest-64.png'
import backpack from '../assets/images/icons8-tourist-backpack-64.png'
import read from '../assets/images/icons8-read-64.png'
import certificate from '../assets/images/icons8-certificate-64.png'



const Career = () => {
  return (
    <div>
        <Header/>
        <img src={careerbg} class='bannerimage'></img>
        <Grid container spacing={3} style={{padding:"50px 100px",display:"flex", justifyContent:"center"}}>
            <Grid item s={12} sm={12} lg={6} md={12}  style={{padding:"20px 20px"}} >
                <h1 className='heading1'>
                    Why should you choose to join us?
                </h1>
                <p>
                At SankalpTaru, we integrate your creativity with technology to meet a social cause. 
                For us, a job is much more than earning money and experience, 
                rather serving Mother Nature at forefront. And certainly, 
                our team is a true validation to this! Coming from varied cultural diversities,
                 we are a bunch of dynamic enthusiasts proliferating greenery 
                 by the virtue of our service to environment.
                <br/>
                <br/>
                But with work, we never miss out having giggles and fun! So, 
                if your earnest zeal to greenify the planet makes a perfect match with our vision,
                apply in a blink.
                </p>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={12} className='choice1'>
                <Grid container scpacing={2}>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                        <div className='choice1'>
                        <img src={tree} style={{padding:"10px"}}></img>
                        <h2 className='heading2'>Serving mother nature</h2>
                        </div>
                        <p className='heading2'>
                        We are passionate about melding nature and technology into a tight knit
                        to increase green spaces and restoring ecological balance, 
                        through our IT- enabled platform.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='choice1'>
                        <img src={backpack} style={{padding:"10px"}}></img>
                        <h2 className='heading2'>Annual Expeditions</h2>
                    </div>
                    <p className='heading2'>
                        Annual trips give us the opportunity to reunite face to face with our 
                        team members, working from different parts of the country to brainstorm 
                        on new challenges and organizational opportunities.
                    </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='choice1'>
                        <img src={read} style={{padding:"10px"}}></img>
                        <h2 className='heading2'>Vast learning scope</h2>
                    </div>
                    <p className='heading2'>
                        Each assignment at SankalpTaru is a learning curve for its team 
                        members to break through their grassroot dilemmas and imaginative 
                        road blocks.
                    </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='choice1'>
                        <img src={certificate} style={{padding:"10px"}}></img>
                        <h2 className='heading2'>Certifications</h2>
                    </div>
                    <p className='heading2'>
                        The collaborative culture at SankalpTaru allows its team members 
                        to learn from each other and encourages problem solving through 
                        the exchange of productive feedbacks.
                    </p>
                    </Grid>
                </Grid>
                
            </Grid>

        </Grid>
        <div className='hr'>
            <p>
            Please send a cover letter and latest CV with post applied for mentioned in the subject line at
            </p>
            <h2>
            hr@sankalptaru.org
            </h2>
            <p>
            <b>Please note -</b> We do not accept applications received through online job portals
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default Career