import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NowPlaying from "./components/now_playing/now_playing";

const movies = [
  {
    title: "Karate Kid: Legends",
    rating: "PG-13",
    length: "1h 34m",
    youtubeId: "LhRXf-yEQqA",
    imdbId: "tt1674782"
  },
  {
    title: "How to Train Your Dragon",
    rating: "PG",
    length: "2h 5m",
    youtubeId: "22w7z_lT6YM",
    imdbId: "tt26743210"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
        <div className="Body">
            <NowPlaying movies={movies} />
        </div>
      <Footer />
    </div>
  );
}

export default App;
