import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- ajout import pour le bouton retour

const epreuvesDisponibles = [
  "nature",
  "3D",
  "campagne",
  "salle",
  "federal",
  "run",
  "beursault",
];

function ClassementParEpreuvePDF() {
  const [epreuve, setEpreuve] = useState("");

  const handleDownload = () => {
    if (epreuve) {
      window.open(`http://localhost:8000/classement/epreuve/${epreuve}/pdf`, "_blank");
    } else {
      alert("Veuillez sélectionner une épreuve.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Export PDF - Classement par Épreuve
      </h2>

      {/* Bouton retour à l'accueil */}
      <div className="mb-6 text-center">
        <Link to="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow">
            ⬅ Retour à l'accueil
          </button>
        </Link>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sélectionnez une épreuve :</label>
        <select
          value={epreuve}
          onChange={(e) => setEpreuve(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        >
          <option value="">-- Choisir une épreuve --</option>
          {epreuvesDisponibles.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleDownload}
        className="w-full bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 transition"
      >
        Télécharger le PDF
      </button>
    </div>
  );
}

export default ClassementParEpreuvePDF;
