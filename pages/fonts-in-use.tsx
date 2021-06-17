import React from "react";
import Head from "next/head";
import Layouts from "../components/layouts";
const FontsInUse = () => {
	return (
		<Layouts>
			<Head>
				<title>Fonts In Use</title>
				<meta name="description" content="Mahmdoud Abd El Ghany" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="flex justify-center items-center">
				<h1 className="font-NeueBold text-6xl mt-72">Coming Soon</h1>
			</section>{" "}
		</Layouts>
	);
};
export default FontsInUse;
