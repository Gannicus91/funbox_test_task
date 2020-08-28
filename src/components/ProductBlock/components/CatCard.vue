<template>
  <div
    :class="{
      [$s['cat-card']]: true,
      [$s['_selected']]: selected,
      [$s['_disabled']]: disabled,
    }"
    @click="$emit('select', !selected)">

    <!-- декоративный элемент, украшающий угол карточки с котиком -->
    <div :class="$s['corner-decoration']" />

    <!-- блок с верхним заголовком карточки -->
    <div :class="$s['card-head']">
      <slot name="card-head"/>
    </div>

    <!-- блок с основным текстом карточки -->
    <div :class="$s['main-card']">
      <slot name="card-body"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "CatCard",

  props: {
    /**
     * Выбран ли продукт
     */
    selected: {
      type: Boolean,
      default: false,
    },

    /**
     * доступен ли продукт для выбора
     */
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="stylus" module="$s">
.cat-card
  position relative

  width 32rem
  height 48rem

  cursor pointer

  .main-card
    position relative

    display inline-block
    width 100%
    height 43.5rem
    padding-left 4.8rem

    background no-repeat url("~assets/images/cat.png") #ffffff -2.8rem 15.9rem
    border .4rem solid #1698D9
    border-top none
    border-radius 0 0 1.2rem 1.2rem

  .card-head
    position relative

    float right
    width 27.5rem
    height 4.5rem
    padding-left .7rem

    background #ffffff
    border .4rem solid #1698D9
    border-bottom none
    border-left none
    border-radius 0 1.2rem 0 0

    &::before
      position absolute
      top -0.4rem
      left -4.5rem

      width 0
      height 0

      border-style solid
      border-width 0 0 4.5rem 4.5rem
      border-color transparent transparent #ffffff transparent

      content ''

    &::after
      position absolute
      top -1.2rem
      left -2.3rem

      height 6.38rem
      width .4rem

      background #1698D9

      transform rotate(45deg)
      content ''
      z-index 1

  .corner-decoration
    position absolute
    top 0
    left 0

    width 3.6rem
    height 3.6rem

    border .4rem solid #1698D9
    border-right none
    border-bottom none
    border-radius 1.2rem 0 0 0

    &::before
      position absolute
      top -0.4rem
      right -0.4rem

      height 0
      width 0

      border-style solid
      border-width .4rem .4rem 0 0
      border-color #1698D9 transparent transparent transparent

      content ''

    &::after
      position absolute
      bottom -0.4rem
      left -0.4rem

      width 0
      height 0

      border-style: solid;
      border-width: .4rem .4rem 0 0;
      border-color: #1698D9 transparent transparent transparent;

      content ''

  &._selected
    .main-card, .corner-decoration, .card-head
      border-color #E52E7A
      .product-weight
        background #E52E7A
    .card-head::after
      background #E52E7A
    .corner-decoration
      &::before, &::after
        border-color #E52E7A transparent transparent transparent

  &._disabled
    cursor not-allowed
    .main-card, .corner-decoration, .card-head
      border-color #B3B3B3
      .product-weight
        z-index 1
        background #B3B3B3
    .card-head::after
      background #B3B3B3
    .corner-decoration
      &::before, &::after
        border-color #B3B3B3 transparent transparent transparent

    .main-card
      &::before
        position absolute
        top 0
        left 0

        width 100%
        height 100%

        background #ffffff
        border-radius 0 0 1.2rem 1.2rem
        opacity 0.5

        content ''
</style>
