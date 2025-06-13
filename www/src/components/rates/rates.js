import './rates.scss';

const Rates = () => (
  <section className="rates">
    <h2>Fort Kent Cinema Rates</h2>
    <div className="rates-list">
      <div className="rates-card spotlight">
        <h3>Ticket Rates</h3>
        <ul>
          <li>Adults: $10.00</li>
          <li>Children (12 & under): $9.00</li>
          <li>Seniors (65+): $9.00</li>
          <li>Military & First Responders: $8.00</li>
        </ul>
      </div>
      <div className="rates-card spotlight">
        <h3>Popcorn Rates</h3>
        <ul>
          <li>Small: $4.00</li>
          <li>Medium: $5.50</li>
          <li>Large: $6.75</li>
          <li>Jumbo: $8.00</li>
          <li>Big Ol' Bag: $10.00</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Rates;