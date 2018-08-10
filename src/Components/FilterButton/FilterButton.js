import React from "react";
import { Button } from 'reactstrap';

const FilterButton = props => (

    <Button 
        outline 
        color="secondary"
        data-category={props.buttons}
    >
        Text
    </Button>

);

export default FilterButton;