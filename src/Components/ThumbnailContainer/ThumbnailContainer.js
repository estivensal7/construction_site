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
            category: "Custom Cabinets"
        }
    }

    handleClick(newCategory) {
        this.setState({
            category: newCategory
        });
    }

    
    render() {

        let filteredThumbnails = this.state.thumbnails.filter(
            (thumbnail) => {
                return thumbnail.category === this.state.category;
            }
        ) ;



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