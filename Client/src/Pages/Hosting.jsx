import React, { useEffect, useState } from "react";

const Hosting = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/host/");
        const data = await response.json();

        if (data.success) {
          setHackathons(data.hackathons);
        } else {
          alert("Failed to fetch hackathons: " + data.message);
        }
      } catch (error) {
        console.error("Error fetching hackathons:", error);
        alert("An error occurred while fetching hackathons.");
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
          Recent Hosted Hackathons
        </h1>

        {loading ? (
          <p className="text-center text-gray-700">Loading hackathons...</p>
        ) : hackathons.length === 0 ? (
          <p className="text-center text-gray-700">No hackathons hosted yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">
                    {hackathon.name}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <strong>Date:</strong>{" "}
                    {new Date(hackathon.date).toDateString()}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {hackathon.location}
                  </p>
                  <p className="text-gray-700 mt-4">{hackathon.description}</p>
                  <ul className="mt-4">
                    <strong>Prizes:</strong>
                    {hackathon.prizes.map((prize, index) => (
                      <li key={index} className="text-gray-600">
                        - {prize}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hosting;
