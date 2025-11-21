import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from "../../Firebase"; // Make sure you export Realtime DB as 'database'
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export default function ClassRegistration() {
  const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [className, setClassName] = useState('');
  const [gender, setGender] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !qualification || !email || !phone || !className || !gender) {
      alert("Please fill all fields!");
      return;
    }

    const classRef = ref(db, 'classs'); // "classs" node
  const newclass = {
  firstname,
  lastname,
  email,
  
  class: className,
  gender,
  phone,
  qualification,
  createdAt: new Date().toISOString()
};


    push(classRef, newclass)
      .then(() => {
        alert("class registered successfully!");
        setName('');
        setEmail('');
        setPhone('');
        setClassName('');
        setGender('');
      })
      .catch((error) => {
        console.error("Error saving class: ", error);
        alert("Failed to register class!");
      });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" mb={2}>Admission Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
         <TextField
          label="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
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
          label="Phone Number"
          value={phone}
          type='tel'
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <FormControl fullWidth margin="normal" required>
         
       <TextField
         
          type="date"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        </FormControl>
          <FormControl fullWidth margin="normal" required>
         
       <TextField
          label="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
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
       Submit
        </Button>
      </form>
    </Box>
  );
}
