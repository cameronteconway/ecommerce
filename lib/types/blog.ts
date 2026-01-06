export interface IBlog {
	content: string;
	handle: string;
	id: number;
	image: string;
	imageAlt: string;
	published: Date;
	summary: string;
	title: string;
}

export interface IBlogCardProps {
	handle: string;
	image: string;
	imageAlt: string;
	published: Date;
	summary: string;
	title: string;
}
