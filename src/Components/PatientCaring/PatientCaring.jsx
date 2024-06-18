import React from 'react';
import styles from './PatientCaring.module.css';
import patientImg from '../../assets/images/patientImg.png'
import tickImg from '../../assets/images/tickImg.png'
const PatientCaring = () => {
  return (
    <div className={styles.PatientCaring}>
        <img src={patientImg} alt='Patient Caring' />
        <div className={styles.patientRight}>
            <p className={styles.help}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
            <h3 className={styles.heading}>Patient <span>Caring</span></h3>
            <p className={styles.ourGoal}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
            <p className={styles.stayUpdate}> <img src={tickImg} alt='Health' /> Stay Updated About Your Health</p>
            <p className={styles.stayUpdate}> <img src={tickImg} alt='Health' />  Check Your Results Online</p>
            <p className={styles.stayUpdate}> <img src={tickImg} alt='Health' />  Manage Your Appointments</p>
        </div>
    </div>
  )
}

export default PatientCaring