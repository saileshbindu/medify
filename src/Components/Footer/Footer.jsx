import React from 'react';
import styles from './Footer.module.css';
import mobImg from '../../assets/images/mobImg.png';
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
  return (<div>
    <div className={styles.downLoadApp}>
        <div className={styles.imgMob}>
            <img src={mobImg} alt="download app"  />
        </div>
        <div className={styles.innerDownload}>
        <h1>Download the <span>Medify</span> App</h1>
            <p>Get the link to download the app</p>
            <div className={styles.emailInput}>
                <div className={styles.plusNineOne}>+91</div>
            <input type="text" placeholder='Enter phone number' />
            <button className='bluebtn'>Send SMS</button>
            </div>
            <div className={styles.playStoreBtn}>
                <button><FaGooglePlay className={styles.icon} />  Google Play</button>
                <button><FaApple className={styles.icon} />  App Store</button>
            </div>
        </div>
    </div>
    {/* download end */}
    <div className={styles.footer}>
        <div className={styles.footerinner}>
        <div className={styles.left}>
            <img src={logo} alt="Medify"  />
            <div>
            <TiSocialFacebook className={styles.icon} />
            <FaTwitter className={styles.icon}/>
            <FaYoutube className={styles.icon}/>
            <FaPinterest className={styles.icon}/>
            </div>
        </div>
        <div className={styles.right}>
            <ul>
                <li><IoIosArrowForward/> About Us</li>
                <li><IoIosArrowForward/> Our Pricing</li>
                <li><IoIosArrowForward/> Our Gallery</li>
                <li><IoIosArrowForward/> Appointment</li>
                <li><IoIosArrowForward/> Privacy Policy</li>
            </ul>
            <ul>
                <li><IoIosArrowForward/> Orthology</li>
                <li><IoIosArrowForward/> Neurology</li>
                <li><IoIosArrowForward/> Dental Care</li>
                <li><IoIosArrowForward/> Opthalmology</li>
                <li><IoIosArrowForward/> Cardiology</li>
            </ul>
            <ul>
                <li><IoIosArrowForward/> Doctor Appointment</li>
                <li><IoIosArrowForward/> Pediatrics</li>
                <li><IoIosArrowForward/> Obstetrics</li>
                <li><IoIosArrowForward/> Gynecology</li>
                <li><IoIosArrowForward/> Neurology</li>
            </ul>
        </div>
        </div>
     <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
    </div>
    
    </div>
    
  )
}

export default Footer