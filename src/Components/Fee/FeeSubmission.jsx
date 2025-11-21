import React, { useState } from "react";
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ref, push } from "firebase/database";
import { db } from "../../Firebase";
import jsPDF from "jspdf";

export default function FeeSubmission() {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentName || !className || !feeAmount || !paymentMethod) {
      alert("Please fill all fields!");
      return;
    }

    const feeRef = ref(db, "feeSubmissions");

    const data = {
      studentName,
      className,
      feeAmount,
      paymentMethod,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      await push(feeRef, data);
      alert("Fee submitted successfully!");

      // Generate PDF
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("Fee Receipt", 105, 20, null, null, "center");

      doc.setFontSize(12);
      doc.text(`Student Name: ${data.studentName}`, 20, 40);
      doc.text(`Class: ${data.className}`, 20, 50);
      doc.text(`Fee Amount: ${data.feeAmount}`, 20, 60);
      doc.text(`Payment Method: ${data.paymentMethod}`, 20, 70);
      doc.text(`Date: ${data.submittedAt}`, 20, 80);

      doc.save(`${data.studentName}_FeeReceipt.pdf`);

      // Reset form
      setStudentName("");
      setClassName("");
      setFeeAmount("");
      setPaymentMethod("");
    } catch (err) {
      console.log(err);
      alert("Failed to submit fee!");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Fee Submission
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Student Name"
          fullWidth
          margin="normal"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <TextField
          label="Class"
          fullWidth
          margin="normal"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <TextField
          label="Fee Amount"
          type="number"
          fullWidth
          margin="normal"
          value={feeAmount}
          onChange={(e) => setFeeAmount(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Payment Method</InputLabel>
          <Select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            label="Payment Method"
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Card">Card</MenuItem>
            <MenuItem value="Online Transfer">Online Transfer</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit Fee & Generate PDF
        </Button>
      </form>
    </Box>
  );
}
