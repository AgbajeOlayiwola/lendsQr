import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import BriefCaseSvg from "../../SVGs/briefCaseSvg";
import { sideBarData } from "../../Data";
import { useRouter } from "next/router";
import { slide as Menu } from "react-burger-menu";
import NotificationSvg from "../../SVGs/NotificationSvg";
import { BsCaretDownFill } from "react-icons/bs";
import LogoutSvg from "../../SVGs/logoutSvg";
import Link from "next/link";

var burgerMenuStyle = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "26px",
    top: "36px",
    zIndex: "19999999",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
const SideBar = () => {
  const router = useRouter();
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
  const backToLogin = () => {
    router.push("/");
  };
  return (
    <>
      {" "}
      {width > 990 ? (
        <div className={styles.sideBar}>
          <div className={styles.sideBarItem}>
            <BriefCaseSvg />
            <p> Switch Organization</p>
            <BiChevronDown />
          </div>
          {sideBarData.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.sideBarItem}>
                  <p>{item.main}</p>
                </div>
                {item.data.map((itemm, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        router.pathname === itemm.url
                          ? styles.active
                          : styles.things
                      }
                    >
                      {itemm.icon}
                      <p>{itemm.title}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <hr className={styles.hr} />

          <div className={styles.things} onClick={backToLogin}>
            <LogoutSvg />
            <p>Logout</p>
          </div>

          <p className={styles.version}>v1.2.0</p>
        </div>
      ) : (
        <Menu styles={burgerMenuStyle}>
          <div className={styles.sideBar}>
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
            <div className={styles.search}>
              <input type="text" />
              <div className={styles.biSearch}>
                <BiSearch />
              </div>
            </div>

            <div className={styles.sideBarItem}>
              <BriefCaseSvg />
              <p> Switch Organization</p>
              <BiChevronDown />
            </div>
            {sideBarData.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.sideBarItem}>
                    <p>{item.main}</p>
                  </div>
                  {item.data.map((itemm, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          router.pathname === itemm.url
                            ? styles.active
                            : styles.things
                        }
                      >
                        {itemm.icon}
                        <p>{itemm.title}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Menu>
      )}
    </>
  );
};

export default SideBar;
