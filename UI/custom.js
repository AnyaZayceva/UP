function customInput() {
    var inputElements;
    var dropDown;

    var tempInput;
    var addButton;
    var selectedTags = [];
    var newItem = [];

    function init(items, id, isAddButton) {
        tempInput = document.getElementById(id);

        isAddButton = isAddButton || false;
        if (isAddButton) {
            tempInput.innerHTML += "<input type='button' class=\"custom-input-add-button\" id=\"add-button\">Добавить</input>";
            addButton = tempInput.querySelector('.custom-input-add-button');
            addButton.addEventListener('click', handleAddClick);
            tempInput.style.width = '550px';
            addButton.classList.add('show');
        }
        dropDown = tempInput.querySelector('.block-container');
        dropDown.addEventListener('click', handleClickOnBlock);
        inputElements = tempInput.querySelector('.custom-input__input');
        inputElements.addEventListener('click', handleClick);
        addItems(items);
        return this;
    }

    function addItems(items) {
        items.forEach(function (item) {
            dropDown.appendChild(createOption(item));
        })
    }

    function createOption(item) {
       var option = document.createElement('div');
        option.className = "block";
        option.innerHTML = item;
        option.setAttribute("data-value", item);
        return option;
    }

    function handleClick(event) {
        var target = event.target;
        if (target.hasAttribute('data-value')) {
            dropDown.appendChild(target.cloneNode(true));
            var index = selectedTags.indexOf(target.getAttribute('data-value'));
            selectedTags.splice(index, 1);
            if (newItem.length > 0) {
                var index = newItem.indexOf(target.getAttribute('data-value'));
                if (index !== -1) {
                    newItem.splice(index, 1);
                }
            }
            target.remove();
        }
        dropDown.classList.add("show");
    }

    function handleAddClick() {
        var tag = prompt('Введите тег', '');
        if (tag.length > 0) {
            addItem(tag);
        }
    }

    function handleClickOnBlock(event) {
        var target = event.target;
        if (target.hasAttribute('data-value')) {
            inputElements.appendChild(target.cloneNode(true));
            selectedTags.push(target.getAttribute('data-value'));
            target.remove();
        }
    }

    function getSelected() {
        return selectedTags;

    }

    function reload(items) {
        dropDown.innerHTML = '';
        addItems(items);
    }

    function setSelected(items) {
        for (var i = 0; i < items.length; i++) {
            var item = createOption(items[i]);
            inputElements.appendChild(item.cloneNode(true));
            selectedTags.push(items[i]);
        }
    }

    function addItem(item) {
        inputElements.appendChild(createOption(item).cloneNode(true));
        selectedTags.push(item);
        newItem.push(item);
    }

    function getNew() {
        return newItem;
    }

    document.addEventListener('click', function (event) {
        var container = tempInput;
        if (container.getElementsByClassName(event.target.classList).length === 0) {
            if (dropDown.classList.contains('show')) {
                dropDown.classList.remove('show');
            }
        }
    });

    return {
        init: init,
        getSelected: getSelected,
        reload: reload,
        setSelected: setSelected,
        addItem: addItem,
        getNew: getNew
    }


}