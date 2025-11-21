import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from "../../Firebase"; // Make sure you export Realtime DB as 'database'
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export default function StudentRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roll, setRoll] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [gender, setGender] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !roll || !className || !gender) {
      alert("Please fill all fields!");
      return;
    }

    const studentRef = ref(db, 'students'); // "students" node
  const newStudent = {
  name,
  email,
  roll,
  class: className,
  gender,
  createdAt: new Date().toISOString()
};


    push(studentRef, newStudent)
      .then(() => {
        alert("Student registered successfully!");
        setName('');
        setEmail('');
        setRoll('');
        setClassName('');
        setGender('');
      })
      .catch((error) => {
        console.error("Error saving student: ", error);
        alert("Failed to register student!");
      });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" mb={2}>Student Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <FormControl fullWidth margin="normal" required>
         
       <TextField
          label="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        </FormControl>

 <FormControl fullWidth margin="normal" required>
  <InputLabel id="gender-label">Gender</InputLabel>
  <Select
    labelId="gender-label"
    value={gender}
    label="Gender"
    onChange={(e) => setGender(e.target.value)}
  >
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>
    <MenuItem value="Other">Other</MenuItem>
  </Select>
</FormControl>



        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register Student
        </Button>
      </form>
    </Box>
  );
}
