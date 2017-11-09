const AuthService = {
  isLoggedIn: function() {
    const user_token = localStorage.getItem("authToken");

    if (user_token === null || user_token === "") {
      return false;
    }

    return true;
  },

  logoutCurrentUser: function() {
    localStorage.removeItem("authToken");
  },

  submitLogin: function(authParams) {
    let axios = require("axios");
    return axios.post(process.env.REACT_APP_BASE_URL + '/user_token/', authParams);
  },

  createUser: function(userParams) {
    let axios = require("axios");
    return axios.post(process.env.REACT_APP_BASE_URL + '/users/', userParams);
  }
};

export default AuthService;
