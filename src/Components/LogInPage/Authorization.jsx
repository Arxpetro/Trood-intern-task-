// Authorization content for main block

import React from "react";
import Input from "../inputComponents/Input/Input";
import PasswordInput from "../inputComponents/Password/PasswordInput";

function Authorization() {
	return (
		<div>
			<h1
				style={{
					fontSize: "40px",
					fontWeight: "600",
					lineHeight: "48px",
					textAlign: "center",
					marginBottom: "50px",
				}}
			>
				Authorization
			</h1>
			<form action="" method="get">
				<div>
					<Input title={"Email"} />
				</div>
				<div>
					<PasswordInput />
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<input
						type="submit"
						value="Log in"
						style={{
							height: "40px",
							width: "204px",
							backgroundColor: "#3888E7",
							borderColor: "#3888E7",
							color: "white",
							border: "none",
							borderRadius: "6px",
							marginTop: "26px",
							cursor: "pointer",
							fontWeight: "500",
						}}
					/>
					<button
						style={{
							height: "40px",
							width: "204px",
							backgroundColor: "white",
							color: "#3888E7",
							fontWeight: "500",
							border: "1px solid #3888E7",
							borderRadius: "6px",
							marginTop: "26px",
							cursor: "pointer",
						}}
					>
						Sign up
					</button>
				</div>
			</form>

			<p
				style={{
					textAlign: "end",
					marginTop: "20px",
					color: "#3888E7",
					fontSize: "14px",
					fontWeight: "500",
					cursor: "pointer",
				}}
			>
				Forgot password
			</p>
		</div>
	);
}

export default Authorization;
