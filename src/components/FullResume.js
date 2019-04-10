import React from "react";

const FullResume = () => {
  return (
    <div className="full-resume-container">
      <object
        aria-label="full resume"
        alt="full resume"
        className="full-resume"
        data="/assets/IrisLeeResume.pdf"
      />
    </div>
  );
};

export default FullResume;
