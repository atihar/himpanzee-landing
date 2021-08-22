import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Are you ready to protect and restore ecosystems? We want to connect with you.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <div className="contact-image">
                                <img src="/images/contact.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Name*" required/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email*" required/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number"  className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" rows="5" placeholder="Your Message*" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                <label className="form-check-label" for="defaultCheck1">
                                                I agree to the Terms of Use and Privacy Policy
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">
                                                Send Message <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;