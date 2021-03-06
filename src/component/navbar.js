import React, { useState } from "react";
import { Grid, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Sidebar } from "./sidebar";
import SidebarContent from "./sidebarContent";
import { IoIosPerson } from "react-icons/io";
import { colors } from "./constant";
function Navbar(props) {
	const [left, setLeft] = useState(false);
	const [open, setOpen] = useState(false);
	const toggleSidebar = event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setLeft(!left);
	};
	function closeModal() {
		setOpen(false);
	}
	function openModal() {
		setOpen(true);
	}
	const nav = (
		<Grid container style={{ display: "flex", justifyContent: "flex-end" }}>
			<Grid>
				<Link style={{ textDecoration: "none" }} to={"/"}>
					<Typography style={{ marginRight: 10, color: colors.blue }}>
						Home
					</Typography>
				</Link>
			</Grid>
			<Grid>
				<Link style={{ textDecoration: "none" }} to={"/jobs"}>
					<Typography style={{ marginRight: 10, color: colors.blue }}>
						Jobs
					</Typography>
				</Link>
			</Grid>
			<Grid>
				<Link style={{ textDecoration: "none" }} to={"/remotejobs"}>
					<Typography style={{ marginRight: 10, color: colors.blue }}>
						RemoteJobs
					</Typography>
				</Link>
			</Grid>
			<Grid>
				<Link style={{ textDecoration: "none" }} to={"/about"}>
					<Typography style={{ marginRight: 10, color: colors.blue }}>
						About
					</Typography>
				</Link>
			</Grid>
			<Grid>
				<Link style={{ textDecoration: "none" }} to={"/contact"}>
					<Typography style={{ marginRight: 10, color: colors.blue }}>
						Contact
					</Typography>
				</Link>
			</Grid>
			<Grid>
				<Link
					style={{ textDecoration: "none" }}
					to={localStorage.getItem("token") ? "/profile" : "/login"}
				>
					<Button
						style={{
							marginRight: 10,
							marginTop: -4,
							...styles.registerbtn
						}}
					>
						{localStorage.getItem("token") ? "Dashboard" : "Login"}
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
	return (
		<div style={styles.root}>
			<Toolbar className="toolbar" style={{ backgroundColor: "white" }}>
				<Grid>
					<Link
						style={{
							textDecoration: "none",
							fontSize: 30,
							color: colors.orange
						}}
						to={"/"}
					>
						AchifJobs
					</Link>
				</Grid>
				<Grid className="sidebar">
					<Sidebar
						Open={left}
						toggleBar={toggleSidebar}
						content={<SidebarContent openModal={openModal} />}
					/>
				</Grid>

				{nav}
			</Toolbar>
		</div>
	);
}

const styles = {
	root: {
		flexGrow: 1
	},
	registerbtn: {
		borderRadius: 30,

		backgroundColor: "orange",
		color: "white"
	},

	link: {
		color: "green",
		background: "transparent",
		textDecoration: "none",
		marginRight: 8
	}
};

export default Navbar;
