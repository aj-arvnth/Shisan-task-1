import React, { useState } from "react";
import * as Components from "../Styles/SignUpComponents";
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

function SignUp() {
  const [signIn] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required.";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required.";
    }

    if (!formData.email) {
      errors.email = "Email is required.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Password and Confirm password does not match.";
    }

    if (Object.keys(errors).length === 0) {
      //  authentication process

      // Navigate to the user login page after successful sign-in
      navigate("/user");
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
          <Components.Title>Sign Up</Components.Title>
          <TextField
            required
            style={{ width: 400 }}
            type="text"
            label="First Name "
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.firstName}{" "}
            </Alert>
          )}
          <div
            style={{ margin: formErrors.firstName ? "0px 0" : "15px 0" }}
          ></div>
          <TextField
            required
            style={{ width: 400 }}
            type="text"
            label="Last Name "
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.lastName}{" "}
            </Alert>
          )}
          <div
            style={{ margin: formErrors.lastName ? "0px 0" : "15px 0" }}
          ></div>
          <TextField
            required
            style={{ width: 400 }}
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
          <div style={{ margin: formErrors.email ? "0px 0" : "13px 0" }}></div>
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
          <div
            style={{ margin: formErrors.password ? "0px 0" : "9px 0" }}
          ></div>
          <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
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
          {formErrors.confirmPassword && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.confirmPassword}{" "}
            </Alert>
          )}
          <div
            style={{ margin: formErrors.confirmPassword ? "0px 0" : "13px 0" }}
          ></div>
          <Components.Button onClick={handleSignIn}>Sign Up</Components.Button>
        </Components.Form>
      </Components.Container>
    </>
  );
}

export default SignUp;
