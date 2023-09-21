import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Toaster, toast } from "react-hot-toast";
import * as Components from "../../Components/PaymentComponent";
import tiers from "../Subscription/SubscriptionData";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [signIn, toggle] = React.useState(true);
  const { subscriptionIndex } = useParams();
  const parsedIndex = parseInt(subscriptionIndex, 10);
  const selectedTier = tiers[parsedIndex];
  const [selectedMethod, setSelectedMethod] = useState("card");
  const navigate = useNavigate();
  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <>
      
      <Components.Container>
        <Components.SignInContainer signinIn={signIn}>
        <Components.PaymentMethods>
        <Components.PaymentMethod
          className={`payment-method ${
            selectedMethod === "card" ? "active" : ""
          }`}
          onClick={() => handleMethodChange("card")}
        >
          Credit/Debit Card
        </Components.PaymentMethod>
        <Components.PaymentMethod
          className={`payment-method ${
            selectedMethod === "upi" ? "active" : ""
          }`}
          onClick={() => handleMethodChange("upi")}
        >
          UPI
        </Components.PaymentMethod>
        </Components.PaymentMethods>
        <Toaster position="top-right" />
          <Components.Form>
            {selectedMethod === "card" && <CardPaymentForm />}
            {selectedMethod === "upi" && <UpiPaymentForm />}
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Subscription Tier Chosen</Components.Title>
              {selectedTier && (
                <div className="selected-subscription">
                  <h3>{selectedTier.title} Subscription</h3>
                  <p className="price">
                  ₹ {selectedTier.price} / month
                  </p>
                  <ul className="features">
                    {selectedTier.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Components.GhostButton onClick={()=>navigate(-1)}>Back</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
};

const CardPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState(null);
  const [cvv, setCVV] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [cvvError, setCVVError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handlePaymentSubmit = async (e) => {
    setCardNumberError("");
    setExpiryError("");
    setCVVError("");
    setCustomerNameError("");
    setMobileNumberError("");

    const cardNumberDigitsOnly = cardNumber.replace(/\s+/g, "");
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const mobileNumberRegex = /^\d{10}$/;

    const isCardNumberValid = cardNumberDigitsOnly.match(cardNumberRegex);
    const isCVVValid = cvv.match(cvvRegex);
    const isExpiryValid = expiry !== null && expiry > new Date();
    const isMobileNumberValid = mobileNumber.match(mobileNumberRegex);

    e.preventDefault();

    if (!isCardNumberValid) {
      setCardNumberError("Invalid card number");
    }
    if (!isExpiryValid) {
      setExpiryError("Invalid expiry date");
    }
    if (!isCVVValid) {
      setCVVError("Invalid CVV");
    }
    if (!customerName) {
      setCustomerNameError("Please enter customer name");
    }
    if (!isMobileNumberValid) {
      setMobileNumberError("Invalid mobile number");
    }

    if (
      isCardNumberValid &&
      isExpiryValid &&
      isCVVValid &&
      customerName &&
      isMobileNumberValid
    ) {
      // Process the payment
      // ...
      toast.success(
        "Payment Successful !!!"
      );
    }
  };

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value.replace(/\s+/g, "");
    const formattedCardNumber = inputCardNumber
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedCardNumber);
  };

  return (
    <>
     
      <Components.Title>Credit/Debit Card Payment</Components.Title>
      <Components.Input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Customer Name"
      />
      <Components.ErrorMessage>{customerNameError}</Components.ErrorMessage>


      <Components.Input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        maxLength="10"
        placeholder="Mobile Number"
      />
      <Components.ErrorMessage>{mobileNumberError} </Components.ErrorMessage>
     
      <Components.Input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        maxLength="19"
        placeholder="Enter your 16 digits credit/debit card number"
      />
      <Components.ErrorMessage>{cardNumberError} </Components.ErrorMessage>

      <Components.DatePickerContainer>
        <span
          style={{
            fontFamily: "Arial",
            color: "rgb(130,130,130)",
            fontSize: "13px",
            marginRight: "10px",
          }}
        >
          Expiry date:
        </span>
        <DatePicker
          selected={expiry}
          onChange={(date) => setExpiry(date)}
          dateFormat="MM/yy"
          showMonthYearPicker
          placeholderText="MM/YY"
          className="custom-datepicker" 
        />
        </Components.DatePickerContainer>
    
      <Components.ErrorMessage>{expiryError} </Components.ErrorMessage>
  
      <Components.Input
        type="password"
        value={cvv}
        onChange={(e) => setCVV(e.target.value)}
        maxLength="3"
        placeholder="Enter CVV "
      />
      <Components.ErrorMessage>{cvvError} </Components.ErrorMessage>


      <Components.Button
        className="payment-button"
        onClick={handlePaymentSubmit}
      >
        {isProcessing ? "Processing..." : "Make Payment"}
      </Components.Button>
    </>
  );
};

const UpiPaymentForm = () => {
  const [upiId, setUpiId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [upiIdError, setUpiIdError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handlePaymentSubmit = async (e) => {
    setUpiIdError("");
    setCustomerNameError("");
    setMobileNumberError("");

   
    const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/;
    const mobileNumberRegex = /^\d{10}$/;
    e.preventDefault();
    const isUpiIdValid = upiId.match(upiIdRegex);
    const isMobileNumberValid = mobileNumber.match(mobileNumberRegex);

    if (!isUpiIdValid) {
      setUpiIdError("Invalid UPI ID");
    }
    if (!customerName) {
      setCustomerNameError("Please enter customer name");
    }
    if (!isMobileNumberValid) {
      setMobileNumberError("Invalid mobile number");
    }

    if (isUpiIdValid && customerName && isMobileNumberValid) {
      // Process the payment
      // ...
      toast.success(
        "Payment Successful !!!"
      );
    }
  };

  return (
    <>

      <Components.Title>UPI Payment</Components.Title>
      <Components.Input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter your Name"
      />
      <Components.ErrorMessage>{customerNameError} </Components.ErrorMessage>

      <Components.Input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        maxLength="10"
        placeholder="Enter your mobile number"
      />
      <Components.ErrorMessage>{mobileNumberError}</Components.ErrorMessage>


      <Components.Input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="Enter your UPI ID : example@upi"
      />
      <Components.ErrorMessage>{upiIdError}</Components.ErrorMessage>

      <Components.Button
        className="payment-button"
        onClick={handlePaymentSubmit}
      >
        {isProcessing ? "Processing..." : "Make Payment"}
      </Components.Button>
 
    </>
  );
};

export default PaymentPage;
