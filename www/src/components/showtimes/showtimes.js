import React, {useState} from 'react';
import './showtimes.scss';

const DAYS = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_ABBR = ['Thu', 'Fri', 'Sat', 'Sun'];


function formatTime(timeStr) {
    const [hour, minute] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
}

const Showtimes = ({movies}) => {
    const [selectedDay, setSelectedDay] = useState(DAYS[0]);

    const getShowTimesForDay = (day) => {
        if (!movies.length) return [];
        const dayIndex = DAYS.indexOf(day) - 1;
        const show = movies[0].showTimes[dayIndex];
        return show ? show.times : [];
    };

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
                <div className="showtimes-films">
                    {movies.length > 0
                        ? `${movies.map(m => m.title).join(' and ')}`
                        : ''}
                </div>
                <div className="showtimes-movie">
                    <ul>
                        <li>
                            {getShowTimesForDay(selectedDay).length === 0 ? (
                                <span>No showtimes for this day.</span>
                            ) : (
                                getShowTimesForDay(selectedDay).map((t, j, arr) => (
                                    <span key={j} className={t.is_matinee ? 'matinee' : ''}>
                                                              {formatTime(t.start_time)}{t.is_matinee ? ' (Matinee)' : ''}
                                        {j < arr.length - 1 ? ', ' : ''}
                                                            </span>
                                ))
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Showtimes;