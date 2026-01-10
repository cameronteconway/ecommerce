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

					<p className='text-md font-normal'>
						3 payments of <b>£36.66</b> at 0% interest with{" "}
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

					<p className='text-md font-light'>{productDetail.description}</p>
				</div>
				<div className='flex flex-col gap-4 md:hidden'>
					<p className='text-md font-light'>{productDetail.description}</p>
				</div>
			</div>
		</div>
	);
}
