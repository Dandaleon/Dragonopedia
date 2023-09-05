/* Задания на урок: 1

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

///////////////////////////////////////////////////////////////////////////////////////////////

/* Задания на урок: 2

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

document.querySelectorAll(".promo__adv img").forEach((item) => {
  item.remove();
});

document.querySelector(".promo__genre").textContent = "драма";
document.querySelector(".promo__bg").style.background = "url(../img/bg.jpg)";

const genreList = document.querySelector(".promo__interactive-list");

function sortMovie(films) {
  films.movies.sort();
}

function addMovie(films) {
  genreList.innerHTML = "";

  films.forEach((item, i) => {
    let li = document.createElement("li");
    li.innerHTML = `<li class="promo__interactive-item">
                      ${i + 1} ${item}
                      <div class="delete"></div>
                  </li>`;
    genreList.append(li);
  });

  genreList.querySelectorAll(".delete").forEach((item, i) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
      films.splice(i, 1);
      addMovie(movieDB.movies);
    });
  });
}

const formAddMovie = document.querySelector(".add"),
  formNameMovie = formAddMovie.querySelector(".adding__input"),
  formCheckbox = formAddMovie.querySelector('input[type="checkbox"]'),
  formButton = formAddMovie.querySelector("button");

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (formNameMovie.value != "") {
    if (formCheckbox.checked == 1) {
      console.log("Сделать любимым");
    }
    if (formNameMovie.value.length > 21) {
      let result = "";

      for (let i = 0; i < 21; i++) {
        result += formNameMovie.value[i];
      }
      movieDB.movies.push(result + "...");
    } else {
      movieDB.movies.push(formNameMovie.value);
    }
    formNameMovie.value = "";
    formCheckbox.checked = 0;
  }
  sortMovie(movieDB);
  addMovie(movieDB.movies);
});

sortMovie(movieDB);
addMovie(movieDB.movies);
