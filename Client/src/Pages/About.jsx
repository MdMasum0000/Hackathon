import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to{" "}
          <span className="font-bold text-purple-600">Hackathon Platform</span>,
          your one-stop destination for organizing and participating in
          hackathons. Our mission is to bring together innovators, developers,
          and creators to solve real-world problems and build groundbreaking
          solutions.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Whether you're an experienced developer or a beginner, our platform
          provides you with the tools and resources to showcase your skills,
          collaborate with like-minded individuals, and win exciting prizes.
          Join us to code, innovate, and dominate!
        </p>
        <h2 className="text-2xl font-bold text-purple-600 mt-6 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
          <li>
            Organize hackathons effortlessly with our user-friendly tools.
          </li>
          <li>
            Participate in a wide range of hackathons across various domains.
          </li>
          <li>Collaborate with top minds and build innovative solutions.</li>
          <li>
            Win exciting prizes and gain recognition in the tech community.
          </li>
        </ul>
        <p className="text-gray-700 text-lg mb-4">
          Join us today and be a part of the innovation revolution. Together,
          let's build the future!
        </p>
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
