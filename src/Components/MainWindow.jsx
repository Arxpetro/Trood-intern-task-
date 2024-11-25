// main registration/login block

import React from "react";
import MainLogo from "./img/mainlogo.png";
import Registration from "./Registration"
import Authorization from "./Authorization";
import ForgotPass from "./ForgotPass";
import SetNewPass from "./SetNewPass";

function MainWindow() {
	return (
		<div>
			<style>{`
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
                    font-family: 'Inter';
				}
                p {
                    margin-bottom: 6px;
                }
			`}</style>
			<img
				src={MainLogo}
				alt="logo"
				style={{
					display: "block",
					width: "443px",
					margin: "110px auto",
				}}
			/>
            <div //     main block
				style={{
					width: "620px",
					boxShadow: "0px 4px 15px #00000026",
					borderRadius: "24px",
					margin: "auto",
					fontFamily: "Inter",
					padding: "120px 98px",
					boxSizing: "border-box",
				}}
			>
            
                <Authorization/>
                {/* <Registration/> */}
                {/* <ForgotPass/> */}
                {/* <SetNewPass/> */}

			</div>
			
		</div>
	);
}

export default MainWindow;
