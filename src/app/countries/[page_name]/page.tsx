"use client"
// app/countries/[page_name]/page.tsx
import React from "react";
import { useRouter } from "next/navigation";
import CoverImg from "../../components/cover-img/cover-img";
import countriesData from "./countriesData";
import coverImg from "@/assets/images/6.jpg";
import { Col, Row, Collapse } from "antd";
import classNames from "classnames";
import StatsInfo from "../../components/stats-info/stats-info";
import russiaImg from "./assets/images/russia.jpg";
import kyrgyzstanImg from "./assets/images/ky.jpg";
import kazakhstanImg from "./assets/images/kz.jpg";
import CSS from "./countries-single.module.scss";
import sideCover from "./assets/images/side-cover.jpg";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";

const CountriesSingle: React.FC = () => {
  const router = useRouter();
  const { page_name } = useParams<{ page_name?: string }>();

  if (!page_name || !countriesData[page_name]) {
    return <div>Country not found</div>;
  }

  const data = countriesData[page_name];
  const countryKeys = Object.keys(countriesData);

  const getImage = () => {
    if (page_name === "Russia") return russiaImg || "";
    if (page_name === "Kyrgyzstan") return kyrgyzstanImg || "";
    if (page_name === "kazakhstan") return kazakhstanImg || "";
  };

  return (
    <div>
      <CoverImg text={page_name} image={getImage() || ""} />
      <div className={classNames(CSS.cs_home_component_wrapper)}>
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

        <Row gutter={[20, 20]} className={classNames("cs-tm-80")}>
          <Col xl={17}>
            <div className={classNames(CSS.title)}>Why {page_name} ?</div>
            <hr className={classNames(CSS.cs_hr)} />

            <div className={CSS.country_title}>{data.description}</div>

            {data.questions && (
              <div className={classNames("cs-tm-80")}>
                <div className={classNames(CSS.title)}>
                  {data.questions + page_name}
                </div>
                <hr />

                <div>
                  <ul>
                    {data.answer?.map((item, index) => (
                      <li className={classNames(CSS.cs_li_steps)} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className={classNames("cs-tm-80")}>
              <div className={classNames(CSS.title)}>
                Admission Process: The students who seek to get MBBS admission
                need to follow the mentioned below steps.
              </div>
              <hr />

              <div>
                <ul>
                  {data.steps.map((item, index) => (
                    <li className={classNames(CSS.cs_li_steps)} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={classNames("cs-tm-80")}>
              <div className={classNames(CSS.title)}>Documents Required:</div>
              <hr />

              <div>
                <ul>
                  {data.requirements.map((item, index) => (
                    <li className={classNames(CSS.cs_li_steps)} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={classNames("cs-lm-20 cs-tm-40")}>
              {data.collapseItems?.map((itm, index) => (
                <div className="cs-tm-10" key={index}>
                  <Collapse
                    className={classNames(CSS.items_country_single)}
                    items={[
                      {
                        key: "1",
                        label: itm.title,
                        children: (
                          <div>
                            <ul>
                              {itm.servicesOffered.map(
                                (points: any, index: number) => (
                                  <li key={index}>{points}</li>
                                )
                              )}
                            </ul>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              ))}
            </div>

            <div className={classNames("cs-tm-80")}>
              <div className={classNames(CSS.title)}>Universities:</div>
              <hr />

              <div className={classNames("cs-lm-20 cs-tm-40")}>
                {data.universities?.map((itm, index) => (
                  <div className="cs-tm-10" key={index}>
                    <Collapse
                      className={classNames(CSS.items_country_single)}
                      items={[
                        {
                          key: "1",
                          label: itm.name,
                          children: (
                            <div>
                              <Image
                                src={itm.image}
                                alt={itm.name}
                                className={CSS.side_img}
                              />
                              <div>
                                {itm.description
                                  .split("\n")
                                  .map((paragraph: any, index: any) => (
                                    <p
                                      key={index}
                                      style={{ marginBottom: "1em" }}
                                    >
                                      {paragraph}
                                    </p>
                                  ))}
                              </div>

                              <table className={CSS.university_overview_table}>
                                {itm.overview && (
                                  <tbody>
                                    {Object.entries(itm.overview).map(
                                      ([key, value]: any) => (
                                        <tr key={key}>
                                          <td>{key}</td>
                                          <td>{value}</td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                )}
                              </table>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xl={7}>
            <div className={classNames(CSS.img_container)}>
              <Image
                className={classNames(CSS.side_img)}
                src={sideCover}
                alt="Side Cover"
              />
            </div>
            <div className="cs-tm-40">
              {countryKeys.map((item) => (
                <div key={item}>
                  <div
                    onClick={() => router.push(`/countries/${item}`)}
                    className={classNames(
                      "cs-pointer cs-center",
                      CSS.side_country_title
                    )}
                  >
                    {item}
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CountriesSingle;
