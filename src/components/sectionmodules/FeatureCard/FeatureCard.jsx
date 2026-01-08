// FeatureCard.jsx
import React from "react";
import PropTypes from "prop-types";
import "./FeatureCard.css";

/**
 * FeatureCard - Fully responsive card with fluid layout (No MUI)
 * All boxes are 100% width on mobile/tablet, fluid on desktop
 */
const FeatureCard = ({
    text,
    width,
    height,
    bg = "#D9D9D9",
    sx = {},
    ...others
}) => {
    return (
        <div
            className="feature-card"
            style={{ backgroundColor: bg }}
            {...others}
        >
            <p className="feature-card-text">
                {text}
            </p>
        </div>
    );
};

FeatureCard.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    bg: PropTypes.string,
    sx: PropTypes.object,
};

FeatureCard.defaultProps = {
    bg: "#D9D9D9",
};

export default FeatureCard;