import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>PLC</h2>
        <h3>
          <FiberManualRecordIcon /> Pioter
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
