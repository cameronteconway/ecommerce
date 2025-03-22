import { Button } from "@/components/Button";

export default function EmailSubscription() {
	return (
		<>
			<div className='mb-6 flex flex-col'>
				<div className='mx-auto flex w-fit flex-col gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='mx-auto size-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3'
						/>
					</svg>
					<span className='text-md block text-center font-medium tracking-tighter text-gray-900 md:text-lg'>
						Stay in the loop
					</span>
					<p className='max-w-[500px] text-center text-sm text-gray-600'>
						Sign up to be the first to hear about new arrivals, offers and
						events. Enter your email address below to opt in to email marketing.
					</p>
					<div className='mx-auto mt-3 flex max-w-[400px] flex-row gap-2'>
						<input
							type='email'
							placeholder='Email'
							className='border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring flex h-10 w-64 rounded-md border bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primaryYellow/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
						/>
						<Button className='h-10 w-fit border-primaryBlack bg-primaryBlack text-white focus-within:bg-primaryBlack/90 hover:bg-primaryBlack/90'>
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
