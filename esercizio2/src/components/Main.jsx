import React from 'react';

import Cards from './Cards';
import GetSearchQuery from './GetSearchQuery';

class Main extends React.Component {
	render() {
		return (
			<div>
				<GetSearchQuery categoria='fantasy' search='tale' />
				<Cards categoria='fantasy' cap='12' />
				<Cards categoria='romance' cap='12' />
				<Cards categoria='history' cap='12' />
			</div>
		);
	}
}

export default Main;
