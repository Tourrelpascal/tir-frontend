import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AjouterScore() {
  const [participants, setParticipants] = useState([]);
  const [epreuves, setEpreuves] = useState([]);
  const [score, setScore] = useState({
    participant_id: '',
    epreuve_nom: '',
    points: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/participants')
      .then(res => res.json())
      .then(setParticipants);
    fetch('http://localhost:8000/epreuves')
      .then(res => res.json())
      .then(setEpreuves);
  }, []);

  const handleChange = (e) => {
    setScore({ ...score, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(score),
    });
    if (res.ok) {
      alert("Score enregistré !");
      navigate('/');
    } else {
      alert("Erreur lors de l'enregistrement !");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Score</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="participant_id"
          value={score.participant_id}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">-- Choisir un participant --</option>
          {participants.map(p => (
            <option key={p._id} value={p._id}>{p.nom} </option>
          ))}
        </select>

        <select
          name="epreuve_nom"
          value={score.epreuve}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">-- Choisir une épreuve --</option>
          {epreuves.map(e => (
            <option key={e.nom} value={e.nom}>{e.nom}</option>
          ))}
        </select>

        <input
          name="points"
          type="number"
          placeholder="Points"
          value={score.points}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default AjouterScore;
