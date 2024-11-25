import React from "react";

// images
import LeftArrow from "../img/left_arrow.png";
import MainLogo from "../img/mainlogo.png";
import Widget from "./Widget";
import Pen from "../img/pen.png";

function Profile() {
	return (
		<div>
			<style>{`
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
          font-family: 'Inter';
				}       
			`}</style>

			<header
				style={{
					display: "flex",
					alignItems: "center",
					padding: "1em",
				}}
			>
				<div
					style={{
						width: "2.4em",
						height: "2.4em",

						cursor: "pointer",
					}}
				>
					<img
						src={LeftArrow}
						alt=" <- "
						style={{
							width: "1.3em",
							height: "1.3em",
							margin: "0.5em",
						}}
					/>
				</div>
				<img
					src={MainLogo}
					alt="TROOD logo"
					style={{
						width: "15em",
						height: "2.6em",
						marginLeft: "2em",
					}}
				/>
				<h1
					style={{
						fontSize: "2.2em",
						marginLeft: "1em",
						fontWeight: "400",
					}}
				>
					Profile
				</h1>
			</header>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",

					padding: "5.7em 86px 0 60px",
				}}
			>
				<div /* action panel */>
					<h1
						style={{
							fontSize: "2.3em",
							fontWeight: "600",
							marginBottom: "0.8em",
							marginTop: "3em",
						}}
					>
						Projects:
					</h1>
					<Widget title="Crate project" />

					<h1
						style={{
							fontSize: "2.2em",
							fontWeight: "600",
							marginBottom: "0.8em",
							marginTop: "1em",
						}}
					>
						Tasks:
					</h1>
					<Widget title="Crate project" />
				</div>

				<form action="" method="get" style={{
					width: "35%",
					background: "linear-gradient(#E9F2F3,#A6C5E3)",
					borderRadius: "3%" ,
					position: "relative",
				}}>
					<img src={Pen} alt="pen_img" style={{
						width: "2em",
						position: "absolute",
						top: "2em",
						right: "2em",
					}}/>
				</form>

			</div>
		</div>
	);
}

export default Profile;
