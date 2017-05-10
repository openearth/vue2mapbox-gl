<template>
	<div>
    <!-- the main div will get class mapboxgl-map, you can use that class or an id for styling -->
    <!-- if you put a id in the main element it won't work with 2 maps on one page (for example with compare plugin) -->
    <slot name="layers"></slot>
    <slot name="sources"></slot>
    <slot></slot>
  </div>
</template>
<!-- script is lowercase -->
<script src="./v-mapbox.js"></script>
