import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './calendar.scss';

// Example film array. Replace with your scheduled video data.
const film  = [
    { title: 'Elio', start: '2025-06-20', end: '2025-07-03' },
    { title: 'Jurassic World Rebirth', start: '2025-07-02', end:  '2025-07-24' },
    { title: 'Superman (Unconfirmed)', start: '2025-07-11', end:   '2025-07-24' },
];

const Calendar = ({ videoEvents = film }) => (
  <div className="calendar-container">
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={videoEvents}
      height="auto"
    />
  </div>
);

export default Calendar;