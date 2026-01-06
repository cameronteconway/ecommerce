import Image from "next/image";

export default function Featured() {
	return (
		<>
			<div className='mb-6 flex flex-col'>
				<h2 className='block text-xl font-bold tracking-tighter text-primaryBlack'>
					Featured
				</h2>
				<p className='text-sm font-normal text-gray-600'>
					Shop by our featured brands.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
				<div className='relative'>
					<Image
						width={600}
						height={600}
						loading='lazy'
						decoding='async'
						sizes='(max-width: 639px) 600px, 330px'
						className='aspect-square rounded-md'
						src='/featured/asics-featured.webp'
						alt='Man running in Asics shoes'
					/>
					<span className='absolute bottom-4 left-4 text-3xl font-bold tracking-tighter text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_0.4)]'>
						ASICS
					</span>
				</div>
				<div className='relative'>
					<Image
						width={600}
						height={600}
						loading='lazy'
						decoding='async'
						sizes='(max-width: 639px) 600px, 330px'
						className='aspect-square rounded-md'
						src='/featured/nike-featured.webp'
						alt='Man running in Asics shoes'
					/>
					<span className='absolute bottom-4 left-4 text-3xl font-bold tracking-tighter text-primaryBlack'>
						NIKE
					</span>
				</div>
				<div className='relative'>
					<Image
						width={600}
						height={600}
						loading='lazy'
						decoding='async'
						sizes='(max-width: 639px) 600px, 330px'
						className='aspect-square rounded-md'
						src='/featured/on-featured.webp'
						alt='Man running in Asics shoes'
					/>
					<span className='absolute bottom-4 left-4 text-3xl font-bold tracking-tighter text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_0.4)]'>
						ON
					</span>
				</div>
			</div>
		</>
	);
}
