import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye, FaUsers, FaPlus, FaFilePdf } from "react-icons/fa";

function Home() {
  return (
    <div
  className="bg-cover bg-center min-h-screen py-20 px-4 text-white"
        style={{ backgroundImage: "url('/images/archery-bg.jpg')" }}>

      <div className="backdrop-blur-sm bg-black/60 p-10 rounded-lg max-w-4xl mx-auto text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400 drop-shadow">
          Challenge de Tir à l'Arc 2025
        </h1>
        <p className="text-lg mb-8 text-gray-200">
          Consultez les classements, ajoutez des scores ou explorez les participants !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/classement/general">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaBullseye /> Classement Général
            </button>
          </Link>

          <Link to="/classement/epreuve">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaBullseye /> Classement par Épreuve
            </button>
          </Link>

          <Link to="/classement-club-epreuve">
            <button className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaBullseye /> Classement Club par Épreuve
            </button>
          </Link>

          <Link to="/classement-club-general">
            <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaBullseye /> Classement Club Général
            </button>
          </Link>

          <Link to="/participants">
            <button className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaUsers /> Liste des Participants
            </button>
          </Link>

          <Link to="/ajouter-participant">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaPlus /> Ajouter un Participant
            </button>
          </Link>

          <Link to="/ajouter-score">
            <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaPlus /> Ajouter un Score
            </button>
          </Link>

          <a href="https://tir-backend-gtko.onrender.com/classement/club/general/pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 w-full rounded-lg shadow transition-transform transform hover:scale-105">
              <FaFilePdf /> Export Classement Club PDF
            </button>
          </a>
        </div>
        {/* Footer juste ici */}
    <footer className="text-center text-sm text-gray-300 mt-12">
      &copy; {new Date().getFullYear()} Pascal – Tous droits réservés
    </footer>
      </div>
    </div>
  );
}

export default Home;
