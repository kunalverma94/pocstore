import React from "react";
import "./landingView.css";
import { Pagenation } from "../../common/pagination";
import { ListView } from "../listView";
export const LandingView = () => {
  return (
    <div className="main">
      <ListView />
      <Pagenation />
    </div>
  );
};
