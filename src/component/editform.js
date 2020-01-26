import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { Grid, TextField, Container, Typography } from "@material-ui/core";
import { apiPost } from "../ajax/driver";

export class Editform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			company: "",
			company_url: "",
			location: "",
			type: "",
			description: "",
			salary: "",
			jobid: "",
			techstack: ""
		};
	}

	componentDidMount() {
		this.setState({
			title: this.props.job_title,

			company: this.props.company_name,
			company_url: this.props.companyurl,
			location: this.props.job_location,
			type: this.props.job_type,
			description: this.props.job_description,
			salary: this.props.job_salary,
			jobid: this.props.jobid
		});
	}

	onchange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	editJob = async event => {
		try {
			event.preventDefault();
			const data = {
				title: this.state.title,
				company: this.state.company,
				company_url: this.state.company_url,
				location: this.state.location,
				type: this.state.type,
				description: this.state.description,
				salary: this.state.salary,
				id: this.state.jobid
				//id: localStorage.getItem("userinfo")
			};
			const url =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_URL
					: "http://localhost:5000/";
			const link = `${url}devjob/updatejob`;
			let response = await apiPost(link, "auth", "PUT", data);
			//console.log(response);
			if (response.message === "success") {
				alert("job updated successfully");
				//this.setState({ isLoading: false });
				this.props.history.push("/profile");
			} else {
				//this.setState({ isLoading: false });
				alert("sorry try again");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	render() {
		const {
			job_title,
			company_name,
			companyurl,
			job_location,
			job_type,
			job_description,
			job_salary
		} = this.props;

		//console.log(title);

		return (
			<div>
				<Container maxWidth="lg">
					<Typography
						variant="h5"
						component="h5"
						style={{ textAlign: "center" }}
					>
						Edit a job
					</Typography>
					<Grid container style={{ justifyContent: "center" }}>
						<form onSubmit={this.editJob}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<div>
										<TextField
											placeholder="job title"
											variant="outlined"
											type="text"
											required
											name="title"
											onChange={this.onchange}
											defaultValue={job_title}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="company name"
											variant="outlined"
											type="text"
											required
											name="company"
											onChange={this.onchange}
											defaultValue={company_name}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="company website url"
											variant="outlined"
											type="text"
											name="company_url"
											onChange={this.onchange}
											defaultValue={companyurl}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="location"
											variant="outlined"
											type="text"
											required
											name="location"
											onChange={this.onchange}
											defaultValue={job_location}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="type eg. full time, contract"
											variant="outlined"
											type="text"
											required
											name="type"
											onChange={this.onchange}
											defaultValue={job_type}
											style={styles.input}
										/>
									</div>
								</Grid>

								<Grid item xs={12} sm={6}>
									<div>
										<TextField
											placeholder="job description"
											variant="outlined"
											type="text"
											required
											multiline
											rows={10}
											name="description"
											onChange={this.onchange}
											defaultValue={job_description}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="salary"
											variant="outlined"
											type="text"
											name="salary"
											onChange={this.onchange}
											defaultValue={job_salary}
											style={styles.input}
										/>
									</div>
								</Grid>
							</Grid>
							<div
								style={{
									textAlign: "center",
									marginTop: 25
								}}
							>
								<Button type="submit">Edit Job</Button>
							</div>
						</form>
					</Grid>
				</Container>
			</div>
		);
	}
}

const styles = {
	input: {
		marginTop: 10,
		marginBottom: 10,
		width: 300
	}
};
