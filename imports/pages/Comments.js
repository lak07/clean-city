import React, {Component} from 'react';

export default class Comments extends Component{
render(){
	return(
		<li>
		  {this.props.Comment.text}
		</li>
	)
     }
  }
