const userModel = (function () {
  function login(user) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/login');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(xhr.responseText); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject();
      xhr.send(JSON.stringify(user));
    });
  }

  function logout() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/logout');
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => resolve();
      xhr.send();
    });
  }

  function getUsername() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/username');
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(xhr.responseText); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject();
      xhr.send();
    });
  }

  return {
    login,
    logout,
    getUsername
  };
}());
