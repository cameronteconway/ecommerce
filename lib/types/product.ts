import { Brand, ITag, ShoeType } from "@/lib/types";

/**
 * A visual reprisentation of a product.
 *
 * @interface IProductImage
 * @member {number} alt is a description of the image.
 * @member {number} colour_id is a unique numeric identifier of the colour associated with the image.
 * @member {number} height is the height dimension of the image.
 * @member {number} id is a unique numeric identifier for the product image.
 * @member {number} position is the order of the product image in the list. The first product image is at position 1 and is the "main" image for the product.
 * @member {number} product_id is a unique numeric identifier of the product associated with the image.
 * @member {string} src specifies the location of the product image.
 * @member {number} width is the width dimension of the image.
 */
export interface IProductImage {
	/**
	 * @example "ASICS Gel-Kayano 28 men's running shoe with a breathable mesh upper, cushioned sole, and vibrant blue and black design."
	 */
	alt: string;

	/**
	 * @readonly
	 */
	readonly colour_id: number;

	/**
	 * @example 250
	 */
	height: number;

	/**
	 * @readonly
	 */
	readonly id: number;

	/**
	 * @example 1
	 */
	position: number;

	/**
	 * @readonly
	 */
	readonly product_id: number;

	/**
	 * @example "/images/products/main_image.jpg"
	 */
	src: string;

	/**
	 * @example 250
	 */
	width: number;
}

/**
 * Used to define and categorize the color variations of a product.
 *
 * @interface IProductColour
 * @member {number} id is a unique numeric identifier for the product image.
 * @member {number} product_id is a unique numeric identifier of the product associated with the image.
 * @member {string} value is the name of the colour
 */
export interface IProductColour {
	/**
	 * @readonly
	 */
	readonly id: number;

	/**
	 * @readonly
	 */
	readonly product_id: number;

	/**
	 * @example "red"
	 */
	value: string;
}

export interface IProductCardProps {
	id: number;
	brand: Brand;
	handle: string;
	image: IProductImage[];
	price: number;
	shoe_type?: ShoeType;
	tags: { id: number }[];
	title: string;
}
