import {
	Box,
	Center,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Divider,
	Heading,
	ButtonGroup,
	Button,
	HStack,
	Image,
	Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { continents, countries } from "countries-list";
import Select from "react-select";
import {
	GeoMapImage,
	GlobalshareImage,
	OvertimeImage,
	TreemapImage,
} from "../data/images";

const geoFilter = [
	{
		image: TreemapImage,
		title: "Tree Map",
		alt: "TreemapImage",
	},
	{
		image: GeoMapImage,
		title: "Geo Map",
		alt: "GeoMapImage",
	},
	{
		image: OvertimeImage,
		title: "Over Time",
		alt: "OvertimeImage",
	},
	{
		image: GlobalshareImage,
		title: "Global Share",
		alt: "GlobalshareImage",
	},
];
const Visualization = () => {
	const [countryList, setcountryList] = useState({});
	const [selectedId, setSelectedId] = useState(null);

	const handleClick = (id) => {
		setSelectedId((prevId) => (prevId === id ? null : id));
	};

	useEffect(() => {
		// Create an object where keys are continents and values are arrays of countries
		const countriesByContinent = Object.keys(continents).reduce(
			(grouped, continentCode) => {
				const continentName = continents[continentCode];
				grouped[continentName] = [];
				return grouped;
			},
			{}
		);

		// Populate the countriesByContinent object with countries
		Object.keys(countries).forEach((countryCode) => {
			const country = countries[countryCode];
			const continentName = continents[country.continent];
			countriesByContinent[continentName].push({
				value: countryCode,
				label: country.name,
			});
		});

		const continentOptions = Object.entries(countriesByContinent).map(
			([continent, countries]) => ({
				label: continent,
				options: countries.map((country) => ({
					value: country.value,
					label: country.label,
				})),
			})
		);

		console.log(countriesByContinent);
		setcountryList(continentOptions);
	}, []);

	return (
		<Center>
			<Box>
				<Box ml={10}>
					<Tabs variant="unstyled" mt={10}>
						<TabList>
							<Tab
								_selected={{
									bg: "rgb(185,191,196)",
									outline: "none",
								}}
								style={{
									color: "rgb(58, 65, 72)",
									bg: "rgb(185, 191, 197)",
									padding: "0.4rem 0.6rem",
									marginRight: "140px",
									border: "2px solid rgb(185, 191, 197)",
								}}
							>
								Location
							</Tab>
							<Tab
								_selected={{
									bg: "rgb(185,191,196)",
									outline: "none",
								}}
								style={{
									color: "rgb(58, 65, 72)",
									bg: "rgb(185, 191, 197)",
									paddingX: "0.4rem 0.6rem",
									border: "2px solid rgb(185, 191, 197)",
								}}
							>
								Product
							</Tab>
						</TabList>
						<TabPanels pt="10px">
							<TabPanel>
								<Stack>
									<Select
										options={countryList}
										isSearchable={false}
										placeholder="Select Location"
										styles={{
											groupHeading: (provided) => ({
												...provided,
												fontWeight: "bold",
												paddingLeft: 10,
											}),
										}}
									/>

									<Divider orientation="horizontal" />
									<Box>
										<Heading
											textTransform="uppercase"
											textAlign="center"
										>
											trade visualizations
										</Heading>
										<ButtonGroup
											size="sm"
											isAttached
											variant="outline"
											mt={3}
										>
											<Button
												w={150}
												_focus={{
													outline: "none",
													bg: "rgb(185,191,196)",
												}}
											>
												Exports
											</Button>
											<Button
												w={150}
												_focus={{
													outline: "none",
													bg: "rgb(185,191,196)",
												}}
											>
												Imports
											</Button>
										</ButtonGroup>
									</Box>
									<HStack fontSize="sm">
										{geoFilter.map((data, _index) => (
											<Box
												key={_index}
												w="70px"
												h="80px"
												border="1px solid rgb(185, 191, 197)"
												bg={
													selectedId === _index
														? "rgb(185, 191, 197)"
														: ""
												}
												cursor="pointer"
												onClick={() =>
													handleClick(_index)
												}
												transition="background-color  0.2s ease-in-out"
											>
												<Text>{data.title}</Text>
												<Image
													src={data.image}
													alt={data.alt}
												/>
											</Box>
										))}
									</HStack>
									<Box textTransform="capitalize">
										<ButtonGroup
											size="sm"
											isAttached
											variant="outline"
											mt={3}
										>
											<Button
												w={150}
												_focus={{
													outline: "none",
													bg: "rgb(185,191,196)",
												}}
											>
												by Product
											</Button>
											<Button
												w={150}
												_focus={{
													outline: "none",
													bg: "rgb(185,191,196)",
												}}
											>
												By Partner
											</Button>
										</ButtonGroup>
										<Select
										options={countryList}
										isSearchable={false}
										placeholder="Select a product"
										styles={{
											groupHeading: (provided) => ({
												...provided,
												fontWeight: "bold",
												paddingLeft: 10,
											}),
										}}
									/>
									</Box>
								</Stack>
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Box>
		</Center>
	);
};

export default Visualization;
