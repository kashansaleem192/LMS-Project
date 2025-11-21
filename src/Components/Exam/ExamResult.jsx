import React from "react";
import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";

// Sample exam results data
const resultData = [
  {
    studentName: "Ali Khan",
    className: "Class 1",
    subject: "Mathematics",
    marksObtained: 85,
    totalMarks: 100,
    status: "Pass",
  },
  {
    studentName: "Sara Ahmed",
    className: "Class 2",
    subject: "Science",
    marksObtained: 72,
    totalMarks: 100,
    status: "Pass",
  },
  {
    studentName: "Usman Ali",
    className: "Class 3",
    subject: "English",
    marksObtained: 45,
    totalMarks: 100,
    status: "Fail",
  },
  // Add more students/results
];

export default function ExamResult() {
  return (
    <Box sx={{ flexGrow: 1, p: 4 , ml: 30 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Exam Results
      </Typography>

      <Grid container spacing={3} direction="column">
        {resultData.map((result, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 2 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{result.studentName}</Typography>
                  <Chip
                    label={result.className}
                    color="primary"
                    size="small"
                  />
                </Box>

                <Typography variant="body1" mt={1}>
                  <strong>Subject:</strong> {result.subject}
                </Typography>
                <Typography variant="body1">
                  <strong>Marks:</strong> {result.marksObtained} / {result.totalMarks}
                </Typography>
                <Typography
                  variant="body1"
                  mt={1}
                  color={result.status === "Pass" ? "green" : "red"}
                >
                  <strong>Status:</strong> {result.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
