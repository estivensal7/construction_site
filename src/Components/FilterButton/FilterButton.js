import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class FilterButton extends Component {
    constructor(props) {
      super(props);
      
    }
    render() {
      return (
        <div>
          <Button 
              outline 
              color="secondary"
              data-category={this.props.buttons.category}
              style={{marginBottom: "10px"}}
          >{this.props.buttons.category}
          </Button>
        </div>
      );
    };
  };
  
  export default FilterButton;



// class FilterButton extends Component (
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Button 
//                 outline 
//                 color="secondary"
//             >{this.props.buttons.category}
//             </Button>
//         )
//     }
// }

<<<<<<< HEAD
);

export default FilterButton;
=======
    //   <div className="card">
    //     <div className="img-container">
    //       <img alt={props.name} src={props.image} />
    //     </div>
    //     <div className="content">
    //       <ul>
    //         <li>
    //           <strong>Name:</strong> {props.name}
    //         </li>
    //         <li>
    //           <strong>Occupation:</strong> {props.occupation}
    //         </li>
    //         <li>
    //           <strong>Location:</strong> {props.location}
    //         </li>
    //       </ul>
    //     </div>
    //     <span onClick={() => props.removeFriend(props.id)} className="remove">
    //       𝘅
    //     </span>
    //   </div>
>>>>>>> 9a6c21cbd3d32b1d61a05ff399fb4ee5306f7c2b
