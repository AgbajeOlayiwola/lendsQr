import React, { useState } from "react";
import LogoSvg from "../../components/SVGs/logoSvg";
import styles from "./styles.module.scss";
import ButtonComponent from "../../components/Button";

const HomePage = () => {
  const [passwordToText, setPasswordToText] = useState(false);
  return (
    <>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <div className={styles.homeGrid}>
        <div className={styles.images}>
          <img src="/Assets/Images/pablosignin.png" width={600} height={337} />
        </div>
        <div className={styles.loginInputs}>
          <div className={styles.welcome}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="Email" />
            <div className={styles.paswordInput}>
              <input
                type={passwordToText ? "text" : "password"}
                placeholder="Password"
              />
              <p onClick={() => setPasswordToText((prev: boolean) => !prev)}>
                SHOW
              </p>
            </div>
            <p>Forgot PASSWORD?</p>
          </div>
          <div className={styles.forgotPasswordLogin}>
            <ButtonComponent type="submit" text="LOG IN" fill={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
