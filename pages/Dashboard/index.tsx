import React, { useState, useEffect, useMemo } from "react";
import DashboardLayout from "../../components/Layout";
import styles from "./styles.module.scss";
import UsersSvg from "../../components/SVGs/usersSvg";
import ActiveUsers from "../../components/SVGs/activeUsers";
import LoansUsers from "../../components/SVGs/loansUsers";
import SavingsUsers from "../../components/SVGs/savingsUsers";
import { BiFilter } from "react-icons/bi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import UsersData from "../../components/Usersdata";
import ButtonComponent from "../../components/Button";
import TierStarSvg from "../../components/SVGs/tierStarSvg";
import Pagination from "../../components/Pagination";
import { Paginate } from "../../utils/paginate";

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
const Dashboard = () => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [usersFull, setUsrsFull] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [usersFullData, setUsersFullData] = useState<userInfo | null>(null);

  useEffect(() => {
    axios
      .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`, {
        headers: {
          "X-Client-Type": "web",
        },
      })
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const paginateData = Paginate(apiData, currentPage, pageSize);
  return (
    <>
      <DashboardLayout>
        {usersFull ? (
          <>
            {" "}
            <div
              className={styles.back}
              onClick={() => setUsrsFull((prev) => !prev)}
            >
              <HiOutlineArrowNarrowLeft />
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
                  <img
                    src={usersFullData?.profile.avatar}
                    height={100}
                    width={100}
                  />
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
                  <h1>{usersFullData?.accountBalance}</h1>
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
                      {usersFullData?.education.monthlyIncome[0]}-
                      {usersFullData?.education.monthlyIncome[1]}
                    </p>
                  </div>
                  <div>
                    <p>loan repayment</p>
                    <p>{usersFullData?.education.loanRepayment}</p>
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
        ) : (
          <>
            <div className={styles.dataSummary}>
              <div>
                <UsersSvg />
                <p>Users</p>
                <h1>2,453</h1>
              </div>
              <div>
                <ActiveUsers />
                <p>Active Users</p>
                <h1>2,453</h1>
              </div>
              <div>
                <LoansUsers />
                <p>Users with Loans</p>
                <h1>12,453</h1>
              </div>
              <div>
                <SavingsUsers />
                <p>Users with Savings</p>
                <h1>102,453</h1>
              </div>
            </div>
            <div className={styles.tableDiv}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      <div>
                        <p>organization</p> <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>Username</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p> Email</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>Phone number</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>Date joined</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>Status</p>
                        <BiFilter />
                      </div>
                    </th>
                  </tr>
                </thead>
                {apiData
                  ? Object.keys(paginateData).map((index, item) => (
                      <>
                        <UsersData
                          action={() =>
                            axios
                              .get(
                                `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${apiData[item].id}`,
                                {
                                  headers: {
                                    "X-Client-Type": "web",
                                  },
                                }
                              )
                              .then((response) => {
                                setUsersFullData(response.data);
                                if (usersFullData !== undefined) {
                                  setUsrsFull((prev) => !prev);
                                }
                              })
                              .catch((error) => {
                                console.log(error.response);
                              })
                          }
                          key={index}
                          orgName={paginateData[item].orgName}
                          userName={paginateData[item].userName}
                          email={paginateData[item].email}
                          phoneNumbr={paginateData[item].phoneNumber}
                          createdAt={paginateData[item].createdAt}
                        />
                      </>
                    ))
                  : null}
              </table>
            </div>
            <div className={styles.paginations}>
              <div className={styles.paginationsDrop}>
                <p>Showing</p>
                <select>
                  <option>100</option>
                </select>
                <p>out of 100</p>
              </div>
              <Pagination
                items={apiData.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
