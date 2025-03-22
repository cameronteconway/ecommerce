"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import Search from "./Search";

export default function ContentMobile() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className='inline-flex w-full p-2 sm:hidden'>
			<div className='mx-auto flex w-full flex-row items-center justify-between'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='ml-1 size-7 fill-black'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
					/>
				</svg>
				<Search />
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					size={26}
					distance='md'
					color='#121212'
					rounded
					label='Open dropdown menu'
				/>
			</div>
		</div>
	);
}
