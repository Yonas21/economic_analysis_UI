import { Chart } from "react-google-charts";
import { mapData, options } from "../data";


const WorldMap = () => {
	return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
			console.log("get selection ======", selection)
            if (selection.length === 0) return;
            const region = mapData[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
	options={options}
      width="100%"
      height="400px"
      data={mapData}
    />
	)
};

export default WorldMap;
