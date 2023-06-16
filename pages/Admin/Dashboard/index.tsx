import React, { useState, useEffect, useMemo } from "react";
import DashboardLayout from "../../../components/Layout";
import styles from "./styles.module.scss";
import UsersSvg from "../../../components/SVGs/usersSvg";
import ActiveUsers from "../../../components/SVGs/activeUsers";
import LoansUsers from "../../../components/SVGs/loansUsers";
import SavingsUsers from "../../../components/SVGs/savingsUsers";
import { BiFilter } from "react-icons/bi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import UsersData from "../../../components/Usersdata";
import ButtonComponent from "../../../components/Button";
import TierStarSvg from "../../../components/SVGs/tierStarSvg";
import Pagination from "../../../components/Pagination";
import { Paginate } from "../../../utils/paginate";
import BackArrowSvg from "../../../components/SVGs/backArrowSvg";
import animationData from "../../../components/Animations/loading.json";
import ReactPaginate from "react-paginate";
import Lottie from "react-lottie";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [apiData, setApiData] = useState<any[]>([]);
  const [usersFull, setUsrsFull] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [listOfUsers, setListOfUsers] = useState(10);
  const [loading, setLoading] = useState(true);

  const [usersFullData, setUsersFullData] = useState<userInfo | null>(null);
  const [showMoreI, setShowMoreI] = useState(false);
  useEffect(() => {
    axios
      .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`, {
        headers: {
          "X-Client-Type": "web",
        },
      })
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const usersPerPage = listOfUsers;
  const pagesVisited = pageNumber * usersPerPage;
  const startIndex = pageNumber * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const slicedData = apiData.slice(startIndex, endIndex);
  // const paginateData = Paginate(apiData, currentPage, pageSize);
  const pageCount = Math.ceil(apiData.length / usersPerPage);
  return (
    <>
      {usersFull ? (
        <>
          {" "}
          <div
            className={styles.back}
            onClick={() => setUsrsFull((prev) => !prev)}
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
      ) : (
        <>
          <h1 className={styles.users}>Users</h1>
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
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p>organization</p> <BiFilter />
                    </div>
                  </th>
                  <th>
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p>Username</p>
                      <BiFilter />
                    </div>
                  </th>
                  <th>
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p> Email</p>
                      <BiFilter />
                    </div>
                  </th>
                  <th>
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p>Phone number</p>
                      <BiFilter />
                    </div>
                  </th>
                  <th>
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p>Date joined</p>
                      <BiFilter />
                    </div>
                  </th>
                  <th>
                    <div onClick={() => setShowMoreI((prev) => !prev)}>
                      <p>Status</p>
                      <BiFilter />
                    </div>
                  </th>
                </tr>
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
                      <ButtonComponent
                        action={null}
                        type="submit"
                        text="Reset"
                        fill={false}
                      />
                      <ButtonComponent
                        action={null}
                        type="submit"
                        text="Filter"
                        fill={true}
                      />
                    </div>
                  </form>
                </div>
              </thead>
              {loading ? (
                <Lottie options={defaultOptions} height={500} width={500} />
              ) : apiData ? (
                slicedData?.map((item) => (
                  <>
                    <UsersData
                      action={() =>
                        axios
                          .get(
                            `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${item.id}`,
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
                          })
                      }
                      key={item.id}
                      orgName={item.orgName}
                      userName={item.userName}
                      email={item.email}
                      phoneNumbr={item.phoneNumber}
                      createdAt={item.createdAt}
                    />
                  </>
                ))
              ) : null}
            </table>
          </div>
          <div className={styles.paginations}>
            <div className={styles.paginationsDrop}>
              <p>Showing</p>
              <select onChange={(e: any) => setListOfUsers(e.target.value)}>
                <option value={100}>100</option>
                <option value={70}>70</option>
                <option value={50}>50</option>
                <option value={20}>20</option>
                <option value={10}>10</option>
              </select>
              <p>out of {apiData.length}</p>
            </div>
            {!apiData.length ? null : (
              <ReactPaginate
                previousLabel={<IoIosArrowBack style={{ fontSize: "18px" }} />}
                nextLabel={<IoIosArrowForward style={{ fontSize: "18px" }} />}
                pageCount={Math.ceil(apiData.length / usersPerPage)}
                onPageChange={handlePageChange}
                containerClassName={styles.paginationBtns}
                previousClassName={styles.previousBtns}
                nextLinkClassName={styles.nextBtns}
                activeClassName={styles.paginationActive}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
