import Carousel from "@/components/Carousel";
import EmailSubscription from "@/components/EmailSubscription";
import Featured from "@/components/Featured";
import HomeVideo from "@/components/Hero/HomeVideo";
import QuickLinks from "@/components/QuickLinks";
import { blogCardData, shoeCardData } from "@/data";
import { IBlogCardProps, IProductCardProps } from "@/lib/types";

export default function Home() {
	return (
		<div className='flex flex-col gap-20'>
			<HomeVideo />
			<section className='pl-4 pr-0 min-[1040px]:px-0'>
				<Carousel
					title='Trending Now'
					carouselType='product'
					carouselCards={shoeCardData as IProductCardProps[]}
				/>
			</section>
			<section className='px-4 min-[1040px]:px-0'>
				<Featured />
			</section>
			<section className='px-4 min-[1040px]:px-0'>
				<QuickLinks />
			</section>
			<section className='pl-4 pr-0 min-[1040px]:px-0'>
				<Carousel
					title='Blog'
					description='What our community has to say.'
					carouselType='blog'
					carouselCards={blogCardData as IBlogCardProps[]}
					cta={{
						href: "/blogs",
						label: "View all our blogs",
					}}
				/>
			</section>
			<section className='px-4 min-[1040px]:px-0'>
				<EmailSubscription />
			</section>
		</div>
	);
}
