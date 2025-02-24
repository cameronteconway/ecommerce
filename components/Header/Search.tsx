import { cn } from "@/lib/utils";
import { Button } from "../Button";

export default function Search() {
	return (
		<div className='relative'>
			<input
				className={cn(
					"placeholder:text-muted-foreground shadow-xs my-1 flex h-8 w-full min-w-0 rounded-md border border-gray-200 bg-transparent py-1 pe-8 ps-2 text-base outline-none transition-[color,box-shadow] md:text-sm",
					"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50",
				)}
				placeholder='Search'
			/>
			<Button
				variant='icon'
				size='icon'
				className='absolute right-2 top-2.5 size-5'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-5'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
					/>
				</svg>
			</Button>
		</div>
	);
}
