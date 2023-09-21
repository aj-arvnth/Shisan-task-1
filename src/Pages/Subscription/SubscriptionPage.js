import React, { useState } from "react";
import SubscriptionTier from "./SubscriptionTier";
import { Link } from "react-router-dom";
import styles from "./SubscriptionTier.module.css";
import tiers from "./SubscriptionData";
import SubscriptionNavbar from "./SubscriptionNavbar";

const SubscriptionPage = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(null);
  const handleTierSelection = (index) => {
    setSelectedTierIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <SubscriptionNavbar />
      <div className={styles.subscriptionPage}>
        {tiers.map((tier, index) => (
          <SubscriptionTier
            key={index}
            title={tier.title}
            price= {`₹ ${tier.price} / month`}
            features={tier.features}
            isSelected={index === selectedTierIndex}
            onSelect={() => handleTierSelection(index)}
          />
        ))}
      </div>
      <div className={styles.continueButtonContainer}>
        {selectedTierIndex !== null ? (
          <Link
            to={`/payment/${selectedTierIndex}`}
            className={styles.continueButton}
          >
            Continue
          </Link>
        ) : (
          <p className={styles.whitesmokeText} >Please select a subscription tier</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
