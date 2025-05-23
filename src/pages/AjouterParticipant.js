import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AjouterParticipant() {
  const [participant, setParticipant] = useState({
    nom: '',
    prenom: '',
    club: '',
    sexe: '',
    categorie: '',
    arme: '',
    licence: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setParticipant({ ...participant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://tir-backend-gtko.onrender.com/participants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(participant),
      });

      if (res.ok) {
        alert("Participant ajouté !");
        navigate('/');
      } else {
        const errorData = await res.json().catch(() => null);
        const message =
          errorData && typeof errorData === 'object'
            ? JSON.stringify(errorData)
            : 'Erreur inconnue';
        alert("Erreur lors de l'ajout : " + message);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Erreur réseau ou serveur !");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Participant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["nom", "prenom", "club", "licence"].map((field) => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={participant[field]}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        ))}

        {/* Sexe */}
        <div>
          <select
            name="sexe"
            value={participant.sexe}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">-- Sélectionnez le sexe --</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div>

        {/* Catégorie */}
        <div>
          <select
            name="categorie"
            value={participant.categorie}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">-- Sélectionnez une catégorie --</option>
            <option value="U11">U11</option>
            <option value="U13">U13</option>
            <option value="U15">U15</option>
            <option value="U18">U18</option>
            <option value="DECOUVERTE">DEC</option>
          </select>
        </div>

        {/* Arme */}
        <div>
          <select
            name="arme"
            value={participant.arme}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">-- Sélectionnez une arme --</option>
            <option value="Arc NU">Arc nu</option>
            <option value="Classique">Arc classique</option>
            <option value="Compound">Poulies</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AjouterParticipant;
