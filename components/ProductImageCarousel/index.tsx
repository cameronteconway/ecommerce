"use client";

import { useState } from "react";
import Image from "next/image";

import { IProductImage } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ProductImageCarousel({
	images,
}: {
	images: IProductImage[];
}) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	function next() {
		setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
	}

	function prev() {
		setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
	}
	return (
		<div className='flex flex-row gap-0 align-top md:gap-4'>
			{/* Thumbnails */}
			<div className='hidden w-[50px] min-w-[50px] flex-col gap-4 md:flex'>
				{images.map((image, index) => {
					return (
						<div key={`thumbnail-${index}`}>
							<button
								key={`product-image-${index}`}
								onClick={() => setSelectedIndex(index)}
								className={cn(
									"relative aspect-square focus-within:opacity-100 hover:opacity-100",
									selectedIndex === index ? "opacity-100" : "opacity-30",
								)}
								aria-label={`Select to view thumbnail for ${image.alt}`}
							>
								<Image
									src={image.src}
									alt={image.alt}
									height={50}
									width={50}
									className='size-full'
								/>
							</button>
							{index !== images.length - 1 && <hr />}
						</div>
					);
				})}
			</div>
			{/* Main image */}
			<div className='relative aspect-square h-fit w-full min-w-[300px] max-w-full'>
				<Image
					src={images[selectedIndex].src}
					alt={images[selectedIndex].alt}
					height={550}
					width={550}
					className='size-full h-auto w-full min-w-[300px] max-w-full'
				/>
				<div className='absolute bottom-6 right-6 flex flex-row gap-2'>
					<button
						onClick={prev}
						aria-label='Previous product image'
						className='flex size-10 items-center justify-center rounded-full bg-gray-100 focus-within:bg-gray-50 hover:bg-gray-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='relative right-[1px] size-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 19.5 8.25 12l7.5-7.5'
							/>
						</svg>
					</button>
					<button
						onClick={next}
						aria-label='Next product image'
						className='flex size-10 items-center justify-center rounded-full bg-gray-100 focus-within:bg-gray-50 hover:bg-gray-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='relative left-[1px] size-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m8.25 4.5 7.5 7.5-7.5 7.5'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
