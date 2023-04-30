import React from "react";
import styles from "./styles.module.scss";

const ButtonComponent = ({
  type,
  text,
  fill,
  action,
}: {
  type: string;
  fill: boolean;
  text: string;
  action: any;
}) => {
  return (
    <button
      onClick={action}
      type="submit"
      className={fill === true ? styles.fill : styles.outline}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
