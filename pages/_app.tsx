import DashboardLayout from "../components/Layout";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loadingdata from "../components/Animations/loading.json";
import Lottie from "react-lottie";
import { useRouter } from "next/router";

const LoadingScreen = () => {
  const socialOptions = {
    loop: true,
    autoplay: true,
    animationData: Loadingdata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const router = useRouter();
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = (url: string) => (
      url !== router.asPath && setLoaded(true), console.log("started")
    );
    const handleComplete = (url: string) =>
      url === router.asPath && setLoaded(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return !loaded ? (
    <>{null}</>
  ) : (
    <div
      className={
        router.pathname.includes("Admin")
          ? "spinnerWrapper"
          : "otherSpinnerWrapper"
      }
    >
      <Lottie options={socialOptions} height={200} width={200} />
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardLayout>
      <LoadingScreen />
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
