import React, { Component } from "react";

import { Grid, Container } from "@material-ui/core";
import { FaUsers, FaWarehouse, FaBook } from "react-icons/fa";
import CardLayout from "./layout/cardLayout";
import Sidebar from "./layout/sidebar";
class Dashboard extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				<Container maxWidth="md">
					<Grid container style={{ justifyContent: "center" }}>
						<CardLayout
							icon={<FaUsers size={40} color="white" />}
							name="Users"
							count={22400}
						/>
						<CardLayout
							icon={<FaWarehouse size={40} color="white" />}
							name="Comp"
							count={22400}
						/>
						<CardLayout
							icon={<FaBook size={40} color="white" />}
							name="booking"
							count={22400}
						/>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default Dashboard;
