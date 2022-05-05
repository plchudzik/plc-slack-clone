import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          // alt={user?.displayName}
          alt="Pioter"
          // src={user?.photoURL}
          src=""
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon */}
        {/* input */}
      </div>
      <div className="header__right">{/* help icon */}</div>
    </div>
  );
};

export default Header;
