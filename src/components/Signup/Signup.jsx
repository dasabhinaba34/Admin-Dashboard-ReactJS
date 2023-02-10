

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from '@mui/icons-material/Login';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Link} from "react-router-dom";
// import { FormatAlignJustify } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const theme = createTheme();

const Signup = () => {




  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      
          <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            <b>Create an Account</b>
          </Typography>
        
          <Box
            component="form"
       
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              placeholder="Abhinaba Das"
              name="name"
              autoComplete="name" 
              autoFocus
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              placeholder="name@company.com"
              name="email"
              autoComplete="email"
            />

             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              placeholder="Password@2023"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SignUp
            </Button>
            <Grid container justifyContent="center">
            <Grid item>
                <Link to="/" variant="body2">
                  {"Have an Account? Login Now"}
                </Link>
              </Grid>
              </Grid>
           
            </Box>
        </Box>
        
        
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
