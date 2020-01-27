import React, { Component } from "react";

import { Grid, TextField, Button, Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { colors } from "./constant";
import { Href } from "./href";

import { LoadingIndicator } from "./loadingIndicator";

import { apiPost } from "../ajax/driver";
class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	onchange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		//console.log(this.state)
	};

	uSignup = async event => {
		try {
			event.preventDefault();
			const { email, password } = this.state;
			const data = { email, password };
			const url =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_URL
					: "http://localhost:5000/";
			const link = `${url}users/signup`;
			const response = await apiPost(link, "auth", "POST", data);
			if (response.message === "success") {
				this.props.history.push("/login");
			} else {
				alert("sorry try again");
			}
		} catch (error) {}
	};
	render() {
		if (localStorage.getItem("token")) {
			return <Redirect to="/jobs" />;
		}
		return (
			<div>
				<Grid
					container
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 20
					}}
				>
					<div>
						<Typography
							style={{
								textAlign: "center",
								fontSize: 30,
								color: colors.blue
							}}
						>
							Eventhub
						</Typography>
						{this.state.isSignedUp ? <LoadingIndicator /> : ""}
						<form onSubmit={this.uSignup}>
							<div>
								<TextField
									placeholder="email address"
									variant="outlined"
									name="email"
									onChange={this.onchange}
									type="email"
									required
									style={styles.input}
								/>
							</div>

							<div>
								<TextField
									placeholder="Password"
									variant="outlined"
									name="password"
									type="password"
									required
									onChange={this.onchange}
									styles={styles.input}
									fullWidth={true}
									color={colors.mintgreen}
								/>
							</div>

							<div style={{ textAlign: "center", marginTop: 20 }}>
								<Button
									type="submit"
									style={{
										color: colors.blue
									}}
								>
									Create Account
								</Button>
							</div>
						</form>

						<Grid
							container
							style={{
								display: "flex",
								textAlign: "center",
								marginTop: 20,
								justifyContent: "center"
							}}
						>
							<Typography
								style={{
									textAlign: "center",
									fontSize: 20,
									color: colors.blue
								}}
							>
								Have an Account?
							</Typography>
							<Href
								path="/login"
								styles={{
									color: "orange"
								}}
							>
								Login
							</Href>
						</Grid>
					</div>
				</Grid>
				<Grid container style={{ justifyContent: "center" }}>
					<small style={{ textAlign: "center" }}>
						by creating an account means you have accepted our terms
						and conditions
					</small>
				</Grid>
			</div>
		);
	}
}

const styles = {
	input: {
		marginTop: 30,
		marginBottom: 30,
		width: 300
	}
};

export default SignUp;
