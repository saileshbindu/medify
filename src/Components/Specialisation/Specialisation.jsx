import React from 'react';
import styles from './Specialisation.module.css';
import { PiHospital } from "react-icons/pi";
import { LuStethoscope } from "react-icons/lu";
import { RiHeartPulseLine } from "react-icons/ri";
import { BsClipboardPulse } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import { BsShieldPlus } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";
import { LiaXRaySolid } from "react-icons/lia";

const Specialisation = () => {
  return (
    <div className={styles.specialMain}>
        <h3>Find by specialisation</h3>
        <div className={styles.findAll}>
            <div className={styles.findOne}>
                <FaRegHospital className={styles.blueIcon} />
                <p className={styles.headText}> Dentistry</p>
            </div>
            <div className={styles.findOne}>
                <LuStethoscope className={styles.blueIcon} />
                <p className={styles.headText}> Primary Care</p>
            </div>
            <div className={styles.findOne}>
                <RiHeartPulseLine className={styles.blueIcon} />
                <p className={styles.headText}> Cardiology</p>
            </div>
            <div className={styles.findOne}>
                <BsClipboardPulse className={styles.blueIcon} />
                <p className={styles.headText}> MRI Resonance</p>
            </div>
            <div className={styles.findOne}>
                <TbTestPipe className={styles.blueIcon} />
                <p className={styles.headText}> Blood Test</p>
            </div>
            <div className={styles.findOne}>
                <BsShieldPlus className={styles.blueIcon} />
                <p className={styles.headText}> Piscologist</p>
            </div>
            <div className={styles.findOne}>
                <PiHospital className={styles.blueIcon} />
                <p className={styles.headText}> Laboratory</p>
            </div>
            <div className={styles.findOne}>
                <LiaXRaySolid className={styles.blueIcon} />
                <p className={styles.headText}> X-Ray</p>
            </div>
        </div>
        <button className='bluebtn'>View All</button>
    </div>
  )
}

export default Specialisation