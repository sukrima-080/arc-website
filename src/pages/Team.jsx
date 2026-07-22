import { useEffect, useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-8 py-24">
      <h1
        className="text-3xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        TEAM
      </h1>

      <p className="mt-4 text-white/60 max-w-xl">
        Active operatives and veteran corps steering ARC Systems.
      </p>

      <div className="mt-8">
        {members.map((member) => (
          <div
            key={member._id}
            className="mb-4 rounded-lg border border-gray-700 p-4"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.group}</p>
          </div>
        ))}
      </div>
    </div>
  );
}