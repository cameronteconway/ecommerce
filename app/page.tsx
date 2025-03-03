import Carousel from "@/components/Carousel";
import HomeVideo from "@/components/Hero/HomeVideo";
import { blogCardData, shoeCardData } from "@/data";
import { IBlogCardProps, IProductCardProps } from "@/lib/types";

export default function Home() {
	return (
		<div className='flex flex-col gap-20'>
			<HomeVideo />
			<section className='pl-4 pr-0 min-[1024px]:px-0'>
				<Carousel
					title='Trending Now'
					carouselType='product'
					carouselCards={shoeCardData as IProductCardProps[]}
				/>
			</section>
			<section className='pl-4 pr-0 min-[1024px]:px-0'>
				<Carousel
					title='Blog'
					description='What our community has to say.'
					carouselType='blog'
					carouselCards={blogCardData as IBlogCardProps[]}
				/>
			</section>
		</div>
	);
}
