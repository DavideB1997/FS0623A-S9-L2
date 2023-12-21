import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

class SingleComment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<ListGroup.Item key={this.props._id}>
					<div>{this.props.comment}</div>
					<Button
						variant='light'
						onClick={() => {
							fetch(
								`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
								{
									method: 'DELETE',
									headers: {
										Authorization:
											'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDMxNjM4NTAsImV4cCI6MTcwNDM3MzQ1MH0._pFUAQbhcO0kd-lSrNbAa-TH4PqMkUEmFCFl0CllR_s',
									},
								}
							)
								.then((res) => {
									if (res.ok) {
										console.log('commentoDeletato');
										this.getCommenti();
									} else {
										throw new Error('Eliminazione commento non riuscita');
									}
								})
								.catch((err) => {
									console.log('Errore: ', err);
								});
						}}
					>
						❌
					</Button>
				</ListGroup.Item>
			</>
		);
	}
}

export default SingleComment;
