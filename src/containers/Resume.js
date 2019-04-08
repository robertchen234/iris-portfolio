import React from "react";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="banner-small">
        <h5>My career timeline…</h5>
      </div>
      <div className="resume">
        <div className="resume-one">
          <div className="left">
            <h3>December 2018 - Present</h3>
          </div>
          <div className="right">
            <p>IVY The Social University</p>
            <h4>COMMUNICATION COORDINATOR</h4>
          </div>
        </div>

        <div className="resume-two">
          <div className="left">
            <h3>August 2016 - July 2018</h3>
          </div>
          <div className="right">
            <p>HyperFundIt</p>
            <h4>CO-FOUNDER//MARKETING & COMMUNICATIONS</h4>
          </div>
        </div>

        <div className="resume-three">
          <div className="left">
            <h3>November 2017 - February 2018</h3>
          </div>
          <div className="right">
            <p>Go To My Apartment</p>
            <h4>CONTRACT DIGITAL MARKETING SPECIALIST</h4>
          </div>
        </div>

        <div className="resume-four">
          <div className="left">
            <h3>September 2016 - December 2016</h3>
          </div>
          <div className="right">
            <p>Artistix (Formerly The Evil Genius Group)</p>
            <h4>MARKETING & PR INTERN</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
