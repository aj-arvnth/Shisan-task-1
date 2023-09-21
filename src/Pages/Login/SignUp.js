import React, { useState } from "react";
import * as Components from "../../Components/SignupComponents";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";

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
    <Components.Container>
      <Components.SignInContainer signinIn={signIn}>
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
            style={{ margin: formErrors.firstName ? "0px 0" : "13px 0" }}
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
            style={{ margin: formErrors.lastName ? "0px 0" : "13px 0" }}
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
          <TextField
            required
            style={{ width: 400 }}
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
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
            style={{ margin: formErrors.password ? "0px 0" : "13px 0" }}
          ></div>
          <TextField
            required
            style={{ width: 400 }}
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
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
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome user!</Components.Title>
            <Components.Paragraph>
              Please fill in the necessary details to get connected.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => navigate(-1)}>
              Back
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default SignUp;
