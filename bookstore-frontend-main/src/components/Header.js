import React, { useState } from 'react';
import {AppBar,Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import "./header.css";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Header = () => {
    const[value,setValue]=useState();
  return (
    <div>
      <AppBar  sx={{backgroundColor:"#232F3D"}} position='sticky'>
      <Toolbar>
      <NavLink to="/" style={{ color: "white" }}>


      <Typography><LibraryBooksOutlinedIcon/></Typography>
      </NavLink>
      <div className="navbar">
            <div>
            <Link to="/"><h1>React Books App</h1></Link>
            </div>
            
        </div>

   <Tabs 
   sx={{ml:"auto"}}
    textColor='inherit' indicatorColor='secondary' value={value}onChange={(e,val)=>setValue(val)}>
   <Tab LinkComponent={NavLink} to ="/add"label="Add Books" />
   <Tab  LinkComponent={NavLink} to="/books"label="Book" />
   <Tab LinkComponent={NavLink} to="/about"label="ABOUT US" />

   </Tabs>
      </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header;
