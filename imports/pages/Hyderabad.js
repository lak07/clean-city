import React from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import {Comentt} from './collection';
import {Vote} from './votecollection ';

import Comments from './Comments'


export default class Hyderabad extends TrackerReact(React.Component){
constructor() {
	super();

	this.state={
		subscription: {
			comments : Meteor.subscribe("allCommenttH"),
			votes: Meteor.subscribe("allVotes") 		
		}
	}
}

componentWillUnmount(){
	this.state.subscription.comments.stop();
	this.state.subscription.votes.stop();
}

getComnts(){
	return Comentt.find().fetch();
}
getVotes(){
	cvotes = Vote.find({City: "Hyderabad"}).fetch();
	if(cvotes.length<1){
		return 'lodaing...';
	}
	return cvotes[0].votes;
	
}
voteinc(event){
	cvotes = Vote.find({City: "Hyderabad"}).fetch();
	votecnt = cvotes[0].votes+1;	
	Meteor.call('voteupdate',cvotes[0]._id,votecnt);
}
subcoment(event){
	
	var coment = this.refs.comment.value;
	Meteor.call('addcoments',coment,'Hyderabad',()=>{
		this.refs.comment.value="";
	});
}



	
render(){
let votes = this.getVotes();
 return(
	<div className="main-layout" >
		<h3> Vote for Hyderabad  </h3>
		
	<input type="text" ref="comment" placeholder="Please write comment here" />
		<button id="subbtn" onClick={this.subcoment.bind(this)}>Submit</button>
		<div >
		<button id="votebtn" onClick={this.voteinc.bind(this)}>Vote</button>
		<div>
			<p> Current votes for Hyderabad are { votes }	</p>	
		</div>	
			<ul>
				{this.getComnts().map((Comentt)=>{
				return  <Comments key={Comentt._id} Comment={Comentt}/>
		
			})}
			</ul>
		</div>			
	</div>
	

	);
   }
}




