import { NavigationMenuDemo } from "@/components/Navbar";
import { CarouselDemo } from "@/components/Carousel";

export function Home() {
	return (
		<>
			<NavigationMenuDemo />

			<div className="text-center items-center">
				<CarouselDemo />
			</div>
		</>
	);
}

export default Home;
