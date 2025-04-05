const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.VUE_APP_TMDB_KEY; // Отримуємо ключ з .env

const API_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`
};

/**
 * Універсальна функція для виконання запитів до TMDB API
 * @param {string} path - Шлях до ресурсу
 * @param {object} params - Додаткові параметри запиту
 * @returns {Promise<any>}
 */
async function fetchData(path, params = {}) {
  const url = new URL(`${API_BASE_URL}/${path}`);
  
  // Додаємо параметри до URL
  url.search = new URLSearchParams({
    language: 'en-US',
    page: 1,
    ...params
  });

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: API_HEADERS
    });

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Помилка при отриманні даних (${path}):`, error);
    throw new Error('Не вдалося завантажити дані');
  }
}

// Функції для отримання фільмів
export const getUpcomingMovies = () => fetchData('movie/upcoming').then(data => data.results);
export const getPopularMovies = () => fetchData('movie/popular').then(data => data.results);
export const getPopularSeries = () => fetchData('tv/popular').then(data => data.results)
export const getNowPlayingMovies = () => fetchData('movie/now_playing').then(data => data.results);
export const getTrendingMovies = () => fetchData('trending/movie/day').then(data => data.results);
export const getGenreMovies = () => fetchData('genre/movie/list').then(data => data.genres);

/**
 * Отримання списку фільмів із додатковими фільтрами
 * @param {object} filters - Об'єкт із фільтрами
 * @returns {Promise<any[]>}
 */
export const getDiscoverMovies = (filters = {}) => 
  fetchData('discover/movie', {
    include_adult: false,
    include_video: false,
    sort_by: 'popularity.desc',
    ...filters
  }).then(data => data.results);