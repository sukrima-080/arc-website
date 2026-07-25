import { useEffect, useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
  const API = import.meta.env.VITE_API_URL;

  console.log("API:", API);

  const baseURL = API.replace(/\/+$/, "");

  fetch(`${baseURL}/api/users`)
    .then(async (res) => {
      console.log("Status:", res.status);

      const text = await res.text();
      console.log("Raw Response:", text);

      try {
        const data = JSON.parse(text);
        console.log("Parsed:", data);

        setMembers(data);
      } catch (e) {
        console.log("JSON Parse Error:", e);
      }
    })
    .catch((err) => {
      console.error("Fetch Error:", err);
    });
}, []);

  console.log("Members state:", members);

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

      <p className="text-red-500 text-xl mb-8">
        Members Loaded: {members.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 shadow-lg"
          >
            <img
              src={
                member.imageUrl ||
                "https://placehold.co/200x200?text=Member"
              }
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />

            <div className="text-center mt-5">
              <h2 className="text-2xl font-semibold">
                {member.name}
              </h2>

              <p>{member.role}</p>
              <p>{member.group}</p>
              <p>Batch {member.batch}</p>
              <p>{member.email}</p>

              <span>{member.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}