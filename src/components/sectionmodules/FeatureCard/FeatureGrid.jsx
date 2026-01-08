// FeatureGrid.jsx
import React from "react";
import PropTypes from "prop-types";
import FeatureCard from "./FeatureCard";
import SXContainer from "../../../layout/SXContainer";
import "./FeatureGrid.css";

/**
 * FeatureGrid - Fully responsive grid with fluid layout (No MUI)
 * 
 * Breakpoints:
 *  - xs:   <600px  (mobile) - 1 column, full width
 *  - sm:   600-899px (tablet) - 2 columns
 *  - md+:  >=900px  (laptop & large) - 3 columns
 */
export default function FeatureGrid({
  items = [],
  cardWidth = 490,
  cardHeight = 140,
  spacing = 3,
  containerSx = {},
}) {
  return (
    <section className="feature-grid-section">
      <SXContainer
        disableGutters
        py={0}
        sx={{ p: 0 }}
      >
        <h2 className="feature-grid-title">
          Our Track Record
        </h2>

        <div className="feature-grid-container">
          {items.map((text, idx) => (
            <div key={idx} className="feature-grid-item">
              <FeatureCard text={text} />
            </div>
          ))}
        </div>
      </SXContainer>
    </section>
  );
}

FeatureGrid.propTypes = {
  items: PropTypes.array.isRequired,
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spacing: PropTypes.number,
  containerSx: PropTypes.object,
};

FeatureGrid.defaultProps = {
  items: [],
  cardWidth: 360,
  cardHeight: 140,
  spacing: 3,
};