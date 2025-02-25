import Carousel from "@/components/Carousel";
import HomeVideo from "@/components/Hero/HomeVideo";

import { shoes } from "@/data/shoes";

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
			<Carousel
				title='Trending Now'
				carouselType='product'
				carouselCards={shoeCardData}
			/>
		</div>
	);
}
