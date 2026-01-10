import { footer } from "@/data";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className='mx-auto mt-32 flex max-w-screen-lg flex-col gap-20 px-4 pb-5 min-[1080px]:px-0'>
			<div className='flex flex-row justify-between'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-8 fill-black'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
					/>
				</svg>
				<div className='grid grid-cols-2 gap-10 sm:flex sm:flex-row'>
					{footer.columns.map(column => {
						return (
							<div key={`${column.title.toLocaleLowerCase()}-column`}>
								<span className='mb-4 block text-2xl font-bold tracking-tighter text-primaryBlack'>
									{column.title}
								</span>
								<ul className='flex flex-col gap-2'>
									{column.links.map((link, index) => (
										<li key={`link-${index}`}>
											<Link
												className='text-sm font-normal text-primaryBlack focus-within:underline hover:underline'
												href={link.link}
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<div className='mx-auto flex flex-row items-center text-sm'>
				©
				<a
					className='mx-2 font-bold tracking-tighter text-primaryBlack focus-within:underline hover:underline'
					href='https://cameronconway.co.uk'
				>
					Cameron Conway
				</a>
				{new Date().getFullYear()}
			</div>
		</footer>
	);
}
