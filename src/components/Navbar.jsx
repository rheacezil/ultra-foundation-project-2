import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

import * as actionLogin from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";

import logo from "../images/site-icon-yellow.ico";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const { logoutUser } = bindActionCreators(actionLogin, useDispatch());
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning py-3 fixed-top">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
          >
            <img
              src={logo}
              alt="Site Icon"
              className="img-fluid logo w-100 h-100 bg-dark"
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navMenu"
          >
            <ul className="navbar-nav ms-auto text-end me-4">
              <li className="nav-item border-right">
                <Link to="/" className="nav-link active text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item border-right">
                <Link to="/event" className="nav-link active text-dark">
                  Event
                </Link>
              </li>
              <li className="nav-item border-right">
                <Link to="/about" className="nav-link active text-dark">
                  About
                </Link>
              </li>
              <li className="nav-item border-right">
                <Link to="/contact" className="nav-link active text-dark">
                  Contact
                </Link>
              </li>

              <li className="nav-item border-right">
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button {...bindTrigger(popupState)}>
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close}>
                          My account
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                            Settings
                          </ListItemIcon>
                        </MenuItem>
                        <MenuItem onClick={() => logoutUser()}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                            Logout
                          </ListItemIcon>
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
