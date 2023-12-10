import React, { useState } from "react";
import * as Components from "../Styles/AdminComponents";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import { storageUserData } from "../Components/storage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AdminLogin() {
  const [signIn] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    await delay(10);
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.email.length > 0 && formData.email !== "admin@gmail.com") {
      errors.email = "Invalid email.";
    } else if (formData.email.length === 0) {
      errors.email = "Email is required";
    }

    if (formData.password.length > 0 && formData.password !== "pass") {
      errors.password = "Invalid password.";
    } else if (formData.password.length === 0) {
      errors.password = "Password is required.";
    }

    if (Object.keys(errors).length === 0) {
      if (
        formData.email === "admin@gmail.com" &&
        formData.password === "pass"
      ) {
        storageUserData(1);
        navigate("/");
      }
    }

    setFormErrors(errors);
  };

  return (
    <>
      <Components.Background></Components.Background>
      <Components.ColorOverlay></Components.ColorOverlay>
      <Components.Container signinIn={signIn}>
        <ArrowBackIcon
          style={{
            position: "absolute",
            cursor: "pointer",
            margin: "10px",
            zIndex:1,
          }}
          onClick={() => navigate(-1)}
        />
        <Components.Form>
          <Components.Title>Admin Login</Components.Title>
          <TextField
            required
            style={{ width: 400 }}
            color="primary"
            type="email"
            label="Email "
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.email}{" "}
            </Alert>
          )}
          <div style={{ margin: "10px 0" }}></div>
          <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    onMouseEnter={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      document.body.style.cursor = "auto";
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {formErrors.password && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.password}{" "}
            </Alert>
          )}
          <div style={{ margin: "10px 0" }}></div>
          <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
        </Components.Form>
      </Components.Container>
    </>
  );
}

export default AdminLogin;
