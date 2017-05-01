const requests = (function () {
  function getArticles() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', '/articles');
      request.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.response, (key, value) => {
            if (key === 'createdAt') return new Date(value);
            return value;
          }));
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      request.onerror = function () {
        reject(new Error('Network Error'));
      };
      request.send();
    });
  }

  function addArticle(article) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('POST', '/articles');
      request.setRequestHeader('content-type', 'application/json');
      request.onload = function () {
        if (this.status === 200) {
          resolve();
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      request.onerror = function () {
        reject(new Error('Article is not valid'));
      };

      request.send(JSON.stringify(article));
    });
  }

  function deleteArticle(id) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('DELETE', `/articles/${id}`);
      request.onload = function () {
        if (this.status === 200) {
          resolve();
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      request.onerror = function () {
        reject(new Error("Can't delete article"));
      };
      request.send();
    });
  }

  function editArticle(article) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('PUT', `/articles/${id}`);
      request.setRequestHeader('content-type', 'application/json');
      request.onload = function () {
        if (this.status === 200) {
          resolve();
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      request.onerror = function () {
        reject(new Error('Article is not valid'));
      };
      request.send(JSON.stringify(article));
    });
  }

  return {
    editArticle,
    deleteArticle,
    addArticle,
    getArticles,
  };
}()
);
