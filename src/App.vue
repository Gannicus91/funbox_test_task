<template>
  <div id="app" class="main-container">
    <main-content />
  </div>
</template>

<script>
import MainContent from "@/components/MainContent";

export default {
  name: 'App',
  components: {
    MainContent,
  }
}
</script>

<style lang="stylus">
.main-container
  display flex
  justify-content center
  align-items center
  min-height 100vh
  height 100vh
  background: repeat url('~assets/images/Pattern.png');

  @media screen and (max-width 120rem)
    height auto

  @media screen and (max-width 40rem)
    min-width 32rem

</style>
