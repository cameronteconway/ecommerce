import { notFound } from "next/navigation";
import { fetchProductById } from "../../../data/shoes";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { Button } from "@/components/Button";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const product = fetchProductById(parseInt(id));

	if (!product) {
		notFound();
	}

	const productDetail = product[0];

	return (
		<div className='px-4 min-[1080px]:px-0'>
			<Breadcrumbs currentPageTitle={productDetail.title} />
			<div className='flex flex-col gap-4 align-top md:grid md:grid-cols-5 lg:gap-8'>
				<div className='flex flex-col gap-4 md:hidden'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-2xl font-medium'>{productDetail.title}</h1>
						<span className='block text-sm font-light text-gray-700'>
							{productDetail.brand}
						</span>
					</div>
					<span className='block text-lg font-medium'>
						£{productDetail.price}
					</span>
				</div>
				<div className='md:col-span-3'>
					<ProductImageCarousel images={productDetail.images} />
				</div>
				<div className='hidden min-w-[300px] flex-col gap-8 md:col-span-2 md:flex'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-3xl font-medium'>{productDetail.title}</h1>
						<span className='text-md block font-light text-gray-700'>
							{productDetail.brand}
						</span>
					</div>
					<span className='block text-lg font-medium'>
						£{productDetail.price}
					</span>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-1'>
							<span className='text-md block font-medium'>Select size</span>
							<div className='grid grid-cols-3 flex-wrap gap-2'>
								{productDetail.shoe_size.map((size, index) => {
									return <Button key={`shoe-size-${index}`}>{size}</Button>;
								})}
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<Button variant={"secondary"} size={"lg"} className='rounded-full'>
							Add to bag
						</Button>
						<Button size={"lg"} className='rounded-full'>
							Save for later
						</Button>
					</div>

					<p className='text-md font-light'>
						3 payments of <b>£{(productDetail.price / 3).toFixed(2)}</b> at 0%
						interest with{" "}
						<a
							className='underline focus-within:no-underline hover:no-underline'
							href='#'
							aria-label='Learn more about Klarna'
						>
							Klarna
						</a>
						.
						<br />
						<span className='op'>
							18+, T&C apply, Credit subject to status.
						</span>
					</p>

					<ul className='flex flex-col gap-2'>
						<li className='flex flex-row items-center gap-2'>
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
									d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
								/>
							</svg>
							<span className='text-md relative top-[1px] block font-light'>
								40 days free returns & exchanges
							</span>
						</li>
						<li className='flex flex-row items-center gap-2'>
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
							<span className='text-md relative top-[1px] block font-light'>
								Become a member and get £5 off
							</span>
						</li>
					</ul>

					<p className='text-md font-light'>{productDetail.description}</p>
				</div>
				<div className='flex flex-col gap-8 md:hidden'>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-1'>
							<span className='text-md block font-medium'>Select size</span>
							<div className='grid grid-cols-3 flex-wrap gap-2'>
								{productDetail.shoe_size.map((size, index) => {
									return <Button key={`shoe-size-${index}`}>{size}</Button>;
								})}
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<Button variant={"secondary"} size={"lg"} className='rounded-full'>
							Add to bag
						</Button>
						<Button size={"lg"} className='rounded-full'>
							Save for later
						</Button>
					</div>

					<p className='text-md font-light'>
						3 payments of <b>£{(productDetail.price / 3).toFixed(2)}</b> at 0%
						interest with{" "}
						<a
							className='underline focus-within:no-underline hover:no-underline'
							href='#'
							aria-label='Learn more about Klarna'
						>
							Klarna
						</a>
						.
						<br />
						<span className='op'>
							18+, T&C apply, Credit subject to status.
						</span>
					</p>

					<ul className='flex flex-col gap-2'>
						<li className='flex flex-row items-center gap-2'>
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
									d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
								/>
							</svg>
							<span className='text-md relative top-[1px] block font-light'>
								40 days free returns & exchanges
							</span>
						</li>
						<li className='flex flex-row items-center gap-2'>
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
							<span className='text-md relative top-[1px] block font-light'>
								Become a member and get £5 off
							</span>
						</li>
					</ul>
					<p className='text-md font-light'>{productDetail.description}</p>
				</div>
			</div>
		</div>
	);
}
