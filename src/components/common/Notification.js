import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_NOTIFICATION } from "../../stateManagement/actiontypes/actiontypes";

export const Notifiation = () => {
  const { notification } = useSelector((state) => state.session);
  const IsNotification = notification && notification.type !== "";
  const dispatch = useDispatch();

  if (IsNotification) {
    setTimeout(() => {
      dispatch({ type: CLOSE_NOTIFICATION });
    }, 4000);
  }

  return IsNotification ? (
    <div className="notification ">
      <div className="waves-effect">
        {notification.message
          ? notification.message + ""
          : "something Whent Worong:"}
      </div>
    </div>
  ) : (
    <></>
  );
};
