<template>
  <div :class="`text-center message-alert alert ${ alertType }`"><slot></slot></div>
</template>

<script>
export default {
  props: ['alertType']
}
</script>

<style lang="scss">
  .message-alert {
    left: -3px;
    position: absolute;
    top: -3px;
    width: calc(100% + 6px);
    z-index: 100;
  }
</style>
