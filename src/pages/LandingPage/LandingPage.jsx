import React from "react";
import AskedQuestions from "../../Components/AskedQuestions/AskedQuestions";
import BlogAndNews from "../../Components/BlogAndNews/BlogAndNews";
import Features from "../../Components/Features/Features";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NavBar from "../../Components/NavBar/NavBar";
import Offer from "../../Components/OfferCarousal/Offer";
import OurFamilies from "../../Components/OurFamilies/OurFamilies";
import PatientCaring from "../../Components/PatientCaring/PatientCaring";
import Specialisation from "../../Components/Specialisation/Specialisation";
import Specialist from "../../Components/Specialist/Specialist";
import styles from './LandingPage.module.css';
import Footer from '../../Components/Footer/Footer';

const LandingPage =  () =>{
 return(<div>
 <div className={styles.navHeroSection}>
 <Header />
 <NavBar />
 <HeroSection />
 <Features />
 <Offer />
 <Specialisation />
 <Specialist />
 <PatientCaring />
 <BlogAndNews />
 <OurFamilies />
 <AskedQuestions />
 <Footer />
 </div>
 </div>)
}

export default LandingPage