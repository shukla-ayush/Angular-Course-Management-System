export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://shielded-waters-68947.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://shielded-waters-68947.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('http://shielded-waters-68947.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://shielded-waters-68947.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response);
  }

  updateUser(username, firstName, lastName, phone, email, address) {
    const user = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      address: address
    };
    console.log(user.phone)
    return fetch('http://shielded-waters-68947.herokuapp.com/api/profile',
      {
        method: 'put',
        body: JSON.stringify(user),
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      role: username.toLowerCase() === "admin" ? "admin" : "student"
    };
    return fetch('http://shielded-waters-68947.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
