import React from "react";
import { HeadingGroup, ContactForm } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";

export const Contact: React.FC = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="container">
        <div className="content">
          <div className="contact-wrapper">
            <HeadingGroup
              subTitle="Don't be shy"
              mainTitle="Drop Me a Line"
            ></HeadingGroup>
            <div className="group-row-wrapper">
              <div className="col-left">
                <div className="form-inner">
                  <ContactForm />
                </div>
              </div>
              <div className="col-right">
                <div className="infor-inner">
                  <div className="list-infor">
                    <div className="item-infor">
                      <div className="icon icon-location">
                        <FontAwesomeIcon icon={faLocationDot} color="#ffffff" />
                      </div>
                      <div className="content">
                        <h3 className="title-h3">Address</h3>
                        <span className="text">20, Somewhere in world</span>
                      </div>
                    </div>
                    <div className="item-infor">
                      <div className="icon icon-email">
                        <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                      </div>
                      <div className="content">
                        <h3 className="title-h3">Email</h3>
                        <a href="mailto:devman@gmail.com">devman@gmail.com</a>
                      </div>
                    </div>
                    <div className="item-infor">
                      <div className="icon icon-phone">
                        <FontAwesomeIcon icon={faPhone} color="#ffffff" />
                      </div>
                      <div className="content">
                        <h3 className="title-h3">Phone</h3>
                        <a href="tel:+84782345678">(+84) 782 345 678</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
