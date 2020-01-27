import React from "react";
import { Grid, Paper, Typography, Avatar, Container } from "@material-ui/core";

import { colors } from "./constant";
import { Header } from "./Header";
import { backgroundPictures } from "./pictures";

import { Data, how, heading, subtxt, howitworkssubtxt } from "./data";

import { Href } from "./href";
import { randomPictures } from "../ajax/driver";

function HomeLayout() {
	return (
		<div>
			<Grid container style={styles.heading}>
				<Container maxWidth="md">
					<Grid container className="title">
						<p className="titletxt">{heading.title}</p>
					</Grid>
					<Grid container style={{ justifyContent: "center" }}>
						<p className="subtxt">{subtxt.title}</p>
					</Grid>
					<Grid
						container
						style={{ justifyContent: "center", marginTop: 60 }}
					>
						<Href path="/jobs" styles={styles.btn1}>
							Browse Jobs
						</Href>
						<Href
							path={
								localStorage.getItem("token")
									? "/postjob"
									: "/register"
							}
							styles={styles.btn2}
						>
							{localStorage.getItem("token")
								? "post a job"
								: "signup to post a job"}
						</Href>
					</Grid>
				</Container>
			</Grid>

			<Header styles={styles.how}>
				<Container maxWidth="md">
					<Grid container style={{ justifyContent: "center" }}>
						<Grid container style={{ justifyContent: "center" }}>
							<h1 className="howitworks">How it works</h1>
						</Grid>
						<Grid container style={{ justifyContent: "center" }}>
							<p className="howdesc">{howitworkssubtxt.title}</p>
						</Grid>
					</Grid>
				</Container>
				<Container>
					<Grid
						container
						style={{ justifyContent: "center" }}
						spacing={3}
					>
						{how.map(item => (
							<Grid
								style={{
									marginTop: 30,
									marginBottom: -10,
									justifyContent: "center"
								}}
								key={item.title}
								item
							>
								<Paper style={styles.paper}>
									<Grid
										container
										style={{ justifyContent: "center" }}
									>
										<Avatar style={styles.avatar}>
											{" "}
											<Typography
												style={{
													color: colors.blue,
													fontSize: 30
												}}
											>
												{item.icon}
											</Typography>
										</Avatar>
									</Grid>

									<div style={{ textAlign: "center" }}>
										<Typography
											style={{
												textAlign: "center",
												fontSize: 18,
												fontWeight: "bold"
											}}
										>
											{item.title}
										</Typography>
										<Typography
											style={{
												fontStyle: "italic",
												fontWeight: "lighter"
											}}
										></Typography>
										<Typography
											style={{
												textAlign: "center",
												padding: 7
											}}
										>
											{item.description}
										</Typography>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Header>

			<Header styles={styles.whyus}>
				<Container maxWidth="md">
					<Grid container style={{ justifyContent: "center" }}>
						<Grid container style={{ justifyContent: "center" }}>
							<h1 className="whychooseus">
								Why Use AchifDevJobs
							</h1>
						</Grid>
						{/*<Grid container style={{ justifyContent: "center" }}>
							<p className="whydesc">{howitworkssubtxt.title}</p>
										</Grid>*/}
					</Grid>
				</Container>
				<Container>
					<Grid
						container
						style={{ justifyContent: "center" }}
						spacing={3}
					>
						{Data.map(item => (
							<Grid
								style={{
									marginTop: 30,
									marginBottom: -10,
									justifyContent: "center"
								}}
								key={item.title}
								item
							>
								<Paper style={styles.paper}>
									<Grid
										container
										style={{ justifyContent: "center" }}
									>
										<Avatar style={styles.avatar}>
											<Typography
												style={{
													color: colors.blue,
													fontSize: 30
												}}
											>
												{item.icon}
											</Typography>
										</Avatar>
									</Grid>

									<div style={{ textAlign: "center" }}>
										<Typography
											style={{
												textAlign: "center",
												fontSize: 18,
												fontWeight: "bold"
											}}
										>
											{item.title}
										</Typography>
										<Typography
											style={{
												fontStyle: "italic",
												fontWeight: "lighter"
											}}
										></Typography>
										<Typography
											style={{
												textAlign: "center",
												padding: 7
											}}
										>
											{item.description}
										</Typography>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Header>
		</div>
	);
}

const styles = {
	heading: {
		width: "100%",
		height: 600,
		//left: 0,
		//top: 70,

		background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${randomPictures(backgroundPictures)})`,
		//justifyContent: 'center',
		//textAlign: 'center',
		//backgroundSize: 'cover',
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed"
	},
	btn1: {
		borderRadius: 30,
		margin: 10,
		borderColor: colors.white,
		color: colors.white
	},
	btn2: {
		borderRadius: 30,
		margin: 10,
		backgroundColor: colors.orange,
		color: colors.white
	},
	how: {
		height: "auto",
		marginBottom: 30
	},
	whyus: {
		height: "auto",
		flex: 1,
		//height: window.innerHeight / 2,
		/*width: "100%",
    backgroundImage: `linear-gradient(0deg,rgba(0,0,0, 0.3),rgba(0,0,0,1)),url(${svg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"*/
		backgroundColor: colors.grey
	},
	paper: {
		justifyContent: "center",
		width: 350,
		height: 320
	},
	avatar: {
		textAlign: "center",
		margin: 10,
		height: 100,
		width: 100,
		backgroundColor: colors.grey
	}
};

export default HomeLayout;
