import React from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

function Registration() {
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
				Registration
			</h1>
			<form action="" method="get">
				<div>
					<Input Title={"Email"}/>
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
					<button
						style={{
							height: "40px",
							width: "100%",
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
		</div>
	);
}

export default Registration;
