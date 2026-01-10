"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { IBlogCardProps, IProductCardProps } from "@/lib/types";
import { Progress } from "@/components/Progress";
import ProductCard from "@/components/Carousel/ProductCard";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/Carousel/BlogCard";
import Link from "next/link";
import { buttonVariants } from "../Button";

interface ICarouselProps {
	carouselCards: IProductCardProps[] | IBlogCardProps[];
	carouselType: "product" | "blog";
	description?: string;
	title?: string;
	cta?: {
		href: string;
		label: string;
	};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		const { id, brand, image, title } = (card as IProductCardProps) ?? {};
		return <ProductCard id={id} brand={brand} image={image} title={title} />;
	},
	blog: (card: unknown) => {
		const { title, handle, summary, image, imageAlt, published } =
			(card as IBlogCardProps) ?? {};
		return (
			<BlogCard
				title={title}
				handle={handle}
				image={image}
				imageAlt={imageAlt}
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
	cta,
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

	const headerContent = (
		title: string | undefined,
		description: string | undefined,
	) => (
		<div className={cn("flex flex-col", title || description ? "mb-6" : "")}>
			{title && (
				<h2 className='block text-xl font-bold tracking-tighter text-primaryBlack'>
					{title}
				</h2>
			)}
			{description && (
				<p className='text-sm font-normal text-gray-600'>{description}</p>
			)}
		</div>
	);

	return (
		<div>
			{cta ? (
				<div className='flex flex-col justify-between pr-4 md:flex-row min-[1080px]:pr-0'>
					{headerContent(title, description)}
					<Link
						href={cta.href}
						aria-label='Go to blogs'
						className={cn(
							buttonVariants({
								variant: "default",
								size: "lg",
								className:
									"group mb-6 flex w-fit flex-row gap-1 rounded-full border-primaryBlack",
							}),
						)}
					>
						<span className='font-normal text-primaryBlack'>{cta.label}</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='size-3 transition-all duration-300 group-focus-within:rotate-45 group-hover:rotate-45'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
							/>
						</svg>
					</Link>
				</div>
			) : (
				headerContent(title, description)
			)}
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
					<Progress
						role='progressbar'
						aria-label='Visual indicator for progress on carousel scroll'
						value={progress}
					/>
				</div>
			</div>
		</div>
	);
}
