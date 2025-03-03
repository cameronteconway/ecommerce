interface ILink {
	link: string;
	text: string;
}

export interface IFooter {
	columns: {
		title: string;
		links: ILink[];
	}[];
}
