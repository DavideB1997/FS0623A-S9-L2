import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import books from "../Data/books.json";

function Cards(props) {
	const BookToShow = 12;

	return (
		<Container>
			<h1 className='bg-success text-white'>{props.categoria}</h1>
			<Row className='d-flex'>
				{books[props.categoria].slice(0, BookToShow).map((book, index) => {
					return (
						<div
							key={index}
							className='col-md-4 col-sm-6 col-lg-3 p-0 mb-4 d-flex justify-content-center'
						>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant='top'
									src={book.img}
								/>
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<Card.Text>{book.price} $</Card.Text>
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

export default Cards;
