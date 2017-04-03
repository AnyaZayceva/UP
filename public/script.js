var articlesService = (function () {
    var tags = [ 'мода', 'наука', 'спорт', 'здоровье', 'политика',];
    var articles = [{
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'T44-ая ракетка мира согласилась провести время с фанатом, если клуб «Нью-Инглэнд Пэтриотс» станет победителем Супербоула.',
        createdAt: new Date('2017-03-20T23:00:00'),
        author: 'Петр Петров',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "политика"],
        picture: "picture.jpg"
    },
        {
            id: '2',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-01-31T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["наука"],
            picture: "picture.jpg"
        },
        {
            id: '3',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2018-10-23T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2014-02-27T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт"],
            picture: "picture.jpg"
        },
        {
            id: '5',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-06-07T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика"],
            picture: "picture.jpg"
        },
        {
            id: '6',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2010-09-01T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "мода"],
            picture: "picture.jpg"
        },
        {
            id: '7',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2022-03-25T23:00:00'),
            author: 'Солдатенко Владислав',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "наука"],
            picture: "picture.jpg"
        },
        {
            id: '8',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('1999-07-28T23:00:00'),
            author: 'Дмитриенко Дмитрий',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '9',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-11-07T23:00:00'),
            author: 'Степанов Степан',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '10',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-08-30T23:00:00'),
            author: 'Лебедев Дмитрий',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '11',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-01T23:00:00'),
            author: 'Бриткин Павел',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "политика"],
            picture: "picture.jpg"
        },
        {
            id: '12',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-03-08T23:00:00'),
            author: 'Сидоров Пётр',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["наука"],
            picture: "picture.jpg"
        },
        {
            id: '13',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Евсеенко Наталья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '14',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2014-05-01T23:00:00'),
            author: 'Котов Николай',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт"],
            picture: "picture.jpg"
        },
        {
            id: '15',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-06-07T23:00:00'),
            author: 'Волков Даниил',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика"],
            picture: "picture.jpg"
        },
        {
            id: '16',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2010-04-21T23:00:00'),
            author: 'Кот Александра',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "мода"],
            picture: "picture.jpg"
        },
        {
            id: '17',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2022-02-13T23:00:00'),
            author: 'Мамченко Евстафий',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "наука"],
            picture: "picture.jpg"
        },
        {
            id: '18',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('1999-01-01T23:00:00'),
            author: 'Владимир Ленин',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '19',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-10-20T23:00:00'),
            author: 'Иосиф Сталин',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '20',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2117-12-31T23:00:00'),
            author: 'Иван Иванов',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "наука"],
            picture: "picture.jpg"
        }];

    var deletedArticles = [];

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || articles.length;
        articles.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });

        return filterArticles(articles, filterConfig).slice(skip, skip + top);
    }

    function loadDataFromLocalStorage() {
        if (localStorage.getItem("articles")) {
            var tempArticles = JSON.parse(localStorage.getItem("articles"));
            tempArticles.forEach(function (article) {
                article.createdAt = new Date(article.createdAt);
            });
            articles = tempArticles;
        }
        if (localStorage.getItem("tags")) {
            var tempTags = JSON.parse(localStorage.getItem("tags"));
            tags = tempTags;
        }
    }

    function saveDataToLocalStorage() {
        localStorage.removeItem("articles");
        localStorage.setItem("articles", JSON.stringify(articles));
        localStorage.removeItem("tags");
        localStorage.setItem("tags", JSON.stringify(tags));
    }

    function filterArticles(articles, filterConfig) {
        if (filterConfig) {
            if (filterConfig.author) {
                articles = articles.filter(function (item) {
                    return !(filterConfig.author.indexOf(item.author) == -1);
                })
            }
            if (filterConfig.createdAtFrom) {
                articles = articles.filter(function (item) {
                    return item.createdAt.getTime() >= filterConfig.createdAtFrom.getTime();
                })
            }
            if (filterConfig.createdAtTo) {
                articles = articles.filter(function (item) {
                    return item.createdAt.getTime() <= filterConfig.createdAtTo.getTime();
                })
            }
            if (filterConfig.tags && filterConfig.tags.length > 0) {
                articles = articles.filter(function (article) {
                    var check = true;
                    filterConfig.tags.forEach(function (item) {
                        if (article.tags.indexOf(item) == -1) {
                            check = false;
                        }
                    });
                    return check;
                })
            }
        }
        return articles;
    }

    function getAuthors() {
        var authors = [];
        articles.forEach(function (item) {
            if (authors.indexOf(item.author) == -1)
                authors.push(item.author);
        });
        authors.sort();
        return authors;
    }

    function getTags() {
        return tags.sort();
    }

    function getArticle(id) {
        var article;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                article = articles[i];
                return article;
            }
        }
        return article;
    }

    function getArticleIndexByID(id) {
        if (getArticle(id).length != 0) {
            var index = articles.findIndex(function (item) {
                return item.id === id;
            });
            return index;
        }
        return -1;
    }

    function validateArticle(article,edit) {
        if ((edit === false) && (typeof (article.id) !== 'string' || article.id.length <= 0 || getArticle(article.id) !== undefined)) {
            return false;
        }
        if (typeof (article.title) !== 'string' || article.title.length > 100 || article.title.length <= 0) {
            return false;
        }
        if (typeof (article.summary) !== 'string' || article.summary.length > 200) {
            return false;
        }
        if (typeof article.content !== 'string' || article.content.length <= 0) {
            return false;
        }
        if (article.tags === undefined || article.tags.length > 5) {
            return false;
        }
        for (var i = 0; i < article.tags.length; i++) {
            if (typeof(article.tags[i]) !== "string") {
                return false;
            }
        }
        return true;

    }

    function getArticlesCount(filterConfig) {
        return getArticles(undefined, undefined, filterConfig).length;
    }

    function addTag(tag) {
        if (tag) {
            if (tags.indexOf(tag) == -1) {
                tags.push(tag);
            }
        }
    }

    function removeTag(tag) {
        if (tag) {
            var index = tags.indexOf(tag);
            if (index != -1) {
                tags.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    function addArticle(article) {
        if (article) {
            if (validateArticle(article)) {
                article.createdAt = new Date();
                var size = generateID(article.createdAt);
                article.id = size.toString();
                article.author = userService.getUsername();
                articles.push(article);
                return true;
            }
        }
        return false;
    }

    function generateID(date) {
        return date.getDate() + '' + (date.getMonth() + 1) + '' + date.getFullYear() + '' + date.getMinutes() + '' + date.getMilliseconds();
    }

    function editArticle(id, article) {
        if (getArticle(id).length != 0) {
            var index = getArticleIndexByID(id);

            if (validateArticle(article,true) && !article.id && !article.createdAt && !article.author) {
                articles[index].content = article.content;
                articles[index].summary = article.summary;
                articles[index].title = article.title;
                articles[index].tags = article.tags;
                return true;
            }
        }
        return false;
    }

    function removeArticle(id) {
        if (getArticle(id).length !== 0) {
            var index = getArticleIndexByID(id);
            if (index != -1) {
                deletedArticles.push(articles.splice(index, 1));
                return true;
            }
        }
        return false;
    }

    function getArticlesCount() {
        return articles.length;
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle: validateArticle,
        addTag: addTag,
        removeTag: removeTag,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        getArticlesSize: getArticlesCount,
        getArticlesCount: getArticlesCount,
        getAuthors: getAuthors,
        getTags: getTags,
        loadDataFromLocalStorage: loadDataFromLocalStorage,
        saveDataToLocalStorage: saveDataToLocalStorage
    };
}());

var articleRenderer = (function () {
    var articleTemplate;
    var articlesListNode;
    const articlesCountOnePage = 8;

    function init() {
        articleTemplate = document.querySelector('#template-article');
        articlesListNode = document.querySelector('.bottom-news');
    }

    function showUserElements() {
        var editButtons = document.getElementsByClassName('edit-panel');
        var addButton = document.getElementById('add-button');
        var user = document.querySelector('.login');
        if (userService.getUsername().length == 0) {
            user.innerHTML = "Вход";
            addButton.style.visibility = "hidden";

            [].forEach.call(editButtons, function (item) {
                item.style.visibility = "hidden"
            });
            addButton.style.visibility = "hidden";
            articleTemplate.content.querySelector('.edit-panel').style.visibility = "hidden";
        }
        if (userService.getUsername().length != 0) {
            user.value = "Добро пожаловать, " + userService.getUsername();
            [].forEach.call(editButtons, function (item) {
                item.style.visibility = "visible"
            });
            addButton.style.visibility = "visible";
            articleTemplate.content.querySelector('.edit-panel').style.visibility = "visible";
        }
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            articlesListNode.appendChild(node);
        });

    }

    function insertArticleInDOM(article) {
        var articlesNode = renderArticle(article);
        if (articlesListNode.children <= articlesCountOnePage) {
            articlesListNode.insertBefore(articlesNode, articlesListNode.firstChild);
        }
        else {
            articlesListNode.removeChild(articlesListNode.lastChild);
            articlesListNode.insertBefore(articlesNode, articlesListNode.firstChild);
        }
    }

    function removeArticlesFromDom() {
        articlesListNode.innerHTML = '';
    }

    function findArticleByID(article, id) {
        var searchIndex = -1;
        [].forEach.call(article.children, function (child, i) {
            if (child.getAttribute('data-id') === id) {
                searchIndex = i;
            }
        });
        return searchIndex;
    }

    function removeArticlesFromDomByID(id) {
        var removeIndex = findArticleByID(articlesListNode, id);
        if (removeIndex != -1) {
            articlesListNode.removeChild(articlesListNode.children[removeIndex]);
        }
    }

    function editArticleByID(id, article) {
        articlesService.editArticle(id, article);
        var editIndex = findArticleByID(articlesListNode, id);
        if (editIndex != -1) {
            var insertArticle = renderArticle(articlesService.getArticle(id));
            articlesListNode.replaceChild(insertArticle, articlesListNode.children[editIndex]);
        }
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderFilterInvalid() {
        articlesListNode.innerHTML = "Упс,таких статей нет ):";
    }

    function renderArticle(article) {
        var template = articleTemplate;
        template.content.querySelector('.bottom-news-wrapper').dataset.id = article.id;
        template.content.querySelector('.news-header-small').innerHTML = "<a><h5>" + article.title + "</h5></a>";
        template.content.querySelector('.news-preview-small').innerHTML = "<p>" + article.summary + "</p>";
        var smallInfo = template.content.querySelector('.news-info-small').getElementsByTagName('span');
        smallInfo[0].textContent = article.tags;
        smallInfo[1].textContent = formatDate(article.createdAt);
        smallInfo[2].textContent = article.author;
        template.content.getElementById('small-image').src = article.picture;
        return template.content.querySelector('.bottom-news-wrapper').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + '  ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom,
        removeArticlesFromDomByID: removeArticlesFromDomByID,
        editByID: editArticleByID,
        showUserElements: showUserElements,
        formatDate: formatDate,
        insertArticleInDOM: insertArticleInDOM,
        renderArticle: renderArticle,
        renderErrorFilter: renderFilterInvalid
    }
}());

var pagination = (function () {
    var itemsOnPage = 6;
    var total;
    var currentPage;
    var showMoreButton;
    var showMoreCallback;

    function init(_total, _showMoreCallback) {
        currentPage = 1;
        total = _total;
        showMoreCallback = _showMoreCallback;
        showMoreButton = document.querySelector('.more-news');
        showMoreButton.addEventListener('click', handleShowMoreClick);


        showOrHideMoreButton();


        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / itemsOnPage);
    }

    function nextPage() {
        currentPage = currentPage + 1;

        showOrHideMoreButton();

        return getParams();
    }

    function getParams() {
        return {
            top: itemsOnPage,
            skip: (currentPage - 1) * itemsOnPage
        };
    }

    function showOrHideMoreButton() {
        if (getTotalPages() <= currentPage) {
            showMoreButton.style.display = "none";
        }
        else {
            showMoreButton.style.display = "block";
        }
    }

    return {
        init: init
    }

}());

var fullNewsService = (function () {
    var templateFullArticle;
    var newsContainer;
    var templateFullBackground;
    var templateAddEditForm;
    var addNewButton;
    var contentArea;
    var submitButton;
    var maxHeight = 400;
    var idForEdit;
    var articleToAdd;
    var editTags;

    function init() {
        templateFullArticle = document.getElementById('template-full-news');
        newsContainer = document.querySelector('.bottom-news-bar');
        newsContainer.addEventListener('click', handleShowClick);
        templateAddEditForm = document.getElementById('template-add-edit-news');
        addNewButton = document.getElementById('add-button');
        addNewButton.addEventListener('click', handleAddNewsClick);

    }

    function handleShowClick(event) {
        var targetElement = event.target;
        if (targetElement.type === 'button') {
            openFullNew(targetElement);
            waitForClose();
        }
        if (targetElement.className === 'delete-news') {
            deleteNews(targetElement);
        }
        if (targetElement.className === 'edit-news') {
            editNew(targetElement);
        }
        if (targetElement.tagName.toLocaleLowerCase() === 'h5') {
            openFullNew(targetElement);
            waitForClose();
        }
    }

    /*Full News*/

    function openFullNew(node) {
        while (!node.hasAttribute('data-id')) {
            node = node.parentNode;
        }
        var id = node.getAttribute('data-id');
        document.body.appendChild(renderFullNew(id));
    }

    function waitForClose() {
        templateFullBackground = document.querySelector('.news-background');
        templateFullBackground.addEventListener('click', handleCloseFull);
    }

    function handleCloseFull(event) {
        if (event.target != templateFullBackground)return;
        templateFullBackground.remove();
    }

    function renderFullNew(id) {
        var article = articlesService.getArticle(id);
        var template = templateFullArticle;
        template.content.querySelector('.top-image-full').style.backgroundImage = "url(" + article.picture + ")";
        template.content.querySelector('.full-left').innerHTML = article.author;
        var description = template.content.querySelector('.description-full').getElementsByTagName('span');
        description[1].innerHTML = articleRenderer.formatDate(article.createdAt);
        description[2].innerHTML = article.tags.toString();
        template.content.querySelector('.title-full').innerHTML = "<h5>" + article.title + "</h5>";
        template.content.querySelector('.content-full').textContent = article.content;
        return template.content.querySelector('.news-background').cloneNode(true);
    }

    /*Edit News*/
    function editNew(node) {
        while (!node.hasAttribute('data-id')) {
            node = node.parentNode;
        }
        idForEdit = node.getAttribute('data-id');
        openEditAdd(idForEdit);
        editTags = customInput().init(articlesService.getTags(), 'add-edit-tags', true);
        editTags.setSelected(articlesService.getArticle(idForEdit).tags);
        removeAddEditForm();
        contentArea = document.getElementById('add-content-field');
        submitButton = document.getElementById('add-news-submit');
        submitButton.addEventListener('click', handleSubmitNew);
    }

    function handleSubmitNew() {
        if (validateAddForm()) {
            articleRenderer.editByID(idForEdit, articleToAdd);
            articlesService.saveDataToLocalStorage();
            articlesService.loadDataFromLocalStorage();
            templateFullBackground.remove();
        }
        else {
            document.querySelector('.add-edit-news-invalid').style.visibility = 'visible';
        }
    }

    function validateAddForm() {
        articleToAdd = getData();
        return articlesService.validateArticle(articleToAdd,true);
    }

    function getData() {
        var addArticle = {};
        var form = document.forms.addNewsForm;
        addArticle['picture'] = form.elements[0].value;
        addArticle['title'] = form.elements[1].value;
        addArticle['summary'] = form.elements[2].value;
        addArticle['content'] = form.elements[3].value;
        addArticle['tags'] = editTags.getSelected();
        var newTags = editTags.getNew();
        if (newTags.length > 0) {
            newTags.forEach(function (item) {
                articlesService.addTag(item);
            })
        }
        return addArticle;
    }

    function openEditAdd(id) {
        document.body.appendChild(renderAddEditNews(id));
    }

    function renderAddEditNews(id) {
        var template = templateAddEditForm;
        if (!id) {
            return template.content.querySelector('.news-background').cloneNode(true);
        }
        if (id) {
            var article = articlesService.getArticle(id);
            var form = template.content.querySelector('.add-edit-news-form');
            form.elements[0].value = article.picture;
            form.elements[1].value = article.title;
            form.elements[2].value = article.summary;
            form.elements[3].value = article.content;
            form.elements[3].style.height = maxHeight.toString() + 'px';
            return template.content.querySelector('.news-background').cloneNode(true);
        }
    }

    function removeAddEditForm() {
        templateFullBackground = document.querySelector('.news-background');
        templateFullBackground.addEventListener('click', handleRemoveAddEdit);
    }

    function handleRemoveAddEdit(event) {
        if (event.target != templateFullBackground)return;
        var child = event.target;
        child = child.children[0];
        var isRemove = true;
        if (child.className === 'add-edit-news-wrapper') {
            isRemove = confirm('Отменить создание?')
        }
        if (isRemove) {
            clearForms();
            templateFullBackground.remove();
        }
    }

    /*Add News*/
    function handleAddNewsClick() {
        openEditAdd();
        clearForms();
        removeAddEditForm();
        addNews();
    }

    function addNews() {
        contentArea = document.getElementById('add-content-field');
        submitButton = document.getElementById('add-news-submit');
        submitButton.addEventListener('click', handleAddNewsSubmit);
        editTags = customInput().init(articlesService.getTags(), 'add-edit-tags', true);
    }


    function handleAddNewsSubmit() {
        var article = getData();
        if (articlesService.validateArticle(article,true)) {
            articlesService.addArticle(article);
            articleRenderer.insertArticleInDOM(article);
            articleRenderer.insertArticleInDOM(article);
            articlesService.saveDataToLocalStorage();
            articlesService.loadDataFromLocalStorage();
            templateFullBackground.remove();
            filter.fillFilter();
        }
        else {
            document.querySelector('.add-edit-news-invalid').style.visibility = 'visible';
        }
    }

    /*Delete News*/
    function deleteNews(node) {
        while (!node.hasAttribute('data-id')) {
            node = node.parentNode;
        }
        var id = node.getAttribute('data-id');
        articleRenderer.removeArticlesFromDomByID(id);
        articlesService.removeArticle(id);
        articleRenderer.removeArticlesFromDom();
        articlesService.saveDataToLocalStorage();
        articlesService.loadDataFromLocalStorage();
        renderArticles(0, 3, undefined);
        renderPagination(undefined, articlesService.getArticlesSize());
    }

    function clearForms() {
        var form = document.forms.addNewsForm;
        form.elements[0].value = "";
        form.elements[1].value = "";
        form.elements[2].value = "";
        form.elements[3].value = "";
    }


    return {
        init: init,
        renderFullNews: renderFullNew,
    }

}());

var userService = (function () {
    var statusOfUser = false;
    var currentUser = {
        login: '',
        username: '',
        password: ''
    };
    var baseUsers = [{
        login: 'admin',
        username: 'Administrator',
        password: 'admin'
    }];
    var loginButtonForm;
    var loginForm;
    var loginButton;

    function init() {
        loginButtonForm = document.querySelector('.top-bar-login');
        loginButtonForm.addEventListener('click', handleClickLoginButton);
        loginForm = document.querySelector('.login-form-wrapper');
        loginForm.style.display = 'none';
        loginButton = document.getElementById('login-button');
        loginButton.addEventListener('click', handleClickLogin);              //проверка существования пользователя
    }

    function handleClickLoginButton(event) {
        var target = event.currentTarget;
        if (target != this) return;
        if (getUsername().length === 0) {
            loginForm.style.display = (loginForm.style.display === 'none') ? 'block' : 'none';
        }
        if (getUsername().length > 0) {
            var isRemove = confirm('Выйти?');
            if (isRemove) {
                currentUser = {
                    login: '',
                    username: '',
                    password: ''
                };
                articleRenderer.showUserElements();
            }
        }
    }

    function handleClickLogin(event) {
        var target = event.target;
        if (target.type !== 'button') return;
        if (target.id === 'login-button') {
            var data = collectData();
            if (validateUser(data[0], data[1])) {
                statusOfUser = true;
                articleRenderer.showUserElements();
                loginForm.style.display = 'none';
                clearForm();
            }
            else {
                alert('Неверное имя пользователя или пароль');
            }
        }
    }

    function getUserStatus() {
        return statusOfUser;
    }

    function getUsername() {
        return currentUser.username;
    }

    function collectData() {
        var form = document.getElementById('login-form');
        var data = [];
        data.push(form.elements[0].value);
        data.push(form.elements[1].value);
        return data;

    }

    function clearForm() {
        var form = document.getElementById('login-form');
        form.elements[0].value = "";
        form.elements[1].value = "";
    }

    function validateUser(login, password) {
        var findUser = baseUsers.find(function (item) {
            return item.login === login;
        });
        if (findUser) {
            if (findUser.password === password) {
                statusOfUser = true;
                currentUser = findUser;
                return true;
            }
        }
        return false;
    }

    return {
        init: init,
        getUserStatus: getUserStatus,
        getUsername: getUsername
    }
}());

var filter = (function () {
    var form;
    var submitButton;
    var tagsFilter;
    var authorFilter;

    function init() {
        form = document.forms.filter;
        submitButton = form.elements.filterButton;
        submitButton.addEventListener('click', handleSubmitClick);
        tagsFilter = customInput().init(articlesService.getTags(), 'tags-filter');
        authorFilter = customInput().init(articlesService.getAuthors(), 'author-filter');
        return getFilter();
    }

    function getFilter() {
        var filterConfig = {};
        if (authorFilter.getSelected().length != 0) {
            filterConfig['author'] = authorFilter.getSelected();
        }
        if (tagsFilter.getSelected().length != 0) {
            filterConfig['tags'] = tagsFilter.getSelected();
        }
        var dateFrom = form.elements.date_from;
        if (dateFrom.value) {
            filterConfig['createdAtFrom'] = new Date(dateFrom.value);
        }
        var dateTo = form.elements.date_to;
        if (dateTo.value) {
            filterConfig['createdAtTo'] = new Date(dateTo.value);
        }
        return filterConfig;
    }

    function fillFilter() {
        tagsFilter.reload(articlesService.getTags());
        authorFilter.reload(articlesService.getAuthors());
    }

    function handleSubmitClick() {
        var filter = getFilter();
        if (Object.keys(filter).length !== 0) {
            articleRenderer.removeArticlesFromDom();
            var total = articlesService.getArticlesCount(filter);
            if (total === 0) {
                articleRenderer.renderErrorFilter();
            }
            renderPagination(filter, total);
        }
        else {
            articleRenderer.removeArticlesFromDom();
            renderArticles(0, 3, undefined);
            var total = articlesService.getArticlesSize();
            renderPagination(undefined, total);
        }
    }

    return {
        init: init,
        getFilterConfig: getFilter,
        fillFilter: fillFilter,
    };

}());
document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    articlesService.loadDataFromLocalStorage();
    articleRenderer.init();
    var total = articlesService.getArticlesSize();
    renderPagination(undefined, total);
    fullNewsService.init();
    articleRenderer.showUserElements();
    userService.init();
    filter.init();
}
window.addEventListener('beforeunload', function () {
    articlesService.saveDataToLocalStorage();
});
function renderArticles(skip, top, filterConfig, place) {
    var articlesTop = articlesService.getArticles(skip, top, filterConfig);
    articleRenderer.insertArticlesInDOM(articlesTop, place);
}
function renderPagination(filter, total) {
    var paginationParams = pagination.init(total, function (skip, top) {
        renderArticles(skip, top, filter);
    });
    renderArticles(paginationParams.skip, paginationParams.top, filter);
}