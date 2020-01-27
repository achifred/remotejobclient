import React, { Component } from "react";
import {
	Grid,
	TextField,
	Button,
	Container,
	Typography
} from "@material-ui/core";
import { apiPost } from "../ajax/driver";
import { LoadingIndicator } from "../component/loadingIndicator";
import { Redirect } from "react-router-dom";

export class Postjob extends Component {
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
			techstack: "",
			apply: "",
			deadline: "",
			level: "",
			isLoading: false
		};
	}

	onchange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addJob = async event => {
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
				apply: this.state.apply,
				techstack: this.state.techstack,
				deadline: this.state.deadline,
				level: this.state.level,
				id: localStorage.getItem("userinfo")
			};
			const url =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_URL
					: "http://localhost:5000/";
			const link = `${url}devjob`;
			//console.log(data);
			this.setState({ isLoading: true });
			let response = await apiPost(link, "auth", "POST", data);

			if (response.message === "success") {
				alert("job added successfully");
				this.setState({ isLoading: false });
				this.props.history.push("/jobs");
			} else {
				this.setState({ isLoading: false });
				alert("sorry try again");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	render() {
		if (!localStorage.getItem("token")) {
			return <Redirect to="/login" />;
		}

		return (
			<div>
				<Container maxWidth="lg">
					<Typography
						variant="h5"
						component="h5"
						style={{ textAlign: "center" }}
					>
						Please fill in the form below to post a job
					</Typography>
					<Grid container style={{ justifyContent: "center" }}>
						{this.state.isLoading ? <LoadingIndicator /> : ""}
						<form onSubmit={this.addJob}>
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
											style={styles.input}
										/>
									</div>

									<div>
										<TextField
											placeholder="Tech stack"
											variant="outlined"
											type="text"
											name="techstack"
											onChange={this.onchange}
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
											rows={7}
											name="description"
											onChange={this.onchange}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="How to apply"
											variant="outlined"
											type="text"
											required
											multiline
											rows={7}
											name="apply"
											onChange={this.onchange}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="Job experience level"
											variant="outlined"
											type="text"
											name="level"
											onChange={this.onchange}
											style={styles.input}
										/>
									</div>
									<div>
										<TextField
											placeholder="Dead line for applications"
											variant="outlined"
											type="text"
											name="deadline"
											onChange={this.onchange}
											style={styles.input}
										/>
									</div>
								</Grid>
							</Grid>
							<div style={{ textAlign: "center", marginTop: 25 }}>
								<Button type="submit">Post Job</Button>
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
