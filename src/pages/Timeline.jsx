import { useEffect, useState } from "react";
import TimelineCard from "../component/home/TimelineCard.jsx";

export default function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    console.log("Timeline API:", API);

    fetch(`${API}/api/timeline`)
      .then(async (res) => {
        console.log("Status:", res.status);

        const data = await res.json();
        console.log("Timeline Data:", data);

        setEvents(data);
      })
      .catch((err) => console.error(err));
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