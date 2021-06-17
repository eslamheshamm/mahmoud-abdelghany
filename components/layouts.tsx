import React from "react";
import Image from "next/image";
import { NavLink } from "./activeLink";
import classNames from "classnames";
import styles from "./layouts.module.css";
const Layouts: React.FC = (props) => {
	const { children } = props;
	return (
		<>
			<header className="w-11/12 py-8 md:pt-12 mx-auto">
				<nav className={classNames(styles.navbar)}>
					<div>
						<Image src="/Logo.svg" alt="logo" width={94} height={64} />
					</div>
					<ul className="flex  flex-col md:flex-row items-start md:items-center">
						<li className="font-NeueLight mr-8 text-xl">
							<NavLink activeClassName="font-NeueBold" href="/">
								<a>Home</a>
							</NavLink>
						</li>
						<li className="font-NeueLight mr-8 text-xl">
							<NavLink activeClassName="font-NeueBold" href="/blog">
								<a>Blog</a>
							</NavLink>
						</li>{" "}
						<li className="font-NeueLight mr-8 text-xl">
							<NavLink activeClassName="font-NeueBold" href="/fonts-in-use">
								<a>Fonts In Use</a>
							</NavLink>
						</li>
						<li className="font-NeueLight mr-8 text-xl">
							<NavLink activeClassName="font-NeueBold" href="/typefaces">
								<a>Typefaces</a>
							</NavLink>
						</li>
						<li className="font-NeueLight text-xl">
							<NavLink activeClassName="font-NeueBold" href="/about">
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
