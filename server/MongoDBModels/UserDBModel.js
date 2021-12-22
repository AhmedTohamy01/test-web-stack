const mongoose = require('mongoose')
const MongoDBSchema = mongoose.Schema

const userSchema = new MongoDBSchema({
	name: String,
	address: String,
	description: String,
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)