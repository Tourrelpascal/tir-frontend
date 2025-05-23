import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // <-- ajout pour le bouton retour

function ClassementEpreuve() {
  const [epreuves, setEpreuves] = useState([]);
  const [selectedEpreuve, setSelectedEpreuve] = useState("");
  const [classement, setClassement] = useState(null);

  // Chargement des épreuves
  useEffect(() => {
    const fetchEpreuves = async () => {
      try {
        const res = await axios.get("http://localhost:8000/epreuves/");
        console.log("Epreuves reçues :", res.data);
        setEpreuves(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des épreuves :", err);
      }
    };

    fetchEpreuves();
  }, []);

  // Chargement du classement lorsqu'une épreuve est sélectionnée
  useEffect(() => {
    const fetchClassement = async () => {
      if (!selectedEpreuve) return;
      try {
        const res = await axios.get(
          `http://localhost:8000/classement/epreuve/${selectedEpreuve}`
        );
        console.log("Classement reçu :", res.data);
        setClassement(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement du classement :", err);
      }
    };

    fetchClassement();
  }, [selectedEpreuve]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Classement par Épreuve</h2>

      {/* Bouton retour */}
      <div className="mb-6 text-center">
        <Link to="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow">
            ⬅ Retour à l'accueil
          </button>
        </Link>
      </div>

      <select
        value={selectedEpreuve}
        onChange={(e) => setSelectedEpreuve(e.target.value)}
        className="border px-3 py-2 rounded mb-6 w-full sm:w-1/2 mx-auto block"
      >
        <option value="">-- Choisissez une épreuve --</option>
        {epreuves.map((e) => (
          <option key={e._id} value={e.nom}>
            {e.nom}
          </option>
        ))}
      </select>

      {classement && (
        <div className="mt-4">
          {Object.keys(classement).map((categorie) => (
            <div key={categorie} className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Catégorie : {categorie}
              </h3>
              <table className="min-w-full table-auto mt-2 border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Nom</th>
                    <th className="border px-4 py-2">Sexe</th>
                    <th className="border px-4 py-2">Arme</th>
                    <th className="border px-4 py-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {classement[categorie].map((participant, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{participant.nom}</td>
                      <td className="border px-4 py-2">{participant.sexe}</td>
                      <td className="border px-4 py-2">{participant.arme}</td>
                      <td className="border px-4 py-2">{participant.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassementEpreuve;



