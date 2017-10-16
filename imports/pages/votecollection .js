import React,{ Component } from 'react';
import { Mongo } from 'meteor/mongo';
export const Vote = new Mongo.Collection("votes");

