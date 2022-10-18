function trbl (prefix) {
  const rules = []

  if (prefix) {
    rules.push(prefix)
    prefix = prefix + '-'
  } else {
    prefix = ''
  }

  return rules.concat([
    prefix + 'top',
    prefix + 'right',
    prefix + 'bottom',
    prefix + 'left'
  ])
}

function minMax (suffix) {
  return [suffix, 'min-' + suffix, 'max-' + suffix]
}

function border (infix) {
  if (infix) {
    infix = '-' + infix
  } else {
    infix = ''
  }

  return [
    'border' + infix,
    'border' + infix + '-width',
    'border' + infix + '-style',
    'border' + infix + '-color',
    'border' + infix + '-radius'
  ]
}

const cssModules = []
  .concat([
    'composes'
  ])

const reset = ['all']

const positioning = []
  .concat([
    'position',
    'z-index'
  ])
  .concat(trbl())

const displayAndBoxModel = []
  .concat([
    'display',
    'overflow'
  ])
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat([
    'box-sizing',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order'
  ])
  .concat(trbl('padding'))
  .concat([]
    .concat(border())
    .concat(border('top'))
    .concat(border('right'))
    .concat(border('bottom'))
    .concat(border('left')))
  .concat(trbl('margin'))

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      []
        .concat(cssModules)
        .concat(reset)
        .concat(positioning)
        .concat(displayAndBoxModel),
      { unspecified: 'bottomAlphabetical' }
    ]
  }
}
