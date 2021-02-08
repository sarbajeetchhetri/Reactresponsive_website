import React from "react";
import { NavLink } from "react-router-dom";
import web from "../Images/grow.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to Home Page"
        imgsrc={web}
        visit="/services"
        btnname=" Get Started"
      />
    </>
  );
};

export default Home;
