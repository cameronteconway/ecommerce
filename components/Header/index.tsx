import Banner from "@/components/Header/Banner";
import ContentDesktop from "@/components/Header/ContentDesktop";
import FixedNavigation from "@/components/Header/FixedNavigation";
import ContentMobile from "@/components/Header/ContentMobile";

export default function Header() {
	return (
		<div className='w-full'>
			<Banner />
			<ContentDesktop />
			<ContentMobile />
			<FixedNavigation />
		</div>
	);
}
