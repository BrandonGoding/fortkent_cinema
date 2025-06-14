import './now_playing.scss';
import {FaImdb, FaYoutube} from "react-icons/fa";

const movies = [
  {
    title: "Karate Kid: Legends",
    rating: "PG-13",
    length: "1h 34m",
    youtubeId: "LhRXf-yEQqA",
    imdbId: "tt1674782",
    showTimes: [
      {
        date: "2024-06-13",
        times: [
          {
            "start_time": "18:00",
            "is_matinee": false,
          }
        ]
      },
      {
        date: "2024-06-14",
        times: [
            {
            "start_time": "15:00",
            "is_matinee": true,
          },
          {
            "start_time": "18:00",
            "is_matinee": false,
          }
        ]
      },
        {
        date: "2024-06-15",
        times: [
          {
            "start_time": "17:00",
            "is_matinee": false,
          }
        ]
      },
    ]
  },
  {
    title: "How to Train Your Dragon",
    rating: "PG",
    length: "2h 5m",
    youtubeId: "22w7z_lT6YM",
    imdbId: "tt26743210",
    showTimes: [
      {
        date: "2024-06-13",
        times: [
          {
            "start_time": "18:00",
            "is_matinee": false,
          }
        ]
      },
      {
        date: "2024-06-14",
        times: [
            {
            "start_time": "15:00",
            "is_matinee": true,
          },
          {
            "start_time": "18:00",
            "is_matinee": false,
          }
        ]
      },
        {
        date: "2024-06-15",
        times: [
          {
            "start_time": "17:00",
            "is_matinee": false,
          }
        ]
      },
    ]
  }
];


const NowPlaying = () => (
    <section className="now-playing">
        <h2>Now Playing at Fort Kent Cinema</h2>
        <div className="movies-list">
            {movies.length === 0 ? (
                <p>No films currently playing.</p>
            ) : (
                movies.map((movie, idx) => (
                    <div className="movie-card spotlight" key={idx}>
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>Rating: {movie.rating}</p>
                            <p>Running Time: {movie.length}</p>
                            <div className="movie-links">
                                {movie.youtubeId && (
                                    <a
                                        href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Watch trailer on YouTube"
                                    >
                                        <FaYoutube size={28} color="#FF0000"/>
                                    </a>
                                )}
                                {movie.imdbId && (
                                    <a
                                        href={`https://www.imdb.com/title/${movie.imdbId}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View on IMDb"
                                    >
                                        <FaImdb size={28} color="#FFD700"/>
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