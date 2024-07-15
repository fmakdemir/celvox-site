("use client");

import * as React from "react";
import { useState } from "react";
import logo from "@/assets/logo-small.png";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "ceLLama",
		href: "/solutions/cellama",
		description:
			"An automated cell type annotation pipeline using local Large Language Models (LLMs).",
	},
];

export function NavigationMenuDemo() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [submenuOpen, setSubmenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				<a href="/">
					<img
						src={logo}
						alt="Celvox Logo"
						style={{ width: "40px", height: "40px" }}
					/>
				</a>

				{/* Mobile menu button */}
				<button className="md:hidden" onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? "Close" : "Menu"}
				</button>

				{/* Desktop menu */}
				<nav className="hidden md:flex">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<a href="/">Home</a>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<a href="/about">About</a>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<a href="/contact">Contact</a>
									</NavigationMenuLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				{/* Mobile menu */}
				{isMobileMenuOpen && (
					<div className="">
						<div className="fixed inset-0 z-50 bg-background md:hidden">
							<div className="p-4 bg-black text-neutral-400">
								<button onClick={toggleMobileMenu} className="text-xl">
									✕
								</button>
								<nav className="mt-8">
									<ul className="space-y-4">
										<li>
											<a href="/" onClick={toggleMobileMenu}>
												Home
											</a>
										</li>
										<li>
											<a href="/about" onClick={toggleMobileMenu}>
												About
											</a>
										</li>
										<li>
											<button onClick={() => setSubmenuOpen(!submenuOpen)}>
												Solutions
											</button>
											{submenuOpen && (
												<ul className="ml-4 mt-2 space-y-2">
													<li>
														<a
															href="/solution/scellama"
															onClick={toggleMobileMenu}
														>
															| ceLLama
														</a>
													</li>
												</ul>
											)}
										</li>
										<li>
											<a href="/contact" onClick={toggleMobileMenu}>
												Contact
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
