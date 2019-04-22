import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <div className="banner-small">
        <h5>
          Direct, creative, and flexible. Writes & designs digital media content
          for brands.
        </h5>
      </div>
      <div className="about">
        <img src="/assets/irisZLee.jpg" alt="iris z lee" />
        <div className="about-text">
          <h2>Iris Lee</h2>
          <p>
            I majored in Corporate Communications at the City University of New
            York at Baruch College. After interning for The Evil Genius Group
            (now merged with Artistix) I moved on to build my own crowdfunding
            SAAS startup in Los Angeles, where I led our marketing and
            communications efforts.
          </p>
          <p>
            After spending two years building a brand, working with many happy
            clients, and finding my passion for digital media, I moved back to
            New York to pursue a creative career in marketing.
          </p>
          <p>
            I’m now currently a communications coordinator at IVY The Social
            University, where I wear multiple hats. I write copy for a majority
            of our marketing materials, and design & edit media content
            including flyers, banners, videos, social content, and more. I also
            manage our social media platforms, building strategies based on
            data, creating content, and working with multiple teams to execute
            business development social media deliverables.
          </p>
          <p>
            My creative approach—no matter the medium—is to build upon the
            foundation of the company’s brand. Each piece of content or visual I
            create is an “onion layer“ meant to further the brand’s dynamic
            personality and story.
          </p>
          <p>
            For me, building a brand isn’t just having a set brand voice and an
            amazing logo. It’s in the details of everything a company produces,
            from marketing material, website copy, customer service, social
            media, and much more.
          </p>
        </div>
        <div className="contact-button">
          <Link to="/contact">
            <button
              className="pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              LET'S TALK
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
