import React from 'react';
import styles from './SubscriptionTier.module.css';
const SubscriptionTier = ({ title, price, features, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(isSelected ? null : title);
  };

  return (
    <div
      className={`${styles.subscriptionTier} ${
        isSelected ? styles.selected : styles.unselected
      }`}
      onClick={handleSelect}
    >
      <div className={styles.selectionIndicator}>
        {isSelected && <span className={styles.tickMark}>✔</span>}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>${price} / month</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionTier;
