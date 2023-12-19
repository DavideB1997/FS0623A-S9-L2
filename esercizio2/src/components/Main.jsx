import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import books from "../Data/books.json";
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
