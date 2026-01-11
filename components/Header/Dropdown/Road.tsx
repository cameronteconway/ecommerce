import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Road() {
	return (
		<div className='flex w-full flex-row gap-8 rounded-md border border-gray-200 bg-white p-4 md:absolute md:w-auto'>
			<Link href={"/shoes"} className='group relative w-52'>
				<span className='block text-sm font-medium'>Our choice</span>
				<Image
					src='https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/69008/334775/ONR186_1000_1__80759.1720780699.jpg'
					alt='On Running On Cloudboom Echo 3 Running Shoes'
					width={240}
					height={180}
					className='!h-auto w-full object-contain'
				/>
				<div className='flex flex-col gap-1'>
					<span className='text-sm group-hover:underline'>
						On Cloudboom Echo 3
					</span>
					<span className='text-sm text-mutedText'>Run on air.</span>
				</div>
			</Link>
			<div className='w-64'>
				<span className='mb-5 block text-sm font-medium'>Shop by</span>
				<ul className='flex flex-col gap-4'>
					<li className=''>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Maximum Cushioning
							</span>
							<span className='text-sm text-mutedText'>
								Elevated softness for everyday runs.
							</span>
						</Link>
					</li>
					<li>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Responsive Cushioning
							</span>
							<span className='text-sm text-mutedText'>
								A springy, energetic feel underfoot.
							</span>
						</Link>
					</li>
					<li>
						<Link href='/shoes' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Supportive Cushioning
							</span>
							<span className='text-sm text-mutedText'>
								Stable and steady performance for daily running.
							</span>
						</Link>
					</li>
					<li>
						<Link href={"/shoes"}>
							<Button className='w-full'>Shop road</Button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
