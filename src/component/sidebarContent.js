import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { colors } from "./constant";

import { Link } from "react-router-dom";

function SidebarContent({ openModal }) {
	return (
		<div>
			<div style={{ justifyContent: "center", textAlign: "center" }}>
				<div>
					<Link style={{ textDecoration: "none" }} to={"/"}>
						<Typography variant="h6" style={{ color: colors.blue }}>
							Home
						</Typography>
					</Link>
				</div>
				<div>
					<Link style={{ textDecoration: "none" }} to={"/jobs"}>
						<Typography variant="h6" style={{ color: colors.blue }}>
							Jobs
						</Typography>
					</Link>
				</div>
				<div>
					<Link style={{ textDecoration: "none" }} to={"/remotejobs"}>
						<Typography
							style={{ marginRight: 10, color: colors.blue }}
						>
							RemoteJobs
						</Typography>
					</Link>
				</div>
				<Grid>
					<Link style={{ textDecoration: "none" }} to={"/about"}>
						<Button
							variant="text"
							style={{ color: colors.blue, marginRight: 10 }}
						>
							About
						</Button>
					</Link>
				</Grid>
				<Grid>
					<Link style={{ textDecoration: "none" }} to={"/contact"}>
						<Button
							variant="text"
							style={{ color: colors.blue, marginRight: 10 }}
						>
							Contact
						</Button>
					</Link>
				</Grid>
				<Grid>
					<Link
						style={{ textDecoration: "none" }}
						to={
							localStorage.getItem("token")
								? "/profile"
								: "/login"
						}
					>
						<Button
							style={{
								marginRight: 10,
								marginTop: -4,
								orderRadius: 30,

								backgroundColor: "orange",
								color: "white"
							}}
						>
							{localStorage.getItem("token")
								? "Dashboard"
								: "Login"}
						</Button>
					</Link>
				</Grid>
			</div>
		</div>
	);
}

export default SidebarContent;
