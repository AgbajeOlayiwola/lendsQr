import React, { useState } from "react";
import LogoSvg from "../../components/SVGs/logoSvg";
import styles from "./styles.module.scss";
import ButtonComponent from "../../components/Button";
import isEmail from "validator/lib/isEmail";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [passwordToText, setPasswordToText] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>("");

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!error) {
      router.push("Dashboard");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <input
                type="text"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {error && (
                <p style={{ color: "red" }} className={styles.error}>
                  {error}
                </p>
              )}
              <div className={styles.paswordInput}>
                <input
                  type={passwordToText ? "text" : "password"}
                  placeholder="Password"
                  required
                />

                <p onClick={() => setPasswordToText((prev: boolean) => !prev)}>
                  SHOW
                </p>
              </div>
              <p>Forgot PASSWORD?</p>
            </div>
            <div className={styles.forgotPasswordLogin}>
              <ButtonComponent
                action=""
                type="submit"
                text="LOG IN"
                fill={true}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
