import React, { useEffect, useState } from "react";
import axios from "axios";
// ClassementClubGeneralPage.jsx
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
} from "@mui/material";


function ClassementClubGeneral() {
  const [classement, setClassement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/classement/club/general").then((res) => {
      setClassement(res.data);
      setLoading(false);
    });
  }, []);

  const handleExportPDF = () => {
    window.open("/classement/club/general/pdf", "_blank");
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

      {loading ? (
        <CircularProgress />
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
              {classement.map((entry, index) => (
                <TableRow key={entry.club}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{entry.club}</TableCell>
                  <TableCell>{entry.points.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
}

export default ClassementClubGeneral;

