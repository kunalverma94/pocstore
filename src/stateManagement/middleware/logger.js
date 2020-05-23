import { config } from "../../app/config";

export const logger = (store) => (next) => (action) => {
  if (config.ENABLE_LOGGING) {
    console.log("current action :", action);
    console.log("logging here...");
    console.log(next);
  }
  next(action);
};
