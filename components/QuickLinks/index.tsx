import { quickLinks } from "@/data";
import { Button } from "@/components/Button";

export default function QuickLinks() {
	return (
		<>
			<div className='mx-auto mb-6 flex flex-col text-center'>
				<h2 className='block text-xl font-bold tracking-tighter text-primaryBlack md:text-3xl'>
					Quick Links
				</h2>
			</div>
			<div className='mx-auto flex w-fit flex-row items-center gap-3'>
				{quickLinks.map(link => (
					<Button
						size='lg'
						className='group flex flex-row gap-1 rounded-full border-primaryBlack'
						key={`${link.text.replace(" ", "-")}`}
					>
						<span className='font-normal text-primaryBlack'>{link.text}</span>
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
					</Button>
				))}
			</div>
		</>
	);
}
