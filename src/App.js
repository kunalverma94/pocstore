import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Footer } from "./components/common/footer";
import { Notifiation } from "./components/common/Notification";
import Detail from "./components/layouts/Details/detail";
import { CheckOut } from "./components/layouts/Checkout/checkOut";
import { LandingView } from "./components/layouts/Landing/landingView";
import { Navbar } from "./components/common/navBar";
import Login from "./components/layouts/login";
import { CircularLoading } from "./components/common/loading";
import ProcessPayment from "./components/processPayment";
import { BOOT_LOCAL } from "./stateManagement/actiontypes/actiontypes";

export const AppContext = React.createContext();

export const contextValue = {
  REGION: { IN: "₹", US: "$" },
  theme: [
    "#3f51b5",
    "#9c27b0",
    "#9C27B0",
    "#E91E63",
    "#2196F3",
    "#4A148C",
    "#222",
  ],
};

export const App = () => {
  const appSetting = useSelector((s) => s.appSetting);
  const dispatch = useDispatch();
  if (appSetting.appState === 0) {
    dispatch({ type: BOOT_LOCAL });
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <HashRouter>
          <Navbar />
          <Notifiation />
          <div className="main-screen">
            <Route path="/detail?id=:id" component={Detail} />
            <Route path="/detail" component={Detail} />
            <Route path="/login" component={Login} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/payment" component={ProcessPayment} />
            <Route exact path="/home" component={LandingView} />
            <Route exact path="/" component={LandingView} />
            <CircularLoading />
          </div>
        </HashRouter>
      </Router>
      <Footer />
    </AppContext.Provider>
  );
};
