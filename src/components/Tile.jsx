import React from 'react';

const Tile = ({ leaf, color, handleMouseEnter, handleMouseLeave }) => {
  const shareSize = leaf.x1 - leaf.x0;
  const showText = shareSize > 2;
  let textSize;

  if (shareSize > 10) {
    textSize = Math.min((leaf.x1 - leaf.x0) / 8, 32); 
  } else if (shareSize <= 10 && shareSize > 5) {
    textSize = Math.min((leaf.x1 - leaf.x0) / 10, 16);
  } else {
    textSize = Math.min((leaf.x1 - leaf.x0) / 12, 12);
  }

  const textY = textSize + 5;

  return (
    <g className="tile-container" transform={`translate(${leaf.x0}, ${leaf.y0})`} onMouseEnter={(event) => handleMouseEnter(event, leaf)} onMouseLeave={handleMouseLeave}>
      <rect className="tile" width={leaf.x1 - leaf.x0} height={leaf.y1 - leaf.y0} fill={`hsl(${color(leaf.data.Sector)}, 50%, 50%)`}></rect>
      {showText && (
        <svg x="0" y="0" width={leaf.x1 - leaf.x0} height={leaf.y1 - leaf.y0}>
          <text className="tile-text" x="6" y={textY} fontSize={textSize} fill="white">{leaf.data.Name}</text>
        </svg>
      )}
    </g>
  );
}

export default Tile;
