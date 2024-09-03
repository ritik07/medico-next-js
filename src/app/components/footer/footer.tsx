"use client"
import React from "react";
import { Col, Row } from "antd";
import logoImg from "../../static/images/logo/MOC L2.png";
import classNames from "classnames";
import CSS from "./footer.module.scss";
import { InstagramFilled, FacebookFilled } from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
import NewsLetter from "../news-letter/news-letter";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  const handleNavigate = (value: string) => {
    router.push(value);
  };

  return (
    <div className="cs-tm-40">
      <div className="cs-bp-80">
        <NewsLetter />
      </div>
      <Fade delay={50} duration={1000} triggerOnce direction="up">
        <Row className="cs-bp-40">
          <Col xl={24}>
            <Row className={classNames("cs-hrz-center")} gutter={[20, 20]}>
              <Col xl={7}>
                <div className={classNames(CSS.cs_navbar_logo_container)}>
                  <Image
                    alt="logo-footer"
                    src={logoImg}
                    className={classNames(CSS.cs_navbar_logo)}
                  />
                </div>
                <div
                  className={classNames(
                    CSS.cs_nav_logo_title,
                    "cs-tm-10 cs-bm-20"
                  )}
                >
                  Join Medico Overseas for your bright future and quality
                  education so that you will become the best of the future
                  generation.
                </div>

                <div>
                  <div className="cs-dis-flex cs-bm-10">
                    <div className={CSS.cs_title_1}>Contact Us:</div>
                    <div
                      className={classNames("cs-lm-6", CSS.cs_nav_logo_title)}
                    >
                      +77 082811469(KZ)
                    </div>
                  </div>
                  <div className="cs-dis-flex cs-bm-10">
                    <div className={CSS.cs_title_1}>Address:</div>
                    <div
                      className={classNames("cs-lm-6", CSS.cs_nav_logo_title)}
                    >
                      OFFICE NO. TA-502 5TH FLOOR, R-TECH CAPITAL HIGH STREET,
                      PLOT NO CP1-231 APPAREL PARK, MAIN MAHAL RD, JAGATPURA,
                      JAIPUR, RAJASTHAN
                    </div>
                  </div>
                  <div className="cs-dis-flex cs-bm-10">
                    <div className={CSS.cs_title_1}>India:</div>
                    <div
                      className={classNames("cs-lm-6", CSS.cs_nav_logo_title)}
                    >
                      8302036392 | 9650256515
                    </div>
                  </div>
                  <div className="cs-dis-flex cs-bm-10">
                    <div className={CSS.cs_title_1}>Email:</div>
                    <div
                      className={classNames("cs-lm-6", CSS.cs_nav_logo_title)}
                    >
                      Medicooverseasconsultancy@gmail.com
                    </div>
                  </div>
                </div>

                <div className="cs-dis-flex cs-tm-40">
                  <a
                    href="https://www.instagram.com/medicooverseasconsultancy/"
                    target={"_blank"}
                  >
                    <InstagramFilled
                      className={classNames("cs-rm-6 cs-pointer", CSS.cs_icon)}
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61560962888633"
                    target={"_blank"}
                  >
                    <FacebookFilled
                      className={classNames("cs-rm-6 cs-pointer", CSS.cs_icon)}
                    />
                  </a>
                </div>
              </Col>

              <Col xl={2}></Col>

              <Col xl={3}>
                <div className={classNames("cs-center cs-bp-20", CSS.cs_title)}>
                  COMPANY
                </div>
                <div
                  onClick={() => handleNavigate("/about")}
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  About Us
                </div>
                <div
                  onClick={() => handleNavigate("/countries")}
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  Countries
                </div>
                <div
                  onClick={() => handleNavigate("/contact")}
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  Contact Us
                </div>
              </Col>

              <Col xl={2}></Col>

              <Col xl={3}>
                <div className={classNames("cs-center cs-bp-20", CSS.cs_title)}>
                  COURSES
                </div>
                <div
                  onClick={() => handleNavigate("/courses/medical")}
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  Medical
                </div>
              </Col>

              <Col xl={2}></Col>

              <Col xl={3}>
                <div className={classNames("cs-center cs-bp-20", CSS.cs_title)}>
                  Other link
                </div>
                <div
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  Privacy Policy
                </div>
                <div
                  className={classNames(
                    "cs-pointer cs-center cs-bp-8",
                    CSS.cs_nav_logo_title
                  )}
                >
                  Terms & Conditions
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className={classNames("cs-center cs-bp-10")}>
          © 2024 Medico Overseas Consultancy | All Right Reserved
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
