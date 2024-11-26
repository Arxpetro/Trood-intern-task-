import React from "react";
import Input from "../inputComponents/Input/Input";

function ForgotPass() {
	return (
		<div>
			<h1
				style={{
					fontSize: "42px",
					fontWeight: "600",
					lineHeight: "48px",
					textAlign: "center",
					marginBottom: "15px",
				}}
			>
				Forgot your password
			</h1>
			<p
				style={{
					fontSize: "14px",
					fontWeight: "500",
					textAlign: "center",
					marginBottom: "20px",
				}}
			>
				Enter your email bellow and we’ll get you back on track
			</p>
			<form action="" method="get">
				<Input title={"Email"} />
				<input
					type="submit"
					value="Recover password"
					style={{
						height: "40px",
						width: "100%",
						backgroundColor: "#3888E7",
						borderColor: "#3888E7",
						color: "white",
						border: "none",
						borderRadius: "6px",
						marginTop: "26px",
						marginBottom: "20px",
						cursor: "pointer",
						fontWeight: "500",
						fontFamily: "Inter",
					}}
				/>
			</form>
			<p
				style={{
					marginTop: "15px",

					color: "#3888E7",
					fontSize: "14px",
					fontWeight: "500",
					cursor: "pointer",
				}}
			>
				Back to Log in
			</p>
		</div>
	);
}

export default ForgotPass;
