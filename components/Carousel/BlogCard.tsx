import Image from "next/image";
import { IBlogCardProps } from "@/lib/types";
import Link from "next/link";

export default function BlogCard({
	title,
	handle,
	summary,
	image,
	published,
}: IBlogCardProps) {
	return (
		<Link href={`blog/${handle}`} className='group flex flex-col gap-4'>
			<Image
				src={image}
				alt={"test"}
				width={600}
				height={400}
				className='h-auto w-full rounded-md'
			/>
			<div className='flex flex-col gap-1'>
				<span className='text-sm font-medium text-gray-900'>{title}</span>
				<p className='text-sm text-gray-600'>{summary}</p>
			</div>
			<span className='text-xs font-medium text-gray-900'>
				{`${published.getDate()} ${published.toLocaleString("default", { month: "short" })}, ${published.getFullYear()}`}
			</span>
		</Link>
	);
}
