/**
 * A label or keyword assigned to a product to help with categorization, filtering, and search functionality.
 *
 * @interface ITag
 * @member {string} handle is a user-friendly string for the tag
 * @member {number} id is a unique numeric identifier for the product image.
 * @member {string} title is a user-friendly name, used when displayed.
 */
export interface ITag {
	/**
	 * @example "trial-running"
	 */
	handle: string;

	/**
	 * @readonly
	 */
	readonly id: number;

	/**
	 * @example "Trial running"
	 */
	title: string;
}
