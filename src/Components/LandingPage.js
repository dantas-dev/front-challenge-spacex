import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import unavailable from "../assets/unavailable-image.jpg";

const useStyles = makeStyles(theme => ({
	missionCard: {
		marginBottom: "1em",
		width: "80em",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		textDecoration: "none",
	},
	missionDetail: {
		marginTop: "1em",
		marginBottom: "1em",
	},
	missionData: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "1em",
		color: "#fff",
		fontWeight: 600,
	},

	caseCard: {
		display: "flex",
		borderRadius: 15,
		height: "45em",
		width: "90em",
		[theme.breakpoints.down("md")]: {
			height: "35.6em",
			maxWidth: "57em",
		},
		[theme.breakpoints.down("sm")]: {
			height: "51.6em",
			maxWidth: "35em",
			display: "grid",
		},
		[theme.breakpoints.down("xs")]: {
			height: "60em",
			maxWidth: "25em",
			borderRadius: 0,
		},
	},
	caseText: {
		fontSize: "1.2rem",
		marginRight: "1em",
		marginTop: "1em",
		marginBottom: "1em",
		color: "white",
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.8rem",
			maxWidth: "28em",
		},
	},
	firstText: {
		fontSize: "2.85rem",
		fontWeight: 700,
		color: "white",
		[theme.breakpoints.down("xs")]: {
			fontSize: "2em",
			maxWidth: "10em",
		},
	},
}));

const GET_LAUNCHES = gql`
	{
		launchesPast(limit: 10) {
			mission_name
			launch_date_local
			id
			details
			links {
				flickr_images
			}
		}
	}
`;

export default function LandingPage() {
	const { errors, loading, data } = useQuery(GET_LAUNCHES);
	const classes = useStyles();

	return errors
		? "Error!"
		: loading
		? "Loading..."
		: data.launchesPast.map(({ mission_name, details, links, launch_date_local, id }) => (
				<Grid
					item
					component={Link}
					variant="contained"
					to={`/mission/${id}`}
					style={{ marginBottom: "6em", textDecoration: "none" }}
				>
					<Card className={classes.caseCard}>
						<Grid
							item
							container
							alignItems="center"
							align="center"
							style={{ backgroundColor: "#141414", width: "35em" }}
						>
							<Grid item>
								<CardContent>
									<Grid item>
										<Typography variant="h2" className={classes.firstText}>
											{mission_name}
										</Typography>
										<Typography variant="h6" className={classes.caseText}>
											{details}
										</Typography>
										<Typography variant="h5" className={classes.missionData}>
											<Moment format="DD-MM-YYYY">{launch_date_local}</Moment>
										</Typography>
									</Grid>
								</CardContent>
							</Grid>
						</Grid>
						<Grid item style={{ width: "55em", height: "cover" }}>
							<CardMedia
								component="img"
								alt="case2"
								image={links.flickr_images.length > 0 ? links.flickr_images : unavailable}
								style={{ height: "100%" }}
							/>
						</Grid>
					</Card>
				</Grid>
		  ));
}
