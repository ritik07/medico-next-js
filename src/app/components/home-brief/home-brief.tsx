import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";
import CSS from "./home-brief.module.scss";
import DecorateLine from "../decorate-line/decorate-line";
import promo from "./assets/promo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StatsInfo from "../stats-info/stats-info";
import ExploreBtn from "../explore-btn/explore-btn";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const HomeBrief = () => {
  const router = useRouter();

  const handleNavigate = (value: string) => {
    router.push(value);
  };

  return (
    <div className={CSS.cs_home_brief_container}>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={13} className={CSS.cs_col}>
          <div
            className={classNames(
              "cs-tp-10 cs-bp-10",
              CSS.cs_txt_sub_title_home_brief
            )}
          >
            ABOUT Medico Overseas Consultancy
          </div>

          <div className={classNames("cs-bm-12", CSS.cs_txt_title_home_brief)}>
            Choose Our Best Services to{" "}
            <span className={CSS.cs_txt_title_home_brief_highlight}>
              Study Abroad
            </span>
          </div>

          <DecorateLine />

          <div className={classNames("cs-tm-20", CSS.cs_home_brief_para)}>
            Unlock a world of opportunities with our comprehensive suite of
            study abroad services. From expert guidance on university selection
            and application processes to assistance with visas, accommodations,
            and cultural integration, we've got you covered every step of the
            way. Our dedicated team of advisors will work closely with you to
            craft a personalized study abroad experience tailored to your unique
            aspirations and needs. With a vast network of partner institutions
            across the globe and a commitment to exceptional service, we ensure
            a seamless and enriching journey that empowers you to reach your
            full academic and personal potential.
          </div>
          <Row>
            <Col xl={6}>
              <ExploreBtn
                handleClick={() => handleNavigate("/about")} // Ensure correct path
                text="About us"
              />
            </Col>
          </Row>
        </Col>

        <Col xs={0} xl={1}></Col>

        <Col xs={24} xl={10} className={CSS.cs_col}>
          <div className={classNames(CSS.cs_img_container)}>
            <Image className={classNames(CSS.cs_img)} src={promo} alt="Promo" />
          </div>
        </Col>
      </Row>

      <Row className={classNames("cs-tm-40")} gutter={[20, 20]}>
        <Col sm={12} xs={12} xl={6}>
          <StatsInfo delay={3} number={3} title={"Country"} />
        </Col>

        <Col sm={12} xs={12} xl={6}>
          <StatsInfo delay={30} number={30} title={"Universities"} />
        </Col>

        <Col sm={24} xs={24} xl={6}>
          <StatsInfo delay={7} number={12000} title={"Students Counselled"} />
        </Col>

        <Col sm={24} xs={24} xl={6}>
          <StatsInfo delay={7} number={10000} title={"Students Enrolled"} />
        </Col>
      </Row>
    </div>
  );
};

export default HomeBrief;
