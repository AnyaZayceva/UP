var articleModel = (function () {
    var articlesStorage = [{
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'T44-ая ракетка мира согласилась провести время с фанатом, если клуб «Нью-Инглэнд Пэтриотс» станет победителем Супербоула.',
        createdAt: new Date('2017-03-20T23:00:00'),
        author: 'Петр Петров',
        contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "политика"],
        picture: "picture.jpg"
    },
        {
            id: '2',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-01-31T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["наука"],
            picture: "picture.jpg"
        },
        {
            id: '3',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2018-10-23T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2014-02-27T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт"],
            picture: "picture.jpg"
        },
        {
            id: '5',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-06-07T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика"],
            picture: "picture.jpg"
        },
        {
            id: '6',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2010-09-01T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "мода"],
            picture: "picture.jpg"
        },
        {
            id: '7',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2022-03-25T23:00:00'),
            author: 'Солдатенко Владислав',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "наука"],
            picture: "picture.jpg"
        },
        {
            id: '8',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('1999-07-28T23:00:00'),
            author: 'Дмитриенко Дмитрий',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '9',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-11-07T23:00:00'),
            author: 'Степанов Степан',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '10',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-08-30T23:00:00'),
            author: 'Лебедев Дмитрий',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '11',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-04-01T23:00:00'),
            author: 'Бриткин Павел',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "политика"],
            picture: "picture.jpg"
        },
        {
            id: '12',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-03-08T23:00:00'),
            author: 'Сидоров Пётр',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["наука"],
            picture: "picture.jpg"
        },
        {
            id: '13',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Евсеенко Наталья',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '14',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2014-05-01T23:00:00'),
            author: 'Котов Николай',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт"],
            picture: "picture.jpg"
        },
        {
            id: '15',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-06-07T23:00:00'),
            author: 'Волков Даниил',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика"],
            picture: "picture.jpg"
        },
        {
            id: '16',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2010-04-21T23:00:00'),
            author: 'Кот Александра',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["здоровье", "мода"],
            picture: "picture.jpg"
        },
        {
            id: '17',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2022-02-13T23:00:00'),
            author: 'Мамченко Евстафий',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "наука"],
            picture: "picture.jpg"
        },
        {
            id: '18',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('1999-01-01T23:00:00'),
            author: 'Владимир Ленин',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '19',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2003-10-20T23:00:00'),
            author: 'Иосиф Сталин',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика", "спорт"],
            picture: "picture.jpg"
        },
        {
            id: '20',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2117-12-31T23:00:00'),
            author: 'Иван Иванов',
            contentArticle: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "наука"],
            picture: "picture.jpg"
        }];
    var tags = [];

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 5;
        return filterArticles(articlesStorage, filterConfig).slice(skip, skip + top);
    }

    function getArticlesCount(filterConfig) {
        return filterArticles(articlesStorage, filterConfig).length;
    }

    function filterArticles(articles, filterConfig) {
        if (filterConfig) {
            if (filterConfig.author) {
                articles = articles.filter(function (article) {
                    return filterConfig.author === article.author;
                })
            }
            if (filterConfig.dateFrom) {
                articles = articles.filter(function (item) {
                    var _date = new Date(filterConfig.dateFrom)
                    return item.createdAt >= _date;
                })
            }
            if (filterConfig.dateTo) {
                articles = articles.filter(function (element) {
                    var _date = new Date(filterConfig.dateTo)
                    return element.createdAt <= _date;
                })
            }
            if (filterConfig.tags) {
                articles = articles.filter(function (item) {
                    //for (var i = 0; i < filterConfig.tags.length; i++) {
                    var _tags = item.tags;
                    if (_tags.indexOf(filterConfig.tags) > -1) {
                        return item;
                    }
                    //}
                })
            }
        }
        return articles.sort(function (firstItem, secondItem) {
            return secondItem.createdAt - firstItem.createdAt;
        });

    }

    function getArticle(id) {
        var article;
        for (var i = 0; i < articlesStorage.length; i++) {
            if (articlesStorage[i].id == id) {
                article = articlesStorage[i];
                return article;
            }
        }
        return article;
    };
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
        if (typeof article.contentArticle !== 'string' || article.contentArticle.length <= 0) {
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

    function editArticle(id, article) {
        var currentArticleId = getArticle(id);
        var newArticle = {};
        Object.assign(newArticle, currentArticleId);
        for (var key in article) {
            if ((key !== "id") && (key !== " createdAt") && ((key !== "author")))
                newArticle[key] = article[key];
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
        else {
            return false;
        }
    };
    function removeArticle(id) {
        var indexRemove = -1;
        for (var i = 0; i < articlesStorage.length; i++) {
            if (articlesStorage[i].id == id) {
                indexRemove = i;
            }
        }
        if (indexRemove == -1) {
            return false;
        }
        articlesStorage.splice(indexRemove, 1);
        return true;
    }

    function containsTag(tag) {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i] === tag)
                return i;
        }
        return -1;
    }

    function addTags(tagsForAdd) {
        tagsForAdd.forEach(function (tag) {
            if (tags.indexOf(tag) === -1) tags.push(tag);
        })
    }

    function deleteTag(tagForDelete) {
        if (tagForDelete !== undefined) {
            var indexRemove = tags.indexOf(tagForDelete)
            if (indexRemove !== -1) {
                tags.splice(indexRemove, 1);
            }
        }
    };
    return {
        getArticles: getArticles,
        getArticlesCount: getArticlesCount,
        getArticle: getArticle,
        validateArticle: validateArticle,
        editArticle: editArticle,
        addArticle: addArticle,
        removeArticle: removeArticle,
        addTags: addTags,
        deleteTag: deleteTag,
    };
}())
var articleRenderer = (function () {
    var articleTemplate;
    var articleListNode;

    function init() {
        articleTemplate = document.querySelector('#template_article');
        articleListNode = document.querySelector('.articles_list');
        document.getElementById("edit_form").style.display = 'none';
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            articleListNode.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }

    function renderArticles(articles) {
        /* каждый объект article из массива преобразуем в HTML элемент */

        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        var template = articleTemplate;
        template.content.querySelector('.article').dataset.id = article.id;
        template.content.querySelector('.title').textContent = article.title;
        template.content.querySelector('.summary').textContent = article.summary;
        template.content.querySelector('.author').textContent = article.author;
        template.content.querySelector('.date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.picture').setAttribute("src", "picture.jpg");
        template.content.querySelector('.tags').innerHTML = "";
        if (article.tags !== undefined) {
            var tagLi;
            for (var i = 0; i < article.tags.length; i++) {
                tagLi = document.createElement('li');
                tagLi.innerHTML = '#' + article.tags[i] + " ";
                template.content.querySelector('.tags').appendChild(tagLi);
            }
        }
        return template.content.querySelector('.article').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + ' . ' + (d.getMonth() + 1) + ' . ' + d.getFullYear() + '   ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());
var userRenderer = (function () {
    var label;
    var authorization;
    var add;

    function init() {
        authorization = document.forms.authorization_form;
        label = document.getElementById('user_name_label')
        add = document.getElementById('add');
    }

    function renderHeader(user_name) {
        var template = authorization;
        var labelTemp = label;
        var addTemp = add;
        if (user_name.user) {
            labelTemp.textContent = user_name.user;
            template.elements.in_out.setAttribute('value', "Выйти");
            template.elements.user_name.style.display = "none";
            template.elements.user_name.value = "";
            template.elements.user_password.value = "";
            template.elements.user_password.style.display = "none";
            add.style.display = "inline-block";
            document.getElementById('edit_id').style.display = 'inline-block';
            document.getElementById('remove_id').style.display = 'inline-block';
            document.getElementById('edit_id').addEventListener('click', handleAddEditClick);
        } else {
            template.elements.in_out.setAttribute('value', "Войти");
            template.elements.user_name.style.display = "inline-block";
            template.elements.user_password.style.display = "inline-block";
            document.getElementById('edit_id').style.display = 'none';
            document.getElementById('remove_id').style.display = 'none';
            addTemp.style.display = "none";
            labelTemp.innerHTML = "";
            document.getElementById('edit_id').addEventListener('click', handleAddEditClick);
        }
    }

    return {
        init: init,
        renderHeader: renderHeader
    };
}());
var pagination = (function () {
    var ITEMS_PER_PAGE = 5;
    var total;
    var currentPage;
    var showMoreButton;
    var showMoreCallback;

    function init(_total, _showMoreCallback) {
        currentPage = 1;
        total = _total;
        showMoreCallback = _showMoreCallback;
        showMoreButton = document.getElementById('view_more_button');
        showMoreButton.addEventListener('click', handleShowMoreClick);
        showOrHideMoreButton();
        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / ITEMS_PER_PAGE);
    }

    function nextPage() {
        currentPage = currentPage + 1;
        showOrHideMoreButton();
        return getParams();
    }

    function getParams() {
        return {
            top: ITEMS_PER_PAGE,
            skip: (currentPage - 1) * ITEMS_PER_PAGE
        };
    }

    function showOrHideMoreButton() {
        showMoreButton.hidden = getTotalPages() <= currentPage;
    }

    return {
        init: init
    }
}());
var filter = (function () {
    var form;
    var submitButton;
    var filterChangedCallback;

    function init(_filterChangedCallback) {
        form = document.forms.filter;
        submitButton = form.elements.submit;
        submitButton.addEventListener('click', handleSubmitClick);
        filterChangedCallback = _filterChangedCallback;
        return getFilter();
    }

    function getFilter() {
        var authorSelect = form.elements.author;
        var dateFromSelect = form.elements.date_from;
        var dateToSelect = form.elements.date_to;
        var tagsSelect = form.elements.tags;
        var _author;
        var _dateFrom;
        var _dateTo;
        var _tags;
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
            tags: _tags
        }
    }

    function handleSubmitClick() {
        return filterChangedCallback(getFilter());
    }

    return {
        init: init,
        getFilterConfig: getFilter
    };

}());
var authorization = (function () {
    var form;
    var logInButton;
    var userChangedCallback;

    function init(_userChangedCallback) {
        form = document.forms.authorization_form;
        logInButton = form.elements.in_out;
        logInButton.addEventListener('click', handleInOutClick);
        userChangedCallback = _userChangedCallback;
        return getUser();
    }

    function getUser() {
        var user = form.elements.user_name;
        var sign_in = form.elements.in_out;
        var _user;
        if (user.value && sign_in.value === "Войти") {
            _user = user.value;
        }
        return {
            user: _user,
        }
    }

    function handleInOutClick() {
        return userChangedCallback(getUser());
    }

    return {
        init: init,
        getUser: getUser
    };

}());
var articleFullRenderer = (function () {
    var articleTemplate;
    var articleListNode;

    function init() {
        articleTemplate = document.querySelector('#template_full_article');
        articleListNode = document.querySelector('.articles_list');
        document.getElementById('filter_id').style.display = "none";
        document.getElementById('pagination_id').style.display = 'none';
        document.getElementById("edit_form").style.display = 'none';
    }

    function insertArticlesInDOM(id) {
        var articlesNode = renderArticle(articleModel.getArticle(id));
        console.log(articlesNode);
        articleListNode.appendChild(articlesNode);
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }

    function renderArticle(article) {
        var template = articleTemplate;
        if (document.getElementById('sign_in_id').getAttribute('value') === "Войти") {
            template.content.querySelector('.edit').style.display = 'none';
            template.content.querySelector('.remove').style.display = 'none';
        } else {
            template.content.querySelector('.edit').style.display = 'inline-block';
            template.content.querySelector('.remove').style.display = 'inline-block';
        }
        template.content.querySelector('.article_full').dataset.id = article.id;
        template.content.querySelector('.title').textContent = article.title;
        template.content.querySelector('.full_text').textContent = article.contentArticle;
        template.content.querySelector('.author').textContent = article.author;
        template.content.querySelector('.date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.picture').setAttribute("src", "picture.jpg");
        template.content.querySelector('.tags').innerHTML = "";
        if (article.tags !== undefined) {
            var tagLi;
            for (var i = 0; i < article.tags.length; i++) {
                tagLi = document.createElement('li');
                tagLi.innerHTML = '#' + article.tags[i] + " ";
                template.content.querySelector('.tags').appendChild(tagLi);
            }
        }
        return template.content.querySelector('.article_full').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + ' . ' + (d.getMonth() + 1) + ' . ' + d.getFullYear() + '   ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());
var articleInformation = (function () {
    var form;
    var addArticleButton;
    var addArticleCallback;
    function init(_addArticleCallback) {
        form = document.forms.edit_form;
        addArticleButton = form.elements.add_article_name;
        addArticleButton.addEventListener('click', handleInOutClick);
        addArticleCallback = _addArticleCallback;
        return getData();
    }
    function getData() {
        var title = form.elements.title_name;
        var summary = form.elements.summary_name;
        var content = form.elements.content_name;
        var tags = form.elements.tags_name;
        var _title;
        var _summary;
        var _content;
        var _tags;
        if (title.value) {
            _title = title.value;
        }
        if (summary.value) {
            _summary = summary.value;
        }
        if (content.value) {
            _content = content.value;
        }
        if (tags.value) {
            _tags = tags.value;
        }
        return {
            title: _title,
            summary: _summary,
            content: _content,
            tags: _tags
        }


    }
    function handleInOutClick(event) {
        var editArticle = getData();
        articleModel.editArticle(0, editArticle);
        startApp();
    }
    return {
        init: init,
        getData: getData
    };
}());
var addEditArticle = (function () {
    var editForm;
    var articleListNode;
    var articleId = 0;

    function init() {
        articleListNode = document.querySelector('.articles_list');
        document.getElementById('filter_id').style.display = "none";
        document.getElementById('pagination_id').style.display = 'none';
        document.getElementById("edit_form").style.display = 'inline-block';
        var editElement = document.getElementById('edit_form');
        editForm = editElement.querySelector('form');
    }

    function insertArticlesInDOM(article) {
        var articlesNode = renderArticle(article);
        articleId = article.id;
        articleInformation.init();
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }

    function renderArticle(article) {
        var elem = editForm.querySelector('div.fixed_information');
        console.log(elem);
       elem.getElementById('author_edit').innerHTML = article.author;
        elem.getElementById('id_edit').innerHTML = article.id;
        elem.getElementById('date_edit').innerHTML = article.createdAt;

    }

    function formatDate(d) {
        return d.getDate() + ' . ' + (d.getMonth() + 1) + ' . ' + d.getFullYear() + '   ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom,
        articleId : articleId
    };
}());
document.addEventListener('DOMContentLoaded', startApp);
function startApp() {
    articleRenderer.init();
    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    renderArticlesWithFilterConfig(filterConfig);
    userRenderer.init();
    authorization.init(renderHeaderWithAuthorization);
    function renderHeaderWithAuthorization() {
        var currentUser = authorization.getUser();
        userRenderer.renderHeader(currentUser);
    }

    function renderArticlesWithFilterConfig(filterConfig) {
        articleRenderer.removeArticlesFromDom();
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }

    function renderArticles(skip, top, filterConfig) {
        var articles = articleModel.getArticles(skip, top, filterConfig);
        articleRenderer.insertArticlesInDOM(articles);
        var allArticles = document.getElementsByClassName('view_all');
        [].forEach.call(allArticles, function (item) {
            item.addEventListener('click', handleViewAllClick)
        })
    }
}
function handleAddEditClick(event) {
    articleRenderer.removeArticlesFromDom();
    addEditArticle.init();
    addEditArticle.insertArticlesInDOM(articleModel.getArticle(event.target.parentNode.dataset.id));

}
function handleViewAllClick(event) {
    articleRenderer.removeArticlesFromDom();
    articleFullRenderer.init();
    articleFullRenderer.insertArticlesInDOM(event.target.parentNode.dataset.id)
}

function deleteClicked(event) {
    articleModel.removeArticle(event.target.parentNode.dataset.id);
    startApp();
}