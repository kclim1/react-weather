/* eslint-disable no-unused-vars */
// src/components/MetricButton.jsx
import React from 'react';

// eslint-disable-next-line react/prop-types
const MetricButton = ({ unit, selectMetric }) => {
    return (
        <button
            className={`btn me-2 ${
                unit === "metric" ? "btn-primary active" : "btn-secondary"
            }`}
            onClick={selectMetric}
        >
            Metric
        </button>
    );
};

export default MetricButton;
