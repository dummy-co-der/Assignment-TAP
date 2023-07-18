import React from "react";
import { motion } from "framer-motion";
import "./Homepage.css";

const Homepage = () => {
  
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo">
            <a className="navbar_brand" href="/">
              <img
                className="logo"
                src="https://www.freeskout.com/img/freeskout.png"
              />
            </a>
          </div>
          <div className="navbar_content">
            <ul className="navbar_nav">
              <li className="list_item"> Brands </li>
              <li className="list_item"> Influencers </li>
              <li className="list_item"> Pricing </li>
              <li className="list_item"> Blogs </li>
              <li className="list_item"> Contact </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="homescreen_content">
        <div className="left">
          <h1 className="left_heading"> Discover. Connect. Collaborate. </h1>
          <h3 className="line_content">
            An ecosystem for Social media Influencers and Brands.
          </h3>
          <div>
            <button className="button1" style={{ marginRight: "2rem" }}>
              I'M AN INFLUENCER
            </button>
            <button className="button1"> I'M A BRAND </button>
          </div>
        </div>
        <motion.div
          className="right"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://www.freeskout.com/img/top-influencer-profiles/top-3.png" />
        </motion.div>
      </div>
      <div className="wave">
        <div className="wave_bg_top">
          <div className="wave_wave_top" />
        </div>
        <div className="wave_bg_middle">
          <div className="wave_wave_middle" />
        </div>
        <div className="wave_bg_bottom">
          <div className="wave_wave_bottom" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
