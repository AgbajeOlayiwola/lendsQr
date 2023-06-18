import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import BackArrowSvg from "../../../../components/SVGs/backArrowSvg";
import ButtonComponent from "../../../../components/Button";
import TierStarSvg from "../../../../components/SVGs/tierStarSvg";
type userInfo = {
  accountNumber: any;
  profile: any;
  accountBalance: string;
  orgName: string;
  email: string;
  education: any;
  socials: any;
  guarantor: any;
};
const Userdetails = () => {
  const [usersFullData, setUsersFullData] = useState<userInfo | null>(null);
  const [userFullData, setUsrsFull] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${router.query.index}`,
        {
          headers: {
            "X-Client-Type": "web",
          },
        }
      )
      .then((response: any) => {
        setUsersFullData(response.data);
        if (usersFullData !== undefined) {
          setUsrsFull((prev) => !prev);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      {" "}
      <div
        className={styles.back}
        onClick={() => router.push("/Admin/Dashboard")}
      >
        <BackArrowSvg />
        <p>Back to Users</p>
      </div>
      <div className={styles.userDts}>
        <h1>User Details</h1>
        <div>
          <ButtonComponent
            action={""}
            type="submit"
            text="Blacklist User"
            fill={false}
          />
          <ButtonComponent
            action={""}
            type="submit"
            text="Activate User"
            fill={false}
          />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileInner}>
          <div className={styles.profileImage}>
            <img src={usersFullData?.profile.avatar} height={100} width={100} />
            <div>
              <h1>
                {usersFullData?.profile.firstName}{" "}
                {usersFullData?.profile.lastName}
              </h1>
              <p>{usersFullData?.accountNumber}</p>
            </div>
          </div>
          <hr />
          <div>
            <p>User’s Tier</p>
            <div>
              <TierStarSvg fill={true} />
              <TierStarSvg fill={false} />
              <TierStarSvg fill={false} />
            </div>
          </div>
          <hr />
          <div>
            <h1>
              <span className={styles.naira}>N</span>
              {usersFullData?.accountBalance}
            </h1>
            <p className={styles.profileAccount}>
              {" "}
              {usersFullData?.profile.bvn}/{usersFullData?.orgName}
            </p>
          </div>
        </div>
        <div className={styles.profilleGeneral}>
          <div className={styles.active}>
            <p>General Details</p>
          </div>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className={styles.fullProfile}>
        <div>
          <h2>Personal Information</h2>
          <div className={styles.fullProfilePersonal}>
            <div>
              <p>full Name</p>
              <p>
                {" "}
                {usersFullData?.profile.firstName}{" "}
                {usersFullData?.profile.lastName}
              </p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>{usersFullData?.profile.phoneNumber}</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>{usersFullData?.email}</p>
            </div>

            <div>
              <p>Bvn</p>
              <p>{usersFullData?.profile.bvn}</p>
            </div>
            <div>
              <p>Gender</p>
              <p>{usersFullData?.profile.gender}</p>
            </div>
            <div>
              <p>Marital Status</p>
              <p>Single</p>
            </div>
            <div>
              <p>Children</p>
              <p>none</p>
            </div>
            <div>
              <p>Type of residence</p>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Education and Employment</h2>
          <div className={styles.fullProfilePersonal}>
            <div>
              <p>level of education</p>
              <p>{usersFullData?.education.level}</p>
            </div>
            <div>
              <p>employment status</p>
              <p>{usersFullData?.education.employmentStatus}</p>
            </div>
            <div>
              <p>sector of employment</p>
              <p>{usersFullData?.education.sector}</p>
            </div>
            <div>
              <p>Duration of employment</p>
              <p>{usersFullData?.education.duration}</p>
            </div>
            <div>
              <p>office email</p>
              <p>{usersFullData?.education.officeEmail}</p>
            </div>
            <div>
              <p>Monthly income</p>
              <p>
                <span className={styles.naira}>N</span>
                {usersFullData?.education.monthlyIncome[0]}-
                <span className={styles.naira}>N</span>{" "}
                {usersFullData?.education.monthlyIncome[1]}
              </p>
            </div>
            <div>
              <p>loan repayment</p>
              <p className={styles.results}>
                {" "}
                <span className={styles.naira}>N</span>
                {usersFullData?.education.loanRepayment}
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <h2>Socials</h2>
          <div className={styles.fullProfilePersonal}>
            <div>
              <p>Twitter</p>
              <p>{usersFullData?.socials.twitter}</p>
            </div>
            <div>
              <p>Facebook</p>
              <p>{usersFullData?.socials.facebook}</p>
            </div>
            <div>
              <p>Instagram</p>
              <p>{usersFullData?.socials.instagram}</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Guarantor</h2>
          <div className={styles.fullProfilePersonal}>
            <div>
              <p>full Name</p>
              <p>
                {usersFullData?.guarantor.firstName}{" "}
                {usersFullData?.guarantor.lastName}
              </p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>{usersFullData?.guarantor.phoneNumber}</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>{usersFullData?.email}</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>Sister</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.fullProfilePersonal}>
            <div>
              <p>full Name</p>
              <p>
                {" "}
                {usersFullData?.guarantor.firstName}{" "}
                {usersFullData?.guarantor.lastName}
              </p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>{usersFullData?.guarantor.phoneNumber}</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>{usersFullData?.email}</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>Sister</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/* <p>{usersFullData.accountNumber}</p> */}
    </>
  );
};

export default Userdetails;
