import React from "react";
import TodoCard from "./TodoCard";

// images
import DownArrow from "../img/down_arrow.png";
import Shop from "../img/shop.png";
import TProflogo from "../img/T_profile_logo.png";

function Dashboard() {
	return (
		<div
			style={{
				width: "100%",
				padding: "20px 28px",
			}}
		>
			<div /* project navigation / profile */
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "30px",
				}}
			>
				<div
					style={{
						display: "flex",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "400px",
							height: "58px",
							padding: "0 30px 0 20px ",
							borderRadius: "8px",
							border: "solid 2px #808080",
							fontSize: "20px",
							color: "#808080",
							marginRight: "58px",
							cursor: "pointer",
						}}
					>
						All projects
						<img src={DownArrow} alt="▼" width={"14px"} />
					</div>
					<div
						style={{
							width: "58px",
							height: "58px",
							borderRadius: "18px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 4px #00000026",
							cursor: "pointer",
						}}
					>
						<img
							src={Shop}
							alt="|shop|"
							style={{
								width: "30px",
							}}
						/>
					</div>
				</div>
				<img
					src={TProflogo}
					alt="T."
					style={{
						width: "46px",
						height: "46px",
						cursor: "pointer",
					}}
				/>
			</div>

			<section style={{
                marginBottom: "40px",
            }}>
				<h1
					style={{
						fontSize: "36px",
						fontWeight: "600",
						marginBottom: "20px",
					}}
				>
					Suggestion
				</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "30px",
					}}
				>
					<TodoCard
						Color1={"#DAFBC6"}
						Color2={"#BBE89F"}
						Title="Add your project"
						Description="personal"
					/>
					<TodoCard
						Color1={"#A8F2F5"}
						Color2={"#A2D3F0"}
						Title="Add product structure"
						Description="personal"
					/>
					
				</div>
			</section>
			<section>
				<h1
					style={{
						fontSize: "36px",
						fontWeight: "600",
						marginBottom: "20px",
					}}
				>
					Tasks
				</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "30px",
					}}
				>
					<TodoCard
						Color1={"#EFF0A8"}
						Color2={"#DBE274"}
						Title="Add task"
						Description="Click to add a new task"
					/>
					
				</div>
			</section>
			<div></div>
		</div>
	);
}

export default Dashboard;
