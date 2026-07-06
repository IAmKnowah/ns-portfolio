export type Project = {
	id: string;
	title: string;
	description: string;
	longDescription: string;

	tech: string[];
	features: string[];

	images?: string[];
	links?: {
		download?: string;
		github?: string;
		demo?: string;
	};
};

export const projects: Project[] = [
	{
		id: "idle-beeing",
		title: "Idle Beeing",
		description: "An idle game about bees, built in Unity with C#.",
		longDescription: "Idle Beeing is a game in which you manage a beekeeping operation. You are tasked with discovering different types of flowers and the value of the honey they produce, all the while managing corn syrup and money.",
		
		tech: ["Unity", "C#", "UI Toolkit"],
		features: [
			"Save/Load system to ensure players don't have to restart upon loading.",
			"Carefully balanced resource management centered around idle production."
		],

		images: [
			"/images/Idle-Beeing-Screenshot-1.png",
			"/images/Idle-Beeing-Screenshot-2.png",
			"/images/Idle-Beeing-Screenshot-3.png",
			"/images/Idle-Beeing-Screenshot-4.png",
			"/images/Idle-Beeing-Screenshot-5.png"
		],
		links: {
			download:"https://knowahthedev.itch.io/idle-beeing",
			demo:"https://drive.google.com/file/d/1Y8fFfRlqH2BLIK0BXnH9zppETmm0kQZP/view?usp=drive_link"
		}
	},
	{
		id: "portfolio",
		title: "NS Portfolio Website",
		description: "My personal portfolio website, built with Next.js and TypeScript.",
		longDescription: "This is my personal portfolio website, built with Next.js and TypeScript. It showcases my projects, skills, and experience as a software developer. It was custom made by myself.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		features: [
			"Showcases my projects, skills, and experience as a software developer.",
			"Custom made design and implementation."
		],
		images: [
			"/images/Portfolio-Screenshot-1.png",
			"/images/Portfolio-Screenshot-2.png",
			"/images/Portfolio-Screenshot-3.png"
		],
		links: {
			github: "https://github.com/IAmKnowah/ns-portfolio",
			demo: "https://iamknowah.github.io/ns-portfolio/"
		}
	}
];