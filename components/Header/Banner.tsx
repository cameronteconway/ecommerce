import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Banner() {
	return (
		<div className='group bg-primaryBlack py-1'>
			<div className='mx-auto flex max-w-screen-lg justify-around'>
				<div className='flex cursor-pointer flex-row items-center gap-2 transition-all duration-300 group-hover:py-2'>
					<Link
						href='#'
						className={cn(
							"text-sm text-white hover:underline",
							"focus-visible:border-ring rounded-md outline-none focus-visible:underline focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50",
						)}
					>
						SALE - 25% off selected items
					</Link>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='white'
						className='size-4'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
