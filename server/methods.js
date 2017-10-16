import {Comentt} from '../imports/pages/collection';
import {Vote} from '../imports/pages/votecollection ';
Meteor.methods({
	addcoments(coments,city){
		Comentt.insert({
		city: city,
		text: coments,
		complete: false,
		createdAt: new Date()	
		});		
	},

	voteupdate(id,votecnt){
		Vote.update(id, { $set: { votes: votecnt } });	
	}
});
