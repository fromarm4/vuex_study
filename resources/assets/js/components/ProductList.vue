<template>
<div id="product-list" class="row">
    <div class="col-md-8 col-md-offset-2">
        <product v-for="product in productList" :product="product"></product>
        <div class="text-right">合計点数：{{ total.count }}点　合計：{{ total.price }}円</div>
    </div>
</div>
</template>

<script>
    import Product from './Product.vue'
    
    export default {
        components: {
            Product,
        },

        data() {
            return {
                productList: [
                    {
                        name: 'りんご',
                        price: 140,
                    },
                    {
                        name: 'かぼちゃ',
                        price: 300,
                    },
                    {
                        name: 'レタス',
                        price: 3040,
                    },
                    {
                        name: '石焼き芋おいも',
                        price: 20000,
                    },
                ],
                total: {
                    count: 0,
                    price: 0,
                }
            }
        },

        created() {
            let self = this;
            this.$root.$on('add-cart', self.updateTotal);
        },

        mounted() {
            console.log('ProductList mounted.')
        },

        methods: {
            updateTotal(count, price) {
                this.total.count += count;
                this.total.price += price;
            }
        }
    }
</script>
