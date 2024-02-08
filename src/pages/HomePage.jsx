// eslint-disable-next-line no-unused-vars
import React, { useCallback, useRef, useState } from "react";
import {
	Flex,
	Box,
	Heading,
	Spacer,
	ButtonGroup,
	Button,
	Container,
	SimpleGrid,
	Image,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { intro_stats, thumbnail_stats } from "../data";
import { ArrowUpIcon } from "@chakra-ui/icons";
import back from "../assets/header-video.22db7ccd0029a59f17b65d21037d7ffd.mp4";
import vishub from "../assets/VizHubPattern.abf0fa1a204f19d7c623dae7da17e1d3.png";
import metroverseImage from "../assets/metroverse-logo.d18b004ee98de488adf80d1072c4fb6c.png";
import bloombergImage from "../assets/Bloomberg_white.4657d5045c8c7b7e39aa25244b8f1112.png";
import financialTimesImage from "../assets/financialtimes_white.1f84bd3e7e7e8f4d25e9e604a121ecb5.png";
import nprImage from "../assets/npr_white.98c42a9259cd31a20e30cb1283ed1858.png";

function HomePage() {
	const videoRefs = intro_stats.reduce((refs, _, index) => {
		refs[index] = React.createRef();
		return refs;
	}, {});

	const handleMouseEnter = useCallback(
		(index) => {
			if (videoRefs[index].current) {
				videoRefs[index].current.play();
			}
		},
		[videoRefs]
	);

	const handleMouseLeave = useCallback(
		(index) => {
			if (videoRefs[index].current) {
				videoRefs[index].current.pause();
			}
		},
		[videoRefs]
	);

	return (
		<Box position="relative">
			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					height: "50vh", // Set the height to cover the viewport
					objectFit: "cover",
				}}
			>
				<source src={back} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<Box zIndex={1} position="relative" px={4}>
				<Flex minWidth="max-content" alignItems="center" gap="96">
					<Box p="2">
						<Heading color="white" fontSize={"35px"}>
							Economic Analytics
						</Heading>
					</Box>
					<Spacer />
					<ButtonGroup gap="2">
						<Button colorScheme="teal">Sign Up</Button>
						<Button colorScheme="teal">Log in</Button>
					</ButtonGroup>
				</Flex>
				<Container centerContent>
					<Heading color="white" fontSize="50px">
						THE ATLAS OF ECONOMIC COMPLEXITY
					</Heading>
					<Box padding="4" color="white" maxW="xl" fontSize={24}>
						Harvard Growth Lab’s research and data visualization
						tool used to understand the economic dynamics and new
						growth opportunities for every country worldwide.
					</Box>
				</Container>
			</Box>
			<Box>
				<SimpleGrid columns={2} paddingX={10}>
					{intro_stats.map((item, id) => (
						<Box
							key={id}
							maxW="xl"
							borderWidth="1px"
							borderRadius="md"
							overflow="hidden"
							boxShadow="rgba(0, 0, 0, 0.28) 0px 0px 9px 1px"
							marginBottom={20}
							onMouseEnter={() => handleMouseEnter(id)}
							onMouseLeave={() => handleMouseLeave(id)}
						>
							<video
								ref={videoRefs[id]}
								loop
								muted
								style={{
									position: "relative",
									width: "100%",
									height: "50vh", // Set the height to cover the viewport
									objectFit: "cover",
								}}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<source src={item.media} type="video/mp4" />
								Your browser does not support the video tag.
							</video>

							<Box p="6">
								<Box display="flex" alignItems="baseline">
									<Heading
										color="rgb(65, 85, 121)"
										fontSize={"28px"}
										textTransform={"uppercase"}
										borderBottom={
											"3px solid rgb(187, 176, 74)"
										}
									>
										{item.header}
									</Heading>
								</Box>

								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									noOfLines={4}
								>
									{item.detail}
								</Box>

								<Box display="flex" mt="2" textAlign="right">
									<Button
										ml="auto"
										border="1px solid rgb(186, 176, 74)"
										padding="0.5rem"
										color="rgb(186, 176, 74)"
										float="right"
										borderRadius="30px"
										textTransform="uppercase"
									>
										{item.button}
									</Button>
								</Box>
							</Box>
						</Box>
					))}

					{thumbnail_stats.map((item) => (
						<Box
							key={item.header}
							maxW="xl"
							borderWidth="1px"
							borderRadius="md"
							overflow="hidden"
							boxShadow="rgba(0, 0, 0, 0.28) 0px 0px 9px 1px"
							marginBottom={20}
						>
							<Image src={item.media} alt={item.header} />

							<Box p="6">
								<Box display="flex" alignItems="baseline">
									<Heading
										color="rgb(65, 85, 121)"
										fontSize={"28px"}
										textTransform={"uppercase"}
										borderBottom={
											"3px solid rgb(187, 176, 74)"
										}
									>
										{item.header}
									</Heading>
								</Box>

								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									noOfLines={4}
									py={4}
								>
									{item.detail}
								</Box>

								<Box display="flex" mt="2" textAlign="right">
									<Button
										ml="auto"
										border="1px solid rgb(186, 176, 74)"
										padding="0.5rem"
										color="rgb(186, 176, 74)"
										float="right"
										borderRadius="30px"
										textTransform="uppercase"
									>
										{item.button}
									</Button>
								</Box>
							</Box>
						</Box>
					))}
				</SimpleGrid>
			</Box>
			<Grid
				templateColumns="repeat(2, 1fr)"
				gap={6}
				padding={10}
				backgroundImage={vishub}
			>
				<GridItem maxW="lg">
					<svg
						id="__3M9DytY__Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 244.53 44.65"
						fill="rgb(71, 86, 109)"
					>
						<rect
							className="cls-1"
							x="0.46"
							y="31.47"
							width="119"
							height="13.19"
						></rect>
						<path
							className="cls-2"
							d="M637.56,457.44v14.5H635.2v-6.46h-7.29v6.46h-2.37v-14.5h2.37v6.34h7.29v-6.34Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M653.84,471.94H652a.8.8,0,0,1-.5-.15,1.11,1.11,0,0,1-.29-.39L650,468.2h-6.25l-1.21,3.2a.87.87,0,0,1-.28.37.71.71,0,0,1-.5.17h-1.83l5.76-14.5h2.38Zm-4.47-5.44-2-5.3a13.41,13.41,0,0,1-.49-1.56c-.08.32-.16.61-.25.87s-.16.5-.24.7l-2,5.29Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M667.26,471.94h-2.11a1,1,0,0,1-.9-.48l-3.39-4.89a1.14,1.14,0,0,0-.37-.36,1.38,1.38,0,0,0-.61-.11h-1.31v5.84h-2.35v-14.5h4.27a8.93,8.93,0,0,1,2.46.29,4.58,4.58,0,0,1,1.7.83,3.32,3.32,0,0,1,1,1.29,4.39,4.39,0,0,1,.32,1.69,4.34,4.34,0,0,1-.23,1.41,4.18,4.18,0,0,1-.65,1.19,4.31,4.31,0,0,1-1.06.92,5.4,5.4,0,0,1-1.42.62,2.37,2.37,0,0,1,.75.73Zm-6.83-7.55a4.61,4.61,0,0,0,1.41-.2,2.8,2.8,0,0,0,1-.55,2.2,2.2,0,0,0,.6-.84,2.92,2.92,0,0,0,.2-1.08,2.19,2.19,0,0,0-.78-1.82,3.84,3.84,0,0,0-2.38-.62h-1.92v5.11Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M681.43,457.44l-5.89,14.5h-2.12l-5.89-14.5h1.89a.8.8,0,0,1,.5.15,1,1,0,0,1,.29.39l3.74,9.46a14.4,14.4,0,0,1,.55,1.83c.08-.34.16-.67.24-1a7.9,7.9,0,0,1,.28-.86l3.73-9.46a.81.81,0,0,1,.28-.37.71.71,0,0,1,.5-.17Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M694.82,471.94H693a.78.78,0,0,1-.5-.15,1,1,0,0,1-.29-.39L691,468.2h-6.25l-1.21,3.2a1,1,0,0,1-.28.37.71.71,0,0,1-.5.17h-1.83l5.75-14.5h2.39Zm-4.47-5.44-2-5.3a15.39,15.39,0,0,1-.5-1.56,7.7,7.7,0,0,1-.24.87c-.08.27-.17.5-.24.7l-2,5.29Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M708.24,471.94h-2.11a1,1,0,0,1-.91-.48l-3.38-4.89a1.25,1.25,0,0,0-.37-.36,1.38,1.38,0,0,0-.61-.11h-1.31v5.84h-2.36v-14.5h4.28a8.93,8.93,0,0,1,2.46.29,4.66,4.66,0,0,1,1.7.83,3.32,3.32,0,0,1,1,1.29,4.39,4.39,0,0,1,.32,1.69,4.34,4.34,0,0,1-.23,1.41,4,4,0,0,1-.66,1.19,4.09,4.09,0,0,1-1,.92,5.4,5.4,0,0,1-1.42.62,2.37,2.37,0,0,1,.75.73Zm-6.83-7.55a4.66,4.66,0,0,0,1.41-.2,2.76,2.76,0,0,0,1-.55,2.22,2.22,0,0,0,.61-.84,2.92,2.92,0,0,0,.2-1.08,2.17,2.17,0,0,0-.79-1.82,3.79,3.79,0,0,0-2.37-.62h-1.92v5.11Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M723.41,464.69a8,8,0,0,1-.52,2.95,6.6,6.6,0,0,1-1.48,2.29,6.51,6.51,0,0,1-2.29,1.48,7.84,7.84,0,0,1-3,.53h-5.49v-14.5h5.49a8,8,0,0,1,3,.52,6.68,6.68,0,0,1,2.29,1.49,6.6,6.6,0,0,1,1.48,2.29A8,8,0,0,1,723.41,464.69Zm-2.41,0a7.19,7.19,0,0,0-.33-2.25,4.79,4.79,0,0,0-1-1.68,4.11,4.11,0,0,0-1.53-1.05,5.18,5.18,0,0,0-2-.37H713V470h3.12a5.37,5.37,0,0,0,2-.36,4.13,4.13,0,0,0,1.53-1.06,4.79,4.79,0,0,0,1-1.68A7.1,7.1,0,0,0,721,464.69Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M744.27,464.8v5.74a8.42,8.42,0,0,1-5,1.56,8.93,8.93,0,0,1-3.19-.54,7.06,7.06,0,0,1-2.43-1.54,6.61,6.61,0,0,1-1.55-2.34,7.84,7.84,0,0,1-.55-3,8.31,8.31,0,0,1,.53-3,6.55,6.55,0,0,1,3.86-3.87,8.44,8.44,0,0,1,3.1-.54,9.25,9.25,0,0,1,1.63.14,8.06,8.06,0,0,1,1.39.38,6.26,6.26,0,0,1,1.19.58,6.33,6.33,0,0,1,1,.77l-.68,1.08a.66.66,0,0,1-.41.31.7.7,0,0,1-.54-.12L742,460a6.62,6.62,0,0,0-.75-.35,5.73,5.73,0,0,0-1-.28,7.2,7.2,0,0,0-1.31-.1,5.42,5.42,0,0,0-2.07.38,4.36,4.36,0,0,0-1.58,1.08,4.76,4.76,0,0,0-1,1.69,6.82,6.82,0,0,0-.35,2.23,6.68,6.68,0,0,0,.37,2.32,4.8,4.8,0,0,0,1.06,1.73,4.49,4.49,0,0,0,1.66,1.09,6.66,6.66,0,0,0,3.77.18,8.23,8.23,0,0,0,1.37-.53v-2.89h-2a.53.53,0,0,1-.37-.12.49.49,0,0,1-.13-.33V464.8Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M758.79,471.94h-2.11a1,1,0,0,1-.9-.48l-3.39-4.89a1.14,1.14,0,0,0-.37-.36,1.38,1.38,0,0,0-.61-.11H750.1v5.84h-2.36v-14.5H752a8.93,8.93,0,0,1,2.46.29,4.66,4.66,0,0,1,1.7.83,3.32,3.32,0,0,1,1,1.29,4.39,4.39,0,0,1,.32,1.69,4.34,4.34,0,0,1-.23,1.41,4.18,4.18,0,0,1-.65,1.19,4.31,4.31,0,0,1-1.06.92,5.4,5.4,0,0,1-1.42.62,2.37,2.37,0,0,1,.75.73ZM752,464.39a4.66,4.66,0,0,0,1.41-.2,2.68,2.68,0,0,0,1-.55,2.22,2.22,0,0,0,.61-.84,2.92,2.92,0,0,0,.2-1.08,2.17,2.17,0,0,0-.79-1.82,3.79,3.79,0,0,0-2.37-.62H750.1v5.11Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M774.69,464.69a8.21,8.21,0,0,1-.53,3,6.85,6.85,0,0,1-1.47,2.34,6.75,6.75,0,0,1-2.29,1.54,8.13,8.13,0,0,1-5.93,0,6.71,6.71,0,0,1-3.77-3.88,8.74,8.74,0,0,1,0-5.94,6.86,6.86,0,0,1,1.48-2.35,6.75,6.75,0,0,1,2.29-1.54,8.13,8.13,0,0,1,5.93,0,6.75,6.75,0,0,1,2.29,1.54,7,7,0,0,1,1.47,2.35A8.13,8.13,0,0,1,774.69,464.69Zm-2.41,0a6.9,6.9,0,0,0-.34-2.25,4.68,4.68,0,0,0-1-1.69,4.32,4.32,0,0,0-1.52-1.07,5.19,5.19,0,0,0-2-.37,5.09,5.09,0,0,0-2,.37,4.27,4.27,0,0,0-1.53,1.07,4.7,4.7,0,0,0-1,1.69,7.65,7.65,0,0,0,0,4.51,4.66,4.66,0,0,0,1,1.68,4.13,4.13,0,0,0,1.53,1.06,5.09,5.09,0,0,0,2,.37,5.19,5.19,0,0,0,2-.37,4.17,4.17,0,0,0,1.52-1.06,4.64,4.64,0,0,0,1-1.68A6.92,6.92,0,0,0,772.28,464.69Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M796.77,457.44l-4.51,14.5h-2.13l-3.4-10.41c0-.12-.08-.24-.12-.38s-.07-.28-.1-.43c0,.15-.07.3-.11.43s-.08.26-.12.38l-3.43,10.41h-2.13l-4.51-14.5h2a.85.85,0,0,1,.51.14.72.72,0,0,1,.28.4l2.72,9.3c0,.2.1.42.15.65s.09.48.14.74c0-.26.1-.5.16-.74s.12-.46.18-.65l3.12-9.3a.75.75,0,0,1,.28-.37.74.74,0,0,1,.5-.17h.69a.76.76,0,0,1,.5.15,1,1,0,0,1,.3.39l3.1,9.3a4.73,4.73,0,0,1,.18.63c.06.22.11.46.16.71.05-.25.09-.49.14-.71s.09-.44.14-.63l2.71-9.3a.69.69,0,0,1,.28-.38.8.8,0,0,1,.51-.16Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M809.4,459.4h-4.53v12.54h-2.34V459.4H798v-2H809.4Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M824.11,457.44v14.5h-2.36v-6.46h-7.28v6.46H812.1v-14.5h2.37v6.34h7.28v-6.34Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M842.33,470v2H834v-14.5h2.36V470Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M857.19,471.94h-1.83a.78.78,0,0,1-.5-.15,1,1,0,0,1-.29-.39l-1.21-3.2h-6.25l-1.21,3.2a1,1,0,0,1-.28.37.71.71,0,0,1-.5.17h-1.83l5.75-14.5h2.39Zm-4.47-5.44-2-5.3a15.39,15.39,0,0,1-.5-1.56,7.7,7.7,0,0,1-.24.87c-.08.27-.17.5-.24.7l-2,5.29Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M864.39,457.44a9.16,9.16,0,0,1,2.38.26,4.52,4.52,0,0,1,1.62.76,3,3,0,0,1,.93,1.21,4,4,0,0,1,.3,1.59,3,3,0,0,1-.16,1,2.86,2.86,0,0,1-.48.89,3.49,3.49,0,0,1-.82.75,4.89,4.89,0,0,1-1.17.56c2.06.43,3.08,1.53,3.08,3.27a4.1,4.1,0,0,1-.34,1.7,3.86,3.86,0,0,1-1,1.33,4.78,4.78,0,0,1-1.63.87,7.11,7.11,0,0,1-2.21.31h-5.32v-14.5Zm-2.47,1.84v4.53h2.36a3.64,3.64,0,0,0,2.26-.58,2,2,0,0,0,.74-1.68,2.05,2.05,0,0,0-.7-1.74,3.66,3.66,0,0,0-2.19-.53Zm2.92,10.8a4.07,4.07,0,0,0,1.35-.19,2.38,2.38,0,0,0,.9-.51,1.77,1.77,0,0,0,.5-.76,2.85,2.85,0,0,0,.16-.94,2,2,0,0,0-.7-1.62,3.45,3.45,0,0,0-2.22-.58h-2.91v4.6Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M671.16,481.62l-5.89,14.51h-2.12l-5.89-14.51h1.89a.78.78,0,0,1,.5.15,1,1,0,0,1,.29.39l3.74,9.46a15.73,15.73,0,0,1,.56,1.84c.07-.35.15-.67.23-1s.18-.6.28-.86l3.73-9.46a1,1,0,0,1,.28-.37.71.71,0,0,1,.5-.17Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M675.9,496.13h-2.36V481.62h2.36Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M689.89,482.49a1.09,1.09,0,0,1-.07.4,2,2,0,0,1-.17.36l-7.79,11h7.88v1.91h-11v-.93a.85.85,0,0,1,.06-.36,1.37,1.37,0,0,1,.16-.32l7.82-11h-7.61v-1.9h10.68Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M710.6,481.62v14.51h-2.35v-6.46H701v6.46h-2.37V481.62H701V488h7.29v-6.34Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M720.47,494.22a3.7,3.7,0,0,0,1.49-.28,3.12,3.12,0,0,0,1.12-.79,3.29,3.29,0,0,0,.7-1.21,4.89,4.89,0,0,0,.25-1.58v-8.74h2.34v8.74a6.52,6.52,0,0,1-.41,2.37,5.26,5.26,0,0,1-3,3.12,7,7,0,0,1-4.93,0,5.42,5.42,0,0,1-1.85-1.24,5.36,5.36,0,0,1-1.18-1.88,6.74,6.74,0,0,1-.41-2.37v-8.74h2.36v8.73a4.9,4.9,0,0,0,.24,1.58,3.75,3.75,0,0,0,.7,1.22,3.08,3.08,0,0,0,1.11.79A3.75,3.75,0,0,0,720.47,494.22Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M735.16,481.62a9.61,9.61,0,0,1,2.38.26,4.6,4.6,0,0,1,1.62.76,3,3,0,0,1,.93,1.21,4,4,0,0,1,.3,1.59,3,3,0,0,1-.16,1,2.66,2.66,0,0,1-.48.89,3.76,3.76,0,0,1-.82.76,4.88,4.88,0,0,1-1.17.55q3.07.66,3.08,3.27a4,4,0,0,1-.35,1.7,3.63,3.63,0,0,1-1,1.33,4.7,4.7,0,0,1-1.63.87,7.14,7.14,0,0,1-2.21.32h-5.32V481.62Zm-2.47,1.84V488h2.36a3.58,3.58,0,0,0,2.25-.58,2,2,0,0,0,.75-1.68,2.05,2.05,0,0,0-.7-1.74,3.68,3.68,0,0,0-2.19-.53Zm2.92,10.8a4.11,4.11,0,0,0,1.35-.19,2.46,2.46,0,0,0,.89-.5,1.93,1.93,0,0,0,.51-.76,3,3,0,0,0,.15-.95,2,2,0,0,0-.7-1.61,3.34,3.34,0,0,0-2.21-.59h-2.91v4.6Z"
							transform="translate(-625.54 -457.27)"
						></path>
						<path
							className="cls-2"
							d="M650.18,492a2.55,2.55,0,0,0-2.46,1.9H646v-3.85h.8a4.17,4.17,0,1,0,0-8.34,5.28,5.28,0,0,0-.9.1,5.67,5.67,0,0,0-10.58,1.21,3.15,3.15,0,0,0-.46,0,3.54,3.54,0,1,0,0,7.07h1.44v3.85h-1.73a2.54,2.54,0,1,0-2.47,3.17,2.58,2.58,0,0,0,2.47-1.9h2.36a.65.65,0,0,0,.63-.64v-4.48h3v4.58a2.54,2.54,0,1,0,1.27,0v-4.58h3v4.48a.65.65,0,0,0,.63.64h2.37a2.54,2.54,0,1,0,2.46-3.17Zm-18.09,3.8a1.27,1.27,0,1,1,1.27-1.27A1.26,1.26,0,0,1,632.09,495.84Zm10.32,1.27a1.27,1.27,0,1,1-1.27-1.27A1.26,1.26,0,0,1,642.41,497.11Zm7.77-1.27a1.27,1.27,0,1,1,1.27-1.27A1.28,1.28,0,0,1,650.18,495.84Z"
							transform="translate(-625.54 -457.27)"
						></path>
					</svg>
					<Button
						ml="auto"
						border="1px solid rgb(186, 176, 74)"
						padding="1.4rem 1.2rem 1.4rem 2rem"
						color="rgb(71, 86, 109)"
						borderRadius="30px"
						textTransform="uppercase"
						marginTop={10}
						fontSize={"1.25rem"}
						rightIcon={
							<ArrowUpIcon
								transform="rotate(45deg)"
								color="rgb(220, 80, 82)"
							/>
						}
						_hover={{ bg: "rgb(71, 86, 109)", color: "#fff" }}
					>
						go to vis hub
					</Button>
				</GridItem>
				<GridItem
					fontSize={"1.25rem"}
					lineHeight={1.7}
					backgroundColor={"white"}
					padding={"1.5rem 2rem"}
					borderLeft={"4px solid rgb(187, 176, 74)"}
				>
					<Container>
						The Atlas of Economic Complexity is part of Harvard's
						Growth Lab Viz Hub, a portfolio of award-winning,
						interactive visualizations powered by the Growth Lab's
						research and insights. Check out the Viz Hub to learn
						more about concepts found in the Atlas along with our
						other free, online tools and software packages.
					</Container>
				</GridItem>
			</Grid>

			<Grid templateColumns="repeat(2, 1fr)" gap={6} padding={10}>
				<GridItem maxW="lg">
					<Image src={metroverseImage} alt={"MetroVerse Image"} />

					<Button
						ml="auto"
						border="1px solid rgb(186, 176, 74)"
						padding="1.4rem 1.2rem 1.4rem 2rem"
						color="rgb(71, 86, 109)"
						borderRadius="30px"
						textTransform="uppercase"
						marginTop={10}
						fontSize={"1.25rem"}
						rightIcon={
							<ArrowUpIcon
								transform="rotate(45deg)"
								color="rgb(220, 80, 82)"
							/>
						}
						_hover={{ bg: "rgb(71, 86, 109)", color: "#fff" }}
					>
						go to metroverse
					</Button>
				</GridItem>
				<GridItem
					fontSize={"1.25rem"}
					lineHeight={1.7}
					backgroundColor={"rgb(220, 223, 229)"}
					padding={"1.5rem 2rem"}
					borderLeft={"4px solid rgb(187, 176, 74)"}
				>
					<Container>
						{`Metroverse is the Growth Lab’s urban economy navigator
						covering over 1000 cities across the world. By combining
						cutting-edge research, high-resolution datasets and
						stunning data visualizations, Metroverse makes visible
						what a city is good at today to help understand what it
						can become tomorrow.`}
					</Container>
				</GridItem>
			</Grid>

			<Grid
				templateColumns="repeat(6, 1fr)"
				gap={10}
				backgroundColor="rgb(90, 112, 140)"
				color="white"
				padding="20"
			>
				<GridItem
					colSpan={6}
					borderBottom="1px solid rgb(255, 255, 255)"
					paddingY={10}
				>
					<Heading
						textTransform="uppercase"
						textAlign="center"
						fontSize="calc(0.5rem + 4vh)"
						fontWeight="400"
						letterSpacing="0.04rem"
					>
						IN THE NEWS
					</Heading>
				</GridItem>
				<GridItem colSpan={1}>
					<Container>
						{" "}
						<Image src={bloombergImage} alt={"Bloomberg Logo"} />
					</Container>
					<Container margin="2.5rem auto 0px" marginY="20">
						<Image src={metroverseImage} alt={"MetroVerse Image"} />
					</Container>
					<Container marginY="20">
						<Image
							src={financialTimesImage}
							alt={"Financial Times Logo"}
						/>
					</Container>
					<Container marginY="35">
						<Image width={20} src={nprImage} alt={"NPR Logo"} />
					</Container>
				</GridItem>
				<GridItem colSpan={2} fontSize="1.25rem">
					<Container>
						Markets Are Starting to Play a Haunting 2007 Tune
					</Container>
					<Container marginY="17">
						New interactive website helps chart paths for economic
						growth
					</Container>
					<Container marginY="20">
						Authers’ Note: Turning and turning in the widening gyre
					</Container>
					<Container marginY="20">
						Planet Money: The Three Indicators
					</Container>
				</GridItem>
				<GridItem colSpan={3}>
					<Container>
						<q>
							This is like adding the Periodic Table to chemistry.
							It organizes knowledge in a way that helps everyone:
							from student to journalist to policy maker to
							investors to economic experts.
						</q>
						<br />
						<strong>
							Lant Pritchett, RISE Research Director, University
							of Oxford
						</strong>
					</Container>

					<Container marginY="10">
						<q>
							If you like data visualizations and are interested
							in analyzing trade flows and the sectoral
							composition of an economy, you can’t beat this
							website from Harvard.{" "}
						</q>
						<br />
						<strong>
							Lant Pritchett, RISE Research Director, University
							of Oxford
						</strong>
					</Container>

					<Container marginY="10">
						<strong>The Guardian</strong>
					</Container>

					<Container marginY="10">
						<q>
							...fascinating research done by the Center for
							International Development at Harvard University,
							which has a successful record of identifying which
							countries are positioned to grow.{" "}
						</q>
						<br />
						<strong>Financial Times</strong>
					</Container>
				</GridItem>
			</Grid>			
		</Box>
	);
}

export default HomePage;
