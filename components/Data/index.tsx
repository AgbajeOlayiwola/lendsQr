import { HiUsers } from "react-icons/hi";
import {
  FaUsers,
  FaRegHandshake,
  FaUserCheck,
  FaUserTimes,
  FaPiggyBank,
  FaUserCog,
  FaChartBar,
  FaSlidersH,
  FaClipboardList,
} from "react-icons/fa";
import LoansSVG from "../SVGs/loansSvg";
import LoanRequestsSvg from "../SVGs/loanRequestsSvg";
import BriefCaseSvg from "../SVGs/briefCaseSvg";
import SavingsSvg from "../SVGs/savingsSvg";
import TransactionsSvg from "../SVGs/TransactionsSvg";
import ServidesSvg from "../SVGs/ServidesSvg";
import FessSvgs from "../SVGs/FessSvgs";
import Badge from "../SVGs/badge";

export const sideBarData = [
  {
    main: "CUSTOMERS",
    data: [
      {
        icon: <HiUsers />,
        title: "Users",
        url: "/Dashboard",
      },
      {
        icon: <FaUsers />,
        title: "Guarantors",
        url: "Guarantos",
      },
      {
        icon: <LoansSVG />,
        title: "Loans",
        url: "Loans",
      },
      {
        icon: <FaRegHandshake />,
        title: "Decision Models",
        url: "Decisions",
      },
      {
        icon: <FaPiggyBank />,
        title: "Savings",
        url: "Savings",
      },
      {
        icon: <LoanRequestsSvg />,
        title: "Loan Requests",
        url: "Loans",
      },
      {
        icon: <FaUserCheck />,
        title: "Whitelist",
        url: "Whitelist",
      },
      {
        icon: <FaUserTimes />,
        title: "Karma",
        url: "Karma",
      },
    ],
  },
  {
    main: "BUSINESSES",
    data: [
      {
        icon: <BriefCaseSvg />,
        title: "Organization",
        url: "Organization",
      },
      {
        icon: <LoanRequestsSvg />,
        title: "Loan Products",
      },
      {
        icon: <SavingsSvg />,
        title: "Savings Products",
      },
      {
        icon: <FessSvgs />,
        title: "Fees and Charges",
      },
      {
        icon: <TransactionsSvg />,
        title: "Transactions",
      },
      {
        icon: <ServidesSvg />,
        title: "Services",
      },
      {
        icon: <FaUserCog />,
        title: "Service Account",
      },
      {
        icon: <FaChartBar />,
        title: "Settlements",
      },
      {
        icon: "",
        title: "Reports",
      },
    ],
  },
  {
    main: "SETTINGS",
    data: [
      {
        icon: <FaSlidersH />,
        title: "Preferences",
      },
      {
        icon: <Badge />,
        title: "Fees and Pricing",
      },
      {
        icon: <FaClipboardList />,
        title: "Audit Logs",
      },
    ],
  },
];
