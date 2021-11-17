const {db} = require('../models/banco')

function execute(user, msg) {
  db[user].stage = 0
  return [
    'Thank you for your preference.',
    'Please wait, your order will arrive soon',
    'More information call 33333-3311'
  ]
}

exports.execute = execute
