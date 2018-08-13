import React from 'react';
import { 
    Row, 
    Col,
} from 'reactstrap';
import thumbnails from '../../thumbnails.json';
import buttons from '../../buttons.json';
import ThumbnailCards from '../../Components/ThumbnailCards/ThumbnailCards';
import FilterButton from '../../Components/FilterButton/FilterButton';
import './ThumbnailContainer.css';

export default class ThumbnailContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            thumbnails,
            buttons,
            category: "Remodeling Services"
        }
    }

    //creating handleClick function in order to be passed as a prop to the 'FilterButton' child component
    //this function sets the state of 'category' with the value of the 'newCategory' argument retrieved from the child component
    handleClick(newCategory) {
        this.setState({
            category: newCategory
        });
    }

    
    render() {

        // declaring filteredThumbnails function
        // this function utilizes the filter array method and runs through each 'thumbnail' imported from 'thumbnails.json' 
        // returning the thumbnails which have a category value that matches the value of 'this.state.category'
        let filteredThumbnails = this.state.thumbnails.filter(
            (thumbnail) => {
                return thumbnail.category === this.state.category;
            }
        ) ;


        // In our return function we utilize the .map() method to map through the filter buttons array found in 'buttons.json'... 
        // ...as well as the thumbnails array found in 'thumbnails.json'
        // Both 'buttons' and 'thumbnails' have been declared in the state. 
        return (
            <div className="thumbnailContainer">
                <Row>
                    {this.state.buttons.map(buttons => {
                        return (
                            <Col md={3}>
                                <FilterButton buttons={buttons} handleClick={this.handleClick.bind(this)} /> 
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    {filteredThumbnails.map(thumbnails => {
                        return (
                            <Col md={{size: 3}}>
                                <ThumbnailCards thumbnails={thumbnails}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            );
        }
}