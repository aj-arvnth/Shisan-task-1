import React, { useState } from "react";
import * as Components from "../../Components/SignupComponents";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          <Components.Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && (
            <Components.ErrorMessage>
              {formErrors.firstName}
            </Components.ErrorMessage>
          )}
          <Components.Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && (
            <Components.ErrorMessage>
              {formErrors.lastName}
            </Components.ErrorMessage>
          )}
          <Components.Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <Components.ErrorMessage>
              {formErrors.email}
            </Components.ErrorMessage>
          )}
          <Components.Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <Components.ErrorMessage>
              {formErrors.password}
            </Components.ErrorMessage>
          )}
          <Components.Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && (
            <Components.ErrorMessage>
              {formErrors.confirmPassword}
            </Components.ErrorMessage>
          )}
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
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default SignUp;
