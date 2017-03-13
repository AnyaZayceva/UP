var articleModel = (function () {
    var GLOBAL_ARTICLES = [
        {
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
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2' +
            'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2018-10-23T23:00:00'),
            author: 'Борисенко Борис',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["мода", "здоровье"],
            picture: "picture.jpg"
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2014-02-27T23:00:00'),
            author: 'Николаев Николай',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["спорт"],
            picture: "picture.jpg"
        },
        {
            id: '5',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2011-06-07T23:00:00'),
            author: 'Иванов Ваня',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ["политика"],
            picture: "picture.jpg"
        },
        {
            id: '6',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2010-09-01T23:00:00'),
            author: 'Сергей Степанов',
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
    var tags = [];

    function getArticles(skip, top, filterConfig) {
        var skip = skip || 0;
        var top = top || 10;
        var currentArticles = GLOBAL_ARTICLES;
        if (filterConfig !== undefined) {
            if (filterConfig.author !== undefined) {
                currentArticles = currentArticles.filter(function (item) {
                    return item.author === filterConfig.author;
                })
            }
            if (filterConfig.dateFrom !== undefined) {
                currentArticles = currentArticles.filter(function (item) {
                    return item.createdAt >= filterConfig.dateFrom;
                })
            }
            if (filterConfig.dateTo !== undefined) {
                currentArticles = currentArticles.filter(function (element) {
                    return element.createdAt <= filterConfig.dateTo;
                })
            }
            if (filterConfig.tags !== undefined && filterConfig.tags.length > 0) {
                currentArticles = currentArticles.filter(function (item) {
                    for (var i = 0; i < filterConfig.tags.length; i++) {
                        if (item.tags === filterConfig.tags[i]) {
                            return item;
                        }
                    }
                })
            }
        }
        currentArticles = currentArticles.sort(function (firstItem, secondItem) {
            return secondItem.createdAt - firstItem.createdAt;
        });
        return currentArticles.slice(skip, skip + top);
    };
    function getArticle(id) {
        var article;
        for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
            if (GLOBAL_ARTICLES[i].id == id) {
                article = GLOBAL_ARTICLES[i];
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
    };
    function editArticle(id, article) {
        var currentArticleId = getArticle(id);
        var newArticle={} ;
        Object.assign(newArticle,currentArticleId);
        console.log(newArticle);
        console.log(currentArticleId);
        for (var key in article) {
            if ((key !== "id") && (key !== " createdAt") && ((key !== "author")))
                newArticle[key] = article[key];
        }
        console.log(newArticle);
        console.log(currentArticleId);
        if (validateArticle(newArticle, true)) {
            currentArticleId =  newArticle;
        }
        console.log(currentArticleId);
    };
    function addArticle(article) {
        if (validateArticle(article, false)) {
            GLOBAL_ARTICLES.push(article);
            return true;
        }
        else {
            return false;
        }
    };
    function removeArticle(id) {
        var indexRemove = -1;
        for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
            if (GLOBAL_ARTICLES[i].id == id) {
                indexRemove = i;
            }
        }
        if (indexRemove == -1) {
            return false;
        }
        GLOBAL_ARTICLES.splice(indexRemove, 1);
        return true;
    };
    function containsTag(tag) {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i] === tag)
                return i;
        }
        return -1;
    };
    function addTags(tagsForAdd) {
        tagsForAdd.forEach(function (tag) {
            if (tags.indexOf(tag) === -1) tags.push(tag);
        })
    };
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
        validateArticle: validateArticle,
        editArticle: editArticle,
        getArticle: getArticle,
        addArticle: addArticle,
        removeArticle: removeArticle,
        addTags: addTags,
        deleteTag: deleteTag,
        tagList: tags,
        articlesList: GLOBAL_ARTICLES
    };
}());

var articleRenderer = (function () {
    var NEW_TEMPLATE;
    var NEWS_NODE;

    function init() {
        NEW_TEMPLATE = document.querySelector('#template_new');
        NEWS_NODE = document.querySelector('.news');
    };
    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            NEWS_NODE.appendChild(node);
        });
    };
    function removeArticlesFromDom() {
        NEWS_NODE.innerHTML = '';
    };
    function renderArticles(articles) {

        return articles.map(function (article) {
            return renderArticle(article);
        });
    };
    function renderArticle(article) {
        var template = NEW_TEMPLATE;
        if (!template) return;
        template.content.querySelector('.new').dataset.id = article.id;
        template.content.querySelector('.title').textContent = article.title;
        template.content.querySelector('.text > .text_value').textContent = article.summary;
        template.content.querySelector('.author').textContent = article.author;
        template.content.querySelector('.date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.text > .picture').setAttribute("src","picture.jpg");
        template.content.querySelector('.text > .picture').setAttribute("value","Показать полностью...");
        template.content.querySelector('.text > ul').innerHTML="";
        if(article.tags!==undefined) {
            var tagLi;
            for (var i = 0; i < article.tags.length; i++) {
                tagLi = document.createElement('li');
                tagLi.innerHTML = '#' + article.tags[i] + " ";
                template.content.querySelector('.text > ul ').appendChild(tagLi);
            }
        }

        return template.content.querySelector('.new').cloneNode(true);
    };
    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + '   ' +
            d.getHours() + ':' + d.getMinutes();
    };
    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());
document.addEventListener('DOMContentLoaded', startApp);
function startApp() {
    articleRenderer.init();
    renderArticles();
};
function renderArticles(skip, top, filter) {
    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(skip, top, filter);
    articleRenderer.insertArticlesInDOM(articles);
};
function setTags(tags) {
    var tagList = document.querySelector('.select_tags > select');
    var tagOption;
    var filteredTags = tags.filter(function (tag) {
        if (articleModel.tagList.indexOf(tag) != -1) return false;
        return true;
    });
    articleModel.addTags(filteredTags);
    filteredTags.forEach(function (tag) {
        tagOption = document.createElement('option');
        tagOption.innerHTML = '#' + tag;
        tagList.appendChild(tagOption);
    });
}
function removeTag(tag) {
    var tagList = document.querySelector('.select_tags > select');
    tagList.innerHTML = '';
    var tagOption;
    articleModel.deleteTag(tag);
    tagOption = document.createElement('option');
    tagOption.innerHTML = 'Тэги';
    tagList.appendChild(tagOption);
    articleModel.tagList.forEach(function (tag) {
        tagOption = document.createElement('option');
        tagOption.innerHTML = '#' + tag;
        tagList.appendChild(tagOption);
    });
}
function setUser(userName) {
    var currentUserName = document.querySelector('.authorization > .label');
    var buttonSignIn = document.querySelector('.authorization > .sign-in');
    if (userName !== undefined) {
        currentUserName.textContent = userName;
        buttonSignIn.setAttribute("value", "Выйти");
        document.querySelector('.add_new > .add_new_button').style.display = "inline-block";
    } else {
        currentUserName.textContent = "Гость";
        buttonSignIn.setAttribute("value", "Войти");
        document.querySelector('.add_new > .add_new_button').style.display = "none";
    }
}
function editArticle(editID, newArticle) {
    articleModel.editArticle(editID, newArticle);
    renderArticles();
};
function addArticle(article) {
    articleModel.addArticle(article);
    renderArticles();
};
function removeArticle(id) {
    articleModel.removeArticle(id);
    renderArticles();
};
editArticle("7", {title: "gcghkvjlvjhvl"});
removeArticle("5");
addArticle({
    id: "110",
    title: "jhvkjvj",
    summary: "bljkjb;kjb;kjb;kbj;",
    createdAt: new Date('2003-11-07T23:00:00'),
    author: "jfkh",
    content: "hjhvjhvljhvljhvljhvlj",
});
