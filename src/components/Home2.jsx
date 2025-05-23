import React from "react";
import { Link } from "react-router-dom";
import { FaTrophy, FaListOl, FaPlusCircle, FaUsers } from "react-icons/fa"; // Import des icônes
import backgroundImage from "./assets/bow-arrow-target.jpg"; // Import de l'image de fond (à créer)

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-12 rounded-xl shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-800">
          🎯 Bienvenue au Challenge de Tir à l'Arc 🏹
        </h2> <br></br>
        <p className="text-lg mb-12 text-gray-800">
             Consultez les classements, enregistrez vos scores ou découvrez les
          archers participants !
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          <Link
            to="/classement/general"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl shadow-md hover:bg-blue-800 flex items-center gap-2">
              <FaTrophy className="text-xl" /> Classement Général
            </button>
          </Link>
          <Link
            to="/classement/epreuve"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <button className="bg-green-700 text-white px-8 py-4 rounded-xl shadow-md hover:bg-green-800 flex items-center gap-2">
              <FaListOl className="text-xl" /> Classement par Épreuve
            </button>
          </Link>
          <Link
            to="/saisie"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <button className="bg-yellow-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-yellow-700 flex items-center gap-2">
              <FaPlusCircle className="text-xl" /> Saisie des Scores
            </button>
          </Link>
          <Link
            to="/participants"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <button className="bg-purple-700 text-white px-8 py-4 rounded-xl shadow-md hover:bg-purple-800 flex items-center gap-2">
              <FaUsers className="text-xl" /> Liste des Participants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
