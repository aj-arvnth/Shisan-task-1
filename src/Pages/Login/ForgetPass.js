import React, { useState } from "react";
import * as Components from "../../Components/UserComponents";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function ForgetPass() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    await delay(10);
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
          <Components.Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && (
            <Components.ErrorMessage>
              {formErrors.username}
            </Components.ErrorMessage>
          )}
          <Components.Input
            type="email"
            name="email"
            placeholder="Email : user@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <Components.ErrorMessage>
              {formErrors.email}
            </Components.ErrorMessage>
          )}

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
