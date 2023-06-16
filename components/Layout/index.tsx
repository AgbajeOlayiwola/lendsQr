import React from "react";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes("Admin") ? (
        <>
          <Navbar />

          <div className={styles.dashlayout}>{children}</div>
          <SideBar />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default DashboardLayout;
