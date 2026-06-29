import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBullseye,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function Sidebar() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition-all ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:bg-slate-800 hover:text-white"
    }`;

  const openProtectedPage = (path) => {

    if (!user) {

      alert("Please login to continue.");

      navigate("/login");

      return;

    }

    navigate(path);

  };

  return (

    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 text-white p-5">

      <div className="mb-10">

        <h1 className="text-2xl font-bold">

          FINSIGHT OS

        </h1>

        <p className="text-xs text-gray-500 mt-2">

          AI Powered Financial Operating System

        </p>

      </div>

      <nav className="flex flex-col gap-3">

        {/* Public Dashboard */}

        <NavLink

          to="/dashboard"

          className={linkStyle}

        >

          <FaHome />

          Dashboard

        </NavLink>

        {/* Protected Pages */}

        <button

          onClick={() => openProtectedPage("/wealth-tracker")}

          className="text-left flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-slate-800 hover:text-white transition-all"

        >

          <FaChartLine />

          Wealth Tracker

        </button>

        <button

          onClick={() => openProtectedPage("/future-map")}

          className="text-left flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-slate-800 hover:text-white transition-all"

        >

          <FaBullseye />

          Future Map

        </button>

        <button

          onClick={() => openProtectedPage("/scheme-navigator")}

          className="text-left flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-slate-800 hover:text-white transition-all"

        >

          <FaUniversity />

          Scheme Navigator

        </button>

        <button

          onClick={() => openProtectedPage("/ai-financial-guardian")}

          className="text-left flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-slate-800 hover:text-white transition-all"

        >

          <FaShieldAlt />

          AI Guardian

        </button>

      </nav>

    </div>

  );

}

export default Sidebar;