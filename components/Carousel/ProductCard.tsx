import Image from "next/image";
import { IProductCardProps } from "@/lib/types";
import Link from "next/link";

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
		<Link href={"#"} className='group flex flex-col gap-2'>
			<div className='relative aspect-square'>
				<Image src={image.src} alt={image.alt} fill className='size-full' />
			</div>
			<div className='flex flex-col'>
				<span className='block text-sm font-medium text-gray-900 group-focus-within:underline group-hover:underline'>
					{title}
				</span>
				<span className='block text-xs font-normal text-gray-600'>{brand}</span>
			</div>
		</Link>
	);
}
