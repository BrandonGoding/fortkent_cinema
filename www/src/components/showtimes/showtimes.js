import React, { useState } from 'react';
import './showtimes.scss';

const DAYS = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_ABBR = ['Thu', 'Fri', 'Sat', 'Sun'];

const SHOWTIMES = {
  Thursday: ['6:00 PM'],
  Friday: ['6:00 PM'],
  Saturday: ['3:00 PM', '6:00 PM'],
  Sunday: ['5:00 PM'],
};

const Showtimes = () => {
  const [selectedDay, setSelectedDay] = useState(DAYS[0]);

  return (
    <section className="showtimes">
      <h2>Showtimes at Fort Kent Cinema</h2>
      <div className="showtimes-card showtimes-card--full">
        <div className="showtimes-tabs">
          {DAYS.map((day, i) => (
            <button
              key={day}
              className={selectedDay === day ? 'active' : ''}
              onClick={() => setSelectedDay(day)}
            >
              <span className="showtimes-tab-full">{day}</span>
              <span className="showtimes-tab-abbr">{DAY_ABBR[i]}</span>
            </button>
          ))}
        </div>
        <div className="showtimes-movie">
          <ul>
            {SHOWTIMES[selectedDay].map((time, index) => (
              <li key={index} className={time === '3:00 PM' ? 'matinee' : ''}>
                {time} {time === '3:00 PM' && '( matinee )'}
              </li>
            ))}
          </ul>
        </div>
        <div>Closed Monday - Wednesday</div>
      </div>
    </section>
  );
};

export default Showtimes;