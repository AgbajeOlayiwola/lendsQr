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
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  const usersPerPage = listOfUsers;
  const pagesVisited = pageNumber * usersPerPage;
  const startIndex = pageNumber * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const slicedData = apiData.slice(startIndex, endIndex);
  // const paginateData = Paginate(apiData, currentPage, pageSize);
  const pageCount = Math.ceil(apiData.length / usersPerPage);
  const [outTypes, setOutTypes] = useState();
  const types = (types: any) => {
    setOutTypes(types);
    console.log(outTypes);
    setUsrsFull((prev) => !prev);
  };

  return (
    <>
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
                    action={null}
                    key={item.id}
                    typeSet={types}
                    id={item.id}
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
    </>
  );
};

export default Dashboard;
