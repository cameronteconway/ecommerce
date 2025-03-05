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

export default function StaticNavigation() {
	return (
		<nav className='ml-6'>
			<NavigationMenu className='flex justify-around'>
				<NavigationMenuList className='flex flex-row gap-8'>
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
						<NavigationMenuContent className='absolute left-0 top-full z-20 mt-5 w-full rounded-lg bg-white'>
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
						<NavigationMenuContent className='absolute left-0 top-full z-20 mt-5 w-full rounded-lg bg-white'>
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
						<NavigationMenuContent className='absolute left-0 top-full z-20 mt-5 w-full rounded-lg bg-white'>
							<Trail />
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
}
