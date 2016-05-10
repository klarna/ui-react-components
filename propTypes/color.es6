export default (props, prop, component) => {
  const foo = document.createElement('div')
  foo.styles.background = props[prop]

  if (!foo.styles.background) {
    return new Error(`${prop} '${props[prop]}' in ${component} is not a valid color.`)
  }
}
