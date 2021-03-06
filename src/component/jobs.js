import React from "react";

import {
	Grid,
	Typography,
	Container,
	List,
	ListItem,
	Divider,
	ListItemText,
	Paper,
	InputBase,
	Button,
	Chip
} from "@material-ui/core";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import moment from "moment";

import { Modal } from "./modal";
import banner from "../static/undraw_files_6b3d.svg";
import "../static/App.css";
import { LoadingIndicator } from "./loadingIndicator";
import { colors } from "./constant";
import { Applymodal } from "./applymodal";

export function Jobs({ job, isloading }) {
	const [open, setOpen] = React.useState(false);
	const [apply, setApply] = React.useState(false);
	const [selectedJob, selectJob] = React.useState({});
	const [selecteditem, selectItem] = React.useState({});
	const [search, setSearch] = React.useState("");
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const openApply = () => {
		setApply(true);
	};

	const closeApply = () => {
		setApply(false);
	};
	const onchange = e => {
		setSearch(e.target.value);
	};

	const filteredJob = job
		? job.filter(res => {
				return (
					res.title.toLowerCase().indexOf(search.toLowerCase()) !==
						-1 ||
					res.location.toLowerCase().indexOf(search.toLowerCase()) !==
						-1
				);
		  })
		: "";

	return (
		<Grid container style={{ justifyContent: "center" }}>
			<Container maxWidth="sm" style={{ flexGrow: 1 }}>
				<Grid container>
					<Grid
						container
						style={{ justifyContent: "center", marginTop: 30 }}
					>
						<Typography
							variant="h3"
							style={{ textAlign: "center", color: colors.blue }}
						>
							{" "}
							Job Listings
						</Typography>
					</Grid>
					<Grid
						container
						style={{ justifyContent: "center", marginTop: 40 }}
					>
						<Paper style={{ backgroundColor: "transparent" }}>
							<InputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "Search.." }}
								style={{
									flex: 1,
									marginLeft: 8,
									height: 50,
									width: 300
								}}
								onChange={onchange}
							/>
						</Paper>
					</Grid>
					{isloading === true ? <LoadingIndicator /> : ""}
					<Modal
						open={open}
						handleClose={handleClose}
						job={selectedJob}
					/>
					<Applymodal
						open={apply}
						handleClose={closeApply}
						job={selecteditem}
					/>

					{filteredJob != "" ? (
						filteredJob.map(item => (
							<div
								style={{
									marginTop: 30,
									marginBottom: -10,
									justifyContent: "center",
									textAlign: "center"
								}}
								key={item.id}
							>
								<List
									style={{
										width: "100%",
										maxWidth: 600,
										textAlign: "center",
										justifyContent: "center"
									}}
								>
									<ListItem alignItems="center">
										<img
											className="banner"
											alt=""
											src={
												item.company_logo
													? item.company_logo
													: banner
											}
										/>

										<ListItemText
											style={{
												fontFamily: `'Be Vietnam', sans-serif`
											}}
											primary={item.title}
											secondary={
												<React.Fragment>
													<Typography
														style={{
															textAlign:
																"justify",
															marginTop: 5,
															marginBottom: 6,
															fontFamily: `'Be Vietnam', sans-serif`
														}}
													>
														<div
															dangerouslySetInnerHTML={{
																__html: item.description.substring(
																	0,
																	200
																)
															}}
														/>
													</Typography>

													<Typography
														style={{
															marginTop: 5,
															fontFamily: `'Be Vietnam', sans-serif`,
															fontStyle: "italic"
														}}
														component="span"
														variant="body2"
													>
														<FaClock />{" "}
														{moment(item.created_at)
															.startOf("hour")
															.fromNow()}{" "}
														{item.type}
													</Typography>
													<Typography
														style={{
															fontFamily: `'Be Vietnam', sans-serif`,
															marginTop: 5
														}}
													>
														{" "}
														<FaMapMarkerAlt />{" "}
														{item.location} Salary :{" "}
														{item.salary}
													</Typography>

													<Typography
														style={{
															fontFamily: `'Be Vietnam', sans-serif`,
															marginTop: 5
														}}
													>
														Tech stack{" "}
														{item.techstack
															.split(" ")
															.map(item => (
																<Chip
																	label={item}
																	style={{
																		marginLeft: 6
																	}}
																/>
															))}
													</Typography>

													<Typography
														style={{
															fontFamily: `'Be Vietnam', sans-serif`,
															marginTop: 5
														}}
													>
														{" "}
														Exp : {item.level}{" "}
														Deadine :{" "}
														{item.deadline}
													</Typography>

													<div
														style={{
															marginTop: 15
														}}
													>
														<Button
															style={{
																textDecoration:
																	"none",
																fontFamily: `'Be Vietnam', sans-serif`,
																marginRight: 15,
																color:
																	colors.red
															}}
															variant="text"
															onClick={() => {
																openApply();
																selectItem(
																	item
																);
															}}
														>
															Apply
														</Button>
														<Button
															style={{
																textDecoration:
																	"none",
																fontFamily: `'Be Vietnam', sans-serif`,
																marginRight: 15,
																color:
																	colors.blue
															}}
															variant="text"
															onClick={() => {
																handleClickOpen();
																selectJob(item);
															}}
														>
															Read more
														</Button>
													</div>
												</React.Fragment>
											}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
								</List>
							</div>
						))
					) : (
						<Grid
							container
							style={{ justifyContent: "center", marginTop: 60 }}
						>
							<Typography
								style={{ color: colors.blue, fontSize: 30 }}
							>
								Loading
							</Typography>
						</Grid>
					)}
				</Grid>
			</Container>
		</Grid>
	);
}
