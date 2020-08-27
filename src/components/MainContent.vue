<template>
  <div :class="$s['main-content']">

    <h1 :class="$s['page-title']">
      Ты сегодня покормил кота?
    </h1>

    <div :class="$s['cards-container']">
      <product-block
        v-for="(product, id) in productsData.cards"
        :key="id"
        :additional-text="product.additional_text"
        :amount="product.count"
        :gift="product.gift"
        :content="product.content"
        :selected-text="product.selected_text"
        :weight="product.weight"
        :disabled="!product.available"
        :selected="product.selected"
        @select="setSelected(product, $event)"/>
    </div>
  </div>
</template>

<script>
import ProductBlock from './ProductBlock'
import productsData from 'assets/data/crads_data.json';

export default {
  name: "MainContent",

  components: {
    ProductBlock,
  },

  data(){
    return {
      productsData,
    }
  },

  methods: {
    /**
     * Устанавливает в selected переданное значение
     * @param {Object} product
     * @param {Boolean} value
     */
    setSelected(product, value){
      product.selected = value;
    },
  },
}
</script>

<style lang="stylus" module="$s">
.main-content
  display flex
  flex-direction column
  align-items center
  justify-content center
  height 100%
  padding-top 3.6rem

  @media screen and (max-width 400px)
    min-width 32rem

  .page-title
    font-weight 200
    font-size 3.6rem
    line-height 4.2rem
    text-align center
    color #FFFFFF
    text-shadow 0 .1rem .1rem #000000

  .cards-container
    display flex
    justify-content center
    flex-wrap wrap
    max-width 128rem
</style>
