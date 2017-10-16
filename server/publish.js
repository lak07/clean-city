import {Comentt} from '../imports/pages/collection'; 
import {Vote} from '../imports/pages/votecollection '; 

Meteor.publish("allCommenttB", function(){
	return Comentt.find({city: "Banglore"});

});
Meteor.publish("allCommenttH", function(){
	return Comentt.find({city: "Hyderabad"});

});
Meteor.publish("allCommenttD", function(){
	return Comentt.find({city: "Delhi"});

});
Meteor.publish("allCommenttM", function(){
	return Comentt.find({city: "Mumbai"});

});

Meteor.publish("allVotes",function(){
	return Vote.find();
});
