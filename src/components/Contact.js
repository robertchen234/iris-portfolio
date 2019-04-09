import React, { Component } from "react";

class Contact extends Component {
  state = { subject: "", email: "", message: "" };

  changeHandler = (e, input) => {
    this.setState({ [e.target.name]: input });
  };

  submitHandler = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="banner-small">
          <h5>Say hello. Let's work together.</h5>
        </div>
        <div className="contact">
          <p>
            Find me on social media, use the form below, or hit me up via email
            at{" "}
            <a
              href="mailto:iris.lee129@gmail.com"
              rel="noopener"
              target="_blank"
            >
              iris.lee129@gmail.com
            </a>
            .
          </p>

          <form onSubmit={this.submitHandler}>
            <div className="contact-email">
              <label htmlFor="email">Email Address: *</label>
              <br />
              <input
                id="email"
                className="form-control"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </div>
            <br />
            <div className="contact-subject">
              <label htmlFor="subject">Subject: *</label>
              <br />
              <input
                id="subject"
                className="form-control"
                name="subject"
                type="text"
                value={this.state.subject}
                onChange={this.changeHandler}
              />
            </div>
            <br />
            <div className="contact-message">
              <label htmlFor="message">Message: *</label>
              <br />
              <textarea
                id="message"
                className="form-control"
                name="message"
                type="text"
                rows="6"
                // cols="1200"
                // maxLength="600"
                value={this.state.message}
                onChange={this.changeHandler}
              />
            </div>
            <br />

            <button
              className="pointer"
              type="submit"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
