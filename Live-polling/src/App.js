import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePoll from "./components/CreatePoll";
import Polling from "./components/Polling";
import PollResult from "./components/PollResult";
import ErrorPage from "./components/Error";
import PollInfo from "./components/PollInfo";
import { AnimatePresence } from "framer-motion";
function App() {
	return (
		<AnimatePresence initial={false} exitBeforeEnter>
			<BrowserRouter>
				<Switch>
					<Route path="/poll/result/:id" exact component={PollResult} />
					<Route path="/poll/:id" exact component={Polling} />
					<Route path="/new/:id" component={PollInfo} />
					<Route path="/" exact component={CreatePoll} />
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;
