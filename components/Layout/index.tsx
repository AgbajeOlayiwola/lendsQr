import React from "react";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />

      <div className={styles.dashlayout}>{children}</div>
      <SideBar />
    </>
  );
};

export default DashboardLayout;
