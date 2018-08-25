import React, { Component } from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText } from 'reactstrap';
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
			</div>
      	)
    }
  }