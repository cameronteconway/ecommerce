import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Trail() {
	return (
		<div className='flex w-full flex-row gap-8 rounded-md border border-gray-200 bg-white p-4 md:absolute md:w-auto'>
			<Link href={"#"} className='group relative w-52'>
				<span className='block text-sm font-medium'>Our choice</span>
				<Image
					src='https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/71346/357194/HOK2740_1000_1__47759.1723713476.jpg'
					alt='Hoka Torrent 4 Trail Running Shoes'
					width={240}
					height={180}
					className='!h-auto w-full object-contain'
				/>
				<div className='flex flex-col gap-1'>
					<span className='text-sm group-hover:underline'>Torrent 4 Trail</span>
					<span className='text-mutedText text-sm'>
						All terrain, every season
					</span>
				</div>
			</Link>
			<div className='w-64'>
				<span className='mb-5 block text-sm font-medium'>Shop by</span>
				<ul className='flex flex-col gap-4'>
					<li className=''>
						<Link href='#' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Road to Trail
							</span>
							<span className='text-mutedText text-sm'>
								Everyday performance engineered for comfort and support.
							</span>
						</Link>
					</li>
					<li>
						<Link href='#' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Run Far on Trails
							</span>
							<span className='text-mutedText text-sm'>
								Take on any terrain with out most durable materials.
							</span>
						</Link>
					</li>
					<li>
						<Link href='#' className='group flex flex-col gap-1'>
							<span className='whitespace-nowrap text-sm group-hover:underline'>
								Run Fast on Trails
							</span>
							<span className='text-mutedText text-sm'>
								Take trails at speed with our lightweight designs.
							</span>
						</Link>
					</li>
					<li>
						<Link href={"#"}>
							<Button className='w-full'>Shop trail</Button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
