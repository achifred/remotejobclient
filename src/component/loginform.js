import React, { Component } from "react";

import { Grid, TextField, Button, Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { colors } from "./constant";
import { Href } from "./href";

import { LoadingIndicator } from "./loadingIndicator";
import { apiPost } from "../ajax/driver";
import jwt from "jsonwebtoken";

//import GoogleLogin from "react-google-login";
const initialState = {
	email: "",

	password: "",
	islogedin: false
};
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	onchange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		//console.log(this.state)
	};

	/*responseGoogle = res => {
    this.props.loginWithGoogle({ access_token: res.accessToken }, () => {
      console.log("success");
    });
  };*/

	ulogin = async event => {
		try {
			event.preventDefault();
			const data = {
				email: this.state.email,
				password: this.state.password
			};
			const url =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_URL
					: "http://localhost:5000/";
			const link = `${url}users/login`;
			this.setState({ islogedin: true });
			const result = await apiPost(link, "auth", "POST", data);
			if (result.message === "success") {
				this.setState({ islogedin: false });
				localStorage.setItem("token", result.token);
				const userinfo = jwt.decode(result.token);

				localStorage.setItem("userinfo", userinfo.id);
				localStorage.setItem("useremail", userinfo.email);

				this.props.history.push("/profile");
				window.location.reload();
			} else {
				this.setState({ islogedin: false });
				alert("wrong credentials");
			}
		} catch (error) {
			console.log(error.message);
		}
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
						{this.state.islogedin ? <LoadingIndicator /> : ""}
						<form onSubmit={this.ulogin}>
							<div>
								<TextField
									placeholder="email address"
									variant="outlined"
									autoFocus={true}
									name="email"
									type="email"
									required
									onChange={this.onchange}
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

							<div style={{ textAlign: "center", marginTop: 25 }}>
								<Button
									type="submit"
									style={{
										color: colors.blue
									}}
								>
									Login
								</Button>
							</div>
						</form>
						{/* <Grid
              container
              style={{
                display: "flex",
                textAlign: "center",
                marginTop: 25,
                justifyContent: "center"
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  color: colors.mintgreen
                }}
              >
                or use
              </Typography>
              <GoogleLogin
                clientId="346504987485-do8b2e812al0cpk8o0d8epffiqc6bj7l.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
              </Grid>*/}
						<Grid
							container
							style={{
								display: "flex",
								textAlign: "center",
								marginTop: 25,
								justifyContent: "center"
							}}
						>
							<Typography
								style={{
									textAlign: "center",
									fontSize: 25,
									color: colors.blue
								}}
							>
								No Account?
							</Typography>
							<Href
								path="/register"
								styles={{
									color: "orange"
								}}
							>
								Signup
							</Href>
						</Grid>
					</div>
				</Grid>
			</div>
		);
	}
}

const styles = {
	input: {
		marginTop: 50,
		marginBottom: 50,
		width: 300
	}
};

export default Login;
