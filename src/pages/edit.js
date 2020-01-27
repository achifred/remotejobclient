import React, { useEffect, useState } from "react";

import { Fetch } from "../ajax/driver";
import { Editform } from "../component/editform";

export function Edit(props) {
	const [jobList, updateJobList] = useState([]);
	//const [isloading, setisLoading] = React.useState(true)
	const id = props.match.params.id;

	const url =
		process.env.NODE_ENV === "production"
			? process.env.REACT_APP_URL
			: "http://localhost:5000/";
	useEffect(() => {
		Fetch(`${url}devjob/single/${id}`, updateJobList);
		//setisLoading(false)
	}, [url, id]);
	console.log(jobList);
	return (
		<div>
			{jobList.map(item => (
				<Editform
					job_title={item.job_title}
					company_name={item.company_name}
					companyurl={item.companyurl}
					job_location={item.job_location}
					job_type={item.job_type}
					job_description={item.job_description}
					job_salary={item.job_salary}
					jobid={item.jobid}
					job_techstack={item.job_techstack}
					job_apply={item.job_apply}
					job_deadline={item.job_deadline}
					job_level={item.job_level}
					history={props.history}
					key={item.jobid}
				/>
			))}
		</div>
	);
}
