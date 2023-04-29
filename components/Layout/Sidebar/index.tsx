import React from "react";
import styles from "./styles.module.scss";
import { BiChevronDown } from "react-icons/bi";
import BriefCaseSvg from "../../SVGs/briefCaseSvg";
import { sideBarData } from "../../Data";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  return (
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
              console.log(item.url);
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
  );
};

export default SideBar;
