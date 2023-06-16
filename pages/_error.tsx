import Lottie from "react-lottie";
import styles from "./styles.module.css";
import animationData from "../components/Animations/error.json";
import Link from "next/link";
function Error({ statusCode }: { statusCode: number }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <p className={styles.Errors}>
      <Lottie options={defaultOptions} height={500} width={500} />
      {statusCode ? (
        `An error ${statusCode} occurred on server`
      ) : (
        <>
          <p>An error occurred on client&rsquo;s</p>
          <Link href="/Admin/Dashboard">Return To DashBoard</Link>
        </>
      )}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return <>{statusCode}</>;
};

export default Error;
