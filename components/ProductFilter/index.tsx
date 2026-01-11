"use client";

import { IFilterSelect } from "@/app/shoes/page";
import { ShoeSize } from "@/lib/types/shoe";
import { Brand } from "@/lib/types/brand";
import { IProductType } from "@/lib/types/product";
import { Dispatch, SetStateAction } from "react";

export default function ProductFilter({
	values,
	title,
	productType,
	selected,
	setSelected,
}: {
	values: (ShoeSize | Brand)[];
	title: string;
	productType: IProductType;
	selected: IFilterSelect;
	setSelected: Dispatch<SetStateAction<IFilterSelect>>;
}) {
	// Only update the associated array of items within the state, if already included then remove
	function toggle(value: ShoeSize | Brand, productType: IProductType) {
		switch (productType) {
			case "brand":
				setSelected(prev => ({
					...prev,
					brand: prev.brand.includes(value as Brand)
						? prev.brand.filter(b => b !== (value as Brand))
						: [...prev.brand, value as Brand],
				}));
				break;
			case "size":
				setSelected(prev => ({
					...prev,
					size: prev.size.includes(value as ShoeSize)
						? prev.size.filter(b => b !== (value as ShoeSize))
						: [...prev.size, value as ShoeSize],
				}));
				break;
		}
	}

	return (
		<div className='flex flex-col gap-1'>
			<span className='text-sm'>{title}</span>
			<div className='h-fit rounded-md border border-gray-200 p-2'>
				{values.map((value, index) => {
					const isChecked =
						productType === "brand"
							? (selected.brand as (Brand | ShoeSize)[]).includes(value)
							: (selected.size as (Brand | ShoeSize)[]).includes(value);

					return (
						<label
							key={`${value}-${index}`}
							className='flex select-none items-center gap-2 text-sm font-light'
						>
							<input
								type='checkbox'
								checked={isChecked}
								onChange={() => toggle(value, productType)}
								className='shadow-xs rounded-[4px] border outline-none transition-shadow focus-visible:ring-[3px]'
							/>
							{value}
						</label>
					);
				})}
			</div>
		</div>
	);
}
