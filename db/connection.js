// ENVIRONMENTAL VARIABLES //
require('dotenv').config();

// MONGOOSE CONNECTION //
const MONGODBURI = process.env.MONGODBURI;
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

mongoose.connect(MONGODBURI, config);

db.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are connected to Mongo'))
	.on('error', () => console.log('You are connected to Mongo'));

module.exports = mongoose;
