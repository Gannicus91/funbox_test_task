<template>
  <section :class="{
    [$s['block-wrapper']]: true,
    [$s['_selected']]: selected,
    [$s['_disabled']]: disabled,
  }">

    <!-- карточка с котиком -->

    <cat-card
      :disabled="disabled"
      :selected="selected"
      @select="setSelected"
      @mouseenter.native="setHovered(true)"
      @mouseleave.native="setHovered(false)">

      <!-- верхний заголовок карточки -->
      <template v-slot:card-head>
        <h4 :class="{
          [$s['product-subtitle']]: true,
          [$s['product-subtitle_hovered']]: useHoveredDisplay,
        }">
          {{ SubtitleText }}
        </h4>
      </template>

      <template v-slot:card-body>

        <!-- Текст карточки с котиком -->
        <h2 :class="$s['product-title']">
          Нямушка
        </h2>

        <h3 :class="$s['product-content']">
          {{ content }}
        </h3>

        <p :class="$s['product-text']">
          <b>{{ amount }}</b> порций
        </p>

        <p :class="$s['product-text']">
          <b v-if="gift.count">{{ gift.count }}</b> {{ gift.text }}
        </p>

        <p :class="$s['product-text']">
          {{ additionalText }}
        </p>
        <!-- конец текста -->

        <!-- метка о весе продукта -->
        <div :class="$s['product-weight']">
          <span>{{ weight }}</span> кг
        </div>
      </template>

    </cat-card>

    <!-- конец карточки с котиком -->

    <!-- футер продукта -->

    <p :class="$s['product-footer']">
        <template v-if="disabled">
          Печалька, {{ content }} закончился.
        </template>

        <template v-else-if="selected">
          {{ selectedText }}
        </template>

        <template v-else>
          Чего сидишь? Порадуй котэ,
          <span
            :class="$s['action']"
            @click="setSelected(true)">
            купи.
          </span>
        </template>
    </p>

    <!-- конец футера -->

  </section>
</template>

<script>
import CatCard from "./components/CatCard";

export default {
  name: "ProductBlock",

  components: {
    CatCard,
  },

  props: {
    /**
     * С чем корм
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * количество порций
     */
    amount: {
      type: Number,
      required: true,
    },

    /**
     * Текст сообщающий о том, что покупатель получит в подарок при покупке
     */
    gift: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Дополнительный текст
     */
    additionalText: {
      type: String,
      default: '',
    },

    /**
     * Текст снизу карточки, когда товар выбран
     */
    selectedText: {
      type: String,
      required: true,
    },

    /**
     * вес товара
     */
    weight: {
      type: Number,
      required: true,
    },

    /**
     * Недоступен ли товар для выбор
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Выбран ли продукт
     */
    selected: {
      type: Boolean,
      default: false,
    }
  },

  data(){
    return {
      hovered: false,
    };
  },

  computed: {
    SubtitleText() {
      return this.useHoveredDisplay ? 'Котэ не одобряет?' : 'Сказочное заморское яство';
    },

    useHoveredDisplay() {
      return this.selected && this.hovered;
    },
  },

  methods: {
    /**
     * Устанавливает в selected переданное значение
     * @param {Boolean} value
     */
    setSelected(value){
      if (!this.disabled) {
        this.$emit('select', value);
      }

      if (!value) {
        this.hovered = false;
      }
    },

    /**
     * Устанавливает состояние hovered для карточки
     * @param {Object} value
     */
    setHovered(value){
      if (this.selected) {
        this.hovered = value;
      }
    },
  },
}
</script>

<style lang="stylus" module="$s">
.block-wrapper
  margin 3rem 4rem

  @media screen and (max-width 400px)
    margin 3rem 0

  .product-title
    font-weight bold
    font-size 4.8rem
    line-height 5.6rem

  .product-subtitle
    margin-top 2.1rem

    font-weight 200
    font-size 1.6rem
    line-height 1.9rem
    color #666666

    &_hovered
      color #E52E7A

  .product-content
    margin-bottom 1.5rem

    font-weight bold
    font-size 2.4rem
    line-height 2.8rem

  .product-text
    font-size 1.4rem
    line-height 1.6rem
    color #666666

  .product-weight
    position absolute
    right 1.6rem
    bottom 1.6rem

    display flex
    flex-direction column
    justify-content center
    width 8rem
    height 8rem

    font-size 2.2rem
    line-height 2.2rem
    text-align center
    color #ffffff

    background #1698D9
    border-radius 50%

    > span
      font-size 4.2rem
      margin-bottom 1rem

  .product-footer
    margin-top 1.4rem

    font-size 1.3rem
    line-height 1.5rem
    text-align center
    color #ffffff

    cursor default

    .action
      color #1698D9
      border-bottom: 1px dashed #1698D9
      cursor pointer


  &._selected
    .product-weight
      background #E52E7A

  &._disabled
    .product-title,
    .product-subtitle,
    .product-content,
    .product-text
      color #b3b3b3

    .product-weight
      z-index 1
      background #B3B3B3

    .product-footer
      color #FFFF66
</style>
