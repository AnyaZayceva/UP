var articles = [
    {
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'T44-ая ракетка мира согласилась провести время с фанатом, если клуб «Нью-Инглэнд Пэтриотс» станет победителем Супербоула.',
        createdAt: new Date('2017-03-20T23:00:00'),
        author: 'Петр Петров',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "политика"]
    },
    {
        id: '2',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2016-01-31T23:00:00'),
        author: 'Иван Иванов',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["наука"]
    },
    {
        id: '3',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2018-10-23T23:00:00'),
        author: 'Борисенко Борис',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["мода", "здоровье"]
    },
    {
        id: '4',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2014-02-27T23:00:00'),
        author: 'Николаев Николай',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["спорт"]
    },
    {
        id: '5',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2011-06-07T23:00:00'),
        author: 'Иванов Ваня',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика"]
    },
    {
        id: '6',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2010-09-01T23:00:00'),
        author: 'Сергей Степанов',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "мода"]
    },
    {
        id: '7',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2022-03-25T23:00:00'),
        author: 'Солдатенко Владислав',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика", "наука"]
    },
    {
        id: '8',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('1999-07-28T23:00:00'),
        author: 'Дмитриенко Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["спорт", "здоровье"]
    },
    {
        id: '9',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2003-11-07T23:00:00'),
        author: 'Степанов Степан',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика", "спорт"]
    },
    {
        id: '10',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2003-08-30T23:00:00'),
        author: 'Лебедев Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика", "спорт"]
    },
    {
        id: '11',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-04-01T23:00:00'),
        author: 'Бриткин Павел',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "политика"]
    },
    {
        id: '12',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2016-03-08T23:00:00'),
        author: 'Сидоров Пётр',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["наука"]
    },
    {
        id: '13',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Евсеенко Наталья',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["мода", "здоровье"]
    },
    {
        id: '14',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2014-05-01T23:00:00'),
        author: 'Котов Николай',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["спорт"]
    },
    {
        id: '15',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2011-06-07T23:00:00'),
        author: 'Волков Даниил',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика"]
    },
    {
        id: '16',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2010-04-21T23:00:00'),
        author: 'Кот Александра',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["здоровье", "мода"]
    },
    {
        id: '17',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2022-02-13T23:00:00'),
        author: 'Мамченко Евстафий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика", "наука"]
    },
    {
        id: '18',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('1999-01-01T23:00:00'),
        author: 'Владимир Ленин',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["спорт", "здоровье"]
    },
    {
        id: '19',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2003-10-20T23:00:00'),
        author: 'Иосиф Сталин',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["политика", "спорт"]
    },
    {
        id: '20',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2117-12-31T23:00:00'),
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
        tags: ["мода", "наука"]
    }
];
var tags = ['здоровье', 'политика', 'мода', 'спорт', 'наука'];
articles.getArticles = function (skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;
    if (filterConfig !== undefined) {
        var author_ = filterConfig.author || '';
        var dateFrom_ = filterConfig.dateFrom || new Date('0001-01-01T23:00:00');
        var dateTo_ = filterConfig.dateTo || new Date('10000-01-01T23:00:00');
        var tags_ = filterConfig.tags || [];
    }
    var news = articles;
    if (filterConfig !== undefined) {
        news = news.filter(function (item) {
            if (item.author.indexOf(author_) >= 0)
                return item;
        });
        news = news.filter(function (item) {
            if (item.createdAt >= dateFrom_ && item.createdAt <= dateTo_)
                return item;
        });
    }
    news = news.sort(function (firstItem, secondItem) {
        if (firstItem.createdAt > secondItem.createdAt) {
            return -1;
        }
        if (firstItem.createdAt < secondItem.createdAt) {
            return 1;
        }
    }).slice(skip, skip + top);
    return news;
};

articles.getArticle = function (id) {
    var article;
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
            article = articles[i];
            return article;
        }
    }
    return article;
};
validateArticle = function (article, edit) {
    if ((edit === false) && (typeof (article.id) !== 'string' || article.id.length <= 0 || articles.getArticle(article.id) !== undefined)) return false;
    if (typeof (article.title) !== 'string' || article.title.length > 100 || article.title.length <= 0) return false;
    if (typeof (article.summary) !== 'string' || article.summary.length > 200)return false;
    if ((article.createdAt instanceof Date) !== true)return false;
    if (typeof article.author !== 'string' || article.author.length <= 0) return false;
    if (typeof article.content !== 'string' || article.content.length <= 0) return false;
    return true;
};
articles.editArticle = function (id, article) {
    var newArticle = articles.getArticle(id);
    if ((newArticle) === undefined) {
        return false;
    }
    if (article.title !== undefined) {
        newArticle.title = article.title;
    }
    if (article.summary !== undefined) {
        newArticle.summary = article.summary;
    }
    if (article.content !== undefined) {
        newArticle.content = article.content;
    }
    if (article.tags !== undefined) {
        newArticle.tags = article.tags;
    }
    if (validateArticle(newArticle, true) === true) {
        articles.getArticle(id).title = newArticle.title;
        articles.getArticle(id).summary = newArticle.summary;
        articles.getArticle(id).content = newArticle.content;
        articles.getArticle(id).tags = newArticle.tags;
        return true;
    }
    return false;

}
articles.addArticle = function (article) {
    if (validateArticle(article, false) === true) {
        articles.push(article);
        return true;
    }
    else {
        return false;
    }
};
articles.removeArticle = function (id) {
    var indexRemove = -1;
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
            indexRemove = i;
        }
    }
    if (indexRemove == -1) {
        return false;
    }
    articles.splice(indexRemove, 1);
    return true;
};
console.log(articles.getArticles(3, 7));
console.log(articles.getArticles(0, 10, {author: 'Петр Петров'}));
console.log(articles.getArticles(0, 10, {
    dateFrom: new Date('2001-01-01T23:00:00'),
    dateTo: new Date('2101-01-01T23:00:00')
}));
console.log(articles.getArticles(0, 20, {dateTo: new Date('2101-01-01T23:00:00')}));
console.log(articles.getArticles(0, 20, {dateFrom: new Date('2018-01-01T23:00:00')}));
console.log(articles.getArticles(0, 10, {
    author: 'Петр Петров',
    dateFrom: new Date('2001-01-01T23:00:00'),
    dateTo: new Date('2101-01-01T23:00:00')
}));

console.log(articles.getArticle('7'));
console.log(articles.getArticle());
console.log(articles.getArticle('99'));

console.log(articles.addArticle({
    title: "title",
    id: "22",
    summary: "summary",
    author: "author",
    createdAt: new Date(),
    content: "content"
}));
console.log(articles.addArticle({
    title: "title",
    id: "7",
    summary: "summary",
    author: "author",
    createdAt: new Date(),
    content: "content"
}));
console.log(articles.addArticle({
    title: "title",
    id: "10",
    summary: "summary",
    author: "author",
    createdAt: new Date(),
    content: ""
}));
console.log(articles.addArticle({
    title: "title",
    id: "13",
    summary: "summary",
    author: "author",
    createdAt: new Date()
}));
console.log(articles.addArticle({
    title: "title",
    id: "17",
    summary: "summary",
    author: "author",
    createdAt: new Date(),
    content: "content"
}));

console.log(articles.editArticle("7", {title: "title"}));
console.log(articles.editArticle("777", {title: "title"}));
console.log(articles.editArticle("3", {title: "title",  content: "content"}));
console.log(articles.editArticle("2", {title: "title",  content: ""}));


console.log(articles.removeArticle("6"));
console.log(articles.removeArticle("1883"));

