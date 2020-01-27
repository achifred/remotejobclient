import React from "react";
import PropTypes from "prop-types";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	FaThLarge,
	FaUser,
	FaWarehouse,
	FaHome,
	FaSignOutAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { colors } from "../../component/constant";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

function Sidebar(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<Link
					to="/dashboard"
					style={{ textDecoration: "none", color: "black" }}
				>
					<ListItem button>
						<ListItemIcon>
							<FaThLarge />
						</ListItemIcon>
						<ListItemText primary={"Dashboard"} />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				<Link
					to="/users"
					style={{ textDecoration: "none", color: colors.black }}
				>
					<ListItem button>
						<ListItemIcon>
							<FaUser />
						</ListItemIcon>
						<ListItemText primary={"Users"} />
					</ListItem>
				</Link>
				<Link
					to="/alljobs"
					style={{ textDecoration: "none", color: colors.black }}
				>
					<ListItem button>
						<ListItemIcon>
							<FaWarehouse />
						</ListItemIcon>
						<ListItemText primary={"All Jobs"} />
					</ListItem>
				</Link>

				<Link
					to="/"
					style={{ textDecoration: "none", color: colors.black }}
				>
					<ListItem button>
						<ListItemIcon>
							<FaHome />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<ListItem
					button
					onClick={e => {
						e.preventDefault();
						localStorage.getItem("token");
						localStorage.clear();
						window.location.reload();
					}}
				>
					<ListItemIcon>
						<FaSignOutAlt />
					</ListItemIcon>
					<ListItemText primary={"Logout"} />
				</ListItem>
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>

			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

Sidebar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	container: PropTypes.instanceOf(
		typeof Element === "undefined" ? Object : Element
	)
};

export default Sidebar;
