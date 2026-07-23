import { useEffect, useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    fetch(`${API}/api/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch members");
        }
        return res.json();
      })
      .then((data) => setMembers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-8 py-24">
      <h1
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        TEAM
      </h1>

      <p className="text-white/60 mb-10">
        Active operatives and veteran corps steering ARC Systems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center">
              <img
                src={
                  member.imageUrl
                    ? member.imageUrl
                    : "https://placehold.co/200x200?text=Member"
                }
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            </div>

            <div className="text-center mt-5">
              <h2 className="text-2xl font-semibold">{member.name}</h2>

              <p className="text-blue-400 mt-2">{member.role}</p>

              <p className="text-gray-400">{member.group}</p>

              <p className="text-sm text-gray-500 mt-1">
                Batch {member.batch}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {member.email}
              </p>

              <span
                className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
                  member.status === "active"
                    ? "bg-green-600"
                    : "bg-yellow-600"
                }`}
              >
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}