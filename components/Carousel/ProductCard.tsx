import Image from "next/image";
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
		<div className='flex flex-col gap-2'>
			<Image src={image.src} alt={image.alt} width={250} height={250} />
			<div className='flex flex-col'>
				<span className='block text-sm font-medium text-gray-900'>{title}</span>
				<span className='block text-xs font-normal text-gray-600'>{brand}</span>
			</div>
		</div>
	);
}
