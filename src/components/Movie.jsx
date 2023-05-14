function Movie({movie}) {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.image !== 'N/A' ? movie.image : 'https://via.placeholder.com/400'} alt={movie.title}/>
            </div>
            <div>
                <span>{movie.resultType}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default Movie;