import Carousel from "@/components/Carousel";
import HomeVideo from "@/components/Hero/HomeVideo";

import { shoes } from "@/data/shoes";
import { IProductCardProps } from "@/lib/types";

const shoeCardData = shoes.map(shoe => {
	if (shoe.featured === true) {
		return {
			id: shoe.id,
			brand: shoe.brand,
			handle: shoe.handle,
			image: shoe.featuredImage,
			price: shoe.price,
			shoe_type: shoe.shoe_type,
			tags: shoe.tags,
			title: shoe.title,
		};
	}
});

export default function Home() {
	return (
		<div className='mb-96 flex flex-col gap-20'>
			<HomeVideo />
			<section className='pl-4 pr-0 min-[1069px]:px-0'>
				<Carousel
					title='Trending Now'
					carouselType='product'
					carouselCards={shoeCardData as IProductCardProps[]}
				/>
			</section>
		</div>
	);
}
