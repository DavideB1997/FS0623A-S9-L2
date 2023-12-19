import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import books from "../Data/books.json";

class Main extends React.Component {
	render() {
		const BookToShow = 12;

		return (
			<Container fluid>
				<Row className='d-flex'>
					{books.fantasy.slice(0, BookToShow).map((book, index) => {
						return (
							<div
								key={index}
								className='col-2'
							>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant='top'
										src={book.img}
									/>
									<Card.Body>
										<Card.Title>{book.title}</Card.Title>
										<Card.Text>{book.price}</Card.Text>
										<Button variant='primary'>Buy it!</Button>
									</Card.Body>
								</Card>
							</div>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default Main;
