import exportVideo from "../assets/export-intro-video.a4cca03829c78df13c6291661c003250.mp4";
import cpVideo from "../assets/cp-intro-video.f2da14895aa4cb94e73c97ce074e290b.mp4";
import growthImage from "../assets/growth-image-thumbnail.7dd523ff656d48c82adad460e419ed14.png";
import researchImage from "../assets/research-image-thumbnail.39dcfeeb8c6ee5ab234338a3b3ffa104.png";

export const intro_stats = [
	{
		media: exportVideo,
		header: "Explore",
		detail: "Build custom data visualizations for any country to reveal 50+ years of global trade flows across 6,000+ goods & services, along with new opportunities to drive growth.",
		button: "go to explore",
	},
	{
		media: cpVideo,
		header: "Country Profiles",
		detail: "Take an interactive journey through a country's economic structure and dynamic growth patterns to uncover the strategy necessary to achieve greater prosperity.",
		button: "go to country profiles",
	},
];

export const thumbnail_stats = [
	{
		media: growthImage,
		header: "Annual Growth Projections",
		detail: "Discover the countries rising and falling in Harvard Growth Lab's annual country growth projections.",
		button: "go to growth projections",
	},
	{
		media: researchImage,
		header: "Complexity Rankings",
		detail: "Explore Harvard Growth Lab’s annual ranking of country and product complexity.",
		button: "go to complexity rankings",
	},
];
