import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Racing() {
	return (
		<div className='flex w-full flex-row gap-8 rounded-md border border-gray-200 bg-white p-4 md:absolute md:w-auto'>
			<Link href={"/shoes"} className='group relative w-52'>
				<span className='block text-sm font-medium'>Our choice</span>
				<Image
					src='https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/73770/376474/ADI17070_1000_1__33295.1729755587.jpg'
					alt='adidas Adizero Adios Pro Evo 1 Running Shoes'
					width={240}
					height={180}
					className='!h-auto w-full object-contain'
				/>
				<div className='flex flex-col gap-1'>
					<span className='text-sm group-hover:underline'>
						Adizero Adios Pro Evo 1
					</span>
					<span className='text-sm text-mutedText'>
						Be seen but never caught.
					</span>
				</div>
			</Link>
			<div className='w-64'>
				<span className='mb-5 block text-sm font-medium'>Shop by</span>
				<ul className='flex flex-col gap-4'>
					<li className=''>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								5k to 10k
							</span>
							<span className='text-sm text-mutedText'>
								Lightweight support for higher tempo and shorter distances.
							</span>
						</Link>
					</li>
					<li>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Half Marathons
							</span>
							<span className='text-sm text-mutedText'>
								Seriously propulsive, for half marathons at full speed.
							</span>
						</Link>
					</li>
					<li>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Marathon
							</span>
							<span className='text-sm text-mutedText'>
								Our most advanced road running shoes for your biggest races.
							</span>
						</Link>
					</li>
					<li>
						<Link href={"/shoes"}>
							<Button className='w-full'>Shop racing</Button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
