/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0"),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

let movieName, movieRating;
let movieComplete = true;

while (movieComplete === true) {
  (movieName = prompt("Один из последних просмотренных фильмов?", "Аватар")),
    (movieRating = prompt("На сколько оцените его?", "0"));

  if (
    movieName != null &&
    movieRating != null &&
    movieRating != "" &&
    movieName != "" &&
    movieName.length < 50
  ) {
    personalMovieDB.movies[movieName] = movieRating;
  } else {
    alert("Не верно заполненная форма");
    continue;
  }

  movieComplete = confirm("Продолжить?");
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);
