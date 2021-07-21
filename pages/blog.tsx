import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layouts from "../components/layouts";
import { JigsawPuzzle } from "../components/puzzle";
import Lottie from "lottie-react-web";
import animation from "../animation.json";

const Blog: React.FC = () => {
	const [solved, setSolved] = React.useState(false);
	return (
		<Layouts>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Mahmdoud Abd El Ghany" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="h-full w-full flex items-center justify-center">
				{!solved && (
					<div className="mx-auto">
						<JigsawPuzzle
							imageSrc="/letter.svg"
							rows={2}
							columns={2}
							onSolved={() => {
								setSolved(true);
							}}
						/>
					</div>
				)}
				{solved && (
					<div className="  ">
						<figure>
							<Image src="/hello.svg" alt="hello" width={500} height={500} />
						</figure>
					</div>
				)}
			</section>
			<section className=" w-6/12 mx-auto">
				<Lottie
					options={{
						animationData: animation,
						loop: false,
					}}
					style={{
						cursor: `auto`,
					}}
				/>
			</section>
		</Layouts>
	);
};
export default Blog;
