import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Bienvenue au Challenge de Tir à l'Arc 2025</h2>
      <p className="text-lg mb-10 text-gray-700">
        Consultez les classements, saisissez les scores ou explorez les participants !
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/classement/general">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow">
            Classement Général
          </button>
        </Link>
        <Link to="/classement/epreuve">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 shadow">
            Classement par Épreuve
          </button>
        </Link>
        <Link to="/saisie">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 shadow">
            Saisie des Scores
          </button>
        </Link>
        <Link to="/participants">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 shadow">
            Liste des Participants
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

