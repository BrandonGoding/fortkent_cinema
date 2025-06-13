import './now_playing.scss';
import {FaImdb, FaYoutube} from "react-icons/fa";

const NowPlaying = ({ movies }) => (
  <section className="now-playing">
    <h2>Now Playing at Fort Kent Cinema</h2>
    <div className="movies-list">
      {movies.length === 0 ? (
        <p>No films currently playing.</p>
      ) : (
        movies.map((movie, idx) => (
          <div className="movie-card" key={idx}>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.rating}</p>
              <p>Running Time: {movie.length}</p>
                <div className="movie-links">
                <a
                  href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch trailer on YouTube"
                >
                  <FaYoutube size={28} color="#FF0000" />
                </a>
                {movie.imdbUrl && (
                  <a
                    href={movie.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on IMDb"
                  >
                    <FaImdb size={28} color="#FFD700" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </section>
);

export default NowPlaying;