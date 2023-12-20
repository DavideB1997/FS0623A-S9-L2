import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleBook(props) {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={props.img} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.price} $</Card.Text>
					<Button variant='primary'>Buy it!</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default SingleBook;
