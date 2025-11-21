import React, { useState } from 'react';
import { ref as dbRef, push } from "firebase/database";
import { db } from "../../Firebase";
import { TextField, Button, Box, Typography, FormControl } from '@mui/material';

export default function SyllabusRegistrationFree() {

  const [subjectName, setSubjectName] = useState('');
  const [className, setClassName] = useState('');
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState('');

  // PDF select
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF file!");
    }
  };

  // Convert PDF to base64 data URL
  const convertToDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subjectName || !className || !file) {
      return alert("Fill all fields and select a PDF!");
    }

    try {
      // Convert PDF to base64 URL
      const dataURL = await convertToDataURL(file);
      setFileDataURL(dataURL);

      const syllabusRef = dbRef(db, "syllabus");

      const data = {
        subjectName,
        className,
        fileURL: dataURL,  // saving base64 URL
        createdAt: new Date().toISOString(),
      };

      await push(syllabusRef, data);
      alert("Syllabus Registered Successfully!");

      // Reset form
      setSubjectName("");
      setClassName("");
      setFile(null);
      setFileDataURL("");

    } catch (err) {
      console.log(err);
      alert("Failed to register syllabus!");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={2}>Syllabus Registration (Free)</Typography>

      <form onSubmit={handleSubmit}>

        <TextField
          label="Subject Name"
          fullWidth
          required
          margin="normal"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />

        <TextField
          label="Class Name"
          fullWidth
          required
          margin="normal"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          {file && (
            <Typography sx={{ mt: 1 }} color="green">
              {file.name} selected ✔
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ mt: 2 }}
        >
          Register Syllabus
        </Button>

      </form>
    </Box>
  );
}
