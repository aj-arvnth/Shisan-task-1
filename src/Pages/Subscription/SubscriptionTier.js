import React from "react";
import styles from "./Card.css";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
const SubscriptionTier = ({ title, price, features, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(isSelected ? null : title);
  };

  const cardClass = isSelected ? "card dark" : "card light";

  const packageIcons = {
    Basic: <PersonIcon style={{ fontSize: 50 }} />,
    Standard: <GroupIcon style={{ fontSize: 55 }} />,
    Premium: <GroupsIcon style={{ fontSize: 70 }} />,
  };

  return (
    <div className="container">
      <div className="card-wrapper">
        <div
          className={`${styles.card} ${
            isSelected ? styles.selected : styles.light
          }`}
          onClick={handleSelect}
        >
          <div className={cardClass}>
            <div className="purchase-button-container">
              {packageIcons[title]}
              <div className="back">{title}</div>
              <div className={styles.selectionIndicator}>
                {isSelected && <span className={styles.tickMark}>✔</span>}
              </div>
            </div>
            <div className="text-overlay">
              <div className="front">{title}</div>
              <div className="price">{price}</div>

              <div className="details-text">
                {features.map((details, index) => (
                  <span key={index}>{details}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTier;
