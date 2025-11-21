import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
// Sample 10 fee structures
const feeData = Array.from({ length: 10 }, (_, i) => ({
  className: `Class ${i + 1}`,
  fee: `${5000 + i * 500} / Year`,
  category: i % 2 === 0 ? "Annual Fee" : "Monthly Fee",
  notes: ["Tuition Fee", "Books Included", "Lab Fee Included"],
}));

export default function FeeStructureCardsColumn() {
  return (
    <Box sx={{ flexGrow: 1, p: 4,  ml: 30 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Fee Structure
      </Typography>

      <Grid container spacing={4} direction="column">
        {feeData.map((fee, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                minHeight: 100, // Card ko lamba karne ke liye
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{fee.className}</Typography>
                  <Chip label={fee.category} color="secondary" size="small" />
                </Box>

                <Typography variant="h5" color="primary" gutterBottom mt={1}>
                  {fee.fee}
                </Typography>

                <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  {fee.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </Box>

              <Box mt={2}>
                   <Link to="/dashboard/fees/form"><Button  variant="contained" color="primary" sx={{ mr: 2 }}>
                 Pay Now
                </Button></Link>
                <Button variant="outlined" color="secondary">
                  Download
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
