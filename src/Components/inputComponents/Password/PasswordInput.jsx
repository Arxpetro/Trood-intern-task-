// Password input element for Authorization and Registration blocks

import React, { useState } from "react";
import EyeImg from "../../img/eye.png";

import "./PasswordInput.css";

function PasswordInput() {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<p
				
			>
				Password
			</p>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					position: "relative",
				}}
			>
				<input
					type={showPassword ? "text" : "password"}
					id="passwordInput"
					style={{
						width: "100%",
						height: "38px",
						border: "1px solid #CBD5E1",
						borderRadius: "6px",
						paddingLeft: "10px",
						paddingRight: "36px",
					}}
				/>

				<img
					src={EyeImg}
					alt="o"
					style={{
						width: "24px",
						height: "24px",
						position: "absolute",
						right: "8px",
						cursor: "pointer",
					}}
					onClick={handleTogglePassword}
				/>
			</div>
		</div>
	);
}

export default PasswordInput;
