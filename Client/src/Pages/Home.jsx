import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [hackathons, setHackathons] = useState([]);
  const navigate = useNavigate();

  // Fetch data from Api.json
  useEffect(() => {
    fetch("/Api.json")
      .then((response) => response.json())
      .then((data) => setHackathons(data.hackathons))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRegisterClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfASC_F4S8sg8JeHRr6Ecjk9rxTgMvmFrjIlhFMjUFlNVxfKA/viewform";
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 to-purple-200 min-h-screen">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16"
          style={{
            backgroundImage: `url('https://wallpapers.com/images/hd/poster-design-background-5gra68ee1yxkblc9.jpg')`,
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              🚀 Code. Innovate. Dominate.
            </h1>
            <p className="text-lg font-medium mb-6">
              Join the biggest hackathons of 2025 and showcase your skills in
              AI, blockchain, cybersecurity, game development, and more! Compete
              with top minds, build groundbreaking solutions, and win exciting
              prizes.
            </p>
            <p className="text-lg font-medium mb-6">
              💡 Think beyond limits. <br />
              💻 Build the future. <br />
              🏆 Become a champion.
            </p>
            <button
              onClick={handleRegisterClick}
              className="inline-block bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              🔗 Register Now
            </button>
          </div>
        </div>

        <div>
          <img
            src="/image.jpg"
            className="w-full border-4 border-white"
            alt=""
          />
        </div>
        <div id="hackathons" className="container mx-auto px-4 py-10">
          <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-widest drop-shadow-lg mb-10">
            🚀 Upcoming Hackathons Await!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {hackathon.name}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Date:</strong> {hackathon.date}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {hackathon.location}
                  </p>
                  <p className="text-gray-700 mt-4">{hackathon.description}</p>
                  <ul className="mt-4">
                    <strong>Prizes:</strong>
                    {hackathon.prizes.map((prize, i) => (
                      <li key={i} className="text-gray-600">
                        - {prize}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleRegisterClick}
                    className="block mt-6 text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
