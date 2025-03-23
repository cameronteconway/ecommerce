"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Road from "./Dropdown/Road";
import Racing from "./Dropdown/Racing";
import Trail from "./Dropdown/Trail";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function FixedNavigation() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={cn(
				"fixed left-0 right-0 top-4 z-50 mx-auto hidden w-fit max-w-screen-lg rounded-full bg-gray-100/75 px-4 py-2 transition-all duration-300 sm:block",
				scrollPosition > 400 ? "visible opacity-100" : "invisible opacity-0",
			)}
		>
			<nav>
				<NavigationMenu className='flex justify-around'>
					<NavigationMenuList className='flex flex-row gap-7'>
						<NavigationMenuItem>
							<NavigationMenuTrigger className='group relative flex flex-row items-center gap-1 rounded-md p-1 text-lg font-light outline-none focus-visible:underline focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50 data-[state=open]:font-medium [&[data-state=open]>svg]:rotate-180'>
								<span className='text-base font-bold tracking-tighter text-primaryBlack'>
									Road
								</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									className='size-3 transition-all duration-200'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m19.5 8.25-7.5 7.5-7.5-7.5'
									/>
								</svg>
							</NavigationMenuTrigger>
							<NavigationMenuContent className='absolute -left-[45%] top-full z-20 mt-5 w-full rounded-lg bg-white'>
								<Road />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className='group relative flex flex-row items-center gap-1 rounded-md p-1 text-lg font-light outline-none focus-visible:underline focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50 data-[state=open]:font-medium [&[data-state=open]>svg]:rotate-180'>
								<span className='text-base font-bold tracking-tighter text-primaryBlack'>
									Racing
								</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									className='size-3 transition-all duration-200'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m19.5 8.25-7.5 7.5-7.5-7.5'
									/>
								</svg>
							</NavigationMenuTrigger>
							<NavigationMenuContent className='absolute -left-[45%] top-full z-20 mt-5 w-full rounded-lg bg-white'>
								<Racing />
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className='group relative flex flex-row items-center gap-1 rounded-md p-1 text-lg font-light outline-none focus-visible:underline focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50 data-[state=open]:font-medium [&[data-state=open]>svg]:rotate-180'>
								<span className='text-base font-bold tracking-tighter text-primaryBlack'>
									Trail
								</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									className='size-3 transition-all duration-200'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m19.5 8.25-7.5 7.5-7.5-7.5'
									/>
								</svg>
							</NavigationMenuTrigger>
							<NavigationMenuContent className='absolute -left-[45%] top-full z-20 mt-5 w-full rounded-lg bg-white'>
								<Trail />
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</div>
	);
}
