// https://shopify.dev/docs/api/admin-rest/2024-04/resources/product

import { IShoe } from "@/lib/types";

export const shoes: IShoe[] = [
	{
		brand: "Hoka",
		colours: [{ id: 1, product_id: 1, value: "Frost/Black" }],
		description:
			"A tip-of-the-spear product tuned for higher tempo pickups, the Cielo X1 2.0 is a must for speed seekers. Engineered with an aggressive forefoot rocker and ultra-responsive dual-density PEBA midsole with snappy carbon fibre plate, this pace-pushing road racer has been finished with a light, breathable upper.",
		handle: "hoka-cielo-x1-20",
		id: 1,
		images: [
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				colour_id: 1,
				height: 250,
				id: 1,
				position: 1,
				product_id: 1,
				src: "/hoka-cielo-x1-20/main.jpg",
				width: 250,
			},
		],
		price: 249.99,
		shoe_size: 10.5,
		quantity: 100,
		tags: [{ id: 2 }],
		title: "Cielo X1 2.0",
	},
	{
		brand: "New Balance",
		colours: [
			{ id: 1, product_id: 1, value: "Hot Mango with Angora and Black" },
		],
		description:
			"Rebel by name, rebel by nature, the FuelCell Rebel v4 will change how you look at an everyday running shoe. The propulsive feel of FuelCell technology creates a remarkably responsive underfoot that can quickly adapt from long, steady runs to something shorter and more spontaneous. Additional details like a streamlined mesh upper add race-inspired accents to this dynamic upbeat shoe, designed to bring an element of fun back into your run.",
		handle: "new-balance-fuelcell-rebel-v4",
		id: 1,
		images: [
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				colour_id: 1,
				height: 250,
				id: 1,
				position: 1,
				product_id: 1,
				src: "/new-balance-fuelcell-rebel-v4/main.jpg",
				width: 250,
			},
		],
		price: 139.99,
		shoe_size: 10.5,
		quantity: 100,
		tags: [{ id: 1 }],
		title: "FuelCell Rebel v4",
	},
	{
		brand: "ASICS",
		colours: [
			{ id: 1, product_id: 1, value: "Hot Mango with Angora and Black" },
		],
		description:
			"Long runs or short runs. Easy days or fast sessions. The Cumulus 27 delivers comfort on all runs. Featuring lightweight FF Blast Plus foam, the midsole provides cloudlike cushioning, alongside Fluidride for a smooth transition with outstanding traction.",
		handle: "asics-gel-cumulus-27",
		id: 1,
		images: [
			{
				alt: "Gel-Cumulus 27 Running Shoes by Asics in a taupe grey and black colour scheme.",
				colour_id: 1,
				height: 250,
				id: 1,
				position: 1,
				product_id: 1,
				src: "/asics-gel-cumulus-27/main.jpg",
				width: 250,
			},
		],
		price: 139.99,
		shoe_size: 10.5,
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Gel-Cumulus 27",
	},
	{
		brand: "Brooks",
		colours: [{ id: 1, product_id: 1, value: "Bluewash/Green Gecko/Cobalt" }],
		description:
			"Light, springy, fast - the Hyperion Elite 4 PB checks all the boxes. This running shoe offers a competitive edge for racing and features innovative 100% PEBA DNA GOLD cushioning alongside a carbon fibre-tuned propulsion plate.",
		handle: "brooks-hyerion-elite-4-pb",
		id: 1,
		images: [
			{
				alt: "Hyperion Elite 4 PB Running Shoes by Brooks in a bluewash, green gecko and cobalt colour scheme.",
				colour_id: 1,
				height: 250,
				id: 1,
				position: 1,
				product_id: 1,
				src: "/brooks-hyerion-elite-4-pb/main.jpg",
				width: 250,
			},
		],
		price: 200.0,
		shoe_size: 10.5,
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Hyperion Elite 4 PB",
	},
];
