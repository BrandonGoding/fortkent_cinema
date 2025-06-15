import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero_section/hero_section";
import NowPlaying from "./components/now_playing/now_playing";
import Showtimes from "./components/showtimes/showtimes";
import Rates from "./components/rates/rates";
import './utils/spotlight/spotlight.js'
import './utils/spotlight/spotlight.scss';
import ComingSoonPage from "./pages/coming_soon_page/coming_soon_page";



function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="Body">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroSection/>
                                    <NowPlaying/>
                                    <Showtimes/>
                                    <Rates/>
                                </>
                            }
                        />
                        {/*<Route*/}
                        {/*    path="/about-fort-kent-cinema"*/}
                        {/*    element={*/}
                        {/*        <AboutPage />*/}
                        {/*    }*/}
                        {/*/>*/}
                        <Route
                            path="coming-soon"
                            element={
                                <ComingSoonPage />
                            }
                        />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
