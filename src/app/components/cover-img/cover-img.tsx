"use client";
import React, { useEffect, useState } from "react";
import CSS from "./cover-img.module.scss";
import { StaticImageData } from "next/image";

interface iCoverImg {
  image: string | StaticImageData; // Ensure this is a string URL or StaticImageData
  text: string;
}

const CoverImg = ({ image, text }: iCoverImg) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageUrl = typeof image === "string" ? image : image.src;

  return (
    <div className={CSS.cs_cover_img_container}>
      <div
        className={CSS.cs_cover_img}
        style={{
          backgroundImage: `url(${imageUrl})`, // Ensure `imageUrl` is a valid URL
          backgroundPositionY: `${-190 + offsetY * 0.5}px`,
          backgroundSize: "cover", // Ensure the image covers the area
          backgroundRepeat: "no-repeat", // Prevent repeating the image
        }}
      />
      <div className={CSS.cs_overlay} />
      <div className={CSS.cs_text}>{text}</div>
    </div>
  );
};

export default CoverImg;
