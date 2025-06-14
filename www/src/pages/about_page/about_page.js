import './about_page.scss';
import testImage from './test.jpeg'; // Adjust the path as needed

    const AboutPage = () => {
      return (
        <div className="about-page">
          <section className="theater-history">
            <img src={testImage} alt="Theater History" className="antique-image" />
            <h2>Theater History</h2>
            <p>
              Established in the golden age of cinema, Fort Kent Cinema has been a cornerstone of our community,
              bringing the magic of the silver screen to generations of moviegoers. From silent films to modern blockbusters,
              our theater has stood the test of time, preserving the charm and nostalgia of classic cinema.
            </p>
          </section>

          <section className="fort-kent-today">
            <img src={testImage} alt="Fort Kent Cinema Today" className="antique-image" />
            <h2>Fort Kent Cinema Today</h2>
            <p>
              Today, Fort Kent Cinema continues to provide an exceptional movie-going experience with state-of-the-art
              projection and sound systems, while maintaining the classic ambiance that makes our theater unique.
              We are proud to showcase a mix of the latest releases and timeless classics.
            </p>
          </section>

          <section className="support-fort-kent">
            <img src={testImage} alt="Support The Fort Kent Cinema" className="antique-image" />
            <h2>Support The Fort Kent Cinema</h2>
            <p>
              Your support helps us keep the spirit of classic cinema alive. Whether it’s attending a show,
              spreading the word, or making a donation, every contribution ensures that Fort Kent Cinema remains
              a cherished part of our community for years to come.
            </p>
          </section>
        </div>
      );
    };

    export default AboutPage;