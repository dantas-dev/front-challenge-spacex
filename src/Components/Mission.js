import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { IconButton } from "@material-ui/core/";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({
	goDown: {
		color: "#fff",
		fontSize: "4rem",
		marginTop: "1em",
	},
	details: {
		color: "#fff",
		maxWidth: "60em",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			maxWidth: "35em",
		},
	},
	wikiButton: {
		color: "#000",
		backgroundColor: "#fff",
		borderRadius: "50px",
		fontSize: "1.2rem",
		textTransform: "none",
		height: "3em",
		width: "15em",
		border: "none",
		marginTop: "2em",
		"&:hover": {
			backgroundColor: "#bfbfbf",
		},
	},
	missionImage: {
		height: "32em",
		width: "37em",
		marginTop: "3em",
		margin: "1em",
		borderRadius: 15,
		[theme.breakpoints.down("xs")]: {
			height: 400,
			width: 380,
		},
	},
	iframe: {
		height: 545,
		width: 1000,
		marginTop: "3em",
		marginBottom: "2em",
		[theme.breakpoints.down("md")]: {
			width: 920,
		},
		[theme.breakpoints.down("sm")]: {
			height: 300,
			width: 550,
		},
		[theme.breakpoints.down("xs")]: {
			height: 300,
			width: 350,
		},
	},
}));

const LAUNCH_QUERY = gql`
	{
		launchesPast(limit: 10) {
			mission_name
			id
			details
			links {
				video_link
				flickr_images
				mission_patch_small
				wikipedia
			}
		}
	}
`;

export default () => {
	const classes = useStyles();
	const { errors, loading, data } = useQuery(LAUNCH_QUERY);

	function getId(url) {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	}

	return errors
		? "Error!"
		: loading
		? "Loading..."
		: // eslint-disable-next-line
		  data.launchesPast.map(({ mission_name, details, links, id }) => {
				const videoId = getId(links.video_link);
				const iframeMarkup = "https://youtube.com/embed/" + videoId;

				if (window.location.href.endsWith(`mission/${id}`)) {
					return (
						<Grid
							item
							container
							key={`mission ${id}`}
							direction="column"
							alignItems="center"
							justify="center"
						>
							<Grid
								item
								container
								direction="column"
								alignItems="center"
								justify="center"
								style={{ height: "90vh" }}
							>
								<img src={links.mission_patch_small} alt={mission_name} />
								<Scroll to="mission-name" smooth={true}>
									<IconButton>
										<ExpandMoreIcon className={classes.goDown} />
									</IconButton>
								</Scroll>
							</Grid>

							<Grid
								item
								container
								direction="column"
								alignItems="center"
								justify="center"
								align="center"
								id="mission-name"
							>
								<h1 style={{ color: "#fff" }}>{mission_name}</h1>
								<Typography variant="h6" className={classes.details}>
									{details}
								</Typography>
								<Button
									className={classes.wikiButton}
									component={"a"}
									href={links.wikipedia}
									rel="noopener noreferrer"
									target="_blank"
								>
									Learn more
								</Button>

								<Grid item container justify="center">
									{links.flickr_images.map((index, currElement) => (
										<img
											key={currElement}
											src={links.flickr_images[currElement]}
											alt={mission_name}
											className={classes.missionImage}
										/>
									))}
								</Grid>

								<Grid item>
									<iframe
										className={classes.iframe}
										frameBorder="0"
										allowFullScreen
										src={iframeMarkup}
										title="youtube-video"
									/>
								</Grid>
							</Grid>
						</Grid>
					);
				}
		  });
};
