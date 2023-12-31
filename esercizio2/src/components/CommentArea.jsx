import React from 'react';
import {
	Alert,
	Button,
	Col,
	Container,
	ListGroup,
	Row,
	Spinner,
} from 'react-bootstrap';
import AddComment from './AddComment';
import SingleComment from './SingleComment';

class CommentArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commenti: [],
			isLoading: true,
			isError: false,
		};
	}

	getCommenti = () => {
		fetch(
			'https://striveschool-api.herokuapp.com/api/books/' +
				this.props.asin +
				'/comments',
			{
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDMxNjM4NTAsImV4cCI6MTcwNDM3MzQ1MH0._pFUAQbhcO0kd-lSrNbAa-TH4PqMkUEmFCFl0CllR_s',
				},
			}
		)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('errore nel caricamento dei commenti');
				}
			})
			.then((data) => {
				console.log(this.props.asin);
				console.log(data);
				this.setState({
					commenti: data,
					isLoading: false,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					isLoading: false,
					isError: true,
				});
			});
	};

	componentDidMount() {
		this.getCommenti();
	}

	render() {
		return (
			<>
				<Container>
					<Row className='justify-content-center mt-3'>
						<Col
							md={8}
							className={`col col-md-8 ${this.state.isLoading ? 'mb-2' : 'mb-3'}`}
						>
							{this.state.isLoading && (
								<div>
									<Spinner animation='border' variant='info' />
								</div>
							)}
							{this.state.isError && (
								<Alert variant='danger' className='text-center'>
									Errore nel recupero commenti
								</Alert>
							)}
							<ListGroup>
								{this.state.commenti.map((commento) => {
									return (
										<SingleComment
											_id={commento._id}
											comment={commento.comment}
											asin={this.props.asin}
										/>
									);
								})}
							</ListGroup>
						</Col>
					</Row>

					<AddComment />
				</Container>
			</>
		);
	}
}

export default CommentArea;
