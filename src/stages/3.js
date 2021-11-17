const {db} = require('../models/banco')
const {step} = require('../models/stages')

function execute(user, msg) {
  if (msg === '*') {
    db[user].stage = 0
    return ['Order canceled successfully']
  }

  if (msg === '#') {
    db[user].stage = 5

    return step[5].obj.execute(user, '')
  }
  return [
    '```Enter # to continue or * to cancel```',
    `Confirm delivery address : \n ${msg}`
  ]
}

exports.execute = execute
