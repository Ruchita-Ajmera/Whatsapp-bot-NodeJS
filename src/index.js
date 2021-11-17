// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require('venom-bot')
const {db} = require('../src/models/banco')
const {step} = require('../src/models/stages')
var mongoose = require('mongoose')

var connection_string = 'mongodb:admin:diyAdmin@//localhost:27017/WhatsApp-Bot'

mongoose.connect(connection_string, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
})

bot.create().then((client) => start(client))

function start(client) {
  client.onMessage((message) => {
    let resp = step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    )
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index]
      console.log('Element')
      console.log(element)
      client.sendText(message.from, element)
    }
  })
}

function getStage(user) {
  if (db[user]) {
    // If this number exists in the database
    return db[user].stage
  } else {
    // If it's the first time you come in and contact
    db[user] = {
      stage: 0,
      itens: []
    }
    console.log(db[user])
    return db[user].stage
  }
}
