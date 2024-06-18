import React from "react";
import styles from "./OurFamilies.module.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
import { TbBuildingHospital } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";



const OurFamilies = () => {
  return (
    <div className={styles.familiesMain}>
      <div className={styles.familiesLeft}>
        <p className={styles.caring}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <h3>Our Families</h3>
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>

      <div className={styles.familiesRight}>
        <div className={styles.rating}>
          <FaHandHoldingHeart className={styles.iconImg} />
          <h4>5000+</h4>
          <p>Happy Patients</p>
        </div>

        <div className={styles.rating}>
          <LiaHospital className={styles.iconImg2} />
          <h4>200+</h4>
          <p>Hospitals</p>
        </div>

        <div className={styles.rating}>
          <TbBuildingHospital className={styles.iconImg3} />
          <h4>1000+</h4>
          <p>Laboratories</p>
        </div>

        <div className={styles.rating}>
          <FaUserDoctor className={styles.iconImg4} />
          <h4>700+</h4>
          <p>Expert Doctors</p>
        </div>
      </div>
    </div>
  );
};

export default OurFamilies;
