import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import Darkmodebtn from "./Darkmodebtn";
import { GlobalStateContext } from "./GlobalState";
import Cookies from 'js-cookie';

export default function Navbar(props) {
  const { mode, handleLogout } = useContext(GlobalStateContext);
  const { role } = useContext(GlobalStateContext);

  const navigate = useNavigate();
  var userCookies;
    try {
         userCookies = Cookies.get('user');

    } catch (error) {
        console.error(error);
    }

  const gotoLogin = () => {
    navigate("/login");
  };

  const gotoPost = () => {
    navigate("/post");
  };






  return (
    <nav
      className="navbar bg-body-tertiary fixed-top d-flex justify-content-spacebetween"
      data-bs-theme={mode}
    >
      {/* logo */}

      <Link to="/">
        <img src="/logo.png" alt="logo" width="140px" className="mx-4 " />
      </Link>

      {/* right Nav */}

      <div className="container-rightnav d-flex justify-content-end">
        {/* Post Button */}
        <button
          type="button"
          className="btn btn-primary  px-4 py-2"
          onClick={gotoPost}
        >
          <b>Post</b>
        </button>

        {/* login logout button */}
{ userCookies ?  
    <button
          type="button"
          className="btn border mx-4 px-3 py-2"
          onClick={handleLogout}
        >
          <b>Logout</b>
        </button> :

        <button
          type="button"
          className="btn btn-danger mx-4 px-3 py-2"
          onClick={gotoLogin}
        >
          <b>Login</b>
        </button>
}
        {/* Dark mode switch */}

        <Darkmodebtn />

        {/* Avatar */}
        <Avatar role={role} />
      </div>
    </nav>
  );
}
