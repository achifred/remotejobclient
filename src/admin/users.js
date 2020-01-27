import React, { Component } from "react";

import { Tablelayout } from "./layout/tablelayout";
import Sidebar from "./layout/sidebar";
import { Container, Grid } from "@material-ui/core";
import { apiPost } from "../ajax/driver";
let url =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_URL
		: "http://localhost:5000/";

class Users extends Component {
	deleteUser = async id => {
		try {
			//event.preventDefault();

			const link = `${url}users/delete/${id}`;
			//console.log(data);
			//this.setState({ isLoading: true });
			let response = await apiPost(link, "auth", "DELETE", {
				data: "data"
			});

			if (response.message === "success") {
				alert("job deleted successfully");
				//this.setState({ isLoading: false });
				this.props.history.push("/users");
			} else {
				//this.setState({ isLoading: false });
				alert("sorry try again");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	render() {
		const users = [
			{ title: "Index", field: "id" },
			{ title: "Email Address", field: "email" },
			{ title: "Role", field: "role_name" }
		];
		//const locations = [{ title: "Name", field: "location_name" }];

		return (
			<Grid container style={{ justifyContent: "center" }}>
				<Sidebar />
				<Container maxWidth="md">
					<Tablelayout
						columns={users}
						rows={() =>
							new Promise((resolve, reject) => {
								fetch(`${url}users`)
									.then(response => response.json())
									.then(result => {
										resolve({
											data: result,

											totalCount: result.length
										});
									});
							})
						}
						deletefunction={this.deleteUser}
						title="All users"
					/>

					{/*<Tablelayout
						columns={locations}
						rows={this.props.loc.Data}
						deletefunction={""}
						token={this.props.login.userData.token}
						title="Location"
          />*/}
				</Container>
			</Grid>
		);
	}
}

export default Users;
