import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Admin_local } from '../utils/constent';

const Aboutus = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await axios.get(`${Admin_local}/api/aboutus`); // Adjust API endpoint if needed
        setAboutUsData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchAboutUsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="aboutus">

<section className="home-about-area inner">
          <div className="page-wrapper container -fluid">
            <div className="row align-items-center justify-content-end">
            <div className="col-lg-3 col-md-4  col-sm-12 home-about-right no-padding abt">
            <img className="img-fluid" src={users} alt="" />
              </div>
              <div className="col-lg-9 col-md-8 home-about-left">
              <h1>About Us</h1>
              <p>{aboutUsData[0]?.info}</p>
              <h3>A Marketplace for Hire Services</h3>
              <p>Our team is unique, with {aboutUsData[0]?.teamExperience} years of experience in the hire industry.</p>
              <h3>The Problem</h3>
              <p>{aboutUsData[0]?.problemStatement}</p>
              <h3>The Solution</h3>
              <p>{aboutUsData[0]?.solutionStatement}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
