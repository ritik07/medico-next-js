import React from "react";
import { Row, Col, Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import CSS from "./nav-bar-desktop.module.scss";
import logoImg from "../../../static/images/logo/MOC_L2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const NavBar = () => {
  const getActiveMenuItem = () => {
    // return window.location.pathname.split(" ")[0];
    return "";
  };

  const COUNTRY_LIST: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => handleNavigate("/countries/Russia")}
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title,
            getActiveMenuItem() === "/countries/Russia" ? CSS.cs_active : ""
          )}
        >
          Russia
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => handleNavigate("/countries/Kyrgyzstan")}
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title,
            getActiveMenuItem() === "/countries/Kyrgyzstan" ? CSS.cs_active : ""
          )}
        >
          Kyrgyzstan
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => handleNavigate("/countries/kazakhstan")}
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title,
            getActiveMenuItem() === "/countries/kazakhstan" ? CSS.cs_active : ""
          )}
        >
          Kazakhstan
        </div>
      ),
    },
  ];

  const COURSES_LIST: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => handleNavigate("/courses/medical")}
          className={classNames(
            "cs-dis-flex cs-hrz-center",
            CSS.cs_navbar_menu_title
          )}
        >
          Medical
        </div>
      ),
    },
  ];

  const router = useRouter();

  const handleNavigate = (value: string) => {
    router.push(value);
  };

  return (
    <div>
      <Row
        className={classNames("cs-tp-10 cs-bp-10", CSS.cs_nav_bar_container)}
      >
        <Col xl={4} lg={3} md={2}></Col>
        <Col xl={3} lg={3} md={3}>
          <div
            onClick={() => handleNavigate("/")}
            className={classNames(CSS.cs_navbar_logo_container)}
          >
            <Image
              alt="logo"
              src={logoImg}
              className={classNames(CSS.cs_navbar_logo)}
            />
          </div>
        </Col>

        <Col xl={4} lg={6} md={3}></Col>

        <Col xl={13} lg={6} md={3}>
          <Row>
            <Col lg={24} xl={24}>
              <div className={classNames("cs-dis-flex")}>
                <div
                  onClick={() => handleNavigate("/")}
                  className={classNames(CSS.cs_nav_title)}
                >
                  <span
                    className={classNames(
                      "cs-pointer cs-rm-13 ",
                      getActiveMenuItem() === "/" ? CSS.cs_active : ""
                    )}
                  >
                    Home
                  </span>
                </div>

                <div
                  onClick={() => handleNavigate("/about")}
                  className={classNames(
                    "cs-rm-13 cs-lm-13 cs-pointer",
                    CSS.cs_nav_title
                  )}
                >
                  <span
                    className={
                      (classNames("cs-pointer"),
                      getActiveMenuItem() === "/about" ? CSS.cs_active : "")
                    }
                  >
                    About
                  </span>
                </div>

                <div className={classNames(CSS.cs_nav_title)}>
                  <div className={classNames("cs-rm-13 cs-lm-13")}>
                    <span className={classNames("cs-pointer")}>
                      <Dropdown
                        rootClassName={CSS.cs_navbar_root}
                        overlayClassName={CSS.cs_navbar_menu_container}
                        menu={{ items: COURSES_LIST }}
                      >
                        <div
                          //  onClick={() => handleNavigate("/courses/medical")}
                          className={classNames(
                            "cs-dis-flex",
                            getActiveMenuItem() === "/courses/medical"
                              ? CSS.cs_active
                              : ""
                          )}
                        >
                          Courses
                          <div className={classNames(CSS.dropdown)}>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </div>
                        </div>
                      </Dropdown>
                    </span>
                  </div>
                </div>

                <div
                  className={classNames("cs-rm-13 cs-lm-13", CSS.cs_nav_title)}
                >
                  <div className={classNames("cs-rm-13")}>
                    <span className={classNames("cs-pointer")}>
                      <Dropdown
                        rootClassName={CSS.cs_navbar_root}
                        overlayClassName={CSS.cs_navbar_menu_container}
                        menu={{ items: COUNTRY_LIST }}
                      >
                        <div
                          onClick={() => handleNavigate("/countries")}
                          className={classNames(
                            "cs-dis-flex",
                            getActiveMenuItem() === "/countries"
                              ? CSS.cs_active
                              : ""
                          )}
                        >
                          Countries
                          <div className={classNames(CSS.dropdown)}>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </div>
                        </div>
                      </Dropdown>
                    </span>
                  </div>
                </div>

                <div className={classNames(CSS.cs_nav_title)}>
                  <span
                    onClick={() => handleNavigate("/contact")}
                    className={classNames(
                      "cs-pointer",
                      getActiveMenuItem() === "/contact" ? CSS.cs_active : ""
                    )}
                  >
                    Contact
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
