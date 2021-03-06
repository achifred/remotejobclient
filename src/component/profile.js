import React from "react";
import { Grid, Container, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { colors } from "./constant";

function Profile({ data, isloading, deletejob, history }) {
	//const [singlejob, setSinglejob] = React.useState({});
	/*const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};*/
	return (
		<Grid container style={{ justifyContent: "center" }}>
			<Container maxWidth="lg">
				<Grid container style={{ justifyContent: "center" }}>
					<Button
						variant="outlined"
						style={{
							textAlign: "center",
							fontSize: 20
						}}
					>
						<Link
							to="/postjob"
							style={{
								textDecoration: "none",
								color: colors.blue
							}}
						>
							Add a Job
						</Link>
					</Button>
					<Button
						variant="outlined"
						style={{
							textAlign: "center",
							//fontSize: 20,
							color: colors.red,
							marginLeft: 10
						}}
						onClick={e => {
							e.preventDefault();
							localStorage.getItem("token");
							localStorage.clear();
							window.location.reload();
						}}
					>
						logout
					</Button>
				</Grid>
				<Grid
					container
					style={{ justifyContent: "center" }}
					spacing={3}
				>
					{data.map(item => (
						<Grid
							style={{
								justifyContent: "center",
								marginTop: 30,
								marginBottom: -10
							}}
							item
						>
							<Paper
								style={{ height: "auto", width: 300 }}
								key={item.jobid}
							>
								<div style={{ textAlign: "center" }}>
									<Typography
										style={{
											marginTop: 8,
											fontWeight: "bold"
										}}
									>
										{item.job_title.toUpperCase()}
									</Typography>

									<Typography>
										tech stack :{" "}
										{item.job_tech.split(" ").map(item => (
											<Typography>{item}</Typography>
										))}
									</Typography>
								</div>
								<div
									style={{
										marginTop: 10,
										textAlign: "center"
									}}
								>
									<Button
										variant="text"
										onClick={() => {
											deletejob(item.jobid);
										}}
										style={{ color: colors.red }}
									>
										delete
									</Button>
									<Button variant="text">
										<Link
											to={`/editjob/${item.jobid}`}
											style={{
												textDecoration: "none",
												color: colors.blue
											}}
										>
											Edit
										</Link>
									</Button>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Grid>
	);
}

export default Profile;
