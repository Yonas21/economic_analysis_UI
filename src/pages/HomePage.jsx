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
} from "@chakra-ui/react";
import { intro_stats, thumbnail_stats } from "../data";
import back from "../assets/header-video.22db7ccd0029a59f17b65d21037d7ffd.mp4";

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
	const property = {
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Rear view of modern home with pool",
		beds: 3,
		baths: 2,
		title: "Modern home in city center in the heart of historic Los Angeles",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 4,
	};

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
							<Image src={item.media} alt={property.imageAlt} />

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
		</Box>
	);
}

export default HomePage;
