import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // <-- ajout pour le bouton retour

function ClassementGeneralPage() {
  const [classement, setClassement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClassement() {
      try {
        const response = await fetch('https://tir-backend-gtko.onrender.com/classement/general');
        if (!response.ok) throw new Error('Erreur lors de la récupération des données');
        const data = await response.json();
        setClassement(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchClassement();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Chargement du classement général...</div>;
  if (error) return <div style={{ padding: 20, color: 'red' }}>Erreur : {error}</div>;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
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

      <h1>Classement Général - Challenge Tir à l'Arc</h1>

      {Object.entries(classement).map(([groupe, participants]) => (
        <section key={groupe} style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#003366' }}>
            Catégorie / Sexe / Arme : <em>{groupe}</em>
          </h2>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)'
            }}
          >
            <thead style={{ backgroundColor: '#f0f0f0' }}>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rang</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nom</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Points</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Détail par Manche</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((p, i) => (
                <tr key={p.nom} style={{ backgroundColor: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{i + 1}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.nom}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{p.total}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {Object.entries(p.details)
                      .map(([epreuve, pts]) => `${epreuve} : ${pts} pts`)
                      .join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

export default ClassementGeneralPage;
