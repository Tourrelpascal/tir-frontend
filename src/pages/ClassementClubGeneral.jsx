import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
  Alert, // Ajout de Alert pour les messages d'erreur
} from "@mui/material";

// Définissez l'URL de base de votre API backend.
// Assurez-vous qu'elle NE SE TERMINE PAS par un slash.
const API_BASE_URL = "https://tir-backend-gtko.onrender.com"; // Remplacez par l'URL exacte de votre backend

function ClassementClubGeneral() {
  const [classement, setClassement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Nouvel état pour gérer les erreurs

  useEffect(() => {
    const fetchClassement = async () => {
      try {
        setLoading(true); // Démarre le chargement
        setError(null); // Réinitialise les erreurs précédentes

        // Utilisez l'API_BASE_URL pour pointer vers votre backend
        const response = await axios.get(`${API_BASE_URL}/classement/club/general`);

        // Vérifiez que la réponse est bien un tableau avant de mettre à jour l'état
        if (Array.isArray(response.data)) {
          setClassement(response.data);
        } else {
          // Si la réponse n'est pas un tableau, loggez l'erreur et définissez un message d'erreur
          console.error("La réponse du classement général par club n'est pas un tableau:", response.data);
          setError("Erreur: Les données reçues pour le classement ne sont pas valides.");
          setClassement([]); // Assurez-vous que l'état est un tableau vide pour éviter des erreurs de map
        }
      } catch (err) {
        // Gérer les erreurs de la requête API
        console.error("Erreur lors du chargement du classement général par club:", err);
        setError("Impossible de charger le classement. Veuillez vérifier la connexion au backend ou les logs.");
        setClassement([]); // Assurez-vous que l'état est un tableau vide en cas d'erreur
      } finally {
        setLoading(false); // Arrête le chargement, que ce soit un succès ou un échec
      }
    };

    fetchClassement();
  }, []); // Le tableau vide assure que cela ne s'exécute qu'une fois au montage du composant

  const handleExportPDF = () => {
    // Utilisez l'API_BASE_URL pour pointer vers votre backend pour l'export PDF
    window.open(`${API_BASE_URL}/classement/club/general/pdf`, "_blank");
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Classement Général par Club
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleExportPDF}
        sx={{ mb: 2 }}
      >
        Exporter en PDF
      </Button>

      {/* Affichage des messages d'erreur */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
      ) : (
        <>
          {/* Message si aucun classement n'est disponible après le chargement */}
          {classement.length === 0 && !error ? (
            <Typography variant="body1" color="textSecondary">
              Aucun classement de club général disponible pour le moment.
            </Typography>
          ) : (
            <Paper elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Rang</strong></TableCell>
                    <TableCell><strong>Club</strong></TableCell>
                    <TableCell><strong>Points</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Vérifiez que 'classement' est bien un tableau avant de le mapper */}
                  {Array.isArray(classement) && classement.map((entry, index) => (
                    <TableRow key={entry.club || index}> {/* Utiliser index comme fallback pour la clé */}
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{entry.club}</TableCell>
                      <TableCell>{entry.points.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          )}
        </>
      )}
    </Container>
  );
}

export default ClassementClubGeneral;