import { Button } from "../Button";

export default function HomeVideo() {
	return (
		<div className='relative z-10'>
			<video loop autoPlay={true} muted playsInline>
				<source src='/0abfcbfa-985dd232.mp4' type='video/mp4' />
				Your browser does not support the video tag. I suggest you upgrade your
				browser.
			</video>
			<div className='absolute bottom-6 left-6 flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='block text-base font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_0.8)]'>
						ON
					</span>
					<span className='block text-3xl font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_0.8)]'>
						Cloudsurfer 2
					</span>
				</div>
				<Button className='bg-gray-100/20 text-white [text-shadow:_1px_1px_0px_rgb(0_0_0_/_0.8)] hover:bg-gray-100/60'>
					Shop Now
				</Button>
			</div>
		</div>
	);
}
