import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { db } from "../../Firebase"; // Make sure you export Realtime DB as 'database'
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl , RadioGroup ,FormLabel , Radio , FormControlLabel } from '@mui/material';

export default function SubjectRegistration() {
  const [subjectname, setSubjectName] = useState('');
  const [className, setClassName] = useState('');
  const [group, setGroup] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subjectname  ||  !className || !group) {
      alert("Please fill all fields!");
      return;
    }

    const subjectRef = ref(db, 'subjects'); // "subjects" node
  const newsubject = {
  subjectname,
  class: className,
  group,
  createdAt: new Date().toISOString()
};


    push(subjectRef, newsubject)
      .then(() => {
        alert("subject registered successfully!");
        setSubjectName('');
        setClassName('');
        setGroup('');
      })
      .catch((error) => {
        console.error("Error saving subject: ", error);
        alert("Failed to register subject!");
      });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" mb={2}>Subject Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Subject Name"
          value={subjectname}
          onChange={(e) => setSubjectName(e.target.value)}
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

    <FormControl component="fieldset">
      <FormLabel component="legend">Group</FormLabel>
      <RadioGroup
        row   // row = horizontal, remove for vertical
        value={group}
        onChange={(e) => setGroup(e.target.value)}
      >
        <FormControlLabel value="General Science" control={<Radio />} label="General Science" />
        <FormControlLabel value="Pre-Enginering" control={<Radio />} label="Pre-Enginering" />
        <FormControlLabel value="Commerce" control={<Radio />} label="Commerce" />
      </RadioGroup>
    </FormControl>




        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register subject
        </Button>
      </form>
    </Box>
  );
}
