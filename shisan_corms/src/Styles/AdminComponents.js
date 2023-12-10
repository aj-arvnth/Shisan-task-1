import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
opacity: 90%;
justify-content: center;
border-radius: 0px;
box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25);
margin: 100px auto;
overflow: hidden;
width: 550px;
height: 500px;
max-width: 100%;  
min-height: 400px;
`;

export const Background = styled.div`
background-image: url('./IT Asset-Management.jpg');
background-size: cover;
position: fixed;
width: 100%;
height: 100%;
filter: blur(6px); // Adjust the blur intensity as needed
z-index: -1; // Move the background behind the login form
`;


export const ColorOverlay = styled.div`
 content: "";
  display: flex;
  background-color: rgba(19, 41, 94, 0.67); 
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const ErrorMessage = ({ children }) => {
  return <span style={{ color: "red", fontSize: "12px"}}>{children}</span>;
};

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #F9F3CC;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px 50px;
height: 100%;
text-align: center;
`;

export const Navbar = styled.h2`
    margin-right: 280px;
    display: flex;
    align-items: right;
    justify-content: right;
`;

export const Title = styled.h2`
font-weight: bold;
margin-bottom: 50px;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #000000;
   background-color: #000000;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   cursor: pointer;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Users = styled.a`
color: #333;
text-align: left;
font-size: 14px;
text-decoration: none;
margin: 15px 10px;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #000000,#3D3C3A);
background: linear-gradient(to right,  #3D3C3A,#000000);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 0px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;