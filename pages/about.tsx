import React from "react";
import Head from "next/dist/next-server/lib/head";
import Layouts from "../components/layouts";
import FormInputs from "../components/form";
const About = () => {
	return (
		<Layouts>
			<Head>
				<title>About</title>
				<meta name="description" content="Mahmdoud Abd El Ghany" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="w-11/12 mx-auto pb-52">
				<p className=" font-NeueBold text-5xl md:text-6xl mt-24">
					I create rhythm using space and <br /> proportion, and harmony with
					light <br /> and dark, I build tension between <br /> thick and thin,
					and unity from many <br /> parts.
				</p>
				<div className="grid md:grid-cols-2 gap-6 mt-14">
					<article className="font-NeueThin text-xl">
						<p>
							Hey, this is about Hey, a creative studio based in Barcelona since
							2007. We mostly work on graphic design and illustration projects
							for clients around the world.
						</p>
						<br />
						<p>
							We create fresh brands, conceptual communication campaigns, unique
							illustrations and other creative stuff by working closely with our
							clients, building strong relationships and taking care of every
							aspect of the design process. We’re constantly evolving and
							adapting not only because business and design doesn’t stay still
							but also because we like to explore new ideas.
						</p>
						<br />
						<p>
							We do it all with passion and detail because we love what we do
							and we truly believe in the power of visuals for changing things
							and achieving communication goals.
						</p>
					</article>
					<article className="font-NeueThin text-xl">
						<p>
							Images are how we communicate. Simple, direct and comprehensive
							images form our visual language. It’s a language that speaks
							clearly through different media, be it print, digital or even the
							handcrafted. Our images generate ideas that cross international
							borders with ease leading to unique solutions for clients big and
							small and sometimes just for ourselves.
						</p>
						<br />
						<p>
							Side projects are a must in Hey. Thinking about design, free from
							commercial pressures, helps us to break creative boundaries and
							keep growing. The HeyShop is the most significant showcase of
							Hey’s personal initiatives and graphic expressions.
						</p>
					</article>
				</div>
				<h2 className="font-NeueBold text-4xl md:text-5xl mt-28">
					Selected Clients
				</h2>
				<ul className="mt-8 flex flex-col">
					<li className="font-NeueThin text-4xl md:text-5xl mb-5 ">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Architecture & Design
						</a>
					</li>
					<li className="font-NeueThin text-4xl md:text-5xl mb-5 ">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Cultural
						</a>
					</li>
					<li className="font-NeueThin text-4xl md:text-5xl mb-5 ">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Editorial
						</a>
					</li>
					<li className="font-NeueThin text-4xl md:text-5xl ">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							Fashion
						</a>
					</li>
				</ul>
				<h2 className="font-NeueBold text-4xl md:text-5xl mt-24">
					We’re still building this website!
				</h2>
				<h2 className=" font-NeueThin text-4xl md:text-5xl mt-4">
					Be the first to hear about new fonts.
				</h2>
				<div className="md:w-10/12 lg:w-9/12">
					<FormInputs />
				</div>
			</section>
		</Layouts>
	);
};
export default About;
