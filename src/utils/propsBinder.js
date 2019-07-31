function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function propsBinder(vueElement, mapboxElement, props) {
  let keys = Object.keys(props)
  keys.forEach((key, i) => {
    let setMethodName = 'set' + capitalizeFirstLetter(key)
    let keyToWatch = key
    if (key === 'style') {
      // for style watch the mapStyle property
      keyToWatch = 'mapStyle'
    }
    vueElement.$watch(keyToWatch, (newVal, oldVal) => {
      mapboxElement[setMethodName](newVal)
      vueElement.$emit(key + ':update', newVal)
    })
  })
}

function propsDefaults (props, options) {
  let entries = Object.entries(props)
  let result = {}
  entries.forEach(([key, value]) => {
    // if  value is not set, we're  done
    if (value === undefined || value === null) {
      return
    }
    if (value.default !== null && value.default !== undefined) {
      result[key] = value.default
    }
  })
  return result
}

export {
  propsBinder,
  propsDefaults
}
