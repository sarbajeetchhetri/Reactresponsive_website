import React from "react";
import web from "../Images/grow.png";

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2">
                    <h1>
                        Grow your Business with <strong className="brand-name"> Sarbajeet</strong>
                    </h1>
                    <h2 className="my-3">
                    We are the team of talented developer making websites
                    </h2>

                    <div className="mt-3">
                    <a href="" className="btn-getstarted"> Get Started</a>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">  
                <img src={web} className="image-fluid animated" alt="home image" />

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
