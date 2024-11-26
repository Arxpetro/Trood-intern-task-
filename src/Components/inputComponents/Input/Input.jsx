// Email input block for Authorization, Registration and ForgotPassword blocks

import React from "react";
import "./Input.css";
function Input({ title }) {
	return (
		<div>
			<p>{title}</p>
			<input className="textInput" type="email" name="email" required />
		</div>
	);
}

export default Input;
