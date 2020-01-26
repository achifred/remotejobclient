import React, { Component } from "react";
import "./static/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RemoteJob } from "./pages/remotejob";
import Navbar from "./component/navbar";
import { Home } from "./pages/home";
import Aboutus from "./pages/aboutUs";
import ContactUs from "./pages/contactus";
import { Postjob } from "./pages/postjob";
import { Job } from "./pages/job";
import { Error404 } from "./component/error404";
import Login from "./component/loginform";
import SignUp from "./component/signup";
import { Userprofile } from "./pages/userprofile";
import { Edit } from "./pages/edit";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route
							path="/"
							exact
							render={props => <Home {...props} />}
						/>
						<Route
							path="/remotejobs"
							exact
							render={props => <RemoteJob {...props} />}
						/>
						<Route
							path="/about"
							exact
							render={props => <Aboutus {...props} />}
						/>
						<Route
							path="/contact"
							exact
							render={props => <ContactUs {...props} />}
						/>
						<Route
							path="/postjob"
							exact
							render={props => <Postjob {...props} />}
						/>
						<Route
							path="/jobs"
							exact
							render={props => <Job {...props} />}
						/>
						<Route
							path="/login"
							exact
							render={props => <Login {...props} />}
						/>
						<Route
							path="/register"
							exact
							render={props => <SignUp {...props} />}
						/>
						<Route
							path="/profile"
							exact
							render={props => <Userprofile {...props} />}
						/>
						<Route
							path="/editjob/:id"
							exact
							render={props => <Edit {...props} />}
						/>
						<Route path="" component={Error404} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
