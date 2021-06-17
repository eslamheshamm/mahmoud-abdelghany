import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Layouts from "../components/layouts";
import FormInputs from "../components/form";

const Home: React.FC = () => {
	return (
		<Layouts>
			<Head>
				<title>Home</title>
				<meta name="description" content="Mahmdoud Abd El Ghany" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="w-11/12 mx-auto grid md:grid-cols-2 mt-16 pb-28 gap-4 md:mt-52">
				<article className="flex flex-col justify-center ">
					<h1 className="font-NeueBold font-bold text-4xl md:text-5xl mb-4">
						We’re still building this website!
					</h1>
					<h2 className="font-NeueThin text-4xl md:text-5xl">
						Be the first to hear about new fonts.
					</h2>
					<div className="  md:w-10/12">
						<FormInputs />
					</div>
				</article>
				<div className="flex flex-col justify-center items-center md:items-end  row-start-1 md:row-start-auto">
					<figure>
						<Image src="/hello.svg" alt="hello" width={500} height={500} />
					</figure>
				</div>
			</section>
		</Layouts>
	);
};
export default Home;
