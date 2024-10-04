import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';

import Banner from '../components/Banner';
import Headers from '../components/Headers';
import Category from '../components/Categories';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import Service from '../components/Services';
import { useState, useEffect } from 'react';

function Home() {

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [error, setError] = useState(null);


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);



  return (
    <>
 
          
 <Libraries/>
            {/* <Headers/> */}
            <Banner/>
            
             <Category/>
             <Service/>
             <Homepage

               
            title="Did not find your Package?"
            subtitle="Feel free to ask us."
            description="Don’t worry if you haven’t found exactly what you’re looking for on our platform. At HireAnything, we’re dedicated to meeting your unique needs. Simply reach out to us with your specific requirements, and our team will work diligently to create a tailored package just for you. Your satisfaction is our priority, and we’re here to ensure you get the service or equipment you need. Contact us today, and let us help you find the perfect solution!"
            buttonText="Request Custom Price"
            buttonLink="/contact"
            imgSrc="image/about.png"
            />

<div>
      {location.latitude && location.longitude ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>{error ? `Error: ${error}` : "Getting location..."}</p>
      )}
    </div>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default Home;
