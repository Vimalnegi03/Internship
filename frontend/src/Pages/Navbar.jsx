import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../store/store";
import { use } from "react";
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const {logout}=useAuth();
    const navigate=useNavigate();
    function handleLogout()
    {
        logout();
        navigate("/login")
        
    }
  return (
    <nav className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          Intern Portal
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/leaderboard">LeaderBoard</Link>
          </li>
        </ul>
        {/* Replace avatar if user is logged in; static for demo */}
        <div className="dropdown dropdown-end ml-2">
          <label tabIndex={0} className="btn btn-circle btn-ghost avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/100" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
          >
            <li>
              <button
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
