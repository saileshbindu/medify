import React from 'react'
import styles from './Features.module.css';
import { FaUserDoctor, FaRegHospital } from "react-icons/fa6";
import { PiHospital } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { PiAmbulanceBold } from "react-icons/pi";
import Search from '../Search/Search';

const Features = () => {
  return (
    <div className={styles.featuresMain}>
        <div className={styles.searchHome}><Search /></div>
        <p className={styles.headerText}>
        You may be looking for
        </p>
        <div className={styles.options}>
            <div className={styles.opt}>
                <FaUserDoctor className={styles.icon} />
                <p>Doctor</p>
            </div>
            <div className={styles.opt}>
                <PiHospital className={styles.icon} />
                <p>Lab</p>
            </div>
            <div className={styles.opt}>
                <FaRegHospital className={styles.icon} />
                <p>Hospital</p>
            </div>
            <div className={styles.opt}>
                <GiMedicines className={styles.icon} />
                <p>Medical</p>
            </div>
            <div className={styles.opt}>
                <PiAmbulanceBold className={styles.icon} />
                <p>Ambulance</p>
            </div>
        </div>
    </div>
   
  )
}

export default Features