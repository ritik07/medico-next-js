import classNames from "classnames";
import React from "react";
import CoverImg from "../components/cover-img/cover-img";
import LocationCard from "../components/location-card/location-card";
import countries from "./assets/countries.jpg";
import russia from "./assets/Russia-img.jpg";
import kyrgyzstan from "./assets/kyrgyzstan-img.jpg";
import kazakhstan from "./assets/kazakhstan-img.jpg";
import CSS from "./countries.module.scss";
import Head from "next/head"; // Import Head component from Next.js

const Countries = () => {
  const LocationCardArray = [
    {
      image: russia,
      title: "Russia",
    },
    {
      image: kyrgyzstan,
      title: "Kyrgyzstan",
    },
    {
      image: kazakhstan,
      title: "Kazakhstan",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Study MBBS in Russia, Kyrgyzstan, and Kazakhstan - Medico Overseas
        </title>
        <meta
          name="description"
          content="Explore study opportunities in Russia, Kyrgyzstan, and Kazakhstan with Medico Overseas. Get expert guidance on affordable MBBS programs abroad."
        />
        <meta
          name="keywords"
          content="MBBS in Russia, MBBS in Kyrgyzstan, MBBS in Kazakhstan, study abroad, Medico Overseas, medical education, international MBBS"
        />
        <meta name="author" content="Medico Overseas Consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Study MBBS in Russia, Kyrgyzstan, and Kazakhstan - Medico Overseas"
        />
        <meta
          property="og:description"
          content="Explore top MBBS programs in Russia, Kyrgyzstan, and Kazakhstan. Medico Overseas provides comprehensive guidance and support for your medical education abroad."
        />
        <meta property="og:image" content="https://medicooverseasconsultancy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMOC_L2.ae391ec1.jpg&w=3840&q=75" />
        <meta
          property="og:url"
          content="https://medicooverseasconsultancy.com/countries"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://medicooverseasconsultancy.com/countries"
        />
      </Head>

      <CoverImg image={countries} text="Countries" />

      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <LocationCard countriesList={LocationCardArray} />
      </div>
    </div>
  );
};

export default Countries;
