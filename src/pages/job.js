import React, { useEffect, useState } from "react";
import { Jobs } from "../component/jobs";
import { Fetch } from "../ajax/driver";

export function Job() {
	const [jobList, updateJobList] = useState([]);
	const [isloading, setisLoading] = React.useState(true);
	const url =
		process.env.NODE_ENV === "production"
			? process.env.REACT_APP_URL
			: "http://localhost:5000/";
	useEffect(() => {
		Fetch(`${url}devjob`, updateJobList);
		setisLoading(false);
	}, [url]);

	return (
		<div>
			<Jobs job={jobList} isloading={isloading} />
		</div>
	);
}
