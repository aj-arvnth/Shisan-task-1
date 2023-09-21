import React, { useState } from "react";
import * as Components from "../../Components/UserComponents";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";


function ForgetPass() {
  const [signIn] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange =  (event) => {
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
    <Components.Container>
      <Components.SignInContainer signinIn={signIn}>
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
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome user!</Components.Title>
            <Components.Paragraph>
              Please fill in the necessary details to get connected.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => navigate(-1)}>Back</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default ForgetPass;
