import Breadcrumbs from "@/components/Breadcrumbs";
import { fetchBlogsByPublishDate } from "@/data";
import BlogCard from "@/components/Carousel/BlogCard";

export default function Blogs() {
	const blogs = fetchBlogsByPublishDate();

	return (
		<div className='px-4 min-[1024px]:px-0'>
			<Breadcrumbs />
			<div>
				<header>
					<h1 className='text-3xl font-medium'>Our latest blogs</h1>
					<div className='mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3'>
						{blogs.map((blog, index) => {
							const { title, handle, summary, image, imageAlt, published } =
								blog;
							return (
								<BlogCard
									key={`blog-card-${index}`}
									title={title}
									handle={handle}
									image={image}
									imageAlt={imageAlt}
									summary={summary}
									published={published}
								/>
							);
						})}
					</div>
				</header>
			</div>
		</div>
	);
}
