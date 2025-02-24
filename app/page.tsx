import Carousel from "@/components/Carousel";
import HomeVideo from "@/components/Hero/HomeVideo";

import { shoes } from "@/data/shoes";

const shoeCardData = shoes.map(shoe => {
	return {
		id: shoe.id,
		brand: shoe.brand,
		handle: shoe.handle,
		image: shoe.images.filter(image => image.position === 1),
		price: shoe.price,
		shoe_type: shoe.shoe_type,
		tags: shoe.tags,
		title: shoe.title,
	};
});

export default function Home() {
	return (
		<div className=''>
			<HomeVideo />
			<Carousel carouselType='product' carouselCards={shoeCardData} />
		</div>
	);
}
