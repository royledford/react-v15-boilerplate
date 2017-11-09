import axios from 'axios'

const userService = {

  save: function(invest) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('authToken')
    return axios.post(process.env.REACT_APP_BASE_URL + '/myroute/', invest)
  },

  getUsers: function() {
    return axios
      .get(process.env.REACT_APP_BASE_URL + '/users/')
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },

   getUser: function(id) {
    return axios.get(process.env.REACT_APP_BASE_URL + '/myroute/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
}

export default userService
