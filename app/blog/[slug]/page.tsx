import { notFound } from "next/navigation";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
import { fetchBlogByHandle } from "@/data";

// TODO
// Add back to top of page link
// Add reading time
// Add tags
// Add animations for title

interface PageProps {
	params: {
		slug: string;
	};
}

export default async function BlogPage({ params }: PageProps) {
	const { slug } = await params;

	if (!slug) {
		notFound();
	}

	const blog = fetchBlogByHandle(slug);

	if (!blog || blog.length === 0) {
		notFound();
	}

	const post = blog[0];

	return (
		<div className='px-4 min-[1040px]:px-0'>
			<Breadcrumbs currentPageTitle={post.title} />
			<article>
				<header>
					<h1 className='text-3xl font-medium'>{post.title}</h1>
					<time
						className='text-sm text-gray-700'
						dateTime={post.published.toISOString()}
					>
						{new Intl.DateTimeFormat("en-GB", {
							day: "2-digit",
							month: "short",
							year: "numeric",
						}).format(post.published)}
					</time>
				</header>
				<div className='mt-8 flex flex-col gap-6'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						iaculis mi sit amet vestibulum lobortis. Pellentesque convallis
						finibus metus. Sed tristique ligula ex, et condimentum lorem cursus
						vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris nisl neque, mattis non arcu eu, vestibulum imperdiet nisi.
					</p>
					<p>
						Nulla erat sem, interdum sit amet luctus id, dictum nec purus.
						Phasellus ornare, diam sed pretium pretium, tortor turpis sagittis
						erat, id blandit massa lacus eu mi. Nam vitae malesuada sapien, sit
						amet tincidunt magna. Nulla ornare lacus tempus sapien mattis
						maximus. Proin et placerat diam. Cras elementum enim cursus, ornare
						odio quis, interdum odio.
					</p>
					<p>
						Fusce ac ipsum nec neque ornare bibendum vel non risus. Vestibulum
						ut dui non velit tincidunt ultricies quis sit amet orci. Quisque
						porttitor faucibus erat, vestibulum porta lorem euismod vel. Aenean
						tellus erat, pellentesque vitae lacus sit amet, dictum vehicula
						diam. Cras scelerisque risus eu purus rutrum blandit in eu nibh. Nam
						euismod felis orci, et euismod urna euismod tempor. Nunc tempor leo
						a diam tincidunt, a auctor enim consectetur. Cras dapibus dapibus
						sodales. Fusce mattis quis erat quis semper. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Nullam et consectetur magna, id
						faucibus nunc.
					</p>
					<p>
						Nulla facilisi. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Etiam ut rhoncus risus.
						Nullam eu metus metus. Sed sem nisi, congue quis arcu eu, vestibulum
						dapibus justo. Vivamus condimentum lacus a odio vehicula, vitae
						laoreet lorem accumsan.
					</p>
					<p>
						Donec ipsum lacus, cursus eget leo lobortis, tempor auctor massa.
						Maecenas ac tellus vitae augue tempor laoreet. Donec varius non
						justo sed fermentum. Praesent tempus ultricies velit, non molestie
						neque sodales non. Sed id ultricies lectus. Curabitur a tellus nunc.
						Quisque nunc turpis, vehicula vel mauris condimentum, vehicula
						ultricies orci. Nunc pretium, magna ut ornare auctor, arcu lacus
						ornare enim, sodales tristique massa purus vitae leo.
					</p>
				</div>
				<div className='relative mt-3 flex w-fit flex-row'>
					<Image
						alt='Cameron author image'
						src='/cam.svg'
						width={100}
						height={100}
						loading='lazy'
					/>
					<span className='absolute -bottom-0.5 left-1/2 -translate-x-1/2 text-sm'>
						Cameron
					</span>
				</div>
			</article>
		</div>
	);
}
