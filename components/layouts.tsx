import React from "react";
import Image from "next/image";
import { NavLink } from "./activeLink";

const Layouts: React.FC = (props) => {
	const { children } = props;
	return (
		<>
			<header className="w-11/12 py-8 md:py-12 mx-auto">
				<nav className="flex items-baseline md:items-center justify-between w-full">
					<div>
						<Image src="/Logo.svg" alt="logo" width={94} height={64} />
					</div>
					<ul className="self-end flex flex-col md:flex-row items-start md:items-center">
						<li className="font-light mr-8 text-xl">
							<NavLink activeClassName="font-bold" href="/">
								<a>Home</a>
							</NavLink>
						</li>
						<li className="font-light mr-8 text-xl">
							<NavLink activeClassName="font-bold" href="/blog">
								<a>Blog</a>
							</NavLink>
						</li>{" "}
						<li className="font-light mr-8 text-xl">
							<NavLink activeClassName="font-bold" href="/fonts-in-use">
								<a>Fonts In Use</a>
							</NavLink>
						</li>
						<li className="font-light mr-8 text-xl">
							<NavLink activeClassName="font-bold" href="/typefaces">
								<a>Typefaces</a>
							</NavLink>
						</li>
						<li className="font-light text-xl">
							<NavLink activeClassName="font-bold" href="/about">
								<a>About</a>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className="min-h-full">{children}</main>
		</>
	);
};
export default Layouts;
