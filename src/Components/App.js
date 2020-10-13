import React, { Suspense } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../index.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ScrollToTop from "../ScrollToTop";

import spacex from "../assets/spacex.png";
import LandingPage from "./LandingPage";
import Mission from "./Mission";

function App() {
	const client = new ApolloClient({
		uri: "https://api.spacex.land/graphql",
	});
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<ApolloProvider client={client}>
				<BrowserRouter>
					<ScrollToTop />

					<Grid container direction="column" justify="center" alignItems="center">
						<Button component={Link} to="/" disableRipple>
							<img
								alt="spacex"
								src={spacex}
								style={{ width: "30em", marginBottom: "2em", marginTop: "1em" }}
							/>
						</Button>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/mission/:id" component={Mission} />
					</Grid>
				</BrowserRouter>
			</ApolloProvider>
		</Suspense>
	);
}

export default App;
