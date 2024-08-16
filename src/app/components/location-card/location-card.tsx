"use client"
import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import CSS from "./location-card.module.scss";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface ILocationCard {
  image: string | StaticImageData;
  title: string;
}

interface ILocationCardArray {
  countriesList: ILocationCard[];
}

const LocationCard = ({ countriesList }: ILocationCardArray) => {
  const router = useRouter();

  const handleNavigate = (value: string) => {
    router.push(value);
  };

  return (
    <div className={classNames(CSS.container)}>
      <Row gutter={[20, 20]} className={classNames("cs-center")}>
        {countriesList.map((item, index) => (
          <Col xl={6} key={index}>
            <div
              onClick={() => handleNavigate(`/countries/${item.title}`)}
              className={classNames(CSS.cs_card_container)}
            >
              <div className={classNames(CSS.imageWrapper)}>
                <Image src={item.image} alt="" />
                <div className={classNames(CSS.overlay)}></div>
              </div>
              <div className={classNames(CSS.title)}>{item.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LocationCard;
