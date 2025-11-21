import React from "react";
import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";

// Sample exam schedule data
const examData = [
  {
    subject: "Mathematics",
    className: "Class 1",
    date: "2025-12-05",
    time: "10:00 AM - 12:00 PM",
    notes: "Bring Calculator",
  },
  {
    subject: "Science",
    className: "Class 2",
    date: "2025-12-06",
    time: "09:00 AM - 11:00 AM",
    notes: "Lab Coat Required",
  },
  {
    subject: "English",
    className: "Class 3",
    date: "2025-12-07",
    time: "11:00 AM - 01:00 PM",
    notes: "",
  },
  // Add more exams as needed
];

export default function ExamSchedule() {
  return (
    <Box sx={{ flexGrow: 1, p: 4, ml: 30 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Exam Schedule
      </Typography>

      <Grid container spacing={3} direction="column">
        {examData.map((exam, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 2 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{exam.subject}</Typography>
                  <Chip label={exam.className} color="primary" size="small" />
                </Box>

                <Typography variant="body1" mt={1}>
                  <strong>Date:</strong> {exam.date}
                </Typography>
                <Typography variant="body1">
                  <strong>Time:</strong> {exam.time}
                </Typography>

                {exam.notes && (
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <strong>Notes:</strong> {exam.notes}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
