// components/LayoutTemplate.tsx
import React, { useEffect } from "react";
import styles from "./layout.template.module.scss";
import classNames from "classnames";
import { Fade, Reveal } from "react-awesome-reveal";
import NavBarMobile from "../nav-bar/nav-bar-mobile/nav-bar-mobile";
import NavBarDesktop from "../nav-bar/nav-bar-desktop";
import Footer from "../footer/footer";

const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cs-bg-primary">
      <Reveal triggerOnce>
        <div className={`${styles.mobileView} ${styles.cs_sticky_nav}`}>
          <NavBarMobile />
        </div>

        <div className={classNames(styles.desktopView, styles.cs_sticky_nav)}>
          <NavBarDesktop />
        </div>
        <main>{children}</main>
        <div className={classNames(styles.footer_container)}>
          <Footer />
        </div>
      </Reveal>
    </div>
  );
};

export default LayoutTemplate;
