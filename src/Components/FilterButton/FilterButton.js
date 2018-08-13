import React, { Component } from "react";
import { Button } from 'reactstrap';

class FilterButton extends Component {
    constructor(props) {
			super();
			this.state = {
				newCategory: ""
			}
		}

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
					// onClick={() => this.handleClick()}
				>{this.props.buttons.buttonCategory}
				</Button>
			</div>
		);
	}
		
};
  
  export default FilterButton;

