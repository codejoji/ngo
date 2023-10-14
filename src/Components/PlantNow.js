import React,{ useState , useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './ReusableComponents/Header';
import Footer from './ReusableComponents/Footer';
import Jharkhand from '../assets/images/jharkhand.jpeg'
import Ladakh from '../assets/images/ladakh.jpeg'
import chattisgarh from '../assets/images/chattisgarh.jpeg'
import up from '../assets/images/up.jpeg'
import odisha from '../assets/images/ODISHA.jpeg'
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const PlantNow = () => {
    const navigate=useNavigate();
    const [entry,setEntry]=useState([])

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify()
        };
        fetch("https://rasayanudyog.co.in/api/displayloc",requestOptions)
        .then((res) => res.json())
        .then((json) => setEntry(json))
       
    },[])   

    function handleplantnow(id)
    {
        if(id===1){
            navigate("/PlantNow/PlantDetails1")
        }
        else if(id===2)
        {
            navigate("/PlantNow/PlantDetails2")
        }
        else if(id===3)
        {
            navigate("/PlantNow/PlantDetails3")
        }
        else if(id===4)
        {
            navigate("/PlantNow/PlantDetails4")
        }
        else if(id===5)
        {
            navigate("/PlantNow/PlantDetails5")
        }
        else if(id==6)
        {
            navigate("/PlantNow/Dlantern")
        }
        else if(id==7)
        {
            navigate("/PlantNow/Poshionkit")
        }

    }
        
    console.log("entry",entry);

  return (
    <div>
        <Header/>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='gridcontainerplantnow'>
            {entry?.result?.map((list) => 
            (
                <Grid item xs={12} sm={6} lg={3} md={4}>
                
                    <Item style={{height:'410px'}}>
                    
                        <img src={list.imgpath} style={{height:"200px",width:"100%"}}></img>
                        <h2>{list.title}</h2>
                        <h4>{list.desc}</h4>
                        <div className='choice1'>
                            <p style={{padding:"20px"}}>Rs {list.cost} only</p>
                            <button onClick={()=>handleplantnow(list.id)} className='loginbutton'>Plant now</button>
                        </div>
                        
                    </Item>
                    
                </Grid>
                ))}


            </Grid>
        </Box>
        <Footer/>
    </div>
  )
}

export default PlantNow