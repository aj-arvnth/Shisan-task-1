import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="payment-container">
    <div className="payment-methods">
      <div
        className={`payment-method ${
          selectedMethod === "card" ? "active" : ""
        }`}
        onClick={() => handleMethodChange("card")}
      >
        Credit/Debit Card
      </div>
      <div
        className={`payment-method ${
          selectedMethod === "upi" ? "active" : ""
        }`}
        onClick={() => handleMethodChange("upi")}
      >
        UPI
      </div>
    </div>
    <div className="payment-form-container">
      <div className="payment-options">
        {selectedMethod === "card" && <CardPaymentForm />}
        {selectedMethod === "upi" && <UpiPaymentForm />}
      </div>
    </div>
  </div>
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

  const handlePaymentSubmit = async () => {
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

    if (isCardNumberValid && isExpiryValid && isCVVValid && customerName && isMobileNumberValid) {
      // Process the payment
      // ...
      alert("Payment successful!");
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
    <div className="payment-form">
      {/* <h2>Secure Payment</h2> */}
      <div className="input-group">
        <label>Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />
        {customerNameError && (
          <span className="error-message">{customerNameError}</span>
        )}
      </div>
      <div className="input-group">
        <label>Mobile Number</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          maxLength="10"
          placeholder="Enter your mobile number"
        />
        {mobileNumberError && (
          <span className="error-message">{mobileNumberError}</span>
        )}
      </div>
      <div className="input-group">
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
          placeholder="1234-5678-9012-3456"
        />
        {cardNumberError && (
          <span className="error-message">{cardNumberError}</span>
        )}
      </div>
      <div className="input-group">
        <label>Expiry Date (MM/YY)</label>
        <DatePicker
          selected={expiry}
          onChange={(date) => setExpiry(date)}
          dateFormat="MM/yy"
          showMonthYearPicker
          placeholderText="MM/YY"
        />
        {expiryError && <span className="error-message">{expiryError}</span>}
      </div>
      <div className="input-group">
        <label>CVV</label>
        <input
          type="password"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          maxLength="3"
          placeholder="123"
        />
        {cvvError && <span className="error-message">{cvvError}</span>}
      </div>
      <button className="payment-button" onClick={handlePaymentSubmit}>
        {isProcessing ? "Processing..." : "Make Payment"}
      </button>
    </div>
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

  const handlePaymentSubmit = async () => {
    setUpiIdError("");
    setCustomerNameError("");
    setMobileNumberError("");

    // const upiIdRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;
    const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/;
    const mobileNumberRegex = /^\d{10}$/;

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
      alert("Payment successful!");
    }
  };

  return (
    <div className="payment-form">
      {/* <h2>UPI Payment</h2> */}
      <div className="input-group">
        <label>Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />
        {customerNameError && (
          <span className="error-message">{customerNameError}</span>
        )}
      </div>
      <div className="input-group">
        <label>Mobile Number</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          maxLength="10"
          placeholder="Enter your mobile number"
        />
        {mobileNumberError && (
          <span className="error-message">{mobileNumberError}</span>
        )}
      </div>
      <div className="input-group">
        <label>Enter UPI ID</label>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="example@upi"
        />
        {upiIdError && <span className="error-message">{upiIdError}</span>}
      </div>
      <button className="payment-button" onClick={handlePaymentSubmit}>
        {isProcessing ? "Processing..." : "Make Payment"}
      </button>
    </div>
  );
};

export default PaymentPage;
