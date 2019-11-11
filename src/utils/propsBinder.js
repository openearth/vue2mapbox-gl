function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function propsBinder(vueElement, mapboxElement, props) {
  let keys = Object.keys(props)
  keys.forEach((key, i) => {
    // rename
    if (key === 'mapStyle') {
      key = 'style'
    }
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
  // pass along  the props  and fill in the options
  let entries = Object.entries(props)
  let result = {}
  entries.forEach(([key, value]) => {
    // if  value is not set, we're  done
    if (value === undefined || value === null) {
      return
    }
    // if value has a  props default, set that
    if (value.default !== null && value.default !== undefined) {
      result[key] = value.default
    }

  })
  // override with options (which can be null or undefined)
  let optionEntries = Object.entries(options ||  {})
  optionEntries.forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      result[key] =  value
    }
  })

  // rename mapStyle (Vue element property)  to style (mapbox property)
  let style = result.mapStyle
  if (style) {
    delete result.mapStyle
    result.style = style
  }
  return result
}

export {
  propsBinder,
  propsDefaults
}
