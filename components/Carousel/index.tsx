"use client";

import { IProductCardProps } from "@/lib/types";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Progress } from "../Progress";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

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
	const [progress, setProgress] = useState<number>(55);

	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;

		const onWheel = (e: WheelEvent) => {
			// Prevent default vertical scroll and allow horizontal scrolling
			if (e.deltaY !== 0) {
				e.preventDefault();
				scrollContainer.scrollLeft += e.deltaY;
			}
		};

		// Add listener for both wheel and touchpad interactions
		scrollContainer.addEventListener("wheel", onWheel);

		return () => {
			scrollContainer.removeEventListener("wheel", onWheel);
		};
	}, []);

	useEffect(() => {
		scrollContainerRef.current!.addEventListener("scroll", function (e) {
			/**
			 * clientWidth - Width of the component within the visible screen.
			 * scrollLeft - How far left the user has scrolled.
			 * scrollWidth - The full width of the scrollable component.
			 */
			const { scrollWidth, scrollLeft, clientWidth } = e.target as HTMLElement;

			const percentageScroll =
				55 + (scrollLeft / (scrollWidth - clientWidth)) * 45;

			setProgress(percentageScroll);
		});
	});

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
									className={cn(
										// "w-fit flex-[0_0_80%] pr-4 first:pl-0 last:pr-4",
										// "md:flex-[0_0_60%] md:pr-4 last:md:pr-8",
										"md:flex-[0_0_30.8%] md:px-2 first:md:flex-[0_0_30%] first:md:pl-0 first:md:pr-2 last:md:flex-[0_0_30%] last:md:pl-2 last:md:pr-0",
										"lg:flex-[0_0_30.8%] lg:px-2 first:lg:flex-[0_0_30%] first:lg:pl-0 first:lg:pr-2 last:lg:flex-[0_0_30%] last:lg:pl-2 last:lg:pr-0",
										"[&>div]:!w-full [&>div]:!min-w-min [&>div]:!max-w-full",
									)}
								>
									{CardMap[carouselType]?.(card)}
								</div>
							);
						})}
				</div>
				<div className='mx-auto hidden w-[340px] md:block'>
					<Progress value={progress} />
				</div>
			</div>
		</div>
	);
}
