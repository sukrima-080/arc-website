import { useEffect, useState } from "react";
import TimelineCard from "../component/home/TimelineCard.jsx";

export default function Timeline() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://arc-backend-d6ft.onrender.com")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <div className="px-8 py-24">

      <h1
        className="text-4xl font-bold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        TIMELINE
      </h1>

      <p className="mt-4 text-white/60">
        Upcoming operations, workshops, competitions and events.
      </p>

      <div className="mt-12 space-y-8">

        {events.map((event) => (
          <TimelineCard
            key={event._id}
            event={event}
          />
        ))}

      </div>

    </div>
  );
}