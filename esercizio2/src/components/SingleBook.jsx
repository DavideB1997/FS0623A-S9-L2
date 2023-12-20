import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class SingleBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
		};
	}

	handleToggleSelected = () => {
		this.setState((prevState) => ({
			selected: !prevState.selected,
		}));
	};

	render() {
		const { img, title, price } = this.props;
		const { selected } = this.state;

		const cardStyle = {
			width: '18rem',
			border: selected ? '2px solid red' : 'none',
		};

		return (
			<>
				<Card style={cardStyle} onClick={this.handleToggleSelected}>
					<Card.Img variant='top' src={img} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{price} $</Card.Text>
						<Button variant='primary'>Buy it!</Button>
					</Card.Body>
				</Card>
			</>
		);
	}
}

export default SingleBook;
