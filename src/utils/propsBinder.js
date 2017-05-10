function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function propsBinder(vueElement, mapboxElement, props) {
    const keys = _.keys(props);
    _.each(keys, (key, i) => {
        const setMethodName = 'set' + capitalizeFirstLetter(key);
        const deepValue = (props[key].type === Object);
        vueElement.$watch(key, (newVal, oldVal) => {
            mapboxElement[setMethodName](newVal);
        });
    });
}

function propsDefaults (props, options) {
    return _.omitBy(
        props,
        (val) => {
            // keep values that are not nil
            return _.isNil(val);
        }
    );
}

export {
    propsBinder,
    propsDefaults
};
