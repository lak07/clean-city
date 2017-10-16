import React from 'react';
import {Vote} from './votecollection '
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import {Comentt} from './collection';

import Comments from './Comments'

export default class Delhi extends TrackerReact(React.Component){
constructor() {
	super();

	this.state={
		subscription: {
			comments : Meteor.subscribe("allCommenttD"),
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
	cvotes = Vote.find({City: "Delhi"}).fetch();
	if(cvotes.length<1){
		return 'lodaing...';
	}
	return cvotes[0].votes;
	
}
voteinc(event){
	cvotes = Vote.find({City: "Delhi"}).fetch();
	votecnt = cvotes[0].votes+1;	
	Meteor.call('voteupdate',cvotes[0]._id,votecnt);
}
subcoment(event){
	
	var coment = this.refs.comment.value
	Meteor.call('addcoments',coment,'Delhi',()=>{
		this.refs.comment.value="";
	})
}



	
render(){
let votes = this.getVotes();
 return(
	<div className="main-layout" >
		<h3> Vote for Delhi  </h3>
		<input type="text" ref="comment" placeholder="Please write comment here" />
		<button id="subbtn" onClick={this.subcoment.bind(this)}>Submit</button>
		<div >
		<button id="votebtn" onClick={this.voteinc.bind(this)}>Vote</button>
		<div>
			<p> Current votes for Delhi are { votes }	</p>	
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




