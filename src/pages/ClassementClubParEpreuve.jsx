import React, { useEffect, useState } from "react";
import axios from "axios";

const ClassementClubParEpreuve = () => {
  const [epreuve, setEpreuve] = useState("nature"); // valeur par défaut
  const [classement, setClassement] = useState([]);

  useEffect(() => {
    const fetchClassement = async () => {
      const res = await axios.get(`https://tir-backend-gtko.onrender.com/classement/club/epreuve/${epreuve}`);
      setClassement(res.data);
    };
    fetchClassement();
  }, [epreuve]);

  return (
    <div>
      <h2>Classement par Club - Épreuve : {epreuve}</h2>
      <select onChange={(e) => setEpreuve(e.target.value)} value={epreuve}>
        {["nature", "3D", "campagne", "salle", "federal", "run", "beursault"].map(nom => (
          <option key={nom} value={nom}>{nom}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Rang</th>
            <th>Club</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {classement.map((item, index) => (
            <tr key={item.club}>
              <td>{index + 1}</td>
              <td>{item.club}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassementClubParEpreuve;
