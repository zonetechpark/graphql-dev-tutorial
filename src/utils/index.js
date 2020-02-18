const APP_SECRET = "jfr8ijkhvfuiluoliulu";
const jwt = require("jsonwebtoken");

const getUserId = context => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }
  throw new Error("Not Authenticated");
};

module.exports = {
  APP_SECRET,
  getUserId
};
