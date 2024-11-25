import React from "react";
import Input from "./Input";

function SetNewPass() {
	return (
		<div>
			<h1
				style={{
					fontSize: "40px",
					fontWeight: "600",
					lineHeight: "48px",
					textAlign: "center",
					marginBottom: "50px",
                    width: '100%',
				}}
			>
				Set your new password
			</h1>
			<form action="" method="get">
				<Input Title={"New password"} />

                <input
					type="submit"
					value="Set your new password"
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
		</div>
	);
}
{
}
export default SetNewPass;
