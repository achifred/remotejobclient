import React, { Component } from "react";

import { Tablelayout } from "./layout/tablelayout";

import Sidebar from "./layout/sidebar";
import { Container, Grid } from "@material-ui/core";
import { apiPost } from "../ajax/driver";
let url =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_URL
		: "http://localhost:5000/";
class Alljobs extends Component {
	deleteJob = async id => {
		try {
			//event.preventDefault();

			const link = `${url}devjob/deletejob/${id}`;
			//console.log(data);
			//this.setState({ isLoading: true });
			let response = await apiPost(link, "auth", "DELETE", {
				data: "data"
			});

			if (response.message === "success") {
				alert("job deleted successfully");
				//this.setState({ isLoading: false });
				this.props.history.push("/alljobs");
			} else {
				//this.setState({ isLoading: false });
				alert("sorry try again");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	render() {
		const alljobs = [
			{ title: "Title", field: "title" },
			{ title: "Company", field: "company" },
			{ title: "Company url", field: "company_url" },
			{ title: "Location", field: "location" },
			{
				title: "Deadline",
				field: "deadline"
			}
		];

		return (
			<Grid container style={{ justifyContent: "center" }}>
				<Sidebar />
				<Container maxWidth="md">
					<Tablelayout
						columns={alljobs}
						rows={() =>
							new Promise((resolve, reject) => {
								fetch(`${url}devjob`)
									.then(response => response.json())
									.then(result => {
										resolve({
											data: result,

											totalCount: result.length
										});
									});
							})
						}
						deletefunction={this.deleteJob}
						title="All jobs"
					/>
				</Container>
			</Grid>
		);
	}
}

export default Alljobs;
