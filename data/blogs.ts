import { IBlog } from "@/lib/types/blog";

export const blogs: IBlog[] = [
	{
		id: 2,
		title: "How to Choose the Perfect Running Shoes",
		handle: "test-blog-2",
		summary:
			"Choosing the right running shoes is key to comfort and performance.",
		content: "This is he test blog content",
		image: "/blog/running05-preview_compressed.webp",
		published: new Date("2025-02-06"),
	},
	{
		id: 2,
		title: "How to Improve Your Running Performance",
		handle: "find-your-pace",
		summary:
			"Learn how to find and maintain the right running pace to boost your performance.",
		content: "This is he test blog content",
		image: "/blog/running06-preview_compressed.webp",
		published: new Date("2025-01-29"),
	},
	{
		id: 1,
		title: "Step Up Your Run",
		handle: "test-blog",
		summary: "The right the right shoes can solve common running problems.",
		content: "This is he test blog content",
		image: "/blog/running02-preview_compressed.webp",
		published: new Date("2025-01-12"),
	},

	{
		id: 2,
		title: "From Couch to 5K",
		handle: "couch-to-5k",
		summary:
			"Starting your 5K journey begins with the right pair of running shoes.",
		content: "This is he test blog content",
		image: "/blog/running03-preview_compressed.webp",
		published: new Date("2025-01-02"),
	},
];

export const blogCardData = blogs.map(blog => {
	return {
		title: blog.title,
		handle: blog.handle,
		image: blog.image,
		summary: blog.summary,
		published: blog.published,
	};
});
