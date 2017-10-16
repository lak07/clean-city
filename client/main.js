import React from 'react';

import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


 

import Banglore from '../imports/pages/Banglore'
import Delhi from '../imports/pages/Delhi'
import Hyderabad from '../imports/pages/Hyderabad'
import Mumbai from '../imports/pages/Mumbai'
import Index from '../imports/pages/Index'

 

Meteor.startup(() => {
  render(
	<Router >
	<div className="main-layout" >
	<header>
	<h2> Clean city Survey </h2>
	<nav >
		<NavLink to="/">Home</NavLink>
		<NavLink to="Banglore">Banglore</NavLink>
		<NavLink to="Hyderabad">Hyderabad</NavLink>
		<NavLink to="Mumbai">Mumbai</NavLink>
		<NavLink to="Delhi">Delhi</NavLink>
		
	</nav>
	</header>
	<Route exact path="/" component={Index}></Route>
	<Route path="/Banglore" component={Banglore}></Route>
	<Route path="/Hyderabad" component={Hyderabad}></Route>
	<Route path="/Mumbai" component={Mumbai}></Route>
	<Route path="/Delhi" component={Delhi}></Route>
			
	</div>	
	</Router>,
	document.getElementById('render-target')
     );
});

