<template>
<div id="product-list" class="row">
    <div class="col-md-8 col-md-offset-2">
        <vx-product v-for="product in productList" :product="product"></vx-product>
        <div class="text-right">合計点数：{{ total.count }}点　合計：{{ total.price }}円</div>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import VxProduct from './VxProduct.vue'

export default {
    components: {
        VxProduct,
    },

    computed: {
        sample () {
            return 2;
        },
        ...mapState([
            'total',
            'productList'
        ]),
        ...mapGetters([
          'onSaleProductList',
        ])
    },

    // computed: {
    //     total() {
    //         return this.$store.state.total;
    //     },
    //     productList() {
    //         return this.$store.state.productList;
    //     },
    //     onSaleProductList() {
    //         return this.$store.getters.onSaleProductList;
    //     },
    // },
}
</script>
