"use client";

import classNames from "classnames";
import React from "react";
import { Fade } from "react-awesome-reveal";
import CoverImg from "../../components/cover-img/cover-img";
import DetailCard from "../../components/detail-card/detail-card";
import coverImg from "./assets/a.jpg";
import oneImg from "./assets/1.jpg";
import twoImg from "./assets/2.jpg";
import CSS from "./medical.module.scss";
import Head from "next/head"; // Import Head component from Next.js

const Medical = () => {
  const medicalCourses = [
    {
      heading: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
      img: oneImg,
      title: "Embark on Your Medical Journey with Medico Overseas!",
      title_desc:
        "Dreaming of pursuing MBBS abroad? Medico Overseas is your trusted partner in turning that dream into reality. Our comprehensive services guide aspiring medical students through the entire process.",
      question: "Why Choose Medico Overseas?",
      reasonList: [
        {
          key: "Expert Guidance:",
          value:
            "Navigate complex admission processes with the support of our experienced counselors, ensuring a smooth application journey.",
        },
        {
          key: "Affordable Options:",
          value:
            "Access cost-effective MBBS programs without compromising on the quality of education.",
        },
        {
          key: "Cultural Exposure:",
          value:
            "Immerse yourself in diverse cultures, broadening your horizons and enriching your overall educational experience.",
        },
        {
          key: "Student Support:",
          value:
            "From visa assistance to settling in a new country, our team provides continuous support throughout your academic journey.",
        },
        {
          key: "Your Future Awaits:",
          value:
            "Embarking on an international MBBS adventure has never been easier. Let Medico Overseas be your compass. Join us in shaping your medical career on a global stage.",
        },
      ],
    },
    {
      heading: "Dentistry",
      img: twoImg,
      title: "Explore Global Dentistry Opportunities with Medico Overseas!",
      title_desc:
        "Aspiring to pursue Dentistry abroad? Medico Overseas is your gateway to achieving an internationally recognized and accredited dental degree.",
      question: "Why Opt for Dentistry through Medico Overseas?",
      reasonList: [
        {
          key: "Global Prestige",
          value:
            "Partnered with prestigious dental schools worldwide, ensuring a top-tier dental education.",
        },
        {
          key: "Expert Guidance",
          value:
            "Our seasoned counselors provide expert assistance, guiding you seamlessly through the application and admission process.",
        },
        {
          key: "Cost-Effective Options",
          value:
            "Access affordable dentistry programs without compromising on educational quality.",
        },
        {
          key: "Cultural Enrichment",
          value:
            "Immerse yourself in diverse cultures, broadening your perspective and enhancing your overall educational experience.",
        },
        {
          key: "Holistic Support",
          value:
            "From visa procedures to settling in a new country, our dedicated team offers continuous assistance throughout your dental education journey.",
        },
        {
          key: "Shape Your Dental Future",
          value:
            "Embark on an international dental education with confidence. Let Medico Overseas be your companion in shaping a successful global dentistry career.",
        },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Medical Courses Abroad - Medico Overseas</title>
        <meta
          name="description"
          content="Explore MBBS and Dentistry opportunities abroad with Medico Overseas. Get expert guidance, affordable options, and cultural exposure for your medical career."
        />
        <meta
          name="keywords"
          content="MBBS abroad, Dentistry abroad, Medico Overseas, medical education, international education, affordable MBBS"
        />
        <meta name="author" content="Medico Overseas Consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Medical Courses Abroad - Medico Overseas"
        />
        <meta
          property="og:description"
          content="Dreaming of pursuing MBBS or Dentistry abroad? Medico Overseas is your trusted partner in turning that dream into reality."
        />
        <meta property="og:image" content="https://medicooverseasconsultancy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMOC_L2.ae391ec1.jpg&w=3840&q=75" />
        <meta
          property="og:url"
          content="https://medicooverseasconsultancy.com/medical"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://medicooverseasconsultancy.com/medical"
        />
      </Head>

      <Fade direction="right" cascade triggerOnce>
        <CoverImg image={coverImg} text="Medical" />
      </Fade>

      <div className={classNames("cs-tm-40", CSS.cs_home_component_wrapper)}>
        <DetailCard medicalCourses={medicalCourses} />
      </div>
    </div>
  );
};

export default Medical;
