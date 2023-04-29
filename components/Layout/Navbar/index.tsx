import React from "react";
import LogoSvg from "../../SVGs/logoSvg";
import { BiSearch } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";
import NotificationSvg from "../../SVGs/NotificationSvg";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navCover}>
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
    </div>
  );
};

export default Navbar;
