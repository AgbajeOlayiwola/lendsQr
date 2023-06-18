import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import styles from "./styles.module.scss";
import BlacklistUserSvg from "../SVGs/blacklistUser";
import ButtonComponent from "../Button";
import axios from "axios";
import { useRouter } from "next/router";
const UsersData = ({
  orgName,
  userName,
  email,
  phoneNumbr,
  createdAt,
  action,
  id,
  typeSet,
}: {
  orgName: any;
  userName: any;
  email: any;
  phoneNumbr: any;
  createdAt: any;
  action: any;
  id: any;
  typeSet: any;
}) => {
  const [showMoreI, setShowMoreI] = useState(false);
  const [date, setDate] = useState([]);

  const [formatedDate, setFormtedDate] = useState("");
  const [type, setType] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setDate(createdAt.split("T"));
  }, []);

  return (
    <>
      <tbody className={styles.tbody}>
        <tr>
          <td onClick={action} className={styles.usrName}>
            <p>{orgName}</p>
          </td>
          <td onClick={action} className={styles.usrName}>
            <p>{userName}</p>
          </td>
          <td onClick={action} className={styles.usrName}>
            <p>{email}</p>
          </td>
          <td onClick={action} className={styles.usrName}>
            <p>{phoneNumbr.replace("x", "")}</p>
          </td>
          <td onClick={action} className={styles.usrName}>
            <p>
              {new Date(date[0]).toLocaleDateString("en-En", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
            </p>
          </td>

          <td onClick={action} className={styles.usrName}>
            {email.includes("@gmail.com") ? (
              <div className={styles.inactive}>
                <p>Inactive</p>
              </div>
            ) : email.includes("yahoo.com") ? (
              <div className={styles.active}>
                <p>Active</p>
              </div>
            ) : email.includes("hotmail.com") ? (
              <div className={styles.blacklisted}>
                <p>Blacklisted</p>
              </div>
            ) : null}
          </td>
          <td
            className={styles.edit}
            onClick={() => setShowMoreI((prev) => !prev)}
          >
            <MdOutlineMoreVert />
          </td>
        </tr>

        <div className={showMoreI ? styles.moreI : styles.donstShowI}>
          <div
            onClick={() => router.push(`/Admin/Dashboard/UserDetails/${id}`)}
          >
            <AiOutlineEye />
            <p>View Details</p>
          </div>
          <div>
            <BlacklistUserSvg />
            <p>Blacklist User</p>
          </div>
          <div>
            <GrUserExpert />
            <p>Activate User</p>
          </div>
        </div>
      </tbody>
    </>
  );
};

export default UsersData;
