import Image from "next/image";
import Link from "next/link";

import { IProductCardProps } from "@/lib/types";

export default function ProductCard({
	id,
	brand,
	handle,
	image,
	title,
}: IProductCardProps) {
	return (
		<Link href={`shoes/${handle}/${id}`} className='group flex flex-col gap-2'>
			<div className='relative aspect-square'>
				<Image
					src={image.src}
					alt={image.alt}
					height={300}
					width={300}
					className='size-full'
				/>
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
