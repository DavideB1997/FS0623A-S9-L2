import React from "react";
import Cards from "./Cards";

class Main extends React.Component {
	render() {
		return (
			<div>
				<Cards categoria='fantasy' />
				<Cards categoria='romance' />
				<Cards categoria='history' />
			</div>
		);
	}
}

export default Main;
