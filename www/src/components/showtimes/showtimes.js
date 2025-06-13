import './showtimes.scss';

                              function formatDate(dateStr) {
                                const date = new Date(dateStr);
                                const month = date.toLocaleString('en-US', { month: 'long' });
                                const day = date.getDate();
                                const suffix = (d) => {
                                  if (d > 3 && d < 21) return 'th';
                                  switch (d % 10) {
                                    case 1: return 'st';
                                    case 2: return 'nd';
                                    case 3: return 'rd';
                                    default: return 'th';
                                  }
                                };
                                return `${month} ${day}${suffix(day)}`;
                              }

                              function formatTime(timeStr) {
                                const [hour, minute] = timeStr.split(':').map(Number);
                                const ampm = hour >= 12 ? 'PM' : 'AM';
                                const hour12 = hour % 12 === 0 ? 12 : hour % 12;
                                return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
                              }

                              const Showtimes = ({ movies }) => (
                                <section className="showtimes">
                                  <h2>Showtimes at Fort Kent Cinema</h2>
                                  <div className="showtimes-list">
                                    {movies.length === 0 ? (
                                      <p>No showtimes available.</p>
                                    ) : (
                                      movies.map((movie, idx) => (
                                        <div className="showtimes-card" key={idx}>
                                          <div className="showtimes-movie">
                                            <h3>{movie.title}</h3>
                                            <ul>
                                              {movie.showTimes.map((show, i) => (
                                                <li key={i}>
                                                  <strong>{formatDate(show.date)}:</strong>{' '}
                                                  {show.times.map((t, j) => (
                                                    <span key={j} className={t.is_matinee ? 'matinee' : ''}>
                                                      {formatTime(t.start_time)}{t.is_matinee ? ' (Matinee)' : ''}
                                                      {j < show.times.length - 1 ? ', ' : ''}
                                                    </span>
                                                  ))}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      ))
                                    )}
                                  </div>
                                </section>
                              );

                              export default Showtimes;