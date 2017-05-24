document.querySelector('.maintape').style.display = '';
document.querySelector('.add-news').style.display = 'none';
document.querySelector('.authorization').style.display = 'none';
document.querySelector('.error').style.display = 'none';
document.querySelector('.newspage').style.display = 'none';

let currentFilter;
let curNews = 3;

function showUserElements(user) {
  document.querySelector('.user').innerText = `Привет, ${user}`;
  document.querySelector('.log-out').style.display = 'inline';
  document.querySelector('.add').style.display = 'inline';
  document.querySelector('.log-in').style.display = 'none';
  for (const button of document.querySelectorAll('.edit')) {
    button.style.display = 'block';
  }
  for (const button of document.querySelectorAll('.delete')) {
    button.style.display = 'block';
  }
}

function hideUserElements() {
  document.querySelector('.user').innerText = '';
  document.querySelector('.log-out').style.display = 'none';
  document.querySelector('.log-in').style.display = 'inline';
  document.querySelector('.add').style.display = 'none';
  for (const btn of document.querySelectorAll('.edit')) {
    btn.style.display = 'none';
  }
  for (const btn of document.querySelectorAll('.delete')) {
    btn.style.display = 'none';
  }
}

function auth(user) {
  if (user) {
    showUserElements(user);
  } else {
    hideUserElements();
  }
}

function showAddForm() {
  document.querySelector('.maintape').style.display = 'none';
  document.querySelector('.add-news').style.display = '';
  document.querySelector('.authorization').style.display = 'none';
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.newspage').style.display = 'none';
  document.querySelector('.add').style.display = 'none';
  document.querySelector('.search-author').style.display = 'none';
  document.querySelector('.search-date').style.display = 'none';
  const form = document.forms.create;
  form.title.value = '';
  form.summary.value = '';
  form.content.value = '';
  form.image.value = '';
  document.querySelector('.add-news-button-add').onclick = function () {
    addPost();
  };
}

function showMainPage(event) {
  document.querySelector('.maintape').style.display = '';
  document.querySelector('.add-news').style.display = 'none';
  document.querySelector('.authorization').style.display = 'none';
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.newspage').style.display = 'none';
  document.querySelector('.add').style.display = 'inline';
  document.querySelector('.search-author').style.display = 'inline';
  document.querySelector('.search-date').style.display = 'inline';
  currentFilter = {};
  curNews = 3;
  showMoreArticles();
  document.querySelector('.show-more-button .show-more').style.display = '';
}

function hideElements(event) {
  document.querySelector('.maintape').style.display = 'none';
  document.querySelector('.add-news').style.display = 'none';
  document.querySelector('.authorization').style.display = '';
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.newspage').style.display = 'none';
}

function showAuthorFilter(event) {
  document.querySelector('.author-filter').style.display = 'block';
}

function hideAuthorFilter(event) {
  document.querySelector('.author-filter').style.display = 'none';
}

function showDateFilter(event) {
  document.querySelector('.date-filter').style.display = 'block';
}

function hideDateFilter(event) {
  document.querySelector('.date-filter').style.display = 'none';
}

function logIn() {
  const username = document.getElementById('auth-input-login').value;
  const password = document.getElementById('autn-input-password').value;
  userModel.login({ username, password }).then(
        good => window.location = '../index.html',
        (error) => {
          document.querySelector('.maintape').style.display = 'none';
          document.querySelector('.add-news').style.display = 'none';
          document.querySelector('.authorization').style.display = 'none';
          document.querySelector('.error').style.display = '';
          document.querySelector('.newspage').style.display = 'none';
        }
    );
}

function out() {
  userModel.logout();
  auth();
}

function showMoreArticles() {
  const articles = articleModel.getArticles(0, curNews, currentFilter);
  document.querySelector('.tape').innerHTML = '';
  domModel.display(articles);
  curNews += 3;
  if (curNews - 2 > articleModel.size()) {
    document.querySelector('.show-more-button .show-more').style.display = 'none';
  }
}

function refresh() {
  const articles = articleModel.getArticles(0, curNews - 3, currentFilter);
  document.querySelector('.tape').innerHTML = '';
  domModel.display(articles);
}

function filterNews() {
  let dateFrom = document.getElementById('date-filter-from');
  dateFrom = new Date(dateFrom.value);
  let dateTo = document.getElementById('date-filter-to');
  dateTo = new Date(dateTo.value);

  let author = document.getElementById('filter');
  if (author.value) { author = author.value; } else author = undefined;

  if (!currentFilter) {
    currentFilter = {};
  }

  if (dateFrom === 'Invalid Date') { dateFrom = undefined; } else dateFrom.setHours(0);
  if (dateTo === 'Invalid Date') { dateTo = undefined; } else dateTo.setHours(23);

  currentFilter.dateFrom = dateFrom;
  currentFilter.dateTo = dateTo;
  currentFilter.author = author;

  curNews = 3;
  document.querySelector('.show-more-button .show-more').style.display = '';
  showMoreArticles();
}

function addPost() {
  const form = document.forms.create;
  const article = {
    id: `${new Date().getTime()}`,
    title: form.title.value,
    summary: form.summary.value,
    createdAt: new Date(),
    author: document.querySelector('.user').innerHTML.replace('Привет, ', ''),
    content: form.content.value,
    image: form.image.value
  };
  if (articleModel.addArticle(article)) {
    showMainPage();
    document.querySelector('.show-more-button .show-more').style.display = '';
  } else {
    document.querySelector('.maintape').style.display = 'none';
    document.querySelector('.add-news').style.display = 'none';
    document.querySelector('.authorization').style.display = 'none';
    document.querySelector('.error').style.display = '';
    document.querySelector('.newspage').style.display = 'none';
  }
}

function eventHandler(event) {
  const post = event.currentTarget.parentNode;
  const article = articleModel.getArticle(post.id);

  if (event.target.classList.contains('btn')) {
    document.querySelector('.maintape').style.display = 'none';
    document.querySelector('.add-news').style.display = 'none';
    document.querySelector('.authorization').style.display = 'none';
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.add').style.display = 'none';
    document.querySelector('.search-author').style.display = 'none';
    document.querySelector('.search-date').style.display = 'none';
    const detailed = document.querySelector('.newspage');
    console.log(detailed);


    document.querySelector('div.news-buttons').id = post.id;


    detailed.querySelector('.news-name').textContent = article.title;
    detailed.querySelector('img').src = article.image;
    detailed.querySelector('.news-text').textContent = article.content;
    detailed.querySelector('.news-author').textContent = `${article.author} ${article.createdAt.toDateString()}`;
    detailed.style.display = 'block';
  } else if (event.target.classList.contains('edit')) {
    const form = document.forms.create;

    showAddForm();

    form.title.value = article.title;
    form.summary.value = article.summary;
    form.content.value = article.content;
    form.image.value = article.image;
    document.querySelector('.add').style.display = 'none';
    document.querySelector('.search-author').style.display = 'none';
    document.querySelector('.search-date').style.display = 'none';
    document.querySelector('.add-news-button-add').onclick = function () {
      const form = document.forms.create;
      const article = {
        id: post.id,
        title: form.title.value,
        summary: form.summary.value,
        createdAt: new Date(),
        author: document.querySelector('.user').innerHTML.replace('Привет, ', ''),
        content: form.content.value,
        image: form.image.value
      };
      if (articleModel.editArticle(post.id, article)) {
        showMainPage();
        document.querySelector('.show-more-button .show-more').style.display = '';
        refresh();
      }
      showMainPage();
    };
  } else if (event.target.classList.contains('delete')) {
    articleModel.removeArticle(post.id);
    if (document.querySelector('.tape').style.display) {
      document.querySelector('.tape').removeChild(post);
    }
    showMainPage();
    refresh();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  httpModel.getAllArticles().then(
        (articles) => {
          articleModel.fillArticles(articles);
          showMoreArticles();
          userModel.getUsername().then(name => auth(name), error => auth());
        }
    );
});
