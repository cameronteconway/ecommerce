import { Brand, IProductColour, IProductImage, ITag } from "@/lib/types";

/**
 * Defines all the product types associated with the products.
 *
 * @type ShoeType
 */
export type ShoeType = "Trial" | "Track";

export type ShoeSize =
	| 5
	| 5.5
	| 6
	| 7
	| 7.5
	| 8
	| 8.5
	| 9
	| 9.5
	| 10
	| 10.5
	| 11
	| 11.5
	| 12
	| 13
	| 14;

/**
 * The primary product
 *
 * @interface IShoe
 * @member {Brand} brand is the brand associated with the shoe.
 * @member {IProductColour[]} colours is an array of IProductColour's associated with the shoe.
 * @member {string} handle is a unique human-friendly string for the shoe.
 * @member {number} id is a unique numeric identifier for the shoe image.
 * @member {IProductImage[]} images is an array of IProductImage's assocaited with the product.
 * @member {number} price is the price of the shoe.
 * @member {number} quantity is the amount of stock left.
 * @member {ShoeType} shoe_type is a categorization for the shoe used for filtering and searching shoes.
 * @member {}
 * @member {ITag[]} tags is an arraw of ITag's associated with the shoe.
 * @member {string} title is the name of the shoe.
 *
 */
export interface IShoe {
	/**
	 * @example "Asics"
	 */
	brand: Brand;

	/**
	 * @example [{id: 1, product_id: 1, value: "red"}, {id: 2, product_id: 2, value: "blue"}]
	 */
	colours: IProductColour[];

	/**
	 * @example "trial-running"
	 */
	handle: string;

	/**
	 * @readonly
	 */
	readonly id: number;

	/**
	 * @example [{alt: "A blue running shoe", colour_id: 1, height: 250, id: 1, position: 1, product_id: 1, src: "/images/products/main_image.jpg", width: 250}, {alt: "A red running shoe", colour_id: 2, height: 250, id: 2, position: 2, product_id: 2, src: "/images/products/secondary_image.jpg", width: 250}]
	 */
	images: IProductImage[];

	/**
	 * @example 89.99
	 */
	price: number;

	/**
	 * @description if the quantity is less than 3 the user should be notified that the stock is low.
	 * @example 10
	 */
	quantity: number;

	/**
	 * @example 10
	 */
	shoe_size: ShoeSize;

	/**
	 * @example "Track"
	 */
	shoe_type?: ShoeType;

	/**
	 * @example [{handle: "trial-running", id: 1, title: "Trial running"}, {handle: "outdoors", id: 1, title: "Outdoors"}]
	 */
	tags: ITag[];

	/**
	 * @example "ASICS Gel-Kayano 28"
	 */
	title: string; // User friendly name of the product
}
