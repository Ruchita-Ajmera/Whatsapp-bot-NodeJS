const {menu0} = require('../menu/menu0')
const {db} = require('../models/banco')

function execute(user, msg, contato) {
  // Gets the current time from the PC to set whether it will be Good morning, afternoon or night.
  stamp = new Date()
  hours = stamp.getHours()
  if (hours >= 18 && hours < 24) {
    time = 'Good Night'
  } else if (hours >= 12 && hours < 18) {
    time = 'Good Afternoon'
  } else if (hours >= 0 && hours < 12) {
    time = 'Good Morning'
  }

  let menu = ' MENU \n\n'

  Object.keys(menu0).forEach((value) => {
    let element = menu0[value]
    menu += `${value} - ${element.description}        R$ ${element.price} \n`
  })

  db[user].stage = 1

  return [
    menu,
    `${time} ${contato} I am a virtual assistant, I will present the carpadio, to place the order, just send the product code`
  ]
}

exports.execute = execute
