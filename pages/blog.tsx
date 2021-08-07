import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layouts from "../components/layouts";
import { JigsawPuzzle } from "../components/puzzle";
// import Lottie from "lottie-react-web";
import animation from "../animation.json";
import { useLottie } from "lottie-react";
import Lottie from "lottie-react";

const Blog = () => {
	// const [solved, setSolved] = React.useState(false);
	const style = {
		height: 300,
	};
	const options = {
		animationData: animation,
	};
	const lottieObj = useLottie(options, style);

	// const Animation = useLottieInteractivity({
	// 	lottieObj,
	// 	mode: "scroll",
	// 	actions: [
	// 		{
	// 			visibility: [0, 1],
	// 			type: "seek",
	// 			frames: [0, 30],
	// 		},
	// 	],
	// });
	const interactivity = {
		mode: "scroll",
		actions: [
			{
				visibility: [0, 1],
				type: "seek",
				frames: [0, 30],
			},
		],
	};

	return (
		<main className="relative w-full h-full overflow-hidden">
			{/* <RemoveScrollBar /> */}
			<Head>
				<title>Blog</title>
				<meta name="description" content="Mahmdoud Abd El Ghany" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				{" "}
				<Lottie
					animationData={animation}
					style={style}
					interactivity={interactivity}
				/>{" "}
			</div>
			<section className="  min-h-screen ">
				{/* <Lottie
					animationData={animation}
					style={style}
					interactivity={Interactivity}
				/> */}

				{/* <Lottie
					options={{
						animationData: animation,
						loop: false,
					}}
					style={{
						cursor: `auto`,
					}} */}
				{/* /> */}
			</section>
			<section className="h-full min-h-screen w-full flex items-center justify-center">
				{/* {!solved && (
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
					<div>
						<figure>
							<Image src="/hello.svg" alt="hello" width={500} height={500} />
						</figure>
					</div>
				)} */}
			</section>
		</main>
	);
};

export default Blog;
