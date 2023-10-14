import React,{useState,useEffect} from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import Jharkhand from '../assets/images/jharkhand.jpeg'
import odisha from '../assets/images/ODISHA.jpeg'

import shoppingbag from '../assets/images/icons8-shopping-bag-50.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PoshionKit = () => {
    const navigate=useNavigate();
    var nm=JSON.parse(sessionStorage.getItem("userid")); 
    const [plantid,setplantid]=useState()
    const [count,setcount]=useState(1);
    const [age, setAge] = React.useState('');
    const [entry,setEntry]=useState('');
    const [currententry, setcurrententry] = useState([]);

    const [title,settitle]=useState('');
    const [name,setname]=useState('');
    const [addtocartclicked,setaddtocartclicked] =useState(false)
    console.log("age",age);
    console.log("nooftrees",count);
    console.log("title",title);
    console.log("plantid",plantid);
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify()
        };
        fetch("https://rasayanudyog.co.in/api/displaylocbyid/7")
        .then((res) => res.json())
        .then((json) => setEntry(json))

        fetch("https://rasayanudyog.co.in/api/plantdeetdisplay/7", requestOptions)
      .then((res) => res.json())
      .then((data) => setcurrententry(data?.result));
       
    },[]) 
    console.log("entry",entry)
    console.log("entry",entry.result)
    
    function handleSubmit() 
    {
      if(nm){
        if (name && age) {
        let form={
          title:title,
          name:"Poshion kit",
          occasion:age,
          nooftrees:count,
          location_id:"7"
        }
    
        console.log("sadhvd",form);
    
        if (currententry?.length>=1) {
          alert("Item already added");
        } else {
          const requestOptions = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          };

          fetch("https://rasayanudyog.co.in/api/newplantdeet", requestOptions)
            .then((response) => response.json())
            .then((data) => setplantid(data?.result?.id));
        }
      }
    } else {
      alert("Please login first");
    }
  }
  if (plantid) {
    function handleCart() 
    {
      let form={
          user_id:nm.user.id,
          plantdetail_id:plantid,
        }
        console.log("kkkk",form)
    
      const requestOptions = {
          method: 'POST',
          headers: { 'Accept': 'application/json' ,'Content-Type': 'application/json'}, 
          body: JSON.stringify( form )
      };
    
      fetch('https://rasayanudyog.co.in/api/createcart', requestOptions)
      .then(response => response.json())
      .then(data => console.log("cart",data));
    
    
    }
    handleCart();
  }
    
    
    function handleViewCart(){
        alert("Please Login first");
      }
  return (
    <div>
    <Header />
    {addtocartclicked && count &&nm &&age? 
    <div className='whenatcisclicked'>
      <h3 style={{marginRight:"70px"}}>Item successfully added</h3>
      <button onClick={()=>{nm? navigate("/Cart") :handleViewCart()}} className='loginbutton'>View cart</button>
      

    </div>:
    ""
    }
    {entry?.result?.map((list) => (
        <Grid container spacing={3} className='choice1' style={{padding:"50px"}}>
            <Grid item xs={12} sm={12} md={12}lg={5} className='choice1'>
              <img src={list.imgpath} className='detailsimg'></img>
            </Grid>
            <Grid item xs={12} sm={12} md={12}lg={5}>
              <h1>{list.title}</h1>
              <p>{list.desc}</p>
              <h3 style={{color:"green"}}>Contribution : Rs {list.cost} only</h3>
              <hr></hr>

                <h4 style={{padding:"5px"}}>
                Number of trees
                </h4>
                <div>
                  <Grid container spacing={3} className='choice' style={{padding:"0px"}}>
                    <Grid item xs={12} sm={12} lg={3} style={{display:"flex",alignItems:"center", justifyContent:"center",padding:"5px", backgroundColor:"#dedbd2"}}>

                        <button onClick={()=>{count>1?setcount(count-1):setcount(count)}} style={{margin:"7px", width:"40px",height:"40px", fontSize:"20px"}}>
                          -
                        </button>
                        <h4  style={{fontSize:"20px", padding:"10px",margin:"0px"}}>{count}</h4>
                        <button onClick={()=>setcount(count+1)}style={{margin:"7px", width:"40px",height:"40px", fontSize:"20px"}}>
                          +
                        </button>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} sm={12}style={{display:"flex",alignItems:"center", justifyContent:"center",padding:"20px"}}>
                        <img src={shoppingbag}></img>
                        <div style={{display:"block"}}>
                        <p style={{fontSize:"15px", marginBottom:"4px"}}>Plant 10 lanterns and receive a goody bag </p>
                        <p style={{fontSize:"10px", marginTop:"4px"}}>Only applicable through website(online) plantation</p>
                        </div>
                    </Grid>
                  </Grid>
                </div>
                {/* <p style={{fontSize:"17px"}}>Name on your tree</p>
                <Box sx={{maxWidth: '100%'}}>
                    <TextField onChange={(e)=>{setname(e.target.value);settitle('Dlantern')}} fullWidth id="fullWidth" />
                </Box> */}
                <p style={{fontSize:"17px"}}>Occasion*</p>
                <Grid container spacing={3} className='choice1'>
                <Grid item xs={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Box sx={{ minWidth: "100%"}}>
                  <FormControl fullWidth style={{textAlign:"left"}}>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={(e)=>{setAge(e.target.value);settitle('Poshion Kit')}} >
                          
                          <MenuItem value={10}>A birthday tree to mother nature</MenuItem>
                          <MenuItem value={20}>An anniversary tree to mother nature</MenuItem>
                          <MenuItem value={30}>In recognition of mother nature</MenuItem>
                          <MenuItem value={40}>In memory of mother nature</MenuItem>
                          <MenuItem value={50}>In love with mother nature</MenuItem>
                          <MenuItem value={60}>As my gift to mother nature</MenuItem>

                      </Select>
                  </FormControl>
                </Box>
                </Grid>
                {addtocartclicked && !age?
                    <p style={{margin:"2px",color:"red"}}>Occasion Required to proceed</p>:""
                    }
                </Grid>

                <button onClick={()=>{handleSubmit();setaddtocartclicked(true)}} className='addtocart'>Add to cart</button>

            </Grid>
        </Grid>
        ))}
    <Footer/>
</div>
  )
}

export default PoshionKit