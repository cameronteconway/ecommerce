"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import {
	Content,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-dialog";

import Search from "@/components/Header/Search";
import { Button } from "@/components/Button";

export default function ContentMobile() {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
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

					<Root open={open} onOpenChange={setOpen}>
						<Trigger asChild>
							<Hamburger
								toggled={open}
								toggle={setOpen}
								size={26}
								distance='md'
								color='#121212'
								rounded
								label='Open dropdown menu'
							/>
						</Trigger>
						<Portal>
							<Overlay className='fixed inset-0 z-40 bg-black/80' />
							<Content className='fixed left-1/2 top-[40%] z-50 w-[95vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white p-5 shadow-lg transition-all duration-300 focus-within:outline-none'>
								<Title className='hidden'>Mobile Menu</Title>
								<div className='flex h-full flex-col gap-10 py-3'>
									<div className='flex flex-row justify-between'>
										<div className='flex w-full flex-row gap-4'>
											<Button className='group' variant='icon' size='icon'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='size-6 transition-all duration-300 group-hover:stroke-red-300'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
													/>
												</svg>
											</Button>
											<Button variant='icon' size='icon'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='size-6'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
													/>
												</svg>
											</Button>
											<Button variant='icon' size='icon'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='size-6'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
													/>
												</svg>
											</Button>
										</div>
										<Button
											onClick={() => setOpen(false)}
											variant='icon'
											size='icon'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												className='size-7'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M6 18 18 6M6 6l12 12'
												/>
											</svg>
										</Button>
									</div>
									<ul className='flex flex-col gap-5'>
										<li className='flex flex-row items-center justify-between'>
											<Link
												className='text-lg font-bold tracking-tighter text-primaryBlack'
												href={"#"}
											>
												Road
											</Link>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												className='size-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='m8.25 4.5 7.5 7.5-7.5 7.5'
												/>
											</svg>
										</li>
										<li className='flex flex-row items-center justify-between'>
											<Link
												className='text-lg font-bold tracking-tighter text-primaryBlack'
												href={"#"}
											>
												Racing
											</Link>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												className='size-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='m8.25 4.5 7.5 7.5-7.5 7.5'
												/>
											</svg>
										</li>
										<li className='flex flex-row items-center justify-between'>
											<Link
												className='text-lg font-bold tracking-tighter text-primaryBlack'
												href={"#"}
											>
												Trail
											</Link>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												className='size-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='m8.25 4.5 7.5 7.5-7.5 7.5'
												/>
											</svg>
										</li>
									</ul>
								</div>
							</Content>
						</Portal>
					</Root>
				</div>
			</div>
		</>
	);
}
