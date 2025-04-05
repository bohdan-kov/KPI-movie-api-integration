# Movie API Integration

Цей проєкт інтегрує **TMDb API** для отримання інформації про фільми та серіали.

## Опис API

Для використання API, необхідно отримати ключ API на [TMDb](https://www.themoviedb.org/settings/api). Після отримання ключа, ви можете використовувати його для запитів до TMDb API.

## Функції:

- **Отримати найбільш очікувані фільми**:
  Використовується функція `getUpcomingMovies`, яка звертається до `movie/upcoming`.

- **Отримати популярні фільми**:
  Функція `getPopularMovies` робить запит до `movie/popular`.

- **Отримати популярні серіали**:
  Функція `getPopularSeries` звертається до `tv/popular`.

- **Отримати фільми, що йдуть в кінотеатрах**:
  Функція `getNowPlayingMovies` отримує фільми через `movie/now_playing`.

## Як використовувати:

1. Ось як ви можете підключити API в своєму JavaScript коді:

   ```javascript
   import { getUpcomingMovies, getPopularMovies } from './movieService.js';

   getUpcomingMovies().then(movies => console.log(movies));
