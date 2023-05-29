<template>
  <i :class="`ro-icon-${name}`" />
</template>

<script>
export default {
  name: 'GyIcon',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
