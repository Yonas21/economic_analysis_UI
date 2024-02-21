import React from 'react';
import './tooltip.css';

const Tooltip = ({ tooltip }) => {
  const formattedShare = tooltip?.Share?.toFixed(2);
  return (
    <div className="tooltip" style={{ top: tooltip.top, left: tooltip.left }}>
      <div><strong>{tooltip.Name}</strong></div>
      <div>
        <span>Code:</span> {tooltip.Code}
      </div>
      <div>
        <span color='yellow'>Gross Export:</span> {tooltip.gross_export}
      </div>
      <div>
        <span>Share:</span> {formattedShare}%
      </div>
    </div>
  );
}

export default Tooltip;
