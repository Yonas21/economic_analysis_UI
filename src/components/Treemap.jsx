import { useState, useEffect } from 'react';
import { treemap, hierarchy, scaleOrdinal } from 'd3';
import LegendIcon from './LegendIcon';
import Tile from './Tile';
import Tooltip from './Tooltip';
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'; // Import Chakra UI Box component for layout

const Treemap = ({ data, colorData }) => {
  const margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  const w = 2000; // Increase the width
  const h = 2000; // Adjust height accordingly
  
  const color = scaleOrdinal()
    .domain(data.children)
    .range(colorData);

  
  const [leaves, setLeaves] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    drawTree();
  }, []);

  function drawTree() {
    const root = hierarchy(data)
      .sum(d => d.Share)
      .sort((a, b) => b.Share - a.Share);
    const treemapRoot = treemap()
      .size([w - margin.left - margin.right, h - margin.top - margin.bottom])
      .padding(2);
  
    treemapRoot(root);
  
    const maxShare = Math.max(...root.descendants().map(node => node.data.Share));
    root.each(node => {
      const ratio = node.data.Share / maxShare;
      node.x0 = node.x0 + node.x0 * ratio; 
      node.y0 = node.y0 + node.y0 * ratio; 
    });
  
    setLeaves(treemapRoot(root).leaves());
  }

  function handleMouseEnter(event, Share) {
    setTooltip({
      category: Share.data.category,
      Name: Share.data.Name,
      Share: Share.data.Share,
      left: `${event.pageX - 50}px`,
      top: `${event.pageY - 90}px`
    });
  }

  function handleMouseLeave() {
    setTooltip(null);
  }

  return (
    <Box className="treemap-container" position="fixed" width="1500px" height="400px" mb={4}>
      <svg className="treemap" viewBox={`0 0 1500 650`} transform="translate(0, 20)">
        <g className="diagram" transform={`translate(${margin.left}, ${margin.top})`}>
          {leaves.map((leaf, i) => (
            <Tile
            key={i}
            leaf={leaf}
            color={color}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            />
            ))}
        </g>
      </svg>
      <LegendIcon categories={data.children} color={color} />
      {tooltip && <Tooltip tooltip={tooltip} />}
    </Box>
  );
  
}

export default Treemap;
Treemap.propTypes = {
  data: PropTypes.array.isRequired, 
  colorData: PropTypes.array.isRequired, 
};