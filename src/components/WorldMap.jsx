import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const WorldMap = () => {
	const svgRef = useRef();
	const [data, setData] = useState([]);

	useEffect(() => {
		const svg = d3.select(svgRef.current);

		const width = 960;
		const height = 500;

		const projection = d3.geoNaturalEarth1().fitSize([width, height], {
			type: "FeatureCollection",
			features: [
				{
					type: "Feature",
					geometry: {
						type: "Polygon",
						coordinates: [
							// ... world map coordinates
						],
					},
					properties: {
						name: "World",
					},
				},
			],
		});

		const path = d3.geoPath().projection(projection);

		// Load sample country data
		d3.json(
			"https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries.json"
		).then((world) => {
			const countries = world.features.map((feature) => ({
				...feature,
				properties: {
					...feature.properties,
					population: Math.floor(Math.random() * 100000000), // Sample population data
				},
			}));
			setData(countries);
		});

		const tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("opacity", 0)
			.style("background-color", "white")
			.style("border-radius", "5px")
			.style("padding", "5px");

		svg.selectAll("path")
			.data(data)
			.enter()
			.append("path")
			.attr("d", path)
			.attr("fill", "#ccc")
			.on("mouseover", (d) => {
				tooltip.html(`
          <b>${d.properties.name}</b>
          <br/>
          Population: ${d.properties.population.toLocaleString()}`);
				tooltip.style("opacity", 1);
				tooltip.style("left", d3.event.pageX + 10 + "px");
				tooltip.style("top", d3.event.pageY + 10 + "px");
			})
			.on("mousemove", () =>
				tooltip
					.style("left", d3.event.pageX + 10 + "px")
					.style("top", d3.event.pageY + 10 + "px")
			)
			.on("mouseout", () => tooltip.style("opacity", 0));

		return () => {
			svg.remove();
			tooltip.remove();
		};
	}, []);

	return <svg ref={svgRef} width={960} height={500} />;
};

export default WorldMap;
