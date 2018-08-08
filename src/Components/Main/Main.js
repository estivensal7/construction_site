import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home.js';
import About from '../../Pages/About/About.js';
import Bathroom from '../../Pages/Bathroom/Bathroom.js';
import Cabinets from '../../Pages/Cabinets/Cabinets.js';
import Commercial from '../../Pages/Commercial/Commercial.js';
import ConcreteHardscapes from '../../Pages/ConcreteHardscapes/ConcreteHardscapes.js';
import Contact from '../../Pages/Contact/Contact.js';
import Contractor from '../../Pages/Contractor/Contractor.js';
import DesignBuild from '../../Pages/DesignBuild/DesginBuild.js';
import Exterior from '../../Pages/Exterior/Exterior.js';
import Interior from '../../Pages/Interior/Interior.js';
import Kitchen from '../../Pages/Kitchen/Kitchen.js';
import Landscaping from '../../Pages/Landscaping/Landscaping.js';
import OutdoorLiving from '../../Pages/OutdoorLiving/OutdoorLiving.js';
import Painting from '../../Pages/Painting/Painting.js';
import Patio from '../../Pages/Patio/Patio.js';
import Residential from '../../Pages/Residential/Residential.js';
import RoomAdditions from '../../Pages/RoomAdditions/RoomAdditions.js';
import WoodWorking from '../../Pages/WoodWorking/WoodWorking.js';
import Gallery from '../../Pages/Gallery/Gallery.js';

{/*Setting up Main Component to render React Routes for every Page/Link*/}
export default class Main extends Component {
    render() {
      return (
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/bathroom-remodeling' component={Bathroom}></Route>
        <Route exact path='/custom-cabinets' component={Cabinets}></Route>
        <Route exact path='/commercial-construction' component={Commercial}></Route>
        <Route exact path='/concrete-hardscapes' component={ConcreteHardscapes}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/general-contractor' component={Contractor}></Route>
        <Route exact path='/design-build-remodeling' component={DesignBuild}></Route>
        <Route exact path='/gallery' component={Gallery}></Route>
        <Route exact path='/kitchen-remodeling' component={Kitchen}></Route>
        <Route exact path='/landscaping' component={Landscaping}></Route>
        <Route exact path='/outdoor-living-spaces' component={OutdoorLiving}></Route>
        <Route exact path='/painting' component={Painting}></Route>
        <Route exact path='/patio-covers' component={Patio}></Route>
        <Route exact path='/residential-construction' component={Residential}></Route>
        <Route exact path='/room-additions' component={RoomAdditions}></Route>
        <Route exact path='/wood-working' component={WoodWorking}></Route>
        <Route exact path='/interior-services' component={Interior}></Route>
        <Route exact path='/exterior-services' component={Exterior}></Route>
        </Switch>
      )
    }
  }