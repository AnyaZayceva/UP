const articleModel = (function () {
  let articlesStorage = [{}];
  const currentUser = {};
  const userBase = [
    {
      login: 'admin',
      password: 'admin',
    },
    {
      login: 'anya',
      password: 'admin',
    },
  ];


  function filterArtilces(articles, filterConfig) {
    if (filterConfig) {
      if (filterConfig.author) {
        articles = articles.filter(article => filterConfig.author === article.author);
      }
      if (filterConfig.dateFrom) {
        articles = articles.filter((item) => {
          const _date = new Date(filterConfig.dateFrom);
          return item.createdAt >= _date;
        });
      }
      if (filterConfig.dateTo) {
        articles = articles.filter((element) => {
          const _date = new Date(filterConfig.dateTo);
          return element.createdAt <= _date;
        });
      }
      if (filterConfig.tags) {
        articles = articles.filter((item) => {
                    // for (var i = 0; i < filterConfig.tags.length; i++) {
          const _tags = item.tags;
          if (_tags.indexOf(filterConfig.tags) > -1) {
            return item;
          }
                    // }
        });
      }
    }
    return articles.sort((firstItem, secondItem) => secondItem.createdAt - firstItem.createdAt);
  }
  function getArticles(skip = 0, top = 10, filterConfig) {
    return filterArtilces(articlesStorage, filterConfig).slice(skip, skip + top);
  }

  function getArticlesCount(filterConfig) {
    return filterArtilces(articlesStorage, filterConfig).length;
  }

  function getArticle(id) {
    let article;
    for (let i = 0; i < articlesStorage.length; i++) {
      if (articlesStorage[i].id === id) {
        article = articlesStorage[i];
        return article;
      }
    }
    return article;
  }

  function getUser(user) {
    let findUser;
    for (let i = 0; i < userBase.length; i++) {
      if (userBase[i].login === user.login && userBase[i].password === user.password) {
        findUser = userBase[i];
        return findUser;
      }
    }
    return findUser;
  }

  function validateArticle(article, edit) {
    if ((edit === false) && (typeof (article.id) !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined)) {
      return false;
    }
    if (typeof (article.title) !== 'string' || article.title.length > 100 || article.title.length <= 0) {
      return false;
    }
    if (typeof (article.summary) !== 'string' || article.summary.length > 200) {
      return false;
    }
    if ((article.createdAt instanceof Date) !== true) {
      return false;
    }
    if (typeof article.author !== 'string' || article.author.length <= 0) {
      return false;
    }
    if (typeof article.content !== 'string' || article.content.length <= 0) {
      return false;
    }
        /* if (article.tags === undefined || article.tags.length > 5) {
         return false;
         }
         for (var i = 0; i < article.tags.length; i++) {
         if (typeof(article.tags[i]) !== "string") {
         return false;
         }
         }*/
    return true;
  }

  function editArticle(id, article) {
    const currentArticleId = getArticle(id);
    const newArticle = {};
    Object.assign(newArticle, currentArticleId);
    for (const key in article) {
      if ((key !== 'id') && (key !== ' createdAt') && ((key !== 'author'))) {
        newArticle[key] = article[key];
      }
    }
    if (validateArticle(newArticle, true)) {
      Object.assign(getArticle(id), newArticle);
    }
  }

  function addArticle(article) {
    if (validateArticle(article, false)) {
      articlesStorage.push(article);
      return true;
    }

    return false;
  }

  function removeArticle(id) {
    let indexRemove = -1;
    for (let i = 0; i < articlesStorage.length; i++) {
      if (articlesStorage[i].id === id) {
        indexRemove = i;
      }
    }
    if (indexRemove === -1) {
      return false;
    }
    articlesStorage.splice(indexRemove, 1);
    return true;
  }

  function containsTag(tag) {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === tag) {
        return i;
      }
    }
    return -1;
  }

  function addTags(tagsForAdd) {
    tagsForAdd.forEach((tag) => {
      if (tags.indexOf(tag) === -1) tags.push(tag);
    });
  }

  function deleteTag(tagForDelete) {
    if (tagForDelete !== undefined) {
      const indexRemove = tags.indexOf(tagForDelete);
      if (indexRemove !== -1) {
        tags.splice(indexRemove, 1);
      }
    }
  }

  function replaceArticles() {
    return new Promise((resolve) => {
      requests.getArticles().then(
                (response) => {
                  articlesStorage = response;
                  console.log(articlesStorage);
                  resolve();
                },
                error => console.log(error)
            );
    });
  }

  return {
    curUser: currentUser,
    userBase,
    replaceArticles,
    getArticles,
    getArticlesCount,
    getArticle,
    validateArticle,
    editArticle,
    addArticle,
    removeArticle,
    addTags,
    deleteTag,
    getUser,
  };
}());

const articleRenderer = (function () {
  let aritcleTemplate;
  let articleListNode;

  function init() {
    aritcleTemplate = document.querySelector('#template_article');
    articleListNode = document.querySelector('.articles_list');
  }


  function removeArticlesFromDom() {
    articleListNode.innerHTML = '';
  }
  function formatDate(d) {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${
            d.getHours()}:${d.getMinutes()}`;
  }

  function renderArticle(article) {
    const template = aritcleTemplate;
    template.content.querySelector('.article').dataset.id = article.id;
    template.content.querySelector('.title').textContent = article.title;
    template.content.querySelector('.summary').textContent = article.summary;
    template.content.querySelector('.author').textContent = article.author;
    template.content.querySelector('.date').textContent = formatDate(article.createdAt);
    template.content.querySelector('.picture').setAttribute('src', article.picture);
    template.content.querySelector('.tags').innerHTML = '';
    if (article.tags !== undefined) {
      let tagLi;
      for (let i = 0; i < article.tags.length; i++) {
        tagLi = document.createElement('li');
        tagLi.innerHTML = `#${article.tags[i]} `;
        template.content.querySelector('.tags').appendChild(tagLi);
      }
    }
    return template.content.querySelector('.article').cloneNode(true);
  }
  function renderArticles(articles) {
    return articles.map(article => renderArticle(article));
  }
  function insertArticlesInDOM(articles) {
    const articlesNodes = renderArticles(articles);
    articlesNodes.forEach((node) => {
      articleListNode.appendChild(node);
    });
  }


  return {
    init,
    insertArticlesInDOM,
    removeArticlesFromDom,
  };
}());

const pagination = (function () {
  const ITEMS_PER_PAGE = 5;
  let total;
  let currentPage;
  let showMoreButton;
  let showMoreCallback;
  function getParams() {
    return {
      top: ITEMS_PER_PAGE,
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
    };
  }
  function getTotalPages() {
    return Math.ceil(total / ITEMS_PER_PAGE);
  }
  function showOrHideMoreButton() {
    showMoreButton.hidden = getTotalPages() <= currentPage;
  }
  function nextPage() {
    currentPage += 1;
    showOrHideMoreButton();

    return getParams();
  }
  function handleShowMoreClick() {
    const paginationParams = nextPage();
    showMoreCallback(paginationParams.skip, paginationParams.top);
  }
  function init(_total, _showMoreCallback) {
    currentPage = 1;
    total = _total;
    showMoreCallback = _showMoreCallback;
    showMoreButton = document.getElementById('view_more_button');
    showMoreButton.addEventListener('click', handleShowMoreClick);

    showOrHideMoreButton();

    return getParams();
  }


  return {
    init,
  };
}());

const filter = (function () {
  let form;
  let submitButton;
  let filterChangedCallback;
  function getFilter() {
    const authorSelect = form.elements.author;
    const dateFromSelect = form.elements.date_from;
    const dateToSelect = form.elements.date_to;
    const tagsSelect = form.elements.tags;
    let _author;
    let _dateFrom;
    let _dateTo;
    let _tags;
    if (authorSelect.value) {
      _author = authorSelect.value;
    }
    if (dateFromSelect.value) {
      _dateFrom = dateFromSelect.value;
    }
    if (dateToSelect.value) {
      _dateTo = dateToSelect.value;
    }
    if (tagsSelect.value) {
      _tags = tagsSelect.value;
    }
    return {
      author: _author,
      dateFrom: _dateFrom,
      dateTo: _dateTo,
      tags: _tags,
    };
  }
  function handleSubmitClick() {
    return filterChangedCallback(getFilter());
  }
  function init(_filterChangedCallback) {
    form = document.forms.filter;
    submitButton = form.elements.submit;
    submitButton.addEventListener('click', handleSubmitClick);
    filterChangedCallback = _filterChangedCallback;

    return getFilter();
  }


  return {
    init,
    getFilterConfig: getFilter,
  };
}());

const articleFullRenderer = (function () {
  let articleTemplate;
  let articleListNode;

  function init() {
    articleTemplate = document.querySelector('#template_full_article');
    articleListNode = document.querySelector('.articles_list');
    document.getElementById('filter_id').style.display = 'none';
    document.getElementById('pagination_id').style.display = 'none';
  }
  function formatDate(d) {
    return `${d.getDate()} . ${d.getMonth() + 1} . ${d.getFullYear()}   ${
            d.getHours()}:${d.getMinutes()}`;
  }

  function renderArticle(article) {
    const template = articleTemplate;
    template.content.querySelector('.article_full').dataset.id = article.id;
    template.content.querySelector('.title').textContent = article.title;
    template.content.querySelector('.full_text').textContent = article.content;
    template.content.querySelector('.author').textContent = article.author;
    template.content.querySelector('.date').textContent = formatDate(article.createdAt);
    template.content.querySelector('.picture').setAttribute('src', article.picture);
    template.content.querySelector('.tags').innerHTML = '';
    if (article.tags !== undefined) {
      let tagLi;
      for (let i = 0; i < article.tags.length; i++) {
        tagLi = document.createElement('li');
        tagLi.innerHTML = `#${article.tags[i]} `;
        template.content.querySelector('.tags').appendChild(tagLi);
      }
    }
    return template.content.querySelector('.article_full').cloneNode(true);
  }
  function insertArticlesInDOM(id) {
    const articlesNode = renderArticle(articleModel.getArticle(id));
    console.log(articlesNode);
    articleListNode.appendChild(articlesNode);
  }

  function removeArticlesFromDom() {
    articleListNode.innerHTML = '';
  }


  return {
    init,
    insertArticlesInDOM,
    removeArticlesFromDom,
  };
}());


function showElements() {
  const allArticlesDelete = document.getElementsByClassName('delete_news');
  [].forEach.call(allArticlesDelete, (item) => {
    item.style.display = 'inline-block';
  });
  const allArticlesEdit = document.getElementsByClassName('edit_news');
  [].forEach.call(allArticlesEdit, (item) => {
    item.style.display = 'inline-block';
  });
}
function hideElements() {
  const allArticlesDelete = document.getElementsByClassName('delete_news');
  [].forEach.call(allArticlesDelete, (item) => {
    item.style.display = 'none';
  });
  const allArticlesEdit = document.getElementsByClassName('edit_news');
  [].forEach.call(allArticlesEdit, (item) => {
    item.style.display = 'none';
  });
}
function handleViewAllClick(event) {
  articleRenderer.removeArticlesFromDom();
  articleFullRenderer.init();
  articleFullRenderer.insertArticlesInDOM(event.target.parentNode.dataset.id);
}

function handleLogInClick() {
  const button = document.getElementById('sign_in_id');
  const inputLogin = document.getElementById('name');
  const inputPassword = document.getElementById('password');
  const form = document.get;
  const label = document.getElementById('user_name_label');
  if (button.value === 'Выйти') {
    document.querySelector('.add_article').style.display = 'none';
    hideElements();
    label.style.display = 'none';
    label.textContent = '';
    inputLogin.style.display = 'inline-block';
    inputPassword.style.display = 'inline-block';
    button.value = 'Войти';
  } else if (button.value === 'Войти') {
    articleModel.curUser.login = inputLogin.value;
    articleModel.curUser.password = inputPassword.value;
    if (!articleModel.getUser(articleModel.curUser)) {
      alert('Проверьте правильность введенной информации!!!');
      articleModel.curUser = {};
    } else {
      document.querySelector('.add_article').style.display = 'inline-block';
      showElements();
      label.style.display = 'block';
      label.textContent = articleModel.curUser.login;
      inputLogin.style.display = 'none';
      inputPassword.style.display = 'none';
      inputLogin.value = '';
      inputPassword.value = '';
      button.value = 'Выйти';
    }
  }
}
function startApp() {
  function renderArticlesWithFilterConfig(filterConfig) {
    articleRenderer.removeArticlesFromDom();
    const total = articleModel.getArticlesCount(filterConfig);
    function renderArticles(skip, top, filterConfig) {
      const articles = articleModel.getArticles(skip, top, filterConfig);
      articleRenderer.insertArticlesInDOM(articles);
      const allArticles = document.getElementsByClassName('view_all');
      [].forEach.call(allArticles, (item) => {
        item.addEventListener('click', handleViewAllClick);
      });
      const allArticlesDelete = document.getElementsByClassName('delete_news');
      [].forEach.call(allArticlesDelete, (item) => {
        item.addEventListener('click', handleDeleteClick);
      });
      const allArticlesEdit = document.getElementsByClassName('edit_news');
      [].forEach.call(allArticlesEdit, (item) => {
        item.addEventListener('click', handleEditClick);
      });
      const button = document.getElementById('sign_in_id');
      if (button.value === 'Войти') {
        hideElements();
      }
      if (button.value === 'Выйти') {
        showElements();
      }
    }

    const paginationParams = pagination.init(total, (skip, top) => {
      renderArticles(skip, top, filterConfig);
    });
    renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
  }
  articleModel.replaceArticles().then(
        (ready) => {
          articleRenderer.init();
          renderArticlesWithFilterConfig(0, 5);
        }
    );

  const button = document.getElementById('sign_in_id');
  const filterConfig = filter.init(renderArticlesWithFilterConfig);
  renderArticlesWithFilterConfig(filterConfig);
}
function handleDeleteClick(event) {
  requests.deleteArticle(event.target.parentNode.dataset.id).then(
        (ready) => {
          startApp();
        },
        error => console.log(error)
    );
    // articleModel.removeArticle(event.target.parentNode.dataset.id);
    // startApp();
}
function handleMainClick() {
  document.getElementById('filter_id').style.display = 'block';
  document.getElementById('pagination_id').style.display = 'block';
  document.querySelector('.add_news_class').style.display = 'none';
  startApp();
}
function handleEditClick(event) {
  const editId = event.target.parentNode.dataset.id;
  articleRenderer.removeArticlesFromDom();
  document.querySelector('.add_news_class').style.display = 'block';
  document.getElementById('filter_id').style.display = 'none';
  document.getElementById('pagination_id').style.display = 'none';

  const editForm = document.forms.addNewsForm;
  function handleEditButtonClick() {
    const article = {};
    console.log(editForm.elements.addTitle.value);
    article.id = editId;
    article.createdAt = (articleModel.getArticle(editId)).createdAt;
    article.author = (articleModel.getArticle(editId)).author;
    article.title = editForm.elements.addTitle.value;
    article.summary = editForm.elements.addSummary.value;
    article.content = editForm.elements.addContent.value;
    article.picture = editForm.elements.addPicture.value;
    requests.editArticle(article).then(
            (ready) => {
              startApp();
            },
            error => alert(error)
        );
        // articleModel.editArticle(editForm.elements.addId, article);
    document.querySelector('.add_news_class').style.display = 'none';
    document.getElementById('filter_id').style.display = 'block';
    document.getElementById('pagination_id').style.display = 'block';
    const allArticlesDelete = document.getElementsByClassName('delete_news');

        // startApp();
  }
  editForm.elements.addId = editId;
  editForm.elements.addTitle.value = (articleModel.getArticle(editId)).title;
  editForm.elements.addSummary.value = (articleModel.getArticle(editId)).summary;
  editForm.elements.addContent.value = (articleModel.getArticle(editId)).content;
  editForm.elements.addTitle.value = (articleModel.getArticle(editId)).title;
  editForm.elements.addPicture.value = (articleModel.getArticle(editId)).picture;
  editForm.elements.addNewsButton.addEventListener('click', handleEditButtonClick);
}
function handleAddClick() {
  articleRenderer.removeArticlesFromDom();
  document.querySelector('.add_news_class').style.display = 'block';
  document.getElementById('filter_id').style.display = 'none';
  document.getElementById('pagination_id').style.display = 'none';

  const editForm = document.forms.addNewsForm;
  function handleAddButtonClick() {
    const article = {};
    console.log(editForm.elements.addTitle.value);
    article.title = editForm.elements.addTitle.value;
    article.summary = editForm.elements.addSummary.value;
    article.content = editForm.elements.addContent.value;
    article.picture = editForm.elements.addPicture.value;
    article.id = article.title + (new Date()).toString();
    article.author = articleModel.curUser.login;
    article.createdAt = new Date();
    requests.addArticle(article).then(
            (ready) => {
              startApp();
            },
            error => console.log(error)
        );
        // articleModel.addArticle(article);
    console.log(article);
    document.querySelector('.add_news_class').style.display = 'none';
    document.getElementById('filter_id').style.display = 'block';
    document.getElementById('pagination_id').style.display = 'block';


        // startApp();
  }
  editForm.elements.addTitle.value = '';
  editForm.elements.addSummary.value = '';
  editForm.elements.addContent.value = '';
  editForm.elements.addTitle.value = '';
  editForm.elements.addPicture.value = '';
  editForm.elements.addNewsButton.addEventListener('click', handleAddButtonClick);
}
document.addEventListener('DOMContentLoaded', startApp);

