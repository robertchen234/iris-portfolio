import React, { Component } from "react";
import { Link } from "react-router-dom";

class Work extends Component {
  state = {
    status: "none"
  };

  onMouseEnterHandler = () => {
    this.setState({ status: "flex" });
  };

  onMouseLeavehandler = () => {
    this.setState({ status: "none" });
  };

  render() {
    return (
      <div className="work">
        <div className="banner">
          <h2>
            — Iris is a copywriter, designer, and digital marketer from New
            York.
          </h2>
        </div>
        <div className="images-container">
          <div className="images-one">
            <a
              href="http://magazine.ivy.com/2019/04/building-a-better-tomorrow-with-one-hope-united/"
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeavehandler}
            >
              <img
                className="images-odd-left pointer"
                src="/assets/kids.jpg"
                alt="kids"
              />
              <span
                className="overlay"
                style={{ display: `${this.state.status}` }}
              >
                <h2>Building a better tomorrow with One Hope United</h2>
              </span>
            </a>
            <Link
              to="/ivy-summer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="images-odd-right pointer"
                src="/assets/summer.jpg"
                alt="summer"
              />
            </Link>
          </div>

          <div className="images-two">
            <Link
              to="/ivy-galapagos"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="images-even-center pointer"
                src="/assets/ivyGalapagos.jpg"
                alt="ivy galapagos"
              />
            </Link>
          </div>

          <div className="images-three">
            <a
              href="https://www.instagram.com/p/BvbuIYAAi31/"
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeavehandler}
            >
              <img
                className="images-odd-left pointer"
                src="/assets/rbg.jpg"
                alt="rbg"
              />
              <span
                className="overlay"
                style={{ display: `${this.state.status}` }}
              >
                <h2>
                  <img src="assets/heart.png" alt="heart" /> 1,054{" "}
                  <img src="assets/chat.png" alt="chat" /> 14
                </h2>
              </span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=rVQU79n3cig"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="images-odd-right pointer"
                src="/assets/orangeVanguard.jpg"
                alt="orange vanguard"
              />
            </a>
          </div>

          <div className="images-four">
            <a
              href="http://magazine.ivy.com/2019/01/how-you-can-apply-ai-to-your-business/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="images-even-center pointer"
                src="/assets/hands.jpg"
                alt="hands"
              />
              <h2>How you can apply AI to your business</h2>
            </a>
          </div>

          <div className="images-five">
            <Link
              to="/hyperfundit-business"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="images-odd-left pointer"
                src="/assets/hyperfunditColorFront.jpg"
                alt="hyperfundit business"
              />
            </Link>
            <a
              href="http://magazine.ivy.com/2019/01/alysia-reiner-on-female-empowerment/"
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeavehandler}
            >
              <img
                className="images-odd-right pointer"
                src="/assets/alysia.jpg"
                alt="alysia"
              />
              <span
                className="overlay"
                style={{ display: `${this.state.status}` }}
              >
                <h2>Alysia Reiner on women empowerment</h2>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
