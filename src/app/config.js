let host = "http://localhost:4000/";
// host = "https://jsondbpoc.herokuapp.com/";
export const config = {
  DATA_SERVICE: `${host}data`,
  DETAIL_SERVICE: `${host}detail`,
  USER_SERVICE: `${host}user`,
  ENABLE_LOGGING: false,
  APPTITLE: "POC MOBILE SHOPPING",
  JWT_KEY: "password",
  CURRENT_REGION: "IN",
  DEMO: {
    email: "admin@admin.com",
    password: "admin",
  },
};
