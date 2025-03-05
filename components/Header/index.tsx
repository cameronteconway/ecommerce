import Banner from "@/components/Header/Banner";
import Content from "@/components/Header/Content";
import FixedNavigation from "@/components/Header/FixedNavigation";

export default function Header() {
	return (
		<div className='w-full'>
			<Banner />
			<Content />
			<FixedNavigation />
		</div>
	);
}
