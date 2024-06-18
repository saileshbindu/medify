import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Search.module.css";
import {Link} from 'react-router-dom';
import { HiOutlineMapPin } from "react-icons/hi2";
import axios from "axios";


const Search = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');


  useEffect(()=>{
    axios.get('https://meddata-backend.onrender.com/states')
    .then(res => setStates(res.data))
    .catch(err => console.log('Error fetching states', err))
  },[]);

  useEffect(() =>{
    if(selectedState){
      axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then(res => setCities(res.data))
      .catch(err => console.log("Error fetching cities", err))
    }else{
     setCities([])
    }
  },[selectedState])

  return (
    <div>
      <form className={styles.searchMain}>
        <div className={styles.searchInput}>
          <HiOutlineMapPin className={styles.iconFa} />
          <select
            value={selectedState}
            onChange={(e)=>setSelectedState(e.target.value)}
          >
            <option value=''>Select State</option>
            {states.map((state) =>( 
            <option key={state} value={state}>{state}</option>))}
          </select>
        </div>

        <div className={styles.searchInput}>
          <HiOutlineMapPin className={styles.iconFa} />
          <select
            value={selectedCity}
            onChange={(e)=> setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value=''>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
          </select>
        </div>
      
        <Link to={`/search?state=${selectedState}&city=${selectedCity}`}  > <button className='bluebtn'><IoSearchOutline className={styles.iconFa2} /> Search </button> </Link>
            
      </form>
    </div>
  );
};

export default Search;
