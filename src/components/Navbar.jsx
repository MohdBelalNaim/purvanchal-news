import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () =>{
    return(
        <>
        <div className='text-center h4 py-3 border-bottom'>
            <Link to="/" style={{"color":"black","textDecoration":"none"}}><b>PURVANCHAL MIRROR</b></Link>
        </div>
        <div className='border-bottom list-container sticky-top' style={{"backgroundColor":"white"}}>
            <div className='list-item'>
                Sports
            </div>
            <div className='list-item'>
                India
            </div>
            <div className='list-item'>
                International
            </div>
            <div className='list-item'>
                Bollywood
            </div>
            <div className='list-item'>
                Hollywood
            </div>
            <div className='list-item'>
                Entertainment
            </div>
            <div className='list-item'>
                Technology
            </div>
            <div className='list-item'>
                Artists
            </div>
            <div className='list-item'>
                COVID-19
            </div>
            <div className='list-item'>
                Elections
            </div>
        </div>
        </>
        
    )
}

export default Navbar