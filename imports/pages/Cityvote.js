import React, {Component} from 'react';

export default class Cityvote extends Component{
render(){
	return(
		<li>
		  {this.props.Votes.City}&nbsp;&nbsp;&nbsp;
		 {this.props.Votes.votes}
		</li>
	)
     }
  }
