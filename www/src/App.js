import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero_section/hero_section";
import NowPlaying from "./components/now_playing/now_playing";
import Showtimes from "./components/showtimes/showtimes";
import Rates from "./components/rates/rates";
import './utils/spotlight/spotlight.js'
import './utils/spotlight/spotlight.scss';

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

function App() {
  return (
    <div className="App">
      <Header />
        <div className="Body">
          <HeroSection />
            <NowPlaying movies={movies} />
            <Showtimes />
            <Rates />
        </div>
      <Footer />
    </div>
  );
}

export default App;
