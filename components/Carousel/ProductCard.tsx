import { IProductCardProps } from "@/lib/types";

export default function ProductCard({
	id,
	brand,
	handle,
	image,
	price,
	shoe_type,
	tags,
	title,
}: IProductCardProps) {
	return (
		<div>
			<Image src={image.src} alt={image.alt} />
		</div>
	);
}
