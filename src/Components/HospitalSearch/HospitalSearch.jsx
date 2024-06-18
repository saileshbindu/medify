import React from 'react';
import styles from './HospitalSearch.module.css';
import { IoSearchOutline } from "react-icons/io5";

const HospitalSearch = () => {
  return (
  

       <form className={styles.hospitalSearchMain}>
        <div className={styles.hospitalSearchInput}>
          <input type="text" placeholder="Search By Hospital" />
        </div>
      
        <button className='bluebtn'><IoSearchOutline className={styles.iconFa2} /> Search</button>
            
      </form>
   
 
  )
}

export default HospitalSearch
