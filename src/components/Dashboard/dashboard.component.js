import React from 'react';
import Footer from './footercomponent';
import { Navbar } from '../Navbar/navbar.component';

export const Dashboard = () => {
    return (
        <div>
     

            <div style={{ width: "100%", height: "50%" }}>
                <Navbar/>

                <Footer />
            </div>
            
        </div>
    )
}
