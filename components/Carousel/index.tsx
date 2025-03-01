"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { IBlogCardProps, IProductCardProps } from "@/lib/types";
import { Progress } from "@/components/Progress";
import ProductCard from "@/components/Carousel/ProductCard";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/Carousel/BlogCard";

interface ICarouselProps {
	carouselCards: IProductCardProps[] | IBlogCardProps[];
	carouselType: "product" | "blog";
	description?: string;
	title?: string;
}

enum ECarouselType {
	"product" = "product",
	"blog" = "blog",
}

type TCardMapType = {
	[key in keyof typeof ECarouselType]: (
		card: IProductCardProps | IBlogCardProps,
	) => ReactElement;
};

const CardMap: TCardMapType = {
	product: (card: unknown) => {
		const { id, brand, handle, image, title } =
			(card as IProductCardProps) ?? {};
		return (
			<ProductCard
				id={id}
				brand={brand}
				handle={handle}
				image={image}
				title={title}
			/>
		);
	},
	blog: (card: unknown) => {
		const { id, title, handle, summary, image, published } =
			(card as IBlogCardProps) ?? {};
		return (
			<BlogCard
				id={id}
				title={title}
				handle={handle}
				image={image}
				summary={summary}
				published={published}
			/>
		);
	},
};

export default function Carousel({
	carouselCards,
	carouselType,
	description,
	title,
}: ICarouselProps) {
	const [progress, setProgress] = useState<number>(
		Math.round((3.25 / carouselCards.length) * 100),
	);

	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Percentage as an integer of the progress bar to be shown by default.
	// With the layout of the carousel rougly 3.25 carousel items are shown for > md
	const displayedProgress = Math.round((3.25 / carouselCards.length) * 100);

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
				displayedProgress +
				(scrollLeft / (scrollWidth - clientWidth)) * (100 - displayedProgress);

			setProgress(percentageScroll);
		});
	});

	return (
		<div>
			<div className={cn("flex flex-col", title || description ? "mb-6" : "")}>
				{title && (
					<h2 className='block text-xl font-medium text-gray-900'>{title}</h2>
				)}
				{description && (
					<p className='text-sm font-normal text-gray-600'>{description}</p>
				)}
			</div>
			<div role='region' className='flex w-full flex-col gap-10'>
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
										"w-fit flex-[0_0_45%] pr-4 first:pl-0 last:pr-4",
										"md:flex-[0_0_29%] md:px-2 first:md:flex-[0_0_28%] first:md:pl-0 first:md:pr-2 last:md:flex-[0_0_30%] last:md:pl-2 last:md:pr-4",
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
