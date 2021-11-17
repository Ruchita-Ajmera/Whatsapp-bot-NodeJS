const {db} = require('../models/banco')
//const { step } = require("../models/stages");
let estagioInterno = 0

function execute(user, msg) {
  //db[user].stage = 0;

  if (estagioInterno === 1) {
    db[user].stage = 4

    return stages.step[4].obj.execute(user, '')
  }
  if (msg === '1') {
    estagioInterno++
    return ['Enter the amount in cash and we will take the change: ']
  }
  if (msg === '3') {
    return ['PIX key here 000.000.000-00']
  }
  return ['Choose the form of payment:\n1️⃣-Money\n2️⃣-Card\n3️⃣-PIX']
}

exports.execute = execute
