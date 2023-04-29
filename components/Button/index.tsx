import React from "react";
import styles from "./styles.module.scss";

const ButtonComponent = ({
  type,
  text,
  fill,
}: {
  type: string;
  fill: boolean;
  text: string;
}) => {
  return (
    <button
      type="submit"
      className={fill === true ? styles.fill : styles.outline}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
