import React from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import acc from '../assets/images/icons8-account-50.png'
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate=useNavigate();
  
  function handlelogout(){
  sessionStorage.removeItem("userid")
  navigate("/Login")
  }

  return (
    <div>
        <Header/>
            <div style={{padding:"50px"}}>
                <div style={{display:"flex"}}>
                <img src={acc} style={{width:"80px",marginRight:"20px"}}></img>
                <h1 style={{color:"green"}}>Your Account</h1>
                </div>
                <hr></hr>
                <p className='pacc' onClick={()=>navigate("/MyOrders")}>My contributions</p>
                <p className='pacc' onClick={()=>navigate("/Cart")}>My cart</p>
                <p className='pacc' onClick={()=>handlelogout()}>Logout</p>
            </div>
        <Footer/>
    </div>
  )
}

export default Account