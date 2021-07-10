import React from 'react'
import CreateSensor from '../Dashboard/addSensor.component'
import { Navbar } from '../Navbar/navbar.component';
import Footer from '../Dashboard/footercomponent';
import { Link } from "react-router-dom";




export const Home = () => {
    return (
        <div>
          <Navbar/>  
          <CreateSensor/>
          <Footer/>

        </div>
    )
}
