import React, { useState } from "react";
import * as Components from "../Styles/AdminComponents";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ForgetPass() {
  const [signIn] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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

    if (formData.email.length > 0 && formData.email !== "user@gmail.com") {
      errors.email = "Invalid email.";
    } else if (formData.email.length === 0) {
      errors.email = "Email is required";
    }

    if (formData.username.length > 0 && formData.username !== "user123") {
      errors.username = "Invalid username.";
    } else if (formData.username.length === 0) {
      errors.username = "Username is required.";
    }

    if (Object.keys(errors).length === 0) {
      if (
        formData.email === "user@gmail.com" &&
        formData.username === "user123"
      ) {
        toast.success(
          "You will receive a reset email if user with that email exist"
        );
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
          <Components.Title>Forget Password</Components.Title>
          <TextField
            required
            style={{ width: 400 }}
            type="text"
            label="Username "
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && (
            <Alert
              severity="error"
              style={{
                backgroundColor: "transparent",
                textAllign: "center",
                color: "#8B0000",
              }}
            >
              {formErrors.username}{" "}
            </Alert>
          )}
          <div style={{ margin: "13px 0" }}></div>
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
          <div style={{ margin: "10px 0" }}></div>
          <Components.Button onClick={handleSignIn}>Submit</Components.Button>
          <Toaster position="top-right" />
        </Components.Form>
      </Components.Container>
    </>
  );
}

export default ForgetPass;
