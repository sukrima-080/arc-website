export default function TimelineCard({ event }) {
  return (
    <div className="flex gap-6 bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition">

      <img
        src={event.imageUrl || "/images/default-event.jpg"}
        alt={event.title}
        className="w-40 h-32 rounded-lg object-cover"
      />

      <div className="flex-1">

        <h2 className="text-2xl font-bold">
          {event.title}
        </h2>

        <p className="text-sm text-blue-400 mt-1">
          {new Date(event.eventDate).toLocaleDateString()}
        </p>

        <p className="text-white/70 mt-3">
          {event.description}
        </p>

        <div className="flex gap-4 mt-4 text-sm">

          <span className="text-green-400">
            {event.category}
          </span>

          <span className="text-yellow-400">
            {event.status}
          </span>

          <span className="text-gray-400">
            {event.location}
          </span>

        </div>

        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            Register →
          </a>
        )}

      </div>

    </div>
  );
}