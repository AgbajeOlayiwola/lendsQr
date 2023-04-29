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
        url: "LoanRequest",
      },
      {
        icon: <SavingsSvg />,
        title: "Savings Products",
        url: "SavingProducts",
      },
      {
        icon: <FessSvgs />,
        title: "Fees and Charges",
        url: "feesChanges",
      },
      {
        icon: <TransactionsSvg />,
        title: "Transactions",
        url: "transactions",
      },
      {
        icon: <ServidesSvg />,
        title: "Services",
        url: "savings",
      },
      {
        icon: <FaUserCog />,
        title: "Service Account",
        url: "serviceAccount",
      },
      {
        icon: <FaChartBar />,
        title: "Settlements",
        urll: "settlements",
      },
      {
        icon: "",
        title: "Reports",
        url: "reports",
      },
    ],
  },
  {
    main: "SETTINGS",
    data: [
      {
        icon: <FaSlidersH />,
        title: "Preferences",
        url: "preferences",
      },
      {
        icon: <Badge />,
        title: "Fees and Pricing",
        ur: "feesandpricing",
      },
      {
        icon: <FaClipboardList />,
        title: "Audit Logs",
        url: "auditlogs",
      },
    ],
  },
];
