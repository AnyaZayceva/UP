const domModel = (function () {
  const template = document.getElementById('template');
  const tape = document.querySelector('.tape');

  Date.prototype.getMonthName = function () {
    return Date.locale.month_names[this.getMonth()];
  };
  Date.prototype.prettyFormat = function () {
    return `${this.getDate()} ${this.getMonthName()} ${this.getHours()}:${this.getMinutes()}`;
  };
  Date.locale = {
    month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  };

  function fillTemplate(article) {
    const copy = template.querySelector('.news').cloneNode(true);
    copy.id = article.id;
    if (article.image) { copy.querySelector('img').src = article.image; }
    copy.querySelector('h3').innerText = article.title;
    copy.querySelector('p').innerText = article.summary;
    copy.querySelector('.author').innerText = `${article.author} ${
            article.createdAt.prettyFormat()}`;
    copy.querySelector('.eventHandler').addEventListener('click', eventHandler);
    return copy;
  }

  document.querySelector('div.news-autbtn.eventHandler').addEventListener('click', eventHandler);


  function displayArticles(articles) {
    if (tape) {
      for (article of articles) {
        tape.appendChild(fillTemplate(article));
      }
      return true;
    }
    return false;
  }

  function removeArtice(id) {
    const found = document.getElementById(id);
    if (found) found.remove();
    return articleModel.removeArticle(id);
  }

  function editArtice(id, atricle) {
    const sucess = articleModel.editArticle(id, article);
    if (sucess) {
      const found = document.getElementById(id);
      if (found) {
        found.parentNode.replaceChild(
                fillTemplate(articleModel.getArticle(id)),
                found
            );
      }
      return true;
    }
    return false;
  }

  return {
    display: displayArticles,
    remove: removeArtice,
    edit: editArtice
  };
}());
