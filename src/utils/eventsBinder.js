function bindMapEvents(vueElement, map, events) {
  for (var i = 0; i < events.length; i++) {
    const exposedName = 'mb-' + events[i];
    const eventName = events[i];
    map.on(eventName, (ev) => {
      vueElement.$emit(exposedName, ev);
    });
  }
}

function bindLayerEvents(vueElement, map, layer, events) {
  for (var i = 0; i < events.length; i++) {
    const exposedName = 'mbl-' + events[i];
    const eventName = events[i];
    map.on(eventName, layer, (ev) => {
      vueElement.$emit(exposedName, ev);
    });
  }
}

export {
  bindMapEvents,
  bindLayerEvents
};
