export type Project = {
	id: string;
	title: string;
	description: string;
	longDescription: string;

	tech: string[];
	features: string[];

	images?: string[];
	links?: {
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
			github:"...",
			demo:"https://drive.google.com/file/d/1Y8fFfRlqH2BLIK0BXnH9zppETmm0kQZP/view?usp=drive_link"
		}
	},
];