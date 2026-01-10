// https://shopify.dev/docs/api/admin-rest/2024-04/resources/product

import { IShoe } from "@/lib/types";

export const shoes: IShoe[] = [
	{
		brand: "Hoka",
		colours: [{ id: 1, product_id: 1, value: "Frost/Black" }],
		description:
			"A tip-of-the-spear product tuned for higher tempo pickups, the Cielo X1 2.0 is a must for speed seekers. Engineered with an aggressive forefoot rocker and ultra-responsive dual-density PEBA midsole with snappy carbon fibre plate, this pace-pushing road racer has been finished with a light, breathable upper.",
		featured: false,
		handle: "hoka-cielo-x1-20",
		id: 1,
		images: [
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/main.jpg",
			},
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/HOK2921_1000_2__72165.jpg",
			},
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/HOK2921_1000_3__15065.jpg",
			},
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/HOK2921_1000_4__37637.jpg",
			},
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/HOK2921_1000_5__23311.jpg",
			},
			{
				alt: "Cielo X1 2.0 Running Shoes by Hoka in a white, read and cyan colour scheme.",
				src: "/hoka-cielo-x1-20/HOK2921_1000_6__17295.jpg",
			},
		],
		price: 249.99,
		shoe_size: [5.5, 6, 7, 7.5, 9, 10.5, 11],
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
		featured: true,
		featuredImage: {
			alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
			src: "/new-balance-fuelcell-rebel-v4/featured.webp",
		},
		handle: "new-balance-fuelcell-rebel-v4",
		id: 2,
		images: [
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/main.jpg",
			},
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/NEW695815_1000_2__45839.jpg",
			},
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/NEW695815_1000_3__07782.jpg",
			},

			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/NEW695815_1000_4__76337.jpg",
			},
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/NEW695815_1000_5__17737.jpg",
			},
			{
				alt: "FuelCell Rebel v4 Running Shoes by New Balance in hot mango with angora and black colour scheme.",
				src: "/new-balance-fuelcell-rebel-v4/NEW695815_1000_6__90812.jpg",
			},
		],
		price: 139.99,
		shoe_size: [5.5, 6, 7.5, 9, 10.5],
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
		featured: false,
		handle: "asics-gel-cumulus-27",
		id: 3,
		images: [
			{
				alt: "Gel-Cumulus 27 Running Shoes by Asics in a taupe grey and black colour scheme.",
				src: "/asics-gel-cumulus-27/main.jpg",
			},
		],
		price: 139.99,
		shoe_size: [5, 5.5, 6, 7.5, 9, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Gel-Cumulus 27",
	},
	{
		brand: "Brooks",
		colours: [{ id: 1, product_id: 1, value: "Bluewash/Green Gecko/Cobalt" }],
		description:
			"Light, springy, fast - the Hyperion Elite 4 PB checks all the boxes. This running shoe offers a competitive edge for racing and features innovative 100% PEBA DNA GOLD cushioning alongside a carbon fibre-tuned propulsion plate.",
		featured: true,
		featuredImage: {
			alt: "Hyperion Elite 4 PB Running Shoes by Brooks in a bluewash, green gecko and cobalt colour scheme.",
			src: "/brooks-hyerion-elite-4-pb/featured.webp",
		},
		handle: "brooks-hyerion-elite-4-pb",
		id: 4,
		images: [
			{
				alt: "Hyperion Elite 4 PB Running Shoes by Brooks in a bluewash, green gecko and cobalt colour scheme.",
				src: "/brooks-hyerion-elite-4-pb/main.jpg",
			},
		],
		price: 200.0,
		shoe_size: [7, 9, 10.5],
		quantity: 100,
		tags: [{ id: 3 }],
		title: "Hyperion Elite 4 PB",
	},
	{
		brand: "Hoka",
		colours: [{ id: 1, product_id: 1, value: "Galactic Grey/Stellar Grey" }],
		description:
			"One of the hardest-working shoes in the HOKA line-up the Bondi 9 delivers peak plushness for everyday miles. Overhauled from top to bottom, Hoka has increased the stack height and added a new premium foam midsole to deliver the soft, resilient ride that's become synonymous with the Bondi.",
		featured: false,
		handle: "hoka-bondi-9",
		id: 5,
		images: [
			{
				alt: "Bondi 9 Running Shoes by Hoka in a galactic grey and stellar grey colour scheme.",
				src: "/hoka-bondi-9/main.jpg",
			},
		],
		price: 159.99,
		shoe_size: [5.5, 6, 6.5, 7, 7.5, 9, 9.5, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Bondi 9",
	},
	{
		brand: "ON",
		colours: [{ id: 1, product_id: 1, value: "Glacier/Ivory" }],
		description:
			"Prepare for effortless-feeling everyday runs. These shoes offer the ultimate ride sensation with soft CloudTec Phase cushioning.",
		featured: true,
		featuredImage: {
			alt: "On Cloudsurfer 2 Running Shoes by On in a glacier and ivory colour scheme.",
			src: "/on-cloudsurfer-2/featured.webp",
		},
		handle: "on-cloudsurfer-2",
		id: 6,
		images: [
			{
				alt: "On Cloudsurfer 2 Running Shoes by On in a glacier and ivory colour scheme.",
				src: "/on-cloudsurfer-2/main.jpg",
			},
		],
		price: 149.99,
		shoe_size: [5.5, 6, 7.5, 9, 10, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "On Cloudsurfer 2",
	},
	{
		brand: "Adidas",
		colours: [
			{ id: 1, product_id: 1, value: "Pure Sulfur/Lucid Blue/Lucid Red" },
		],
		description:
			"Proven to be the world's most-winning shoe, the Adizero Adios Pro line is the pinnacle of Adizero Racing shoes. The Adios Pro 4 is made for fast runners who want to experience faster, with enhanced features designed to optimise running efficiency.",
		featured: true,
		featuredImage: {
			alt: "Adizero Adios Pro 4 Running Shoes by Adidas in a pure sulfur, lucid blue and lucid red colour scheme.",
			src: "/adidas-adizero-adios-pro-4/featured.webp",
		},
		handle: "adidas-adizero-adios-pro-4",
		id: 7,
		images: [
			{
				alt: "Adizero Adios Pro 4 Running Shoes by Adidas in a pure sulfur, lucid blue and lucid red colour scheme.",
				src: "/adidas-adizero-adios-pro-4/main.jpg",
			},
		],
		price: 219.99,
		shoe_size: [5, 5.5, 6, 7.5, 8.5, 9, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Adizero Adios Pro 4",
	},
	{
		brand: "Nike",
		colours: [
			{ id: 1, product_id: 1, value: "Summit White/Black/Dusty Cactus" },
		],
		description:
			"Comfort and speed take the driver's seat in the Vomero 18, the ultimate everyday running shoe. These shoes offer more cushioning than ever before, allowing you to run further, faster than you felt possible. Designed with insight from runners to suit all genders, they provide smoothness, softness and a lightweight feel.",
		featured: true,
		featuredImage: {
			alt: "Vomero 18 Running Shoes by Nike in a summit white, black and dusty cactus colour scheme.",
			src: "/nike-vomero-18/featured.webp",
		},
		handle: "nike-vomero-18",
		id: 8,
		images: [
			{
				alt: "Vomero 18 Running Shoes by Nike in a summit white, black and dusty cactus colour scheme.",
				src: "/nike-vomero-18/main.jpg",
			},
		],
		price: 134.99,
		shoe_size: [5.5, 6, 6.5, 7.5, 9, 10, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Vomero 18",
	},

	{
		brand: "Saucony",
		colours: [{ id: 1, product_id: 1, value: "Peach/Sunny" }],
		description:
			"Built for comfort and protection, the Guide 18 is a cushioned everyday trainer that combines soft and responsive PWRRUN foam with the exclusive Center Path Technology that keeps the foot centred and supported to deliver a best-in-class underfoot experience by maintaining a standard centerline, increasing the height of the sidewalls and building it on a rocker shape to ease toe-off.",
		featured: true,
		featuredImage: {
			alt: "Guide 18 Running Shoes by Saucony in a peach and sunny colour scheme.",
			src: "/saucony-guide-18/featured.webp",
		},
		handle: "saucony-guide-18",
		id: 9,
		images: [
			{
				alt: "Guide 18 Running Shoes by Saucony in a peach and sunny colour scheme.",
				src: "/saucony-guide-18/main.jpg",
			},
		],
		price: 129.99,
		shoe_size: [5.5, 6, 6.5, 7.5, 8.5, 9, 9.5, 10.5],
		quantity: 100,
		tags: [{ id: 1 }],
		title: "Guide 18",
	},
];

export const shoeCardData = shoes
	.filter(shoe => shoe.featured === true)
	.map(shoe => {
		return {
			id: shoe.id,
			brand: shoe.brand,
			handle: shoe.handle,
			image: shoe.featuredImage,
			title: shoe.title,
		};
	});

export const fetchProductById = (id: number) => {
	const product = shoes.filter(shoe => shoe.id === id);

	return product;
};
