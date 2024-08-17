import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.scss";
import styles from "./layout.template.module.scss";
import NavBarMobile from "./components/nav-bar/nav-bar-mobile/nav-bar-mobile";
import NavBarDesktop from "./components/nav-bar/nav-bar-desktop";
import classNames from "classnames";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

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

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
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
        {/* <meta
          name="twitter:description"
          content={metadata.twitter?.description as string}
        /> */}

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://medicooverseasconsultancy.com"
        />
        <meta property="og:title" content="Medico Overseas Consultancy" />
        <meta
          property="og:description"
          content="Medico Overseas Consultancy - Helping students achieve their dreams of studying abroad in top universities worldwide."
        />
        <meta
          property="og:image"
          content="https://medicooverseasconsultancy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMOC_L2.ae391ec1.jpg&w=3840&q=75"
        />

        {/* Structured Data */}
        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Medico Overseas Consultancy",
            url: "https://medicooverseasconsultancy.com/",
            logo: "/path/to/logo.png", 
            sameAs: [
              "https://www.facebook.com/MedicoOverseasConsultancy",
              "https://www.twitter.com/MedicoOverseas",
              "https://www.linkedin.com/company/medico-overseas-consultancy",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+77 082811469(KZ)", // Replace with your contact number
              contactType: "Customer Support",
              areaServed: "Global",
              availableLanguage: "English",
            },
          })}
        </script> */}
      </head>
      <body className={inter.className}>
        <div className={classNames(styles.mobileView, styles.cs_sticky_nav)}>
          <NavBarMobile />
        </div>

        <div className={classNames(styles.desktopView, styles.cs_sticky_nav)}>
          <NavBarDesktop />
        </div>
        {children}
        <div className={classNames(styles.footer_container)}>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
