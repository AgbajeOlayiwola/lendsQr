import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import styles from "./styles.module.scss";
import BlacklistUserSvg from "../SVGs/blacklistUser";
import ButtonComponent from "../Button";
const UsersData = ({
  orgName,
  userName,
  email,
  phoneNumbr,
  createdAt,
  action,
}: {
  orgName: any;
  userName: any;
  email: any;
  phoneNumbr: any;
  createdAt: any;
  action: any;
}) => {
  const [showMoreI, setShowMoreI] = useState(false);
  return (
    <>
      <tbody className={styles.tbody}>
        <tr>
          <td>
            <p>{orgName}</p>
          </td>
          <td onClick={action} className={styles.usrName}>
            <p>{userName}</p>
          </td>
          <td>
            <p>{email}</p>
          </td>
          <td>
            <p>{phoneNumbr}</p>
          </td>
          <td>
            <p>{createdAt}</p>
          </td>

          <td>
            <div className={styles.inactive}>
              <p>Inactive</p>
            </div>
          </td>
          <td
            className={styles.edit}
            onClick={() => setShowMoreI((prev) => !prev)}
          >
            <MdOutlineMoreVert />
          </td>
        </tr>

        <div className={showMoreI ? styles.moreI : styles.donstShowI}>
          <div>
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
        <div className={showMoreI ? styles.moreII : styles.donstShowI}>
          <form>
            <div>
              <label>Organization</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div>
              <label>Username</label>
              <input type="text" placeholder="User" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Date</label>
              <input type="Date" placeholder="Date" />
            </div>
            <div>
              <label>Status</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className={styles.buttons}>
              <ButtonComponent type="submit" text="Reset" fill={false} />
              <ButtonComponent type="submit" text="Filter" fill={true} />
            </div>
          </form>
        </div>
      </tbody>
    </>
  );
};

export default UsersData;
