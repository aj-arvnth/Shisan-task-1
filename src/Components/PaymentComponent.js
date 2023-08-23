import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  opacity: 80%;
  justify-content: center;
  border-radius: 05px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  position: relative;
  margin-top: 100px;
  overflow: hidden;
  width: 1000px;
  height: 570px;
  max-width: 100%;
  min-height: 400px;
`;

export const ErrorMessage = ({ children }) => {
  return <span style={{ color: "red", fontSize: "12px" }}>{children}</span>;
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
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

export const DatePickerContainer = styled.div`
 width: 100%;
 margin: 4px 0px 4px 0px;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 background-color: #f0f0f0;
 display: flex;
 alignItems: center;
`

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
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
  margin-bottom: 20px;
`;

export const PaymentMethods = styled.div`
  display: flex;
  width: 275px;
  ${'' /* margin-top: 100px; */}
  background-color: #ccc;


`
export const PaymentMethod = styled.div`
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
`

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
  margin-top: 7px;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
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
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #000000, #3d3c3a);
  background: linear-gradient(to right, #3d3c3a, #000000);
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
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
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
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 0px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
