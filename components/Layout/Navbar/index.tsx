import React, { useState, useEffect } from "react";
import LogoSvg from "../../SVGs/logoSvg";
import { BiSearch } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";
import NotificationSvg from "../../SVGs/NotificationSvg";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [width, setWidth] = useState(991);
  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  return (
    <div className={styles.navCover}>
      {width > 990 ? (
        <>
          <div className={styles.logoSearch}>
            <LogoSvg />

            <div className={styles.search}>
              <input type="text" />
              <div className={styles.biSearch}>
                <BiSearch />
              </div>
            </div>
          </div>
          <div className={styles.personal}>
            <div className={styles.docs}>
              <p>Docs</p>
              <NotificationSvg />
            </div>

            <div className={styles.user}>
              <img src="/Assets/Images/avatar.png" width={48} height={48} />
              <p>Adedeji</p>
              <BsCaretDownFill />
            </div>
          </div>
        </>
      ) : (
        <LogoSvg />
      )}
    </div>
  );
};

export default Navbar;
