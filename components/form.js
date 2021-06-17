import React from "react";
import { useForm } from "react-hook-form";
function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}
const FormInputs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [succes, setSucces] = React.useState(false);

	const onSubmit = (data, e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...data,
			}),
		})
			.then((res) => {
				console.log(res);
				setSucces(true);
			})
			.catch((error) => alert(error));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col"
			autoComplete="off"
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			netlify="true"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p className="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>

			<label htmlFor="email" className="font-NeueLight border p-6 flex mt-6">
				<input
					type="text"
					id="email"
					className="w-full focus:outline-none"
					placeholder="Email@example.com"
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					disabled={succes}
				/>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.2083 24.0989L11.3369 26.3561L21.6928 16.0002L11.3369 5.64428L10.2083 7.90147L17.9535 15.6466L18.307 16.0002L17.9535 16.3538L10.2083 24.0989Z"
						fill="black"
						fillOpacity="0.3"
						stroke="white"
					/>
					<rect
						x="-1"
						y="-1"
						width="30"
						height="30"
						transform="matrix(0 -1 -1 0 30 30)"
						stroke="white"
						strokeWidth-width="2"
					/>
				</svg>
			</label>
			{succes
				? null
				: errors.email?.type === "required" && (
						<span>Please Enter Your Email </span>
				  )}
			{succes
				? null
				: errors.email?.type === "pattern" && <span>Enter Valid Email </span>}

			{succes && <p className="font-bold my-2">Thank You!</p>}

			<input type="submit" hidden />
		</form>
	);
};
export default FormInputs;
