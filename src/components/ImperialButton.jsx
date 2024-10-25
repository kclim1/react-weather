/* eslint-disable no-unused-vars */
// src/components/ImperialButton.jsx
import React from 'react';

// eslint-disable-next-line react/prop-types
const ImperialButton = ({ unit, selectImperial }) => {
    return (
        <button
            className={`btn ${
                unit === "imperial" ? "btn-primary active" : "btn-secondary"
            }`}
            onClick={selectImperial}
        >
            Imperial
        </button>
    );
};

export default ImperialButton;
