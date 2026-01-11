"use client";

import { useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import ProductCard from "@/components/Carousel/ProductCard";
import {
	fetchAvailableBrands,
	fetchAvailableShoeSizes,
	shoes,
} from "@/data/shoes";
import { Brand } from "@/lib/types/brand";
import { ShoeSize } from "@/lib/types";
import ProductFilter from "@/components/ProductFilter";

export interface IFilterSelect {
	brand: Brand[];
	size: ShoeSize[];
}

export default function ProductListingPage() {
	const [selected, setSelected] = useState<IFilterSelect>({
		brand: [],
		size: [],
	});

	const brands = fetchAvailableBrands();
	const shoeSizes = fetchAvailableShoeSizes();

	const filteredProducts = shoes.filter(shoe => {
		const brandMatch =
			selected.brand.length === 0 || selected.brand.includes(shoe.brand);
		const sizeMatch =
			selected.size.length === 0 ||
			shoe.shoe_size.some(size => selected.size.includes(size));
		return brandMatch && sizeMatch;
	});

	const clearFilters = () => {
		setSelected({
			brand: [],
			size: [],
		});
	};

	return (
		<div className='px-4 min-[1080px]:px-0'>
			<Breadcrumbs currentPageTitle={"Shoes"} />
			<div className='mb-8 flex flex-row items-center justify-between'>
				<h1 className='text-3xl font-medium'>Our shoes</h1>
				<div>
					<Button aria-label='Clear product filters' onClick={clearFilters}>
						Clear filters
					</Button>
				</div>
			</div>
			<div className='flex flex-row gap-4'>
				<div className='col-span-1 flex min-w-[150px] max-w-[200px] flex-col gap-6'>
					<ProductFilter
						productType={"brand"}
						values={brands}
						title={"Brands"}
						selected={selected}
						setSelected={setSelected}
					/>
					<ProductFilter
						productType={"size"}
						values={shoeSizes}
						title={"Shoe sizes"}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>

				{filteredProducts.length !== 0 ? (
					<div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
						{filteredProducts.map(shoe => {
							const { id, brand, images, title } = shoe;
							return (
								<ProductCard
									key={shoe.handle}
									id={id}
									brand={brand}
									image={images[0]}
									title={title}
								/>
							);
						})}
					</div>
				) : (
					<span className='mt-20 w-full text-center'>No products found</span>
				)}
			</div>
		</div>
	);
}
