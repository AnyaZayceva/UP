const articleModel = (function () {
  let articles = [];

  function fillArticles(arr) {
    articles = arr;
    articles.forEach(item => item.id = item._id);
  }

  function getArticle(id) {
    id = id || null;
    if (typeof id === 'string') {
      for (let i = 0; i < articles.length; i++) {
        if (id === articles[i].id) {
          return (articles[i]);
        }
      }
    }
    return undefined;
  }

  function getSize() {
    return articles.length;
  }

  function removeArticle(id) {
    id = id || null;
    if (typeof id === 'string') {
      for (let i = 0; i < articles.length; i++) {
        if (id === articles[i].id) {
          articles.splice(i, 1);
          httpModel.removeArticle(id);
          return true;
        }
      }
    }
    return false;
  }

  function validateArticle(article) {
    if (article === null || article === undefined) {
      return false;
    }
    if ((typeof article.id === 'string') && (typeof article.title === 'string' && article.title.length <= 100 && article.title !== '')
            && (typeof article.summary === 'string' && article.summary.length <= 200 && article.summary !== '')
            && (typeof article.author === 'string') && (typeof article.content === 'string' && article.content !== '') && ((article.createdAt instanceof Date))) {
      return true;
    }
    return false;
  }

  function addArticle(article) {
    if (article === null || article === undefined) {
      return false;
    }
    if (validateArticle(article) === true) {
      articles.push(article);
      httpModel.addArticle(article);
      return true;
    }
    return false;
  }

  function editArticle(id, article) {
    const tempArticle = articles.find(a => a.id === id);
    if (!tempArticle) {
      return false;
    }
    const newArticle = Object.assign(tempArticle, article);
    if (!validateArticle(newArticle)) {
      return false;
    }
    articles.map(item => item.id !== id ? item : newArticle);
    httpModel.editArticle(id, article);
    return true;
  }

  function getArticles(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;
    let artCopy = articles.slice();
    artCopy.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    if (filterConfig) {
      artCopy = artCopy.filter((item) => {
        let result = true;
        if (filterConfig.author) {
          result = result && filterConfig.author === item.author;
        }
        if (filterConfig.dateFrom) {
          if (filterConfig.dateFrom >= item.createdAt) { result = false; }
        }
        if (filterConfig.dateTo) {
          if (filterConfig.dateTo <= item.createdAt) { result = false; }
        }
        return result;
      });
    }
    return artCopy.slice(skip, skip + top);
  }

  return {
    fillArticles,
    getArticle,
    removeArticle,
    validateArticle,
    addArticle,
    editArticle,
    getArticles,
    size: getSize
  };
}());
