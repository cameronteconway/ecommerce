"use client";

import { IProductCardProps } from "@/lib/types";
import { ReactElement, useRef, useState } from "react";
import { Progress } from "../Progress";
import ProductCard from "./ProductCard";

interface ICarouselProps {
	carouselCards: IProductCardProps[];
	carouselType: "product" | "blog";
	title?: string;
}

enum ECarouselType {
	"product" = "product",
	"blog" = "blog",
}

type TCardMapType = {
	[key in keyof typeof ECarouselType]: (
		card: IProductCardProps,
	) => ReactElement;
};

const CardMap: TCardMapType = {
	product: (card: unknown) => {
		const { id, brand, handle, image, price, shoe_type, tags, title } =
			(card as IProductCardProps) ?? {};
		return (
			<ProductCard
				id={id}
				brand={brand}
				handle={handle}
				image={image}
				price={price}
				shoe_type={shoe_type}
				tags={tags}
				title={title}
			/>
		);
	},
	blog: (card: unknown) => {},
};

export default function Carousel({
	carouselCards,
	carouselType,
	title,
}: ICarouselProps) {
	const [progress, setProgress] = useState<number>(0);

	const scrollContainerRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			{title && (
				<h2 className='mb-4 block text-xl font-medium text-gray-900'>
					{title}
				</h2>
			)}
			<div role='region' className='flex w-full flex-col gap-6'>
				<div
					className='no-scrollbar max-h-auto flex w-full flex-row flex-nowrap overflow-x-auto overflow-y-hidden'
					ref={scrollContainerRef}
				>
					{carouselCards?.length > 0 &&
						carouselCards?.map((card, index) => {
							return (
								<div
									key={`card-${index}`}
									className='w-fit flex-[0_0_80%] pl-4 first:pl-0 last:pr-4 md:flex-[0_0_60%] md:pl-4 last:md:pr-8 lg:flex-[0_0_33%] lg:pl-4 last:lg:pr-0 [&>div]:!w-full [&>div]:!min-w-min [&>div]:!max-w-full'
								>
									{CardMap[carouselType]?.(card)}
								</div>
							);
						})}
				</div>
				<div className='mx-auto hidden w-[120px]'>
					<Progress value={progress} className='h-2' />
				</div>
			</div>
		</div>
	);
}
