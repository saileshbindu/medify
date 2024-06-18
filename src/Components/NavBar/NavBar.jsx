import React from 'react'
import styles from  './NavBar.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
           <a href="/"> <img src={logo} alt="medify" className={styles.logo} /></a>
        
        <div>
            <nav>
               <ul>
               <li> <a href="#"> Find Doctors</a></li>
               <li> <a href="#"> Hospitals</a></li>
               <li> <a href="#"> Medicines</a></li>
               <li> <a href="#"> Surgeries</a></li>
               <li> <a href="#"> Software for Provider</a></li>
               <li> <a href="#"> Facilities</a></li>
               </ul>
               <Link to='/booking'><button className='bluebtn'>My Booking</button></Link>
            </nav>
        </div>
        </div>
  )
}

export default NavBar
