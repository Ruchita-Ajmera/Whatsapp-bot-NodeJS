const {menu0} = require('../menu/menu0')
const {db} = require('../models/banco')

function execute(user, msg) {
  if (msg === '*') {
    db[user].stage = 0
    return ['Order canceled successfully']
  }

  if (msg === '#') {
    db[user].stage = 2
    return ['We are closing your order, ok?']
  }

  if (!menu0[msg]) {
    return [
      'Invalid code, enter correctly',
      '```Enter # to end or * to cancel```'
    ]
  }

  db[user].itens.push(menu0[msg])

  return [
    '``Enter # to end or * to cancel```',
    `Item(${menu0[msg].description}) successfully added`
  ]
}

exports.execute = execute
