import {useEffect, useState} from "react";

import './App.css';
import Movie from "./components/Movie";

const API_URL = "http://imdb-api.com/en/API/Search/k_34n4lb64";
const POPULAR_MOVIES_API_URL = "http://imdb-api.com/en/API/MostPopularMovies/k_34n4lb64";

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(title ? `${API_URL}/${title}` : `${POPULAR_MOVIES_API_URL}`);
        const data = await response.json();
        setMovies(data.results || data.items);
    }

    useEffect(() => {
        searchMovies(search);
    }, [search])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;