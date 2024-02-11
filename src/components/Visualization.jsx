import {
	Box,
	Center,
	Radio,
	RadioGroup,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import { useState } from "react";

const Visualization = () => {
	const [selectedButton, setSelectedButton] = useState("digit1");

	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};

	return (
		<Center h="70vh">
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
						<TabPanels>
							<TabPanel>
								<p>one!</p>
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
				<Box borderRadius="md" p={4}>
					<Center>
						<Stack direction="column" spacing={0} align="center">
							<RadioGroup
								onChange={handleButtonClick}
								value={selectedButton}
							>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit1"
										borderTopRadius="md"
										borderBottom="none"
										p={2}
										width="100%"
									>
										SITC rev.2 (1962-2021)
									</Radio>
								</Box>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit4"
										borderBottomRadius="md"
										borderTop="none"
										p={2}
										width="100%"
									>
										HS 1992 (1995-2021)
									</Radio>
								</Box>
							</RadioGroup>
						</Stack>
					</Center>
				</Box>
				<Box ml={10}>Trade Flow</Box>
				<Box borderRadius="md" p={4}>
					<Center>
						<Stack direction="column" spacing={0} align="center">
							<RadioGroup
								onChange={handleButtonClick}
								value={selectedButton}
							>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit1"
										borderTopRadius="md"
										borderBottom="none"
										p={2}
										width="100%"
									>
										Gross
									</Radio>
								</Box>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit4"
										borderBottomRadius="md"
										borderTop="none"
										p={2}
										width="100%"
									>
										Net
									</Radio>
								</Box>
							</RadioGroup>
						</Stack>
					</Center>
				</Box>
				<Box ml={10} mt={10}>
					Detail Level
				</Box>
				<Box borderRadius="md" p={4}>
					<Center>
						<Stack direction="column" spacing={0} align="center">
							<RadioGroup
								onChange={handleButtonClick}
								value={selectedButton}
							>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit1"
										borderTopRadius="md"
										borderBottom="none"
										p={2}
										width="100%"
									>
										1 Digit (Sector Level)
									</Radio>
								</Box>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit2"
										borderBottomRadius="md"
										borderTop="none"
										p={2}
										width="100%"
									>
										2 Digit
									</Radio>
								</Box>
								<Box
									border="1px"
									borderColor="gray.300"
									width="120%"
								>
									<Radio
										value="digit4"
										borderBottomRadius="md"
										borderTop="none"
										p={2}
										width="100%"
									>
										4 Digit
									</Radio>
								</Box>
							</RadioGroup>
						</Stack>
					</Center>
				</Box>
			</Box>
		</Center>
	);
};

export default Visualization;
