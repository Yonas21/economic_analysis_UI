import {
	Box,
	Center,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Heading,
	ButtonGroup,
	Button,
	HStack,
	Image,
	Text,
	Container,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { continents, countries } from "countries-list";
import Select from "react-select";
import Divider from "./Divider";
import { complexityFilter, geoFilter, hs_goods_data } from "../data";

const Visualization = () => {
	const [countryList, setcountryList] = useState({});
	const [selectedId, setSelectedId] = useState(null);
	const [complexity, setComplexity] = useState(null);
	const [filteredHS, setfilteredHS] = useState(null);
	const handleClick = (id) => {
		setSelectedId((prevId) => (prevId === id ? null : id));
	};

	const handleComplexityClick = (id) => {
		setComplexity((prevId) => (prevId === id ? null : id));
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


		const hs = hs_goods_data.map((data) => {
			return {
				label: `${data.name_short_en}`,
				value: data.name_en,
			};
		});
				console.log("unfiltered", hs_goods_data);
				console.log("filteted",hs);

		setfilteredHS(hs);
		setcountryList(continentOptions);
	}, []);

	return (
		<Center overflowY="auto">
			<Box>
				<Box ml={10}>
					<Tabs variant="unstyled" mt={2}>
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
									marginRight: "90px",
									border: "2px solid rgb(185, 191, 197)",
									textTransform: "uppercase",
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
									textTransform: "uppercase",
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

									<Divider />
									<Box>
										<Heading
											textTransform="uppercase"
											textAlign="center"
											color="rgb(224, 118, 66)"
											fontWeight="400"
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
												w="80px"
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
												<Text fontSize="0.75rem">{data.title}</Text>
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
											options={filteredHS}
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

									<Divider />

									<Box>
										<Heading
											textTransform="uppercase"
											textAlign="center"
											color="rgb(224, 118, 66)"
											fontWeight="400"
										>
											complexity visualizations
										</Heading>

										<HStack>
											{complexityFilter.map(
												(data, _index) => (
													<Box
														key={_index}
														w="80px"
														h="60px"
														borderRadius="0.5px"
														border="1px solid rgb(185, 191, 197)"
														bg={
															complexity ===
															_index
																? "rgb(185, 191, 197)"
																: ""
														}
														cursor="pointer"
														onClick={() =>
															handleComplexityClick(
																_index
															)
														}
														transition="background-color  0.2s ease-in-out"
													>
														<Text fontSize="0.75rem">
															{data.title}
														</Text>
														<Image
															width="36px"
															src={data.image}
															alt={data.alt}
														/>
													</Box>
												)
											)}
										</HStack>
									</Box>
									<Divider />
									<Box>
										<Heading
											textTransform="capitalize"
											textAlign="left"
											fontWeight="800"
										>
											Tree Map
										</Heading>

										<Stack>
											<Container>
												The Tree Map displays the
												breakdown of exports or imports
												by location or product, in a
												given year.
											</Container>
											<a
												href="/countries/231"
												target="_blank"
												style={{
													display: "flex",
													textTransform: "uppercase",
													fontWeight: 400,
													border: "1px solid rgb(224, 118, 66)",
													padding:
														"1rem 1rem 1rem 0.5rem",
													marginBottom: "10px",
												}}
											>
												{`Explore the country's profile`}
												<span
													style={{
														marginTop: "10px",
													}}
												>
													<svg
														id="__1UFlyIY__Layer_1"
														data-name="Layer 1"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 10.7 10.7"
														fill="rgb(224, 118, 66)"
														width="10px"
													>
														<polygon points="10.7 8.86 9.7 8.86 9.7 1 1.85 1 1.85 0 10.7 0 10.7 8.86"></polygon>
														<rect
															x="-1.2"
															y="5.14"
															width="13.93"
															height="1"
															transform="translate(-2.79 5.52) rotate(-45)"
														></rect>
													</svg>
												</span>
											</a>
											<a
												href="https://metroverse.cid.harvard.edu/?country=231"
												target="_blank"
												rel="noreferrer"
												style={{
													display: "flex",
													textTransform: "uppercase",
													fontWeight: 400,
													border: "1px solid rgb(224, 118, 66)",
													padding:
														"1rem 1rem 1rem 0.5rem",
												}}
											>
												{`Explore the country's cities`}
												<span
													style={{
														marginTop: "10px",
													}}
												>
													<svg
														id="__1UFlyIY__Layer_1"
														data-name="Layer 1"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 10.7 10.7"
														fill="rgb(224, 118, 66)"
														width="10px"
													>
														<polygon points="10.7 8.86 9.7 8.86 9.7 1 1.85 1 1.85 0 10.7 0 10.7 8.86"></polygon>
														<rect
															x="-1.2"
															y="5.14"
															width="13.93"
															height="1"
															transform="translate(-2.79 5.52) rotate(-45)"
														></rect>
													</svg>
												</span>
											</a>{" "}
										</Stack>
									</Box>
								</Stack>
							</TabPanel>
							<TabPanel>
								<Stack>
									<Select
										options={filteredHS}
										isSearchable={false}
										placeholder="Select and HS good or service"
										styles={{
											groupHeading: (provided) => ({
												...provided,
												fontWeight: "bold",
												paddingLeft: 10,
											}),
										}}
									/>

									<Divider />
									<Box>
										<Heading
											textTransform="uppercase"
											textAlign="center"
											color="rgb(224, 118, 66)"
											fontWeight="400"
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

									<Divider />
									<Box>
										<Heading
											textTransform="capitalize"
											textAlign="left"
											fontWeight="800"
										>
											Geo Map
										</Heading>

										<Stack>
											<Container>
												The Geo Map displays the value
												of trade flows, by location or
												by product, in a given year.
												Hover on a country for more
												information.
											</Container>
											<a
												href="/countries/231"
												target="_blank"
												style={{
													display: "flex",
													textTransform: "uppercase",
													fontWeight: 400,
													border: "1px solid rgb(224, 118, 66)",
													padding:
														"1rem 1rem 1rem 0.5rem",
													marginBottom: "10px",
												}}
											>
												{`Explore the product complexity ranking(PCI)`}
												<span
													style={{
														marginTop: "10px",
													}}
												>
													<svg
														id="__1UFlyIY__Layer_1"
														data-name="Layer 1"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 10.7 10.7"
														fill="rgb(224, 118, 66)"
														width="10px"
													>
														<polygon points="10.7 8.86 9.7 8.86 9.7 1 1.85 1 1.85 0 10.7 0 10.7 8.86"></polygon>
														<rect
															x="-1.2"
															y="5.14"
															width="13.93"
															height="1"
															transform="translate(-2.79 5.52) rotate(-45)"
														></rect>
													</svg>
												</span>
											</a>
										</Stack>
									</Box>
								</Stack>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Box>
		</Center>
	);
};

export default Visualization;
