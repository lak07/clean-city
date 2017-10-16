import React from 'react';
import { NavLink } from 'react-router-dom';
import {Vote} from './votecollection ';
import Cityvote from './Cityvote'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
export default class Index extends TrackerReact(React.Component){
constructor() {
	super();

	this.state={
		subscription: {
			votes: Meteor.subscribe("allVotes") 		
		}
	}
}

getvote(){
	return Vote.find({}, {sort: { votes: -1 }}).fetch();
}

render(){

 return(
	
	   <div className='main-layout'>
	   	<h2 >Welcome to Clean City Survey Select your city and Vote for it</h2>
		<div>
			<h3> Current ratings are:-</h3>
		</div>		
		<div>		
			<ul>
				{this.getvote().map((Vote)=>{
				return  <Cityvote key={Vote._id} Votes={Vote}/>
		
			})}
			</ul>
		</div>	
	</div>	
	
	);
   }
}
