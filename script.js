const database = {
    "Дони": {
        type: "error",
        message: "Идиот"
    },

    "Самира": {
        type: "success",
        message: "Самилкааа жена Дони"
    },

    "Асаль": {
        type: "info",
        message: "Няшечко вкусняшка"
    },

    "Артем": {
        type: "warning",
        message: "качек"
    },

    "Артём": {
        type: "warning",
        message: "качек"
    }
};


const nameInput = document.getElementById("nameInput");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");


function searchName() {

    const name = nameInput.value.trim();

    // Очищаем предыдущий результат
    result.innerHTML = "";

    if (!name) {

        showResult(
            "warning",
            "Введите имя для поиска."
        );

        return;
    }


    if (database[name]) {

        const person = database[name];

        showResult(
            person.type,
            person.message
        );

    } else {

        showResult(
            "warning",
            "Такого человека еще нет на базе."
        );
    }
}


function showResult(type, message) {

    result.innerHTML = `
        <div class="result ${type}">
            ${message}
        </div>
    `;
}


// Нажатие на кнопку
searchButton.addEventListener(
    "click",
    searchName
);


// Поиск по Enter
nameInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            searchName();
        }

    }
);
