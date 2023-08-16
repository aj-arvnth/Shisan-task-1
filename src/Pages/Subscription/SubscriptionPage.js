import React, { useState } from "react";
import SubscriptionTier from "./SubscriptionTier";
import { Link } from "react-router-dom";
import styles from "./SubscriptionTier.module.css";
import SubscriptionNavbar from "./SubscriptionNavbar";

const SubscriptionPage = () => {

  const [selectedTierIndex, setSelectedTierIndex] = useState(null);
  const handleTierSelection = (index) => {
    setSelectedTierIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const tiers = [
    {
      title: "Basic",
      price: 9.99,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Standard",
      price: 19.99,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Premium",
      price: 29.99,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];



  return (
    <div>
    <SubscriptionNavbar />
    <div className={styles.subscriptionPage}>
      {tiers.map((tier, index) => (
        <SubscriptionTier
          key={index}
          title={tier.title}
          price={tier.price}
          features={tier.features}
          isSelected={index === selectedTierIndex}
          onSelect={() => handleTierSelection(index)}
        />
      ))}
    </div>
    <div className={styles.continueButtonContainer}>
      {selectedTierIndex !== null ? (
        <Link
            to={`/payment`} 
            className={styles.continueButton}
          >
          Continue
        </Link>
      ) : (
        <p style={{color:"whitesmoke"}}>Please select a subscription tier</p>
      )}
    </div>
  </div>
  );
};

export default SubscriptionPage;
