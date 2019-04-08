import React, { Component } from "react";

class Contact extends Component {
  state = { input: "", email: "", message: "" };

  changeHandler = input => {
    this.setState({ input });
  };

  submitHandler = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="banner-small">
          <h2>Say hello. Let's work together.</h2>
        </div>
        <div className="contact">
          <p>
            Find me on social media, use the form below, or hit me up via email
            at iris.lee129@gmail.com.
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
            /></div>
            <br />
            <div className="contact-subject"><label htmlFor="subject">Subject: *</label>
            <br />
            <input
              id="subject"
              className="form-control"
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.changeHandler}
            /></div>
            <br />
            <div className="contact-message"><label htmlFor="message">Message: *</label>
            <br />
            <textarea
              id="message"
              className="form-control"
              name="message"
              type="text"
              // cols="1200"
              // rows="1"
              // maxLength="600"
              value={this.state.message}
              onChange={this.changeHandler}
            /></div>
            <br />

            <button className="pointer" type="submit">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
