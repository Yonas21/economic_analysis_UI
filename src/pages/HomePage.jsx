// eslint-disable-next-line no-unused-vars
import React, { useCallback } from "react";
import {
	Box,
	Heading,
	Button,
	Container,
	Image,
	Grid,
	GridItem,
	Text,
	Link,
	Stack
} from "@chakra-ui/react";
import { colors, intro_stats, thumbnail_stats } from "../data";
import {
	mainBackVedio,
	vishubImage,
	metroverseImage,
	bloombergImage,
	financialTimesImage,
	nprImage,
	AtlasEconomicImage,
	BookPatternBackgroung,
	HarvardVizHubImage,
	Harvard_GL_logo,
	GL_logo,
} from "../data/images";
import { useNavigate } from 'react-router-dom';
import { ArrowUpIcon } from "@chakra-ui/icons";
import {
	faTwitter,
	faInstagram,
	faLinkedin,
	faYoutube,
	faFacebookSquare,
	faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "../components/SocialMediaIcons";
import WorldMap from "../components/WorldMap";
import CardItem from "../components/CardItem";
import Header from "../components/Header";

function HomePage() {
	const navigate = useNavigate();
	// const isLargerThanMd = useBreakpointValue({ base: false, md: true });

	
	const handleNavigation = (title) => {
		if (title ==="go to explore") {	
			navigate('/explore'); 
		}
  };
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
					height: "55vh", // Set the height to cover the viewport
					objectFit: "cover",
				}}
			>
				<source src={mainBackVedio} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<Box zIndex={1} position="relative">
	<Header />
      <Container centerContent>
        <Heading color="white" fontSize="50px">
          THE ATLAS OF ECONOMIC COMPLEXITY
        </Heading>
        <Box padding="4" color="white" maxW="xl" fontSize={24}>
          <Container>
            {`Harvard Growth Lab’s research and data visualization tool used to understand the economic dynamics and new growth opportunities for every country worldwide.`}
          </Container>
        </Box>
      </Container>
    </Box>
			<Box>
				<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} padding={10}>
					{intro_stats.map((item, id) => (
						<GridItem
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
										color={colors.terracotta}
										fontSize={"28px"}
										textTransform={"uppercase"}
										borderBottom={
											`3px solid ${colors.light}`
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
										border={`1px solid ${colors.terracotta}`}
										outline="none"
										padding="0.5rem"
										color={colors.light}
										float="right"
										borderRadius="30px"
										textTransform="uppercase"
										onClick={() => handleNavigation(item.button)}
									>
										{item.button}
									</Button>
								</Box>
							</Box>
						</GridItem>
					))}

					{thumbnail_stats.map((item) => (
						<CardItem key={item.header} item={item} />
					))}
				</Grid>
			</Box>
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				gap={6}
				padding={10}
				backgroundImage={vishubImage}
			>
				<GridItem maxW="lg">
					<Image
						src={HarvardVizHubImage}
						alt={"Harvard Viz Hub Logo"}
					/>
					<Button
						ml="auto"
						border={`1px solid ${colors.terracotta}`}
						outline="none"
						padding="0.5rem"
						color={colors.light}
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
						_hover={{ bg:`${colors.light}`, color: "#fff" }}
					>
						go to vis hub
					</Button>
				</GridItem>
				<GridItem
					fontSize={"1.25rem"}
					lineHeight={1.7}
					backgroundColor={"white"}
					padding={"1.5rem 2rem"}
					borderLeft={`4px solid ${colors.light}`}
				>
					<Container>
						{`The Atlas of Economic Complexity is part of Harvard's
						Growth Lab Viz Hub, a portfolio of award-winning,
						interactive visualizations powered by the Growth Lab's
						research and insights. Check out the Viz Hub to learn
						more about concepts found in the Atlas along with our
						other free, online tools and software packages.`}
					</Container>
				</GridItem>
			</Grid>

			<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} padding={10}>
				<GridItem maxW="lg">
					<Image src={metroverseImage} alt={"MetroVerse Image"} />

					<Button
						ml="auto"
						border={`1px solid ${colors.terracotta}`}
						padding="1.4rem 1.2rem 1.4rem 2rem"
						color={colors.light}
						borderRadius="30px"
						textTransform="uppercase"
						marginTop={10}
						fontSize={"1.25rem"}
						rightIcon={
							<ArrowUpIcon
								transform="rotate(45deg)"
								color={colors.light}
							/>
						}
						_hover={{ bg: `${colors.light}`, color: "#fff" }}
					>
						go to metroverse
					</Button>
				</GridItem>
				<GridItem
					fontSize={"1.25rem"}
					lineHeight={1.7}
					backgroundColor={"rgb(220, 223, 229)"}
					padding={"1.5rem 2rem"}
					borderLeft={`4px solid ${colors.light}`}
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
				templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg:'repeat(6,1fr)' }}
				gap={10}
				backgroundColor={colors.light}
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
			<WorldMap />
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
				gap={10}
				color="white"
				padding="20"
			>
				<GridItem maxW="lg">
					<iframe
						height="500px"
						width="500px"
						src="https://syndication.twitter.com/srv/timeline-profile/screen-name/HarvardGrwthLab?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=423.508px&origin=https%3A%2F%2Fatlas.cid.harvard.edu%2F&sessionId=baca98da721db118210a1c362b4065acaf892f41&showHeader=true&showReplies=false&transparent=false&widgetsVersion=2615f7e52b7e0%3A1702314776716"
						title="description"
					></iframe>
				</GridItem>
				<GridItem
					maxW="lg"
					boxShadow="rgba(0, 0, 0, 0.28) 0px 0px 9px 1px"
					padding="10px 5px 10px 10px"
					backgroundImage={BookPatternBackgroung}
				>
					<Image
						src={AtlasEconomicImage}
						alt={"The Atlas of Economic Complexity Image"}
						paddingTop={20}
					/>

					<Button
						border={`1px solid ${colors.terracotta}`}
						padding="1.4rem 1.2rem 1.4rem 2rem"
						color={colors.light}
						borderRadius="30px"
						textTransform="uppercase"
						float="right"
						marginTop={"100px"}
						fontSize={"1rem"}
						rightIcon={
							<ArrowUpIcon
								transform="rotate(45deg)"
								color={colors.light}
							/>
						}
						_hover={{ bg: `${colors.light}`, color: "#fff" }}
					>
						download the 2013 and 2011 editions
					</Button>
				</GridItem>
			</Grid>
			<Grid
				templateColumns= {{ base: '1fr', md: 'repeat(3, 1fr)',lg:"repeat(5, 1fr)" }}
				gap={"4rem"}
				paddingY={10}
				backgroundColor={colors.terracotta}
				color={colors.white}
				justifyContent="center"
				paddingX="400"
			>
				<GridItem>
					<Image
						src={GL_logo}
						height={50}
						width={300}
						marginBottom={5}
						alt={"The Atlas of Economic Complexity Image"}
					/>
					<Image
						src={Harvard_GL_logo}
						alt={"The Atlas of Economic Complexity Image"}
						marginBottom={5}
					/>
					<Text fontSize="xs" fontWeight="300">
						79 JFK St. | Cambridge, MA 02138 <br />
						growthlab@hks.harvard.edu
					</Text>
					<br />
					<Text as="em" marginTop={10}>
						ATLAS 9.1
					</Text>
				</GridItem>
				<GridItem>
					<Stack spacing={2} direction="column">
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							explore
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							countries
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							data
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							learn
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							publication
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							about
						</Link>
					</Stack>
				</GridItem>
				<GridItem>
					<Stack spacing={2} direction="column">
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							announcements
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							contact us
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							faq
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							newsletter
						</Link>
						<Link
							href="#"
							textTransform="uppercase"
							fontSize={13}
							fontWeight={500}
							_hover={{ textDecoration: "underline" }}
						>
							work with us
						</Link>
					</Stack>
				</GridItem>
				<GridItem colSpan={2}>
					<Stack spacing={3} direction={['row','row', 'column', 'column']}>
						{[
							faFacebookSquare,
							faLinkedin,
							faInstagram,
							faTwitter,
							faYoutube,
							faAppStoreIos,
						].map((icon, _index) => (
							<SocialMediaIcons key={_index} icon={icon} />
						))}
					</Stack>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem>
					<Container
						backgroundColor="rgb(51, 51, 51)"
						color="rgb(255,255,255)"
						fontSize="0.85rem"
						textAlign="center"
					>
						Copyright © 2024 The President and Fellows of Harvard
						College |{" "}
						<a href="#" target="_blank" rel="noreferrer">
							Privacy
						</a>{" "}
						|{" "}
						<a href="#" target="_blank" rel="noreferrer">
							Accessibility
						</a>{" "}
						|{" "}
						<a href="#" target="_blank" rel="noreferrer">
							Digital Accessibility
						</a>{" "}
						|{" "}
						<a href="#" target="_blank" rel="noreferrer">
							Report Copyright
						</a>
					</Container>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default HomePage;
