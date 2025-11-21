import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../../Components/AppTheme';
import ColorModeSelect from '../../Components/ColorModeSelect';
import { GoogleIcon, SitemarkIcon } from '../../Components/CostomIcons';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";


/* ---------- Card Style ---------- */
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

/* ---------- Page Wrapper Style ---------- */
const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));


export default function SignUp(props) {

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  /* ---------- VALIDATION ---------- */
  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };


  /* ---------- SIGNUP ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup successful!");
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />

      {/* ----------- MAIN PAGE LAYOUT (LEFT IMAGE + RIGHT FORM) ----------- */}
      <SignUpContainer
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", gap: 4 }}
      >

        {/* -------- LEFT SIDE IMAGE -------- */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 3,
          }}
        >
      <img
            src="/home-img.png" // <-- Replace with your image path
            alt="Sign In Illustration"
            style={{ width: '100%', maxHeight: '80vh', objectFit: 'cover', borderRadius: '12px' }}
          />
        </Box>

        {/* -------- RIGHT SIDE FORM -------- */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Card variant="outlined">
            <SitemarkIcon />
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign up
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >

              <FormControl>
                <FormLabel htmlFor="name">Full name</FormLabel>
                <TextField
                  id="name"
                  required
                  fullWidth
                  placeholder="Jon Snow"
                  error={nameError}
                  helperText={nameErrorMessage}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  id="email"
                  required
                  fullWidth
                  placeholder="your@email.com"
                  onChange={(e)=> setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailErrorMessage}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  id="password"
                  required
                  fullWidth
                  type="password"
                  placeholder="••••••"
                  onChange={(e)=> setPassword(e.target.value)}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                />
              </FormControl>

              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="I want to receive updates via email."
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign up
              </Button>

            </Box>

            <Divider>
              <Typography sx={{ color: 'text.secondary' }}>or</Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={()=> alert("Sign up with Google")}
            >
              Sign up with Google
            </Button>

            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link to="/signin">Sign in</Link>
            </Typography>

          </Card>
        </Box>

      </SignUpContainer>
    </AppTheme>
  );
}
