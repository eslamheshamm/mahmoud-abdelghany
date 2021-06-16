import React from "react";
import Image from "next/image";
import { NavLink } from "./activeLink";

const Layouts: React.FC = (props) => {
	const { children } = props;
	return (
		<>
			<header className="w-11/12 mt-12 mx-auto">
				<nav className="flex justify-between items-center">
					<div>
						<Image src="/Logo.svg" alt="logo" width={94} height={64} />
					</div>
					<ul className="flex items-center">
						<li>
							<NavLink activeClassName="font-bold" href="/">
								<a className="font-light mr-8 text-xl">Home</a>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="font-bold" href="/blog">
								<a className="font-light mr-8 text-xl">Blog</a>
							</NavLink>
						</li>{" "}
						<li>
							<NavLink activeClassName="font-bold" href="/fonts-in-use">
								<a className="font-light mr-8 text-xl">Fonts In Use</a>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="font-bold" href="/typefaces">
								<a className="font-light mr-8 text-xl">Typefaces</a>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="font-bold" href="/about">
								<a className="font-light text-xl">About</a>
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
