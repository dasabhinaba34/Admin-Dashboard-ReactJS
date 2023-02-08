import { useState } from "react";

import { useNavigate } from "react-router-dom";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from '@mui/icons-material/Login';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username === "admin@admin.com" && password === "admin123") {
      navigate("/home");
      return;
    }
  };

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
            <LoginIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            <b>Login to Dashboard</b>
          </Typography>
          <div style={{fontSize:"14px", textAlign:"center"}}>
          <p>Demo Email : admin@admin.com</p>
          <p style={{marginTop:"-15px", marginBottom:"-2px"}}>Demo Password : admin@123</p>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
                        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              placeholder="admin@admin.com"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              placeholder="admin123"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Not a Member? Sign Up Now"}
                </Link>
              </Grid>
            </Grid>
            </Box>
        </Box>
        
        
      </Container>
    </ThemeProvider>
  );
};

export default Login;
