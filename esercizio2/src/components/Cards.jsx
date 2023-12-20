import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import books from '../Data/books.json';
import SingleBook from './SingleBook';

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
							<SingleBook img={book.img} title={book.title} price={book.price} />
						</div>
					);
				})}
			</Row>
		</Container>
	);
}

export default Cards;
