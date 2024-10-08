"use client";
import { Col, Row, Form, Input, Button } from "antd";
import classNames from "classnames";
import React from "react";
import { Fade } from "react-awesome-reveal";
import coverImg from "./assets/2.jpg";
import CSS from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import CoverImg from "../components/cover-img/cover-img";
import Head from "next/head"; // Import Head from next/head

const Contact = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta
          name="description"
          content="Get in touch with us at Your Website Name. We're here to help you with any inquiries or support you may need."
        />
        <meta
          name="keywords"
          content="contact, support, Your Website Name, inquiries"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Us | Your Website Name" />
        <meta
          property="og:description"
          content="Get in touch with us at Your Website Name. We're here to help you with any inquiries or support you may need."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/2.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Your Website Name" />
        <meta
          name="twitter:description"
          content="Get in touch with us at Your Website Name. We're here to help you with any inquiries or support you may need."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/assets/2.jpg"
        />
      </Head>
      <Fade direction="right" cascade triggerOnce>
        <CoverImg image={coverImg} text="Contact Us" />
      </Fade>
      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <Row>
          <Col xl={4}></Col>

          <Col className={classNames(CSS.cs_margin)} xs={24} sm={24} xl={3}>
            <div className="cs-center">
              <FontAwesomeIcon className={CSS.cs_icon} icon={faClock} />
            </div>
            <div className="cs-center">
              <div className={classNames("cs-tm-20", CSS.title)}>OUR HOURS</div>
            </div>

            <div className="cs-center">
              <div className={classNames("cs-tm-10 cs-center", CSS.desc)}>
                10:00 AM – 7:00 PM
                <br />
                Monday – Saturday
              </div>
            </div>
          </Col>

          <Col xl={3}></Col>

          <Col className={classNames(CSS.cs_margin)} xs={24} sm={24} xl={4}>
            <div className="cs-center">
              <FontAwesomeIcon className={CSS.cs_icon} icon={faMap} />
            </div>
            <div className="cs-center">
              <div className={classNames("cs-tm-20", CSS.title)}>LOCATION</div>
            </div>

            <div className="cs-center">
              <div className={classNames("cs-tm-10", CSS.location)}>
                OFFICE NO. TA-502 5TH FLOOR, R-TECH CAPITAL HIGH STREET, PLOT NO
                CP1-231 APPAREL PARK, MAIN MAHAL RD, JAGATPURA, JAIPUR,
                RAJASTHAN
              </div>
            </div>
          </Col>

          <Col xl={3}></Col>

          <Col className={classNames(CSS.cs_margin)} xs={24} sm={24} xl={6}>
            <div className="cs-center">
              <FontAwesomeIcon className={CSS.cs_icon} icon={faPhone} />
            </div>
            <div className="cs-center">
              <div className={classNames("cs-tm-20", CSS.title)}>
                CONTACT US
              </div>
            </div>

            <div className="cs-center">
              <div className={classNames("cs-tm-10 cs-center", CSS.desc)}>
                Contact Us: +77 082811469(KZ)
              </div>
            </div>
            <div className="cs-center">
              <div className={classNames("cs-tm-10 cs-center", CSS.desc)}>
                INDIA: 8302036392 | 9650256515
              </div>
            </div>
          </Col>

          <Col xl={4}></Col>
        </Row>

        <Row className="cs-center cs-tm-80 cs-bm-80">
          <Col xs={2} sm={2} xl={4}></Col>
          <Col xs={18} sm={18} xl={16}>
            <Form
              name="contact"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>

              <Form.Item className="cs-center">
                <Button size="large" type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={2} sm={2} xl={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
