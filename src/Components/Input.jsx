// Email input block for Authorization, Registration and ForgotPassword blocks

import React from "react";

function Input({Title}) {
	return (
		<div>
			<div
				style={{
					marginBottom: "4px",
				}}
			>
				<p
					style={{
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "20px",
					}}
				>
					{Title}
				</p>
				<input
					className="textInput"
					type="email"
					name="email"
					required
					style={{
						width: "100%",
						height: "38px",
						border: "1px solid #CBD5E1",
						borderRadius: "6px",
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				/>
			</div>
		</div>
	);
}

export default Input;
