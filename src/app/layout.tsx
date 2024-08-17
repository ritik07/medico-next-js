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



const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        
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
