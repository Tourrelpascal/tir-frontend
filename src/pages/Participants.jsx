import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Ajout pour le bouton de retour

function Participants() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/participants')
      .then(response => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then(data => {
        setParticipants(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      {/* Bouton retour */}
      <div style={{ marginBottom: 20 }}>
        <Link to="/">
          <button style={{
            backgroundColor: '#ccc',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            ⬅ Retour à l'accueil
          </button>
        </Link>
      </div>

      <h1>Liste des participants</h1>
      <ul>
        {participants.map(participant => (
          <li key={participant.id}>
            {participant.nom} {participant.prenom} — {participant.club}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Participants;
