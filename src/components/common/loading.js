import React from "react";
import "./loading.css";
import { useSelector } from "react-redux";

export const CircularLoading = () => {
  const { loading } = useSelector((state) => state.appSetting);
  return loading ? (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export const ItemLoadingAnimation = () => {
  return Array.apply(null, { length: 4 }).map((v, i) => (
    <div key={i} className="loading flex-item card">
      <div
        className="card-image"
        style={{
          padding: "15px",
        }}
      >
        <div
          style={{
            background: "grey",
            height: "300px",
            width: "100%",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <div className="card-content">
        <div style={{ background: "grey", height: 20 }}></div>
      </div>
      <div className="card-action">
        <div style={{ background: "grey", height: 20 }}></div>
      </div>
    </div>
  ));
};
