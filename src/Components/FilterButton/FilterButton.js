import React, { Component } from "react";
import { Button } from 'reactstrap';

class FilterButton extends Component {
    constructor(props) {
			super();
			this.state = {
				newCategory: ""
			}
		}
		
		// setting handleClick function to set the state of  'newCategory' to the value of the button's 'buttonCategory'
		//utilized callback functions in order to control asynchronous rendering
		handleClick() {
			this.setState(
				() => ({ newCategory: this.props.buttons.buttonCategory }),
			 	() => { this.props.handleClick(this.state.newCategory) }
		)}

    render() { 
		return (
			<div>
				<Button 
					outline 
					color="secondary"
					buttonCategory={this.props.buttons.buttonCategory}
					style={{marginBottom: "10px"}}
					onClick={this.handleClick.bind(this)}
				>{this.props.buttons.buttonCategory}
				</Button>
			</div>
		);
	}
		
};
  
  export default FilterButton;

