import React, { useEffect, useState } from "react";
import Profile from "../component/profile";
import { Fetch, apiPost } from "../ajax/driver";
import { Redirect } from "react-router-dom";

export function Userprofile(props) {
	const [jobList, updateJobList] = useState([]);
	const [isloading, setisLoading] = React.useState(true);
	const url =
		process.env.NODE_ENV === "production"
			? process.env.REACT_APP_URL
			: "http://localhost:5000/";
	const id = localStorage.getItem("userinfo");
	const deleteJob = async id => {
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
				props.history.push("/jobs");
			} else {
				//this.setState({ isLoading: false });
				alert("sorry try again");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		Fetch(`${url}devjob/${id}`, updateJobList);
		setisLoading(false);
	}, [url, id]);
	if (!localStorage.getItem("token")) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<Profile
				data={jobList}
				isloading={isloading}
				deletejob={deleteJob}
				history={props.history}
			/>
		</div>
	);
}
