import Banner from "@/components/Header/Banner";
import Content from "@/components/Header/Content";
import Navigation from "@/components/Header/Navigation";

export default function Header() {
	return (
		<div className='w-full'>
			<Banner />
			<Content />
			<Navigation />
		</div>
	);
}
