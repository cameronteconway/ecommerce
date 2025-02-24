// https://shopify.dev/docs/api/admin-rest/2024-04/resources/product

import { IShoe } from "@/lib/types";

export const shoes: IShoe[] = [
	{
		brand: "ASICS",
		colours: [{ id: 1, product_id: 1, value: "Cool Matcha/Bright Sunstone" }],
		handle: "gel-excite-10",
		id: 1,
		images: [
			{
				alt: "A blue running shoe",
				colour_id: 1,
				height: 250,
				id: 1,
				position: 1,
				product_id: 1,
				src: "/images/products/main_image.jpg",
				width: 250,
			},
		],
		price: 80.0,
		shoe_size: 10.5,
		quantity: 100,
		tags: [{ handle: "trial-running", id: 1, title: "Trial running" }],
		title: "Gel-Excite 10",
	},
];
