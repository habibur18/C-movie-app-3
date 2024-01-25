export function getImageUrl(movie) {
  return new URL(`../assets/movie-covers/${movie.cover}`, import.meta.url).href;
}
