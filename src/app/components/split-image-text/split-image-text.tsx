import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import CSS from "./split-image-text.module.scss";
import Image, { StaticImageData } from "next/image";

interface ISplitImageText {
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  title: string;
  description: string;
}

const SplitImageText = ({
  description,
  image1,
  image2,
  title,
}: ISplitImageText) => {
  return (
    <div>
      <Row>
        <Col xl={12}>
          <div className={classNames(CSS.image_one)}>
            <Image
              className={classNames(CSS.cs_img)}
              src={image1}
              alt="Promo"
            />
          </div>
        </Col>

        <Col xl={12}>
          <div className={classNames(CSS.image_two)}>
            <Image
              className={classNames(CSS.cs_img)}
              src={image2}
              alt="Promo"
            />
            <div className={classNames(CSS.overlay)}>
              <div className={classNames(CSS.text_container)}>
                <h2 className={classNames("cs-bp-10", CSS.cs_title)}>
                  {title}
                </h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SplitImageText;
