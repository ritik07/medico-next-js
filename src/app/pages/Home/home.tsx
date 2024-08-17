import React from "react";
import Head from "next/head";
import type { Metadata } from "next";
import FeatureCardContainer from "../../components/feature-card-container/feature-card-container";
import HomeBanner from "../../components/home-banner/home-banner";
import { Fade, Zoom } from "react-awesome-reveal";
import classNames from "classnames";
import CSS from "./home.module.scss";
import HomeBrief from "../../components/home-brief/home-brief";
import BrowseCategory from "../../components/browse-category/browse-category";
import AllCourses from "../../components/all-courses/all-courses";
import Consultation from "../../components/consultation/consultation";
import {
  faUserGraduate,
  faBookOpen,
  faUsers,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../../components/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Medico Overseas Consultancy",
  description:
    "Medico Overseas Consultancy - Helping students achieve their dreams of studying abroad in top universities worldwide.",
  keywords:
    "study abroad, overseas education, MBBS abroad, Medico Overseas, consultancy, education consultancy, universities, international education",
  openGraph: {
    title: "Medico Overseas Consultancy",
    description:
      "Medico Overseas Consultancy - Helping students achieve their dreams of studying abroad in top universities worldwide.",
    url: "https://medicooverseasconsultancy.com/",
    siteName: "Medico Overseas Consultancy",
    images: [
      {
        url: "https://medicooverseasconsultancy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMOC_L2.ae391ec1.jpg&w=3840&q=75", // Replace with the actual path to your social image
        width: 800,
        height: 600,
        alt: "Medico Overseas Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@MedicoOverseas", // Replace with your Twitter handle if available
  //   title: "Medico Overseas Consultancy",
  //   description:
  //     "Medico Overseas Consultancy - Helping students achieve their dreams of studying abroad in top universities worldwide.",
  // },
};

const Home = () => {
  const featureCards = [
    {
      color: "#626CE1",
      title: "TRENDING COURSES",
      icon: faUserGraduate,
    },
    {
      color: "#06bbcc",
      title: "RELIABILITY",
      icon: faBookOpen,
    },
    {
      color: "#1F98DF",
      title: "BEST GUIDANCE",
      icon: faUsers,
      customClass: CSS.cs_mb_tm_10,
    },
    {
      color: "#333A65",
      title: "VERIFIED INFORMATION",
      icon: faFile,
      customClass: CSS.cs_mb_tm_10,
    },
  ];

  return (
    <div className={classNames(CSS.cs_home_container)}>
      <Head>
        <meta
          property="og:title"
          content={metadata.openGraph?.title as string}
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description as string}
        />
        <meta property="og:url" content={metadata.openGraph?.url as string} />
        <meta
          property="og:site_name"
          content={metadata.openGraph?.siteName as string}
        />
        <meta
          property="og:locale"
          content={metadata.openGraph?.locale as string}
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:site" content={metadata.twitter?.site as string} />
        <meta
          name="twitter:title"
          content={metadata.twitter?.title as string}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description as string}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Medico Overseas Consultancy",
            url: "https://medicooverseasconsultancy.com/",
            logo: "../../static/images/logo/MOC L1.png",
            sameAs: [
              "https://www.facebook.com/medicooversesasconsultancy/",
              "https://www.instagram.com/medicooversesasconsultancy/",
              "https://in.pinterest.com/medicooverseasconsultancy",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+77 082811469(KZ)", // Replace with your contact number
              contactType: "Customer Support",
              areaServed: "Global",
              availableLanguage: "English",
            },
          })}
        </script>
      </Head>

      <HomeBanner />

      <Fade
        className={classNames(CSS.cs_home_component_wrapper)}
        direction="right"
        triggerOnce
      >
        <FeatureCardContainer featureCards={featureCards} />
      </Fade>

      <div className={classNames(CSS.cs_home_component_wrapper)}>
        <Zoom delay={10} duration={1000} triggerOnce>
          <HomeBrief />
        </Zoom>

        <div className="cs-bp-40">
          <BrowseCategory />
        </div>

        <div className="cs-bp-40">
          <AllCourses />
        </div>

        <div className="cs-bp-40 cs-tp-80">
          <Testimonial />
        </div>

        <div className="cs-bp-80 cs-tp-80">
          <Consultation />
        </div>
      </div>
    </div>
  );
};

export default Home;
