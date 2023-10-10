import React from 'react'
import MenuHeader from './ReusableComponents/MenuHeader'
import './Menu.css'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate=useNavigate();
  return (
    <div style={{backgroundColor:"rgb(42, 40, 40)"}}>
        <MenuHeader/>
        <div className='menudiv'>
            <p onClick={()=>navigate("/Career")} className='menubuttons'>Careers</p>
            <p onClick={()=>navigate("/ContactUs")}className='menubuttons'>Contact Us</p>
            <p onClick={()=>navigate("/Terms")}className='menubuttons'>Privacy Policy</p>
            <p onClick={()=>navigate("/Terms")}className='menubuttons'>Terms & Conditions</p>
            <p onClick={()=>navigate("/Volunteer")} className='menubuttons'>Volunteer</p>
        </div>
    </div>
  )
}

export default Menu