import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <h2>
            — Iris is a copywriter, designer, and digital marketer from New
            York.
          </h2>
        </div>
        <div className="images-container pointer">
          <div className="images-one">
            <div className="images-wrap black-wolf">
              <img src="/assets/blackWolf.jpg" alt="black wolf" />
            </div>
            <div className="images-wrap blue-drop">
              <img src="/assets/blueDrop.jpeg" alt="blue drop" />
            </div>
          </div>
          <div className="images-two">
            <div className="images-wrap white-statue">
              <img src="/assets/whiteStatue.jpg" alt="white statue" />
            </div>
          </div>

          <div className="images-three">
            <div className="images-wrap red-berlin">
              <img src="/assets/redBerlin.jpg" alt="red berlin" />
            </div>
            <div className="images-wrap orange-vanguard">
              <img src="/assets/OrangeVanguard.jpg" alt="orange vanguard" />
            </div>
          </div>
          <div className="images-four">
            <div className="images-wrap blue-morale">
              <img src="/assets/blueMorale.jpeg" alt="blue morale" />
            </div>
          </div>

          <div className="images-five">
            <div className="images-wrap teal-caution">
              <img src="/assets/tealCaution.jpeg" alt="teal caution" />
            </div>
            <div className="images-wrap white-xray">
              <img src="/assets/whiteXray.jpeg" alt="white xray" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
