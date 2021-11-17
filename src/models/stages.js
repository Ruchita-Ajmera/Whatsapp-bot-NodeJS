var stages = {
  0: {
    descricao: 'Welcome',
    obj: require('../stages/0')
  },
  1: {
    descricao: 'Sales',
    obj: require('../stages/1')
  },
  2: {
    descricao: 'Summary',
    obj: require('../stages/2')
  },
  3: {
    descricao: 'Address',
    obj: require('../stages/3')
  },
  4: {
    descricao: 'Waxing',
    obj: require('../stages/4')
  },
  5: {
    descricao: 'Form of payment',
    obj: require('../stages/5')
  }
}

exports.step = stages
