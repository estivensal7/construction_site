import React, { Component } from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Input,
	Row,
	Col,
	Jumbotron,
	Container } from 'reactstrap';
import './Contact.css';

export default class Contact extends Component {
	constructor() {
		super()
		this.state = {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}
    render() {
    	return (
			<div className="contactContainer">
				<Row>
					<Col>
						{/* Jumbotron will be used to hold contact information, and better instructions on how to contact company */}
						<Jumbotron fluid>
							<Container fluid>
							<h1 className="display-3">Fluid jumbotron</h1>
							<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>	
						{/* In this form we can utilize the text area to write a message which when sent will utilize the 'mailto:' method to open the user's
						mailbox and draft a message that can be sent to the company's email */}
						<Form>
							<FormGroup>
							<Input 
								type="textarea" 
								name="message" 
								id="exampleText" 
								placeholder="Send us a Message!"
								onChange={this.handleChange}
							/>
							</FormGroup>
							<Button>
								<a 
									href ={`mailto:estivensal7@gmail.com?subject=New Message&body=${this.state.message}`}
									style={{textDecoration: 'none', color: 'white'}}
								>
									Send Message
								</a>
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
      	)
    }
  }