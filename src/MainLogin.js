import React from "react";
import Navbar from "./Navbar/Navbar";
import * as Components from "./Components/Components";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

function MainLogin() {
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  {
    /* <Components.Navbar>
            <Components.Users href="/admin">Admin</Components.Users>
            <Components.Users href="/user">Users</Components.Users>
          </Components.Navbar> */
  }

  const navigateLandingPage = () => {
    navigate("/landingpage");
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button onClick={navigateLandingPage}>
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Navbar>
            <Components.NavItem>
              <Components.NavLink href="/admin">Admin</Components.NavLink>
            </Components.NavItem>
            <Components.NavItem>
              <Components.NavLink href="/user">Users</Components.NavLink>
            </Components.NavItem>
          </Components.Navbar>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default MainLogin;
