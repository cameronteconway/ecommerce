"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IBreadcrumb {
	label: string;
	href: string;
}

// Format the segment to be readable
function formatLabel(segment: string) {
	return decodeURIComponent(segment)
		.replace(/-/g, " ")
		.replace(/\b\w/g, char => char.toUpperCase());
}

export default function BreadCrumbs({
	currentPageTitle,
}: {
	currentPageTitle?: string;
}) {
	const pathname = usePathname();

	console.log(currentPageTitle);

	// Get each segment of the path
	const segments = pathname.split("/").filter(Boolean);

	const breadcrumbs: IBreadcrumb[] = segments.map((segment, index) => {
		const href = "/" + segments.slice(0, index + 1).join("/");
		return {
			label: formatLabel(segment),
			href,
		};
	});

	if (breadcrumbs.length === 0) return null;

	return (
		<nav aria-label='Breadcrumbs' className='my-10'>
			<ol className='flex flex-row items-center gap-2'>
				<li key={"home"}>
					<Link
						href='/'
						className='text-sm font-light opacity-75 focus-within:underline hover:underline'
					>
						Home
					</Link>
				</li>

				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={3}
					stroke='currentColor'
					className='relative top-[1px] size-3'
					aria-hidden='true'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m8.25 4.5 7.5 7.5-7.5 7.5'
					/>
				</svg>

				{breadcrumbs.map((crumb, index) => {
					const isLast = index === breadcrumbs.length - 1;

					return (
						<>
							<li key={crumb.href}>
								{isLast ? (
									<span aria-current='page' className='text-sm'>
										{/* Display label unless page title is available */}
										{currentPageTitle ? currentPageTitle : crumb.label}
									</span>
								) : (
									<Link
										href={crumb.href}
										className='text-sm font-light opacity-75 focus-within:underline hover:underline'
										aria-label={`Go to ${crumb.label}`}
									>
										{crumb.label}
									</Link>
								)}
							</li>
							{!isLast && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={3}
									stroke='currentColor'
									className='relative top-[1px] size-3'
									aria-hidden='true'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m8.25 4.5 7.5 7.5-7.5 7.5'
									/>
								</svg>
							)}
						</>
					);
				})}
			</ol>
		</nav>
	);
}
