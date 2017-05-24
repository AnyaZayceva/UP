const httpModel = (function () {
  function getAllArticles() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/articles');
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText, (key, value) => {
            if (key === 'createdAt') return new Date(value);
            return value;
          }));
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject(new Error('getAllArticles crashed'));
      xhr.send();
    });
  }

  function editArticle(id, article) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', `/article/${id}`);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(xhr.status); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject(new Error('editArticle crashed'));
      xhr.send(JSON.stringify(article));
    });
  }

  function removeArticle(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', `/article/${id}`);
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(xhr.status); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject(new Error('removeArticle crashed'));
      xhr.send();
    });
  }

  function addArticle(article) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/articles');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) { resolve(xhr.status); } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = () => reject(new Error('addArticle crashed'));
      xhr.send(JSON.stringify(article));
    });
  }

  return {
    addArticle,
    editArticle,
    removeArticle,
    getAllArticles
  };
}());
