const apiKey = '5387b8c2';
const searchInput = document.getElementById('search-input');
const apiUrl = (query) => `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchMovies(query);
    } else {
        clearMovies();
    }
});

async function fetchMovies(query) {
    try {
        const result = await fetch(apiUrl(query));
        const response = await result.json();
        response.Response === 'True'
            ? displayMovies(response.Search.slice(0,6))
            : displayNoResults();
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.querySelector('#cars .content-wrapper');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>IMDB ID:</strong> ${movie.imdbID}</p>
            <p><strong>Type:</strong> ${movie.Type}</p>
            <img src="${movie.Poster}" alt="${movie.Title} poster" width="200" />
        `;
        moviesContainer.appendChild(movieElement);
    });
}

function displayNoResults() {
    const moviesContainer = document.querySelector('#cars .content-wrapper');
    moviesContainer.innerHTML = '<p>No movies found. Try a different search term.</p>';
}

function clearMovies() {
    const moviesContainer = document.querySelector('#cars .content-wrapper');
    moviesContainer.innerHTML = '';
}
