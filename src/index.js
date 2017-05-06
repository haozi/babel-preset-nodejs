import env from 'babel-preset-env'
import transformRuntime from 'babel-plugin-transform-runtime'

export default function (context, { targets } = {}) {
  targets = Object.assign({}, {
    node: 4
  }, targets)

  if (typeof targets.node !== 'number') {
    delete targets.node
  } else if (targets.node < 1) {
    targets.node = 1
  }

  return {
    presets: [
      [env, {
        targets
      }]
    ],
    plugins: [
      targets.node && transformRuntime
    ]
  }
}
