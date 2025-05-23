import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassementParEpreuve from './pages/ClassementParEpreuve';
import ClassementGeneral from './pages/ClassementGeneral';
import ClassementEpreuve from "./pages/ClassementEpreuve";
import ClassementGeneralPage from './pages/ClassementGeneralPage';
import Participants from './pages/Participants';
import ClassementParEpreuvePDF from "./pages/ClassementParEpreuvePDF";
import AjouterParticipant from "./pages/AjouterParticipant";
import AjouterScore from "./pages/AjouterScore";
import ClassementClubParEpreuve from './pages/ClassementClubParEpreuve';
import ClassementClubGeneral from './pages/ClassementClubGeneral';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classement-epreuve" element={<ClassementParEpreuve />} />
        <Route path="/classement-general" element={<ClassementGeneral />} />
        <Route path="/classement/epreuve" element={<ClassementEpreuve />} />
        <Route path="/classement/general" element={<ClassementGeneralPage />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/classement/epreuve/pdf" element={<ClassementParEpreuvePDF />} />
        <Route path="/ajouter-participant" element={<AjouterParticipant />} />
        <Route path="/ajouter-score" element={<AjouterScore />} />
        <Route path="/classement-club-epreuve" element={<ClassementClubParEpreuve />} />
        <Route path="/classement-club-general" element={<ClassementClubGeneral />} />
      </Routes>
    </Router>
  );
}

export default App;
