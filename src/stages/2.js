const {db} = require('../models/banco')

function execute(user, msg) {
  if (msg === '*') {
    db[user].stage = 0
    return ['Order canceled successfully']
  }

  if (msg === '#') {
    db[user].stage = 3
    return ['Enter the address please :']
  }

  let resumo = ' ORDER SUMMARY \n'
  let total = 0
  db[user].itens.forEach((value) => {
    console.log(value)
    resumo += `${value.description} ----------------  ${value.price} \n`

    total += value.price
  })

  resumo += '-------------------------\n'
  resumo += ` Total R$ ${total}`

  return ['To confirm type # or to cancel type * ', resumo]
}

exports.execute = execute
